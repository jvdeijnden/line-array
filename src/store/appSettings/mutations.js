export const
  updateMute = (state, muted) => {
    state.mute = muted
  },
  updateMaster = (state, gain) => {
    state.master = gain
  },
  updateMasterKnob = (state, gain) => {
    state.masterKnob = gain
  },

  updateEqualizer = (state, payload) => {
    state.equalizer[payload.band] = payload.gain
  },

  updateGains = (state) => {
    if (state.mute) {
      state.gains = state.gains.map(x => 0)
    } else {
      state.gains = state.speakers.map(x => x * state.master / 100)
    }
  },

  updateSpeakers = (state, payload) => {
    state.speakers[payload.speaker] = payload.gain
  },

  updateAngle = (state, degrees) => {
    state.angle = degrees
  },
  updateDistance = (state, meters) => {
    state.distance = meters
  },
  updateFsa = (state, activated) => {
    state.fsa = activated
  }
