import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Card, Col, Icon, Input, Row} from 'antd';
import axios from 'axios';

import useScript from '../../hooks/useScript';

const PluginUse: React.FC<{ pluginID: string }> = (props) => {

    const url_plugin = `${process.env.REACT_APP_PLUGINS_URL}${props.pluginID}/`;
    const [loaded] = useScript(`${url_plugin}main.js`);
    const pluginElement: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const player: MutableRefObject<HTMLAudioElement | null> = useRef(null);
    const [playerState] = useState({playing: false, url: `${url_plugin}CleanGuitarRiff.mp3`});

    const loadPlugin = (info: any) => {
        if (!player.current) return;

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
        if (!loaded) return;

        axios({
            method: 'GET',
            url: `${url_plugin}main.json`,
            responseType: 'json'
        }).then((response) => {
            loadPlugin(response.data);
        });

    }, [loadPlugin, loaded, url_plugin]);

    return !loaded ? <Icon type="loading"/> :
        <Row type="flex" justify="space-around">
            <Col span={11}>
                <Card type="inner" title="Music">
                    <Input value={playerState.url}/>
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
