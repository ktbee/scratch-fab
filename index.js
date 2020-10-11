class ScratchFab {
    constructor (runtime) {
        /**
         * Store this for later communication with the Scratch VM runtime.
         * If this extension is running in a sandbox then `runtime` is an async proxy object.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'scratchFab',
            name: 'Scratch Fab',
            blocks: [
                {
                    opcode: 'saveFile',
                    blockType: 'button',
                    text: 'Export fab design',
                    arguments: {
                        FILE_NAME: {
                            type: 'string',
                            defaultValue: '1'
                        }
                    }
                }
            ]
        };
    }

    saveFile () {
        console.log('test');
    }
}

module.exports = ScratchFab;
