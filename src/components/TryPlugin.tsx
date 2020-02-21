import React, { useEffect, useRef, useState, MutableRefObject } from 'react';
import { Icon, Row, Col, Button, Input} from 'antd';
import useScript from '../hooks/useScript';
import axios from 'axios';
import './TryPlugin.css';
//import '../../node_modules/mocha/mocha.js'
//import '../../node_modules/chai/chai.js' //marche pas

const TryPlugin: React.FC<{pluginID: string}> = (props) => {

    const url_plugin = `${process.env.REACT_APP_PLUGINS_URL}${props.pluginID}/`;

    const [loadedMain] = useScript(
        `${url_plugin}main.js`
    );


    const [loadedMocha] = useScript(
        `/testjs/mocha.js`
    );

    const [loadedChai] = useScript(
        `/testjs/chai.js`
    );

    const pluginElement: MutableRefObject<HTMLDivElement | null> = useRef(null);


    const player: MutableRefObject<HTMLAudioElement | null> = useRef(null);
    const [playerState, setPlayerState] = useState(
        {
            playing: false,
            url: `${url_plugin}CleanGuitarRiff.mp3`
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
        }).then(() => {
            testPlugin(plugin);
        });
    };

    const testPlugin = (param:any) => {
        mocha.setup('bdd');

        var expect = chai.expect;
        var assert = chai.assert;
        const plugin = param;

        describe('Gui', function () {
            it('plugin should have a JSON loadGui() method', function () {
                return expect(plugin.loadGui).to.exist;
            });
            it('the loadGui() function should return an object', function () {
                plugin.loadGui().then((res: any) => { return expect(res).to.not.be.empty });
            });
        });

        describe('Metadata', function () {
            it('plugin should have a JSON getMetadata() method', function () {
                return expect(plugin.node.getMetadata).to.exist;
            });
            it('the getMetadata() function should return a json object', function () {
                plugin.node.getMetadata().then((res: any) => { return expect(res).to.not.be.empty });
            });
        });


        describe('Descriptor', function () {
            it('plugin should have a JSON getDescriptor() method', function () {
                return expect(plugin.node.getDescriptor).to.exist;
            });
            it('getDescriptor() function should return a json object', function () {
                return expect(plugin.node.getDescriptor()).to.not.be.empty;
            });
        });


        describe('Param getter', function () {
            it('plugin should have a getParam(key) method', function () {
                return expect(plugin.node).to.have.property("getParam")
            });
        });


        describe('Param setter', function () {
            it('plugin should have a setParam(key,value) method', function () {
                return expect(plugin.node).to.have.property("setParam");
            });
        });

        describe('State getter', function () {
            it('plugin should have a getState() method', function () {
                return expect(plugin.node).to.have.property("setPatch");
            });
        });


        describe('State setter', function () {
            it('plugin should have a setState(value) method', function () {
                return expect(plugin.node).to.have.property("setState");
            });
        });

        describe('midi enable', function () {
            it('plugin should have a onMidi(msg) method', function () {
                return expect(plugin.node).to.have.property("onMidi");
            });
        });

        describe('Input Channel Number', function () {
            it('plugin should have an inputChannelCount() method', function () {
                return expect(plugin.node.inputChannelCount()).to.exist;
            });
        });

        describe('Number of inputs', function () {
            it('plugin should have an numberOfInputs() method', function () {
                return expect(plugin.node.numberOfInputs).to.exist;

            });
        });
        describe('Number of outputs', function () {
            it('plugin should have an numberOfOutputs() method', function () {
                return expect(plugin.node.numberOfOutputs).to.exist;
            });
        });
        mocha.run()
    };

    useEffect(() => {
        if( !(loadedMain && loadedMocha && loadedChai)) return;

        axios({
            method: 'GET',
            url: `${url_plugin}main.json`,
            responseType: 'json'
        }).then((response) => {
            loadPlugin(response.data);
        });

    }, [loadedMain, loadedMocha, loadedChai]);


    const onPlay = () => {
    };

    const onPause = () => {

    };

    return !(loadedMain && loadedMocha && loadedChai) ? <Icon type="loading" /> :
        <Row type="flex" justify="center">
            <Col span={6}>
                <Input value={playerState.url}/>
                <Button
                    size="large"
                    type="primary"
                    shape="circle"
                    icon={playerState.playing ? "pause-circle" : "play-circle"}/>
                <audio ref={player} src={playerState.url} id="sample" controls loop crossOrigin="anonymous"/>
            </Col>
            <Col span={6}>
                <div ref={pluginElement}/>
            </Col>
            <Col span={6}>
                <div id="mocha"/>
            </Col>
        </Row>;
}


export default TryPlugin;
