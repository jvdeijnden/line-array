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

  // updateEqualizer = (state, payload) => {
  //   state.equalizer[payload.band] = payload.gain
  // },
  updateEq0 = (state, gain) => {
    state.eq0 = gain
  },
  updateEq1 = (state, gain) => {
    state.eq1 = gain
  },
  updateEq2 = (state, gain) => {
    state.eq2 = gain
  },
  updateEq3 = (state, gain) => {
    state.eq3 = gain
  },
  updateEq4 = (state, gain) => {
    state.eq4 = gain
  },
  updateEq5 = (state, gain) => {
    state.eq5 = gain
  },
  updateEq6 = (state, gain) => {
    state.eq6 = gain
  },
  updateEq7 = (state, gain) => {
    state.eq7 = gain
  },
  updateEq8 = (state, gain) => {
    state.eq8 = gain
  },

  updateGains = (state) => {
    console.log('gains calculated')
    if (state.mute) {
      state.gains = state.gains.map(x => 0)
    } else {
      // state.gains = state.speakers.map(x => x * state.master / 100)
      state.gains = [
        (state.speaker0 * state.master / 100),
        (state.speaker1 * state.master / 100),
        (state.speaker2 * state.master / 100),
        (state.speaker3 * state.master / 100),
        (state.speaker4 * state.master / 100),
        (state.speaker5 * state.master / 100),
        (state.speaker6 * state.master / 100),
        (state.speaker7 * state.master / 100),
        (state.speaker8 * state.master / 100)
      ]
    }
  },

  // updateSpeakers = (state, payload) => {
  //   state.speakers[payload.speaker] = payload.gain
  // },
  updateSpeaker0 = (state, gain) => {
    console.log(gain)
    state.speaker0 = gain
  },
  updateSpeaker1 = (state, gain) => {
    state.speaker1 = gain
  },
  updateSpeaker2 = (state, gain) => {
    state.speaker2 = gain
  },
  updateSpeaker3 = (state, gain) => {
    state.speaker3 = gain
  },
  updateSpeaker4 = (state, gain) => {
    state.speaker4 = gain
  },
  updateSpeaker5 = (state, gain) => {
    state.speaker5 = gain
  },
  updateSpeaker6 = (state, gain) => {
    state.speaker6 = gain
  },
  updateSpeaker7 = (state, gain) => {
    state.speaker7 = gain
  },
  updateSpeaker8 = (state, gain) => {
    state.speaker8 = gain
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
