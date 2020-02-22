import React, { useEffect, useRef, useState, MutableRefObject } from 'react';
import {Icon, Row, Col, Input, Card} from 'antd';
import useScript from '../../hooks/useScript';
import axios from 'axios';

const PluginUse: React.FC<{pluginID: string}> = (props) => {

    const url_plugin = `${process.env.REACT_APP_PLUGINS_URL}${props.pluginID}/`;
    const [loaded] = useScript(`${url_plugin}main.js`);
    const pluginElement: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const player: MutableRefObject<HTMLAudioElement | null> = useRef(null);
    const [playerState] = useState({playing: false, url: `${url_plugin}CleanGuitarRiff.mp3`});

    const loadPlugin = (info: any) => {
        if(!player.current) return;

        const ctx = new AudioContext();

        player.current.onplay = () => ctx.resume();
        const mediaSource = ctx.createMediaElementSource(player.current);

        const Plugin = (window as any)[info.name];
        const plugin = new Plugin(ctx, url_plugin);

        plugin.load().then((node: any) => {
            mediaSource.connect(node);
            node.connect(ctx.destination);
            return plugin.loadGui();
        }).then((elem: any) => {
            pluginElement.current?.appendChild(elem);
        });
    };

    useEffect(() => {
        if(!loaded) return;

        axios({
            method: 'GET',
            url: `${url_plugin}main.json`,
            responseType: 'json'
        }).then((response) => {
            loadPlugin(response.data);
        });

    }, [loadPlugin, loaded, url_plugin]);


    // const onPlay = () => {
    // };
    //
    // const onPause = () => {
    //
    // };

    return !loaded ? <Icon type="loading" /> :
    <Row type="flex" justify="space-around">
        <Col span={11}>
            <Card type="inner" title="Music">
                <Input value={playerState.url}/>
                {/*<Button*/}
                {/*    size="large"*/}
                {/*    type="primary"*/}
                {/*    shape="circle"*/}
                {/*    icon={playerState.playing ? "pause-circle" : "play-circle"}/><br/>*/}
                <audio ref={player} src={playerState.url} id="sample" controls loop crossOrigin="anonymous"/>
            </Card>
        </Col>
        <Col span={11}>
            <Card type="inner" title="Plugin">
                <div style={{display: 'flex', justifyContent: 'space-around'}} ref={pluginElement}/>
                <br/><br/>
            </Card>
        </Col>
    </Row>;
};

export default PluginUse;
