
# Audio Context

## Interface

`BaseAudioContext` can be target of events, thus implements `EventTarget`.

### Properties

- `audioWorklet`
  - create custom AudioNodes
- `currentTime`
  - ever increasing hardware time in seconds starting at 0
- `destination`
  - `AudioDestinationNode` of the audio-rendering device
- `listener`
  - `AudioListener` used for 3D spatialization
- `sampleRate`
  - samples per second used by all nodes in context
- `state`
  - `suspended | running | closed`
- `onstatechange`
  - event handler when `state` changes

### Methods

- `createBuffer`
  - create `AudioBuffer`
- `createConstantSource`
  - create `ConstantSourceNode` with constant single value sample
- `createBufferSource`
  - create `AudioBufferSourceNode` to play and manipulate `AudioBuffer`
- `createScriptProcessor`
  - create `ScriptProcessorNode` for direct javascript  manipulation
- `createStereoPanner`
  - create `SteroPannerNode` for applying stereo panning to audio source
- `createAnalyzer`
  - create `AnalyserNode` for exposing time and frequency data
- `createBiquadFilter`
  - create `BiqaudFilterNode` for second order frequency filtering
- `createChannelMerger`
  - create `ChannelMergeNode` for merging multiple audio streams
- `createChannelSplitter`
  - create `ChannelSplitterNode` for splitting audio channels to multiple streams
- `createConvolver`
  - create `ConvolverNode` for effects such as reverb
- `createDelay`
  - create `DelayNode` for delaying an audio stream
- `createDynamicsCompressor`
  - create `DynamicsCompressorNode` for acoustic compression
- `createGain`
- `createIIRFilter`
- `createOscillator`
- `createPanner`
- `createPeriodicWave`
- `createWaveShaper`
- `decodeAudioData`
  - asynchronously decodes audio data from an `ArrayBuffer`
- `resume`

## Implementations

`AudioContext` and `OfflineAudioContext` implement `BaseAudioContext`.

- `AudioContext`
  - Used for 'live' audio, rendering to hardware
  - `suspend`/`resume`/`close`
  - `createMediaElementSource` (from `<video>` or `<audio>`)