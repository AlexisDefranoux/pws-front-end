import React, { useEffect, useRef, useState, MutableRefObject } from 'react';
import { Icon, Row, Col, Button, Input} from 'antd';
import useScript from '../../hooks/useScript';
import axios from 'axios';


const PluginUse: React.FC<{pluginID: string}> = (props) => {

    const url_plugin = `${process.env.REACT_APP_PLUGINS_URL}${props.pluginID}/`;

    const [loaded, error] = useScript(
        `${url_plugin}main.js`
    );

    const pluginElement: MutableRefObject<HTMLDivElement | null> = useRef(null);

    
    const player: MutableRefObject<HTMLAudioElement | null> = useRef(null);
    const [playerState, setPlayerState] = useState(
        {
            playing: false, 
            url: `${process.env.REACT_APP_PLUGINS_URL}CleanGuitarRiff.mp3`
        });

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
    }
    
    useEffect(() => {
        if(!loaded) return;
        
        axios({
            method: 'GET',
            url: `${url_plugin}main.json`,
            responseType: 'json'
        }).then((response) => {
            loadPlugin(response.data);
        });

    }, [loaded]);


    const onPlay = () => {
    };

    const onPause = () => {

    };

    return !loaded ? <Icon type="loading" /> : 
    <Row type="flex" justify="center">
        <Col span={6}>
            <Input value={playerState.url}/>
            <Button 
                size="large" 
                type="primary" 
                shape="circle" 
                icon={playerState.playing ? "pause-circle" : "play-circle"}/>
            <audio ref={player} src={playerState.url} id="sample" controls loop crossOrigin="anonymous"></audio>
        </Col>
        <Col span={6}>
            <div ref={pluginElement}></div>
        </Col>
    </Row>;
}


export default PluginUse;