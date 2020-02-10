
/*
Code generated with Faust version 2.21.5
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONfreeverbDefranoux() {
	return '{"name": "freeverbDefranoux","filename": "freeverbDefranoux.dsp","version": "2.21.5","compile_options": "-lang wasm-ib -scal -ftz 2","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/3A8665EDD47914604E502815B73BBEFAD2238D7D/web/wap"],"size": 74936,"inputs": 2,"outputs": 2,"meta": [ { "author": "Grame" },{ "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.1" },{ "compilation_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "copyright": "(c) GRAME 2006 and MoForte Inc. 2017" },{ "designer": "Robert A. Moog" },{ "filename": "freeverbDefranoux.dsp" },{ "library_path": "FaustDSP" },{ "license": "BSD" },{ "name": "freeverbDefranoux" },{ "reference": "https://ccrma.stanford.edu/~jos/pasp/Freeverb.html" },{ "routes_lib_name": "Faust Signal Routing Library" },{ "routes_lib_version": "0.1" },{ "version": "1.0" }],"ui": [ {"type": "hgroup","label": "freeverbDefranoux","items": [ {"type": "hgroup","label": "Effects","meta": [{ "1": "" }],"items": [ {"type": "hgroup","label": "Reverb","meta": [{ "7": "" }],"items": [ {"type": "vgroup","label": "Knobs","meta": [{ "0": "" }],"items": [ {"type": "vslider","label": "Damp","address": "/freeverbDefranoux/Effects/Reverb/Knobs/Damp","index": 12,"meta": [{ "midi": "ctrl 3" },{ "style": "knob" }],"init": 0.5,"min": 0,"max": 1,"step": 0.025},{"type": "vslider","label": "RoomSize","address": "/freeverbDefranoux/Effects/Reverb/Knobs/RoomSize","index": 8,"meta": [{ "midi": "ctrl 4" },{ "style": "knob" }],"init": 0.5,"min": 0,"max": 1,"step": 0.025},{"type": "vslider","label": "Wet","address": "/freeverbDefranoux/Effects/Reverb/Knobs/Wet","index": 4,"meta": [{ "midi": "ctrl 2" },{ "style": "knob" }],"init": 0.3333,"min": 0,"max": 1,"step": 0.025}]},{"type": "vgroup","label": "Switches","meta": [{ "1": "" }],"items": [ {"type": "checkbox","label": "0x00","address": "/freeverbDefranoux/Effects/Reverb/Switches/0x00","index": 0}]}]}]}]}]}';
}
function getBase64CodefreeverbDefranoux() { return "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cnlfcGF0aCI6ICJGYXVzdERTUCIgfSx7ICJsaWNlbnNlIjogIkJTRCIgfSx7ICJuYW1lIjogImZyZWV2ZXJiRGVmcmFub3V4IiB9LHsgInJlZmVyZW5jZSI6ICJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvRnJlZXZlcmIuaHRtbCIgfSx7ICJyb3V0ZXNfbGliX25hbWUiOiAiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSIgfSx7ICJyb3V0ZXNfbGliX3ZlcnNpb24iOiAiMC4xIiB9LHsgInZlcnNpb24iOiAiMS4wIiB9XSwidWkiOiBbIHsidHlwZSI6ICJoZ3JvdXAiLCJsYWJlbCI6ICJmcmVldmVyYkRlZnJhbm91eCIsIml0ZW1zIjogWyB7InR5cGUiOiAiaGdyb3VwIiwibGFiZWwiOiAiRWZmZWN0cyIsIm1ldGEiOiBbeyAiMSI6ICIiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogImhncm91cCIsImxhYmVsIjogIlJldmVyYiIsIm1ldGEiOiBbeyAiNyI6ICIiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogIktub2JzIiwibWV0YSI6IFt7ICIwIjogIiIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIkRhbXAiLCJhZGRyZXNzIjogIi9mcmVldmVyYkRlZnJhbm91eC9FZmZlY3RzL1JldmVyYi9Lbm9icy9EYW1wIiwiaW5kZXgiOiAxMiwibWV0YSI6IFt7ICJtaWRpIjogImN0cmwgMyIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDAuNSwibWluIjogMCwibWF4IjogMSwic3RlcCI6IDAuMDI1fSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIlJvb21TaXplIiwiYWRkcmVzcyI6ICIvZnJlZXZlcmJEZWZyYW5vdXgvRWZmZWN0cy9SZXZlcmIvS25vYnMvUm9vbVNpemUiLCJpbmRleCI6IDgsIm1ldGEiOiBbeyAibWlkaSI6ICJjdHJsIDQiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAwLjUsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAwLjAyNX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJXZXQiLCJhZGRyZXNzIjogIi9mcmVldmVyYkRlZnJhbm91eC9FZmZlY3RzL1JldmVyYi9Lbm9icy9XZXQiLCJpbmRleCI6IDQsIm1ldGEiOiBbeyAibWlkaSI6ICJjdHJsIDIiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAwLjMzMzMsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAwLjAyNX1dfSx7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiU3dpdGNoZXMiLCJtZXRhIjogW3sgIjEiOiAiIiB9XSwiaXRlbXMiOiBbIHsidHlwZSI6ICJjaGVja2JveCIsImxhYmVsIjogIjB4MDAiLCJhZGRyZXNzIjogIi9mcmVldmVyYkRlZnJhbm91eC9FZmZlY3RzL1JldmVyYi9Td2l0Y2hlcy8weDAwIiwiaW5kZXgiOiAwfV19XX1dfV19XX0="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class freeverbDefranouxNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'freeverbDefranoux', options);
        
        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);
     
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                            }
                        }
                    }
                }      
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });     
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];
        
        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
        try {
            if (this.parameters) this.parameters.forEach(p => p.automationRate = "k-rate");
        } catch (e) {}
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event)
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API
    
    /**
     * Destroy the node, deallocate resources.
     */
    destroy()
    {
        this.port.postMessage({ type: "destroy" });
        this.port.close();
    }

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON()
    {
        return this.json;
    }
    
    // For WAP
    async getMetadata() 
    {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
            	return responseJSON.json();
        	}).then(json => {
        		resolve(json);
        	})
    	});
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    // For WAP
    setParam(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path)
    {
        return this.parameters.get(path).value;
    }
    
    // For WAP
    getParam(path) 
    {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }

    getNumInputs()
    {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    // For WAP
    inputChannelCount() 
    {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() 
    {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams()
    {
        return this.inputs_items;
    }
    
    // For WAP
    getDescriptor() 
    {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, freeverbDefranouxNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel)
    {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var pw = this.fPitchwheelLabel[i];
            this.setParamValue(pw.path, freeverbDefranouxNode.remap(wheel, 0, 16383, pw.min, pw.max));
            if (this.output_handler) {
                this.output_handler(pw.path, this.getParamValue(pw.path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, (data2 * 128.0 + data1));
        }
    }
    
    // For WAP
    onMidi(data) 
    {
     	midiMessage(data);
    }
    
    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() 
    {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) 
    {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }
    
    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) 
    {
        this.setState(this.presets[patch])
    }
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
    
}

// Factory class
class freeverbDefranoux {

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "")
    {
    	console.log("baseLatency " + context.baseLatency);
    	console.log("outputLatency " + context.outputLatency);
    	console.log("sampleRate " + context.sampleRate);
    	
        this.context = context;
        this.baseURL = baseURL;
        this.pathTable = [];
    }

    heap2Str(buf)
    {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }
    
    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load()
    {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
                    _abs: Math.abs,
                        
                    // Float version
                    _acosf: Math.acos,
                    _asinf: Math.asin,
                    _atanf: Math.atan,
                    _atan2f: Math.atan2,
                    _ceilf: Math.ceil,
                    _cosf: Math.cos,
                    _expf: Math.exp,
                    _floorf: Math.floor,
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,
                        
                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,
                    
                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            let real_url = (this.baseURL === "") ? "freeverbDefranoux.wasm" : (this.baseURL + "/freeverbDefranoux.wasm");
            const dspFile = await fetch(real_url);
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);
            
            return new Promise((resolve, reject) => {   
            
                let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
                let json = this.heap2Str(HEAPU8);
                let json_object = JSON.parse(json);  
                let options = { wasm_module: dspModule, json: json };
                
                let re = /JSON_STR/g;
                let freeverbDefranouxProcessorString1 = freeverbDefranouxProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([freeverbDefranouxProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new freeverbDefranouxNode(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from freeverbDefranoux-processor was detected.');}
                    return (this.node);
                }).then((node) => {
                    resolve(node);
                }).catch((e) => {
                    reject(e);
                });
            });
            
        } catch (e) {
            console.error(e);
            console.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }
    	
    }
    
    async loadGui()
    {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createfreeverbDefranouxGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createfreeverbDefranouxGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

	linkExists(url) 
	{
    	return document.querySelectorAll(`link[href="${url}"]`).length > 0;
   	}
}

// Template string for AudioWorkletProcessor

let freeverbDefranouxProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class freeverbDefranouxProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                freeverbDefranouxProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                freeverbDefranouxProcessor.parse_items(group.items, obj, callback);
            }
        }
        
        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }
        
        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                freeverbDefranouxProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }
        
        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                freeverbDefranouxProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            freeverbDefranouxProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, freeverbDefranouxProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            this.running = true;
            
            const importObject = {
                    env: {
                        memoryBase: 0,
                        tableBase: 0,

                        // Integer version
                        _abs: Math.abs,

                        // Float version
                        _acosf: Math.acos,
                        _asinf: Math.asin,
                        _atanf: Math.atan,
                        _atan2f: Math.atan2,
                        _ceilf: Math.ceil,
                        _cosf: Math.cos,
                        _expf: Math.exp,
                        _floorf: Math.floor,
                        _fmodf: function(x, y) { return x % y; },
                        _logf: Math.log,
                        _log10f: Math.log10,
                        _max_f: Math.max,
                        _min_f: Math.min,
                        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
                        _powf: Math.pow,
                        _roundf: Math.fround,
                        _sinf: Math.sin,
                        _sqrtf: Math.sqrt,
                        _tanf: Math.tan,
                        _acoshf: Math.acosh,
                        _asinhf: Math.asinh,
                        _atanhf: Math.atanh,
                        _coshf: Math.cosh,
                        _sinhf: Math.sinh,
                        _tanhf: Math.tanh,

                        // Double version
                        _acos: Math.acos,
                        _asin: Math.asin,
                        _atan: Math.atan,
                        _atan2: Math.atan2,
                        _ceil: Math.ceil,
                        _cos: Math.cos,
                        _exp: Math.exp,
                        _floor: Math.floor,
                        _fmod: function(x, y) { return x % y; },
                        _log: Math.log,
                        _log10: Math.log10,
                        _max_: Math.max,
                        _min_: Math.min,
                        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
                        _pow: Math.pow,
                        _round: Math.fround,
                        _sin: Math.sin,
                        _sqrt: Math.sqrt,
                        _tan: Math.tan,
                        _acosh: Math.acosh,
                        _asinh: Math.asinh,
                        _atanh: Math.atanh,
                        _cosh: Math.cosh,
                        _sinh: Math.sinh,
                        _tanh: Math.tanh,

                        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
                    }
            };
            
            this.freeverbDefranoux_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
            
            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;
            this.integer_size = 4;
            
            this.factory = this.freeverbDefranoux_instance.exports;
            this.HEAP = this.freeverbDefranoux_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];
        
            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];
         
            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }
            
            this.initAux = function ()
            {
                var i;
                
                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                freeverbDefranouxProcessor.parse_ui(this.json_object.ui, this, freeverbDefranouxProcessor.parse_item2);
                
                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }
        
        process(inputs, outputs, parameters) 
        {
            var input = inputs[0];
            var output = outputs[0];
            
            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }
            
            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            for (const path in parameters) {
                const paramArray = parameters[path];
                this.setParamValue(path, paramArray[0]);
            }
        
          	// Compute
            try {
                this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();
            
            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }
            
            return this.running;
    	}
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals
    const NUM_FRAMES = 128;
    try {
        registerProcessor('freeverbDefranoux', freeverbDefranouxProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

const dspName = "freeverbDefranoux";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.freeverbDefranoux = freeverbDefranoux;
    window.FaustfreeverbDefranoux = freeverbDefranoux;
    window[dspName] = freeverbDefranoux;
} else {
    module.exports = { freeverbDefranoux };
}
