var fs = require("fs");

/*
class natives {
    constructor() {}

	appDataValid(){ }
	appGetInt(property_string){ }
	appGetFloat(property_string){ }
	appGetString(property_string){ }
	playPedRingtone(ringtoneName_string, ped_number, p2_boolean){ }
	isPedRingtonePlaying(ped_number){ }
	stopPedRingtone(ped_number){ }
	isMobilePhoneCallOngoing(){ }
	_0xC8B1B2425604CDD0(){ }
	createNewScriptedConversation(){ }
	addLineToConversation(index_number, p1_string, p2_string, p3_number, p4_number, p5_boolean, p6_boolean, p7_boolean, p8_boolean, p9_number, p10_boolean, p11_boolean, p12_boolean){ }
	addPedToConversation(index_number, ped_number, p2_string){ }
	_0x33E3C6C6F2F0B506(p0_number, p1_number, p2_number, p3_number){ }
	_0x892B6AB8F33606F5(p0_number, entity_number){ }
	setMicrophonePosition(p0_boolean, x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, x3_number, y3_number, z3_number){ }
	_0x0B568201DD99F0EB(p0_boolean){ }
	_0x61631F5DF50D1C34(p0_boolean){ }
	startScriptPhoneConversation(p0_boolean, p1_boolean){ }
	preloadScriptPhoneConversation(p0_boolean, p1_boolean){ }
	startScriptConversation(p0_boolean, p1_boolean, p2_boolean, p3_boolean){ }
	preloadScriptConversation(p0_boolean, p1_boolean, p2_boolean, p3_boolean){ }
	startPreloadedConversation(){ }
	getIsPreloadedConversationReady(){ }
	isScriptedConversationOngoing(){ }
	isScriptedConversationLoaded(){ }
	getCurrentScriptedConversationLine(){ }
	pauseScriptedConversation(p0_boolean){ }
	restartScriptedConversation(){ }
	stopScriptedConversation(p0_boolean){ }
	skipToNextScriptedConversationLine(){ }
	interruptConversation(p0_number, p1_number, p2_number){ }
	_0x8A694D7A68F8DC38(p0_number, p1_string, p2_string){ }
	_0xAA19F5572C38B564(p0_number){ }
	_0xB542DE8C3D1CB210(p0_boolean){ }
	registerScriptWithAudio(p0_number){ }
	unregisterScriptWithAudio(){ }
	requestMissionAudioBank(p0_string, p1_boolean, p2_number){ }
	requestAmbientAudioBank(p0_string, p1_boolean, p2_number){ }
	requestScriptAudioBank(p0_string, p1_boolean, p2_number){ }
	_0x40763EA7B9B783E7(p0_number, p1_number, p2_number){ }
	hintAmbientAudioBank(p0_number, p1_number, p2_number){ }
	hintScriptAudioBank(p0_number, p1_number, p2_number){ }
	releaseMissionAudioBank(){ }
	releaseAmbientAudioBank(){ }
	releaseNamedScriptAudioBank(audioBank_string){ }
	releaseScriptAudioBank(){ }
	_0x19AF7ED9B9D23058(){ }
	_0x9AC92EED5E4793AB(){ }
	_0x11579D940949C49E(p0_number){ }
	getSoundId(){ }
	releaseSoundId(soundId_number){ }
	playSound(soundId_number, audioName_string, audioRef_string, p3_boolean, p4_number, p5_boolean){ }
	playSoundFrontend(soundId_number, audioName_string, audioRef_string, p3_boolean){ }
	playDeferredSoundFrontend(soundName_string, soundsetName_string){ }
	playSoundFromEntity(soundId_number, audioName_string, entity_number, audioRef_string, p4_boolean, p5_number){ }
	_0x5B9853296731E88D(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	playSoundFromCoord(soundId_number, audioName_string, x_number, y_number, z_number, audioRef_string, p6_boolean, range_number, p8_boolean){ }
	_0x7EC3C679D0E7E46B(p0_number, p1_number, p2_number, p3_number){ }
	stopSound(soundId_number){ }
	getNetworkIdFromSoundId(soundId_number){ }
	getSoundIdFromNetworkId(netId_number){ }
	setVariableOnSound(soundId_number, p1_number, p2_number){ }
	setVariableOnStream(p0_string, p1_number){ }
	overrideUnderwaterStream(p0_number, p1_boolean){ }
	setVariableOnUnderWaterStream(variableName_string, value_number){ }
	hasSoundFinished(soundId_number){ }
	playAmbientSpeech1(ped_number, speechName_string, speechParam_string, p3_number){ }
	playAmbientSpeech2(ped_number, speechName_string, speechParam_string, p3_number){ }
	playAmbientSpeechWithVoice(p0_number, speechName_string, voiceName_string, speechParam_string, p4_boolean){ }
	playAmbientSpeechAtCoords(p0_string, p1_string, p2_number, p3_number, p4_number, p5_string){ }
	overrideTrevorRage(p0_string){ }
	resetTrevorRage(){ }
	setPlayerAngry(ped_number, toggle_boolean){ }
	playPain(ped_number, painID_number, p1_number, p3_number){ }
	releaseWeaponAudio(){ }
	_0xD01005D2BA2EB778(p0_string){ }
	_0xDDC635D5B3262C56(p0_string){ }
	setAmbientVoiceName(ped_number, name_string){ }
	setAmbientVoiceNameHash(ped_number, hash_number){ }
	getAmbientVoiceNameHash(ped_number){ }
	setPedScream(ped_number){ }
	_0x1B7ABE26CBCBF8C7(ped_number, p1_number, p2_number){ }
	setPedVoiceGroup(ped_number, voiceGroupHash_number){ }
	_0xA5342D390CDA41D6(ped_number, p1_boolean){ }
	stopCurrentPlayingSpeech(ped_number){ }
	stopCurrentPlayingAmbientSpeech(ped_number){ }
	isAmbientSpeechPlaying(ped_number){ }
	isScriptedSpeechPlaying(p0_number){ }
	isAnySpeechPlaying(ped_number){ }
	canPedSpeak(ped_number, speechName_string, unk_boolean){ }
	isPedInCurrentConversation(ped_number){ }
	setPedIsDrunk(ped_number, toggle_boolean){ }
	_0xEE066C7006C49C0A(p0_number, p1_number, p2_number){ }
	_0xC265DF9FB44A9FBD(p0_number){ }
	setAnimalMood(animal_number, mood_number){ }
	isMobilePhoneRadioActive(){ }
	setMobilePhoneRadioState(state_boolean){ }
	getPlayerRadioStationIndex(){ }
	getPlayerRadioStationName(){ }
	getRadioStationName(radioStation_number){ }
	getPlayerRadioStationGenre(){ }
	isRadioRetuning(){ }
	isRadioFadedOut(){ }
	_0xFF266D1D0EB1195D(){ }
	_0xDD6BCF9E94425DF9(){ }
	setRadioToStationName(stationName_string){ }
	setVehRadioStation(vehicle_number, radioStation_string){ }
	_0x0BE4BE946463F917(vehicle_number){ }
	_0xC1805D05E6D4FE10(vehicle_number){ }
	setEmitterRadioStation(emitterName_string, radioStation_string){ }
	setStaticEmitterEnabled(emitterName_string, toggle_boolean){ }
	linkStaticEmitterToEntity(emitterName_string, entity_number){ }
	setRadioToStationIndex(radioStation_number){ }
	setFrontendRadioActive(active_boolean){ }
	unlockMissionNewsStory(newsStory_number){ }
	isMissionNewsStoryUnlocked(newsStory_number){ }
	getAudibleMusicTrackTextId(){ }
	playEndCreditsMusic(play_boolean){ }
	skipRadioForward(){ }
	freezeRadioStation(radioStation_string){ }
	unfreezeRadioStation(radioStation_string){ }
	setRadioAutoUnfreeze(toggle_boolean){ }
	setInitialPlayerStation(radioStation_string){ }
	setUserRadioControlEnabled(toggle_boolean){ }
	setRadioTrack(radioStation_string, radioTrack_string){ }
	setRadioTrackMix(radioStationName_string, mixName_string, p2_number){ }
	setVehicleRadioLoud(vehicle_number, toggle_boolean){ }
	isVehicleRadioLoud(vehicle_number){ }
	setMobileRadioEnabledDuringGameplay(toggle_boolean){ }
	_0x109697E2FFBAC8A1(){ }
	isPlayerVehicleRadioEnabled(){ }
	setVehicleRadioEnabled(vehicle_number, toggle_boolean){ }
	_0xDA07819E452FFE8F(p0_number){ }
	_0x4E404A9361F75BB2(radioStation_string, p1_string, p2_boolean){ }
	_0x1654F24A88A8E3FE(radioStation_string){ }
	getNumUnlockedRadioStations(){ }
	findRadioStationIndex(station_number){ }
	_0x774BD811F656A122(radioStation_string, p1_boolean){ }
	_0x2C96CDB04FCA358E(p0_number){ }
	unlockRadioStationTrackList(radioStation_string, trackListName_string){ }
	updateLsur(enableMixes_boolean){ }
	lockRadioStation(radioStationName_string, toggle_boolean){ }
	_0xC64A06D939F826F5(p0_number, p1_number, p2_number){ }
	_0x3E65CDE5215832C1(radioStationName_string){ }
	_0x34D66BC058019CE0(radioStationName_string){ }
	_0xF3365489E0DD50F9(vehicle_number, toggle_boolean){ }
	setAmbientZoneState(zoneName_string, p1_boolean, p2_boolean){ }
	clearAmbientZoneState(zoneName_string, p1_boolean){ }
	setAmbientZoneListState(p0_number, p1_boolean, p2_boolean){ }
	clearAmbientZoneListState(p0_number, p1_boolean){ }
	setAmbientZoneStatePersistent(ambientZone_string, p1_boolean, p2_boolean){ }
	setAmbientZoneListStatePersistent(ambientZone_string, p1_boolean, p2_boolean){ }
	isAmbientZoneEnabled(ambientZone_string){ }
	_0x5D2BFAAB8D956E0E(){ }
	setCutsceneAudioOverride(name_string){ }
	setVariableOnCutsceneAudio(variableName_string, value_number){ }
	playPoliceReport(name_string, p1_number){ }
	cancelCurrentPoliceReport(){ }
	blipSiren(vehicle_number){ }
	overrideVehHorn(vehicle_number, mute_boolean, p2_number){ }
	isHornActive(vehicle_number){ }
	setAggressiveHorns(toggle_boolean){ }
	_0x02E93C796ABD3A97(p0_boolean){ }
	_0x58BB377BEC7CD5F4(p0_boolean, p1_boolean){ }
	_0x9BD7BD55E4533183(p0_number, p1_number, p2_number){ }
	isStreamPlaying(){ }
	getStreamPlayTime(){ }
	loadStream(streamName_string, soundSet_string){ }
	loadStreamWithStartOffset(streamName_string, startOffset_number, soundSet_string){ }
	playStreamFromPed(ped_number){ }
	playStreamFromVehicle(vehicle_number){ }
	playStreamFromObject(object_number){ }
	playStreamFrontend(){ }
	playStreamFromPosition(x_number, y_number, z_number){ }
	stopStream(){ }
	stopPedSpeaking(ped_number, shaking_boolean){ }
	disablePedPainAudio(ped_number, toggle_boolean){ }
	isAmbientSpeechDisabled(ped_number){ }
	_0xA8A7D434AFB4B97B(p0_string, p1_number){ }
	_0x2ACABED337622DF2(p0_string){ }
	setSirenWithNoDriver(vehicle_number, toggle_boolean){ }
	_0x66C3FB05206041BA(p0_number){ }
	soundVehicleHornThisFrame(vehicle_number){ }
	setHornEnabled(vehicle_number, toggle_boolean){ }
	setAudioVehiclePriority(vehicle_number, p1_number){ }
	_0x9D3AF56E94C9AE98(vehicle_number, p1_number){ }
	useSirenAsHorn(vehicle_number, toggle_boolean){ }
	forceVehicleEngineAudio(vehicle_number, audioName_string){ }
	_0xCA4CEA6AE0000A7E(p0_number){ }
	_0xF1F8157B8C3F171C(vehicle_number, p1_string, p2_string){ }
	_0xD2DCCD8E16E20997(p0_number){ }
	_0x5DB8010EE71FDEF2(vehicle_number){ }
	setVehicleAudioEngineDamageFactor(vehicle_number, damageFactor_number){ }
	_0x01BB4D577D38BD9E(vehicle_number, p1_number){ }
	_0x1C073274E065C6D2(vehicle_number, toggle_boolean){ }
	enableVehicleExhaustPops(vehicle_number, toggle_boolean){ }
	setVehicleBoostActive(vehicle_number, toggle_boolean){ }
	_0x6FDDAD856E36988A(vehicle_number, toggle_boolean){ }
	setScriptUpdateDoorAudio(doorHash_number, toggle_boolean){ }
	playVehicleDoorOpenSound(vehicle_number, doorIndex_number){ }
	playVehicleDoorCloseSound(vehicle_number, doorIndex_number){ }
	_0xC15907D667F7CFB2(vehicle_number, toggle_boolean){ }
	isGameInControlOfMusic(){ }
	setGpsActive(active_boolean){ }
	playMissionCompleteAudio(audioName_string){ }
	isMissionCompletePlaying(){ }
	isMissionCompleteReadyForUi(){ }
	_0xF154B8D1775B2DEC(toggle_boolean){ }
	startAudioScene(scene_string){ }
	stopAudioScene(scene_string){ }
	stopAudioScenes(){ }
	isAudioSceneActive(scene_string){ }
	setAudioSceneVariable(scene_string, variable_string, value_number){ }
	_0xA5F377B175A699C5(p0_number){ }
	addEntityToAudioMixGroup(entity_number, groupName_string, p2_number){ }
	_0x18EB48CFC41F2EA0(p0_number, p1_number){ }
	audioIsScriptedMusicPlaying(){ }
	_0x2DD39BF3E2F9C47F(){ }
	prepareMusicEvent(eventName_string){ }
	cancelMusicEvent(eventName_string){ }
	triggerMusicEvent(eventName_string){ }
	isMusicOneshotPlaying(){ }
	getMusicPlaytime(){ }
	_0x159B7318403A1CD8(p0_number){ }
	recordBrokenGlass(x_number, y_number, z_number, radius_number){ }
	clearAllBrokenGlass(){ }
	_0x70B8EC8FC108A634(p0_boolean, p1_number){ }
	_0x149AEE66F0CB3A99(p0_number, p1_number){ }
	_0x8BF907833BE275DE(p0_number, p1_number){ }
	_0x062D5EAD4DA2FA6A(){ }
	prepareAlarm(alarmName_string){ }
	startAlarm(alarmName_string, p2_boolean){ }
	stopAlarm(alarmName_string, toggle_boolean){ }
	stopAllAlarms(stop_boolean){ }
	isAlarmPlaying(alarmName_string){ }
	getVehicleDefaultHorn(vehicle_number){ }
	getVehicleHornHash(vehicle_number){ }
	resetPedAudioFlags(ped_number){ }
	_0x0653B735BFBDFE87(ped_number, toggle_boolean){ }
	_0x29DA3CA8D8B2692D(ped_number, toggle_boolean){ }
	overridePlayerGroundMaterial(hash_number, toggle_boolean){ }
	_0xBF4DC1784BE94DFA(ped_number, p1_boolean, hash_number){ }
	overrideMicrophoneSettings(hash_number, toggle_boolean){ }
	freezeMicrophone(){ }
	forceAmbientSiren(value_boolean){ }
	_0x43FA0DFC5DF87815(vehicle_number, p1_boolean){ }
	_0xB81CF134AEB56FFB(){ }
	setAudioFlag(flagName_string, toggle_boolean){ }
	prepareSynchronizedAudioEvent(p0_string, p1_number){ }
	prepareSynchronizedAudioEventForScene(p0_number, p1_number){ }
	playSynchronizedAudioEvent(p0_number){ }
	stopSynchronizedAudioEvent(p0_number){ }
	_0xC8EDE9BDBCCBA6D4(p0_number, p1_number, p2_number, p3_number){ }
	setSynchronizedAudioEventPositionThisFrame(p0_string, p1_number){ }
	setAudioSpecialEffectMode(mode_number){ }
	setPortalSettingsOverride(p0_string, p1_string){ }
	removePortalSettingsOverride(p0_string){ }
	_0xE4E6DD5566D28C82(){ }
	_0x3A48AB4445D499BE(){ }
	setPedTalk(ped_number){ }
	_0x0150B6FF25A9E2E5(){ }
	_0xBEF34B1D9624D5DD(p0_boolean){ }
	stopCutsceneAudio(){ }
	hasMultiplayerAudioDataLoaded(){ }
	hasMultiplayerAudioDataUnloaded(){ }
	_0xD53F3A29BCE2580E(vehicle_number){ }
	_0x0350E7E17BA767D0(vehicle_number, value_number){ }
	addScriptToRandomPed(name_string, model_number, p2_number, p3_number){ }
	registerObjectScriptBrain(scriptName_string, modelHash_number, p2_number, activationRange_number, p4_number, p5_number){ }
	isObjectWithinBrainActivationRange(object_number){ }
	registerWorldPointScriptBrain(scriptName_string, activationRange_number, p2_number){ }
	isWorldPointWithinBrainActivationRange(){ }
	enableScriptBrainSet(brainSet_number){ }
	disableScriptBrainSet(brainSet_number){ }
	_0x0B40ED49D7D6FF84(){ }
	_0x4D953DF78EBF8158(){ }
	_0x6D6840CEE8845831(action_string){ }
	_0x6E91B04E08773030(action_string){ }
	renderScriptCams(render_boolean, ease_boolean, easeTime_number, p3_boolean, p4_boolean, p5_number){ }
	renderFirstPersonCam(render_boolean, p1_number, p2_number, p3_number){ }
	createCam(camName_string, p1_boolean){ }
	createCamWithParams(camName_string, posX_number, posY_number, posZ_number, rotX_number, rotY_number, rotZ_number, fov_number, p8_boolean, p9_number){ }
	createCamera(camHash_number, p1_boolean){ }
	createCameraWithParams(camHash_number, posX_number, posY_number, posZ_number, rotX_number, rotY_number, rotZ_number, fov_number, p8_boolean, p9_number){ }
	destroyCam(cam_number, thisScriptCheck_boolean){ }
	destroyAllCams(thisScriptCheck_boolean){ }
	doesCamExist(cam_number){ }
	setCamActive(cam_number, active_boolean){ }
	isCamActive(cam_number){ }
	isCamRendering(cam_number){ }
	getRenderingCam(){ }
	getCamCoord(cam_number){ }
	getCamRot(cam_number, rotationOrder_number){ }
	getCamFov(cam_number){ }
	getCamNearClip(cam_number){ }
	getCamFarClip(cam_number){ }
	getCamFarDof(cam_number){ }
	setCamParams(cam_number, posX_number, posY_number, posZ_number, rotX_number, rotY_number, rotZ_number, fieldOfView_number, p8_number, p9_number, p10_number, p11_number){ }
	setCamCoord(cam_number, posX_number, posY_number, posZ_number){ }
	setCamRot(cam_number, rotX_number, rotY_number, rotZ_number, rotationOrder_number){ }
	setCamFov(cam_number, fieldOfView_number){ }
	setCamNearClip(cam_number, nearClip_number){ }
	setCamFarClip(cam_number, farClip_number){ }
	setCamMotionBlurStrength(cam_number, strength_number){ }
	setCamNearDof(cam_number, nearDOF_number){ }
	setCamFarDof(cam_number, farDOF_number){ }
	setCamDofStrength(cam_number, dofStrength_number){ }
	setCamDofPlanes(cam_number, p1_number, p2_number, p3_number, p4_number){ }
	setCamUseShallowDofMode(cam_number, toggle_boolean){ }
	setUseHiDof(){ }
	_0xF55E4046F6F831DC(p0_number, p1_number){ }
	_0xE111A7C0D200CBC5(p0_number, p1_number){ }
	setCamDofFnumberOfLens(camera_number, p1_number){ }
	_0x47B595D60664CFFA(p0_number, p1_number){ }
	setCamDofFocusDistanceBias(camera_number, p1_number){ }
	setCamDofMaxNearInFocusDistance(camera_number, p1_number){ }
	setCamDofMaxNearInFocusDistanceBlendLevel(camera_number, p1_number){ }
	attachCamToEntity(cam_number, entity_number, xOffset_number, yOffset_number, zOffset_number, isRelative_boolean){ }
	attachCamToPedBone(cam_number, ped_number, boneIndex_number, x_number, y_number, z_number, heading_boolean){ }
	attachCamToPedBone2(cam_number, ped_number, boneIndex_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_boolean){ }
	attachCamToVehicleBone(cam_number, vehicle_number, boneIndex_number, p3_boolean, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_boolean){ }
	detachCam(cam_number){ }
	setCamInheritRollVehicle(cam_number, p1_boolean){ }
	pointCamAtCoord(cam_number, x_number, y_number, z_number){ }
	pointCamAtEntity(cam_number, entity_number, p2_number, p3_number, p4_number, p5_boolean){ }
	pointCamAtPedBone(cam_number, ped_number, boneIndex_number, x_number, y_number, z_number, p6_boolean){ }
	stopCamPointing(cam_number){ }
	setCamAffectsAiming(cam_number, toggle_boolean){ }
	_0x661B5C8654ADD825(cam_number, p1_boolean){ }
	_0xA2767257A320FC82(p0_number, p1_boolean){ }
	_0x271017B9BA825366(p0_number, p1_boolean){ }
	setCamDebugName(camera_number, name_string){ }
	addCamSplineNode(camera_number, x_number, y_number, z_number, xRot_number, yRot_number, zRot_number, length_number, p8_number, p9_number){ }
	addCamSplineNodeUsingCameraFrame(cam_number, cam2_number, p2_number, p3_number){ }
	addCamSplineNodeUsingCamera(cam_number, cam2_number, p2_number, p3_number){ }
	addCamSplineNodeUsingGameplayFrame(cam_number, p1_number, p2_number){ }
	setCamSplinePhase(cam_number, p1_number){ }
	getCamSplinePhase(cam_number){ }
	getCamSplineNodePhase(cam_number){ }
	setCamSplineDuration(cam_number, timeDuration_number){ }
	setCamSplineSmoothingStyle(cam_number, smoothingStyle_number){ }
	getCamSplineNodeIndex(cam_number){ }
	setCamSplineNodeEase(cam_number, p1_number, p2_number, p3_number){ }
	setCamSplineNodeVelocityScale(cam_number, p1_number, scale_number){ }
	overrideCamSplineVelocity(cam_number, p1_number, p2_number, p3_number){ }
	overrideCamSplineMotionBlur(cam_number, p1_number, p2_number, p3_number){ }
	setCamSplineNodeExtraFlags(cam_number, p1_number, flags_number){ }
	isCamSplinePaused(p0_number){ }
	setCamActiveWithInterp(camTo_number, camFrom_number, duration_number, easeLocation_number, easeRotation_number){ }
	isCamInterpolating(cam_number){ }
	shakeCam(cam_number, type_string, amplitude_number){ }
	animatedShakeCam(cam_number, p1_string, p2_string, p3_string, amplitude_number){ }
	isCamShaking(cam_number){ }
	setCamShakeAmplitude(cam_number, amplitude_number){ }
	stopCamShaking(cam_number, p1_boolean){ }
	shakeScriptGlobal(p0_string, p1_number){ }
	animatedShakeScriptGlobal(p0_string, p1_string, p2_string, p3_number){ }
	isScriptGlobalShaking(){ }
	stopScriptGlobalShaking(p0_boolean){ }
	playCamAnim(cam_number, animName_string, animDictionary_string, x_number, y_number, z_number, xRot_number, yRot_number, zRot_number, p9_boolean, p10_number){ }
	isCamPlayingAnim(cam_number, animName_string, animDictionary_string){ }
	setCamAnimCurrentPhase(cam_number, phase_number){ }
	getCamAnimCurrentPhase(cam_number){ }
	playSynchronizedCamAnim(p0_number, p1_number, animName_string, animDictionary_string){ }
	setFlyCamHorizontalResponse(cam_number, p1_number, p2_number, p3_number){ }
	_0xE827B9382CFB41BA(cam_number, p1_number, p2_number, p3_number){ }
	setFlyCamMaxHeight(cam_number, height_number){ }
	setFlyCamCoordAndConstrain(cam_number, x_number, y_number, z_number){ }
	_0xC8B5C4A79CC18B94(cam_number){ }
	_0x5C48A1D6E3B33179(cam_number){ }
	isScreenFadedOut(){ }
	isScreenFadedIn(){ }
	isScreenFadingOut(){ }
	isScreenFadingIn(){ }
	doScreenFadeIn(duration_number){ }
	doScreenFadeOut(duration_number){ }
	setWidescreenBorders(p0_boolean, p1_number){ }
	_0x4879E4FE39074CDF(){ }
	getGameplayCamCoord(){ }
	getGameplayCamRot(rotationOrder_number){ }
	getGameplayCamFov(){ }
	_0x487A82C650EB7799(p0_number){ }
	_0x0225778816FDC28C(p0_number){ }
	getGameplayCamRelativeHeading(){ }
	setGameplayCamRelativeHeading(heading_number){ }
	getGameplayCamRelativePitch(){ }
	setGameplayCamRelativePitch(x_number, Value2_number){ }
	_0x48608C3464F58AB4(p0_number, p1_number, p2_number){ }
	setGameplayCamRawYaw(yaw_number, p1_number){ }
	setGameplayCamRawPitch(pitch_number){ }
	_0x469F2ECDEC046337(p0_boolean){ }
	shakeGameplayCam(shakeName_string, intensity_number){ }
	isGameplayCamShaking(){ }
	setGameplayCamShakeAmplitude(amplitude_number){ }
	stopGameplayCamShaking(p0_boolean){ }
	_0x8BBACBF51DA047A8(p0_number){ }
	isGameplayCamRendering(){ }
	_0x3044240D2E0FA842(){ }
	_0x705A276EBFF3133D(){ }
	_0xDB90C6CCA48940F1(p0_boolean){ }
	enableCrosshairThisFrame(){ }
	isGameplayCamLookingBehind(){ }
	_0x2AED6301F67007D5(entity_number){ }
	_0x49482F9FCD825AAA(entity_number){ }
	_0xFD3151CD37EA2245(entity_number){ }
	_0xB1381B97F70C7B30(){ }
	_0xDD79DF9F4D26E1C9(){ }
	isSphereVisible(x_number, y_number, z_number, radius_number){ }
	isFollowPedCamActive(){ }
	setFollowPedCamThisUpdate(camName_string, p1_number){ }
	_0x271401846BD26E92(p0_boolean, p1_boolean){ }
	_0xC8391C309684595A(){ }
	clampGameplayCamYaw(minimum_number, maximum_number){ }
	clampGameplayCamPitch(minimum_number, maximum_number){ }
	animateGameplayCamZoom(p0_number, distance_number){ }
	_0xE9EA16D6E54CDCA4(p0_number, p1_number){ }
	disableFirstPersonCamThisFrame(){ }
	_0x59424BD75174C9B1(){ }
	getFollowPedCamZoomLevel(){ }
	getFollowPedCamViewMode(){ }
	setFollowPedCamViewMode(viewMode_number){ }
	isFollowVehicleCamActive(){ }
	_0x91EF6EE6419E5B97(p0_boolean){ }
	_0x9DFE13ECDC1EC196(p0_boolean, p1_boolean){ }
	getFollowVehicleCamZoomLevel(){ }
	setFollowVehicleCamZoomLevel(zoomLevel_number){ }
	getFollowVehicleCamViewMode(){ }
	setFollowVehicleCamViewMode(viewMode_number){ }
	_0xEE778F8C7E1142E2(p0_number){ }
	_0x2A2173E46DAECD12(p0_number, p1_number){ }
	_0x19CAFA3C87F7C2FF(){ }
	_0x6493CF69859B116A(){ }
	_0x425A920FDB9A0DDA(camName_string){ }
	_0x0AA27680A0BD43FA(){ }
	_0x5C90CAB09951A12F(p0_number){ }
	isAimCamActive(){ }
	isAimCamThirdPersonActive(){ }
	isFirstPersonAimCamActive(){ }
	disableAimCamThisUpdate(){ }
	getGameplayCamZoom(){ }
	_0x70894BD0915C5BCA(p0_number){ }
	_0xCED08CBE8EBB97C7(p0_number, p1_number){ }
	_0x2F7F2B26DD3F18EE(p0_number, p1_number){ }
	setFirstPersonCamPitchRange(p0_number, p1_number){ }
	setFirstPersonCamNearClip(p0_number){ }
	setThirdPersonAimCamNearClip(p0_number){ }
	_0x4008EDF7D6E48175(p0_boolean){ }
	_0x380B4968D1E09E55(){ }
	getGameplayCamCoords(){ }
	getGameplayCamRot(rotationOrder_number){ }
	_0x26903D9CD1175F2C(p0_number, p1_number){ }
	_0x80EC114669DAEFF4(){ }
	_0x5F35F6732C3FBBA0(p0_number){ }
	getGameplayCamNearClip(){ }
	getGameplayCamFarClip(){ }
	getGameplayCamNearDof(){ }
	getGameplayCamFarDof(){ }
	getGameplayCamFarClip2(){ }
	setGameplayCoordHint(x_number, y_number, z_number, duration_number, blendOutDuration_number, blendInDuration_number, unk_number){ }
	setGameplayPedHint(p0_number, x1_number, y1_number, z1_number, p4_boolean, p5_number, p6_number, p7_number){ }
	setGameplayVehicleHint(p0_number, p1_number, p2_number, p3_number, p4_boolean, p5_number, p6_number, p7_number){ }
	setGameplayObjectHint(p0_number, p1_number, p2_number, p3_number, p4_boolean, p5_number, p6_number, p7_number){ }
	setGameplayEntityHint(entity_number, xOffset_number, yOffset_number, zOffset_number, p4_boolean, p5_number, p6_number, p7_number, p8_number){ }
	isGameplayHintActive(){ }
	stopGameplayHint(p0_boolean){ }
	_0xCCD078C2665D2973(p0_boolean){ }
	_0x247ACBC4ABBC9D1C(p0_boolean){ }
	_0xBF72910D0F26F025(){ }
	setGameplayHintFov(FOV_number){ }
	_0xF8BDBF3D573049A1(p0_number){ }
	_0xD1F8363DFAD03848(p0_number){ }
	_0x5D7B620DAE436138(p0_number){ }
	_0xC92717EF615B6704(p0_number){ }
	_0xE3433EADAAF7EE40(p0_boolean){ }
	setCinematicButtonActive(p0_boolean){ }
	isCinematicCamRendering(){ }
	shakeCinematicCam(p0_string, p1_number){ }
	isCinematicCamShaking(){ }
	setCinematicCamShakeAmplitude(p0_number){ }
	stopCinematicCamShaking(p0_boolean){ }
	disableVehicleFirstPersonCamThisFrame(){ }
	_0x62ECFCFDEE7885D6(){ }
	_0x9E4CFFF989258472(){ }
	invalidateIdleCam(){ }
	_0xCA9D2AA3E326D720(){ }
	isInVehicleCamDisabled(){ }
	createCinematicShot(p0_number, p1_number, p2_number, entity_number){ }
	isCinematicShotActive(p0_number){ }
	stopCinematicShot(p0_number){ }
	_0xA41BCD7213805AAC(p0_boolean){ }
	_0xDC9DA9E8789F5246(){ }
	setCinematicModeActive(p0_boolean){ }
	_0x1F2300CB7FA7B7F6(){ }
	_0x17FCA7199A530203(){ }
	_0xD7360051C885628B(){ }
	_0xF5F1E89A970B7796(){ }
	_0x7B8A361C1813FBEF(){ }
	stopCutsceneCamShaking(){ }
	_0x324C5AA411DA7737(p0_number){ }
	_0x12DED8CA53D47EA5(p0_number){ }
	getFocusPedOnScreen(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number){ }
	_0x5A43C76F7FC7BA5F(){ }
	setCamEffect(p0_number){ }
	_0x5C41E6BABC9E2112(p0_number){ }
	_0x21E253A7F8DA5DFB(vehicleName_string){ }
	_0x11FA5D3479C7DD47(p0_number){ }
	_0xEAF0FA793D05C592(){ }
	_0x62374889A4D59F72(){ }
	replayFreeCamGetMaxRange(){ }
	setClockTime(hour_number, minute_number, second_number){ }
	pauseClock(toggle_boolean){ }
	advanceClockTimeTo(hour_number, minute_number, second_number){ }
	addToClockTime(hours_number, minutes_number, seconds_number){ }
	getClockHours(){ }
	getClockMinutes(){ }
	getClockSeconds(){ }
	setClockDate(day_number, month_number, year_number){ }
	getClockDayOfWeek(){ }
	getClockDayOfMonth(){ }
	getClockMonth(){ }
	getClockYear(){ }
	getMillisecondsPerGameMinute(){ }
	getPosixTime(year_number, month_number, day_number, hour_number, minute_number, second_number){ }
	getUtcTime(year_number, month_number, day_number, hour_number, minute_number, second_number){ }
	getLocalTime(year_number, month_number, day_number, hour_number, minute_number, second_number){ }
	requestCutscene(cutsceneName_string, flags_number){ }
	requestCutsceneWithPlaybackList(cutsceneName_string, playbackFlags_number, flags_number){ }
	removeCutscene(){ }
	hasCutsceneLoaded(){ }
	hasThisCutsceneLoaded(cutsceneName_string){ }
	_0x8D9DF6ECA8768583(threadId_number){ }
	canRequestAssetsForCutsceneEntity(){ }
	isCutscenePlaybackFlagSet(flag_number){ }
	setCutsceneEntityStreamingFlags(cutsceneEntName_string, p1_number, p2_number){ }
	requestCutFile(cutsceneName_string){ }
	hasCutFileLoaded(cutsceneName_string){ }
	removeCutFile(cutsceneName_string){ }
	getCutFileNumSections(cutsceneName_string){ }
	startCutscene(flags_number){ }
	startCutsceneAtCoords(x_number, y_number, z_number, flags_number){ }
	stopCutscene(p0_boolean){ }
	stopCutsceneImmediately(){ }
	setCutsceneOrigin(x_number, y_number, z_number, p3_number, p4_number){ }
	_0x011883F41211432A(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, p6_number){ }
	getCutsceneTime(){ }
	getCutsceneTotalDuration(){ }
	wasCutsceneSkipped(){ }
	hasCutsceneFinished(){ }
	isCutsceneActive(){ }
	isCutscenePlaying(){ }
	getCutsceneSectionPlaying(){ }
	getEntityIndexOfCutsceneEntity(cutsceneEntName_string, modelHash_number){ }
	_0x583DF8E3D4AFBD98(){ }
	_0x4CEBC1ED31E8925E(cutsceneName_string){ }
	_0x4FCD976DA686580C(p0_number){ }
	registerEntityForCutscene(cutscenePed_number, cutsceneEntName_string, p2_number, modelHash_number, p4_number){ }
	getEntityIndexOfRegisteredEntity(cutsceneEntName_string, modelHash_number){ }
	_0x7F96F23FA9B73327(modelHash_number){ }
	setCutsceneTriggerArea(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	canSetEnterStateForRegisteredEntity(cutsceneEntName_string, modelHash_number){ }
	canSetExitStateForRegisteredEntity(cutsceneEntName_string, modelHash_number){ }
	canSetExitStateForCamera(p0_boolean){ }
	_0xC61B86C9F61EB404(toggle_boolean){ }
	setCutsceneFadeValues(p0_boolean, p1_boolean, p2_boolean, p3_boolean){ }
	_0x20746F7B1032A3C7(p0_boolean, p1_boolean, p2_boolean, p3_boolean){ }
	_0x06EE9048FD080382(p0_boolean){ }
	_0xA0FE76168A189DDB(){ }
	_0x2F137B508DE238F2(p0_boolean){ }
	_0xE36A98D8AB3D3C66(p0_boolean){ }
	_0x5EDEF0CF8C1DAB3C(){ }
	_0x41FAA8FB2ECE8720(p0_boolean){ }
	registerSynchronisedScriptSpeech(){ }
	setCutscenePedComponentVariation(cutsceneEntName_string, p1_number, p2_number, p3_number, modelHash_number){ }
	setCutscenePedComponentVariationFromPed(cutsceneEntName_string, ped_number, modelHash_number){ }
	doesCutsceneEntityExist(cutsceneEntName_string, modelHash_number){ }
	setCutscenePedPropVariation(cutsceneEntName_string, p1_number, p2_number, p3_number, modelHash_number){ }
	_0x708BDD8CD795B043(){ }
	datafileWatchRequestId(id_number){ }
	datafileClearWatchList(){ }
	_0xFCCAE5B92A830878(index_number){ }
	_0x15FF52B809DB2353(p0_number){ }
	_0xF8CC1EBE0B62E29F(p0_number){ }
	_0x22DA66936E0FFF37(p0_number){ }
	_0x8F5EA1C01D65A100(p0_number){ }
	ugcCreateContent(data_number, dataCount_number, contentName_string, description_string, tagsCsv_string, contentTypeName_string, publish_boolean){ }
	ugcCreateMission(contentName_string, description_string, tagsCsv_string, contentTypeName_string, publish_boolean){ }
	ugcUpdateContent(contentId_string, data_number, dataCount_number, contentName_string, description_string, tagsCsv_string, contentTypeName_string){ }
	ugcUpdateMission(contentId_string, contentName_string, description_string, tagsCsv_string, contentTypeName_string){ }
	ugcSetPlayerData(contentId_string, rating_number, contentTypeName_string){ }
	_0xA69AC4ADE82B57A4(p0_number){ }
	_0x9CB0BFA7A9342C3D(p0_number, p1_boolean){ }
	_0x52818819057F2B40(p0_number){ }
	_0x01095C95CD46B624(p0_number){ }
	loadUgcFile(filename_string){ }
	datafileCreate(){ }
	datafileDelete(){ }
	_0x2ED61456317B8178(){ }
	_0xC55854C7D7274882(){ }
	datafileGetFileDict(){ }
	datafileStartSaveToCloud(filename_string){ }
	_0x4DFDD9EB705F8140(p0_boolean){ }
	datafileIsSavePending(){ }
	objectValueAddBoolean(objectData_number, key_string, value_boolean){ }
	objectValueAddInteger(objectData_number, key_string, value_number){ }
	objectValueAddFloat(objectData_number, key_string, value_number){ }
	objectValueAddString(objectData_number, key_string, value_string){ }
	objectValueAddVector3(objectData_number, key_string, valueX_number, valueY_number, valueZ_number){ }
	objectValueAddObject(objectData_number, key_string){ }
	objectValueAddArray(objectData_number, key_string){ }
	objectValueGetBoolean(objectData_number, key_string){ }
	objectValueGetInteger(objectData_number, key_string){ }
	objectValueGetFloat(objectData_number, key_string){ }
	objectValueGetString(objectData_number, key_string){ }
	objectValueGetVector3(objectData_number, key_string){ }
	objectValueGetObject(objectData_number, key_string){ }
	objectValueGetArray(objectData_number, key_string){ }
	objectValueGetType(objectData_number, key_string){ }
	arrayValueAddBoolean(arrayData_number, value_boolean){ }
	arrayValueAddInteger(arrayData_number, value_number){ }
	arrayValueAddFloat(arrayData_number, value_number){ }
	arrayValueAddString(arrayData_number, value_string){ }
	arrayValueAddVector3(arrayData_number, valueX_number, valueY_number, valueZ_number){ }
	arrayValueAddObject(arrayData_number){ }
	arrayValueGetBoolean(arrayData_number, arrayIndex_number){ }
	arrayValueGetInteger(arrayData_number, arrayIndex_number){ }
	arrayValueGetFloat(arrayData_number, arrayIndex_number){ }
	arrayValueGetString(arrayData_number, arrayIndex_number){ }
	arrayValueGetVector3(arrayData_number, arrayIndex_number){ }
	arrayValueGetObject(arrayData_number, arrayIndex_number){ }
	arrayValueGetSize(arrayData_number){ }
	arrayValueGetType(arrayData_number, arrayIndex_number){ }
	decorSetTime(entity_number, propertyName_string, timestamp_number){ }
	decorSetBool(entity_number, propertyName_string, value_boolean){ }
	decorSetFloat(entity_number, propertyName_string, value_number){ }
	decorSetInt(entity_number, propertyName_string, value_number){ }
	decorGetBool(entity_number, propertyName_string){ }
	decorGetFloat(entity_number, propertyName_string){ }
	decorGetInt(entity_number, propertyName_string){ }
	decorExistOn(entity_number, propertyName_string){ }
	decorRemove(entity_number, propertyName_string){ }
	decorRegister(propertyName_string, type_number){ }
	decorIsRegisteredAsType(propertyName_string, type_number){ }
	decorRegisterLock(){ }
	_0x241FCA5B1AA14F75(){ }
	isDlcPresent(dlcHash_number){ }
	_0xF2E07819EF1A5289(){ }
	_0x9489659372A81585(){ }
	_0xA213B11DFF526300(){ }
	getExtraContentPackHasBeenInstalled(){ }
	getIsLoadingScreenActive(){ }
	hasCloudRequestsFinished(p0_boolean, unused_number){ }
	loadSpDlcMaps(){ }
	loadMpDlcMaps(){ }
	doesEntityExist(entity_number){ }
	doesEntityBelongToThisScript(entity_number, p1_boolean){ }
	doesEntityHaveDrawable(entity_number){ }
	doesEntityHavePhysics(entity_number){ }
	hasEntityAnimFinished(entity_number, animDict_string, animName_string, p3_number){ }
	hasEntityBeenDamagedByAnyObject(entity_number){ }
	hasEntityBeenDamagedByAnyPed(entity_number){ }
	hasEntityBeenDamagedByAnyVehicle(entity_number){ }
	hasEntityBeenDamagedByEntity(entity1_number, entity2_number, p2_boolean){ }
	hasEntityClearLosToEntity(entity1_number, entity2_number, traceType_number){ }
	hasEntityClearLosToEntityInFront(entity1_number, entity2_number){ }
	hasEntityCollidedWithAnything(entity_number){ }
	getLastMaterialHitByEntity(entity_number){ }
	getCollisionNormalOfLastHitForEntity(entity_number){ }
	forceEntityAiAndAnimationUpdate(entity_number){ }
	getEntityAnimCurrentTime(entity_number, animDict_string, animName_string){ }
	getEntityAnimTotalTime(entity_number, animDict_string, animName_string){ }
	getAnimDuration(animDict_string, animName_string){ }
	getEntityAttachedTo(entity_number){ }
	getEntityCoords(entity_number, alive_boolean){ }
	getEntityForwardVector(entity_number){ }
	getEntityForwardX(entity_number){ }
	getEntityForwardY(entity_number){ }
	getEntityHeading(entity_number){ }
	getEntityPhysicsHeading(entity_number){ }
	getEntityHealth(entity_number){ }
	getEntityMaxHealth(entity_number){ }
	setEntityMaxHealth(entity_number, value_number){ }
	getEntityHeight(entity_number, X_number, Y_number, Z_number, atTop_boolean, inWorldCoords_boolean){ }
	getEntityHeightAboveGround(entity_number){ }
	getEntityMatrix(entity_number, rightVector_setAsUndefined, forwardVector_setAsUndefined, upVector_setAsUndefined, position_setAsUndefined){ }
	getEntityModel(entity_number){ }
	getOffsetFromEntityGivenWorldCoords(entity_number, posX_number, posY_number, posZ_number){ }
	getOffsetFromEntityInWorldCoords(entity_number, offsetX_number, offsetY_number, offsetZ_number){ }
	getEntityPitch(entity_number){ }
	getEntityQuaternion(entity_number, x_number, y_number, z_number, w_number){ }
	getEntityRoll(entity_number){ }
	getEntityRotation(entity_number, rotationOrder_number){ }
	getEntityRotationVelocity(entity_number){ }
	getEntityScript(entity_number, script_number){ }
	getEntitySpeed(entity_number){ }
	getEntitySpeedVector(entity_number, relative_boolean){ }
	getEntityUprightValue(entity_number){ }
	getEntityVelocity(entity_number){ }
	getObjectIndexFromEntityIndex(entity_number){ }
	getPedIndexFromEntityIndex(entity_number){ }
	getVehicleIndexFromEntityIndex(entity_number){ }
	getWorldPositionOfEntityBone(entity_number, boneIndex_number){ }
	getNearestPlayerToEntity(entity_number){ }
	getNearestPlayerToEntityOnTeam(entity_number, team_number){ }
	getEntityType(entity_number){ }
	getEntityPopulationType(entity_number){ }
	isAnEntity(handle_number){ }
	isEntityAPed(entity_number){ }
	isEntityAMissionEntity(entity_number){ }
	isEntityAVehicle(entity_number){ }
	isEntityAnObject(entity_number){ }
	isEntityAtCoord(entity_number, xPos_number, yPos_number, zPos_number, xSize_number, ySize_number, zSize_number, p7_boolean, p8_boolean, p9_number){ }
	isEntityAtEntity(entity1_number, entity2_number, xSize_number, ySize_number, zSize_number, p5_boolean, p6_boolean, p7_number){ }
	isEntityAttached(entity_number){ }
	isEntityAttachedToAnyObject(entity_number){ }
	isEntityAttachedToAnyPed(entity_number){ }
	isEntityAttachedToAnyVehicle(entity_number){ }
	isEntityAttachedToEntity(from_number, to_number){ }
	isEntityDead(entity_number, p1_boolean){ }
	isEntityInAir(entity_number){ }
	isEntityInAngledArea(entity_number, originX_number, originY_number, originZ_number, edgeX_number, edgeY_number, edgeZ_number, angle_number, p8_boolean, p9_boolean, p10_number){ }
	isEntityInArea(entity_number, x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, p7_boolean, p8_boolean, p9_number){ }
	isEntityInZone(entity_number, zone_string){ }
	isEntityInWater(entity_number){ }
	getEntitySubmergedLevel(entity_number){ }
	_0x694E00132F2823ED(entity_number, toggle_boolean){ }
	isEntityOnScreen(entity_number){ }
	isEntityPlayingAnim(entity_number, animDict_string, animName_string, taskFlag_number){ }
	isEntityStatic(entity_number){ }
	isEntityTouchingEntity(entity_number, targetEntity_number){ }
	isEntityTouchingModel(entity_number, modelHash_number){ }
	isEntityUpright(entity_number, angle_number){ }
	isEntityUpsidedown(entity_number){ }
	isEntityVisible(entity_number){ }
	isEntityVisibleToScript(entity_number){ }
	isEntityOccluded(entity_number){ }
	wouldEntityBeOccluded(entityModelHash_number, x_number, y_number, z_number, p4_boolean){ }
	isEntityWaitingForWorldCollision(entity_number){ }
	applyForceToEntityCenterOfMass(entity_number, forceType_number, x_number, y_number, z_number, p5_boolean, isDirectionRel_boolean, isForceRel_boolean, p8_boolean){ }
	applyForceToEntity(entity_number, forceFlags_number, x_number, y_number, z_number, offX_number, offY_number, offZ_number, boneIndex_number, isDirectionRel_boolean, ignoreUpVec_boolean, isForceRel_boolean, p12_boolean, p13_boolean){ }
	attachEntityToEntity(entity1_number, entity2_number, boneIndex_number, xPos_number, yPos_number, zPos_number, xRot_number, yRot_number, zRot_number, p9_boolean, useSoftPinning_boolean, collision_boolean, isPed_boolean, vertexIndex_number, fixedRot_boolean){ }
	_0x5C48B75732C8456C(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	_0xFD1695C5D3B05439(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	attachEntityToEntityPhysically(entity1_number, entity2_number, boneIndex1_number, boneIndex2_number, xPos1_number, yPos1_number, zPos1_number, xPos2_number, yPos2_number, zPos2_number, xRot_number, yRot_number, zRot_number, breakForce_number, fixedRot_boolean, p15_boolean, collision_boolean, p17_boolean, p18_number){ }
	processEntityAttachments(entity_number){ }
	getEntityBoneIndexByName(entity_number, boneName_string){ }
	clearEntityLastDamageEntity(entity_number){ }
	deleteEntity(entity_number){ }
	detachEntity(entity_number, p1_boolean, collision_boolean){ }
	freezeEntityPosition(entity_number, toggle_boolean){ }
	setEntitySomething(entity_number, toggle_boolean){ }
	playEntityAnim(entity_number, animName_string, animDict_string, p3_number, loop_boolean, stayInAnim_boolean, p6_boolean, delta_number, bitset_number){ }
	playSynchronizedEntityAnim(entity_number, syncedScene_number, animation_string, propName_string, p4_number, p5_number, p6_number, p7_number){ }
	playSynchronizedMapEntityAnim(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number, p11_number){ }
	stopSynchronizedMapEntityAnim(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	stopEntityAnim(entity_number, animation_string, animGroup_string, p3_number){ }
	stopSynchronizedEntityAnim(entity_number, p1_number, p2_boolean){ }
	hasAnimEventFired(entity_number, actionHash_number){ }
	findAnimEventPhase(animDictionary_string, animName_string, p2_string, p3_number, p4_number){ }
	setEntityAnimCurrentTime(entity_number, animDictionary_string, animName_string, time_number){ }
	setEntityAnimSpeed(entity_number, animDictionary_string, animName_string, speedMultiplier_number){ }
	setEntityAsMissionEntity(entity_number, p1_boolean, p2_boolean){ }
	setEntityAsNoLongerNeeded(entity_number){ }
	setPedAsNoLongerNeeded(ped_number){ }
	setVehicleAsNoLongerNeeded(vehicle_number){ }
	setObjectAsNoLongerNeeded(object_number){ }
	setEntityCanBeDamaged(entity_number, toggle_boolean){ }
	getEntityCanBeDamaged(entity_number){ }
	setEntityCanBeDamagedByRelationshipGroup(entity_number, bCanBeDamaged_boolean, relGroup_number){ }
	_0x352E2B5CF420BF3B(p0_number, p1_number){ }
	setEntityCanBeTargetedWithoutLos(entity_number, toggle_boolean){ }
	setEntityCollision(entity_number, toggle_boolean, keepPhysics_boolean){ }
	getEntityCollisionDisabled(entity_number){ }
	setEntityCompletelyDisableCollision(entity_number, p1_boolean, p2_boolean){ }
	setEntityCoords(entity_number, xPos_number, yPos_number, zPos_number, xAxis_boolean, yAxis_boolean, zAxis_boolean, clearArea_boolean){ }
	setEntityCoords2(entity_number, xPos_number, yPos_number, zPos_number, xAxis_boolean, yAxis_boolean, zAxis_boolean, clearArea_boolean){ }
	setEntityCoordsNoOffset(entity_number, xPos_number, yPos_number, zPos_number, xAxis_boolean, yAxis_boolean, zAxis_boolean){ }
	setEntityDynamic(entity_number, toggle_boolean){ }
	setEntityHeading(entity_number, heading_number){ }
	setEntityHealth(entity_number, health_number, p2_number){ }
	setEntityInvincible(entity_number, toggle_boolean){ }
	setEntityIsTargetPriority(entity_number, p1_boolean, p2_number){ }
	setEntityLights(entity_number, toggle_boolean){ }
	setEntityLoadCollisionFlag(entity_number, toggle_boolean, p2_number){ }
	hasCollisionLoadedAroundEntity(entity_number){ }
	setEntityMaxSpeed(entity_number, speed_number){ }
	setEntityOnlyDamagedByPlayer(entity_number, toggle_boolean){ }
	setEntityOnlyDamagedByRelationshipGroup(entity_number, p1_boolean, p2_number){ }
	setEntityProofs(entity_number, bulletProof_boolean, fireProof_boolean, explosionProof_boolean, collisionProof_boolean, meleeProof_boolean, p6_boolean, p7_boolean, drownProof_boolean){ }
	getEntityProofs(entity_number, bulletProof_boolean, fireProof_boolean, explosionProof_boolean, collisionProof_boolean, meleeProof_boolean, p6_boolean, p7_boolean, drownProof_boolean){ }
	setEntityQuaternion(entity_number, x_number, y_number, z_number, w_number){ }
	setEntityRecordsCollisions(entity_number, toggle_boolean){ }
	setEntityRotation(entity_number, pitch_number, roll_number, yaw_number, rotationOrder_number, p5_boolean){ }
	setEntityVisible(entity_number, toggle_boolean, unk_boolean){ }
	_0xC34BC448DA29F5E9(entity_number, toggle_boolean){ }
	setEntityVelocity(entity_number, x_number, y_number, z_number){ }
	setEntityHasGravity(entity_number, toggle_boolean){ }
	setEntityLodDist(entity_number, value_number){ }
	getEntityLodDist(entity_number){ }
	setEntityAlpha(entity_number, alphaLevel_number, skin_boolean){ }
	getEntityAlpha(entity_number){ }
	resetEntityAlpha(entity_number){ }
	_0x490861B88F4FD846(p0_number){ }
	_0xCEA7C8E1B48FF68C(p0_number, p1_number){ }
	_0x5C3B791D580E0BC2(entity_number, p1_number){ }
	setEntityAlwaysPrerender(entity_number, toggle_boolean){ }
	setEntityRenderScorched(entity_number, toggle_boolean){ }
	setEntityTrafficlightOverride(entity_number, state_number){ }
	_0x78E8E3A640178255(entity_number){ }
	createModelSwap(x_number, y_number, z_number, radius_number, originalModel_number, newModel_number, p6_boolean){ }
	removeModelSwap(x_number, y_number, z_number, radius_number, originalModel_number, newModel_number, p6_boolean){ }
	createModelHide(x_number, y_number, z_number, radius_number, model_number, p5_boolean){ }
	createModelHideExcludingScriptObjects(x_number, y_number, z_number, radius_number, model_number, p5_boolean){ }
	removeModelHide(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	createForcedObject(x_number, y_number, z_number, p3_number, modelHash_number, p5_boolean){ }
	removeForcedObject(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	setEntityNoCollisionEntity(entity1_number, entity2_number, thisFrameOnly_boolean){ }
	setEntityMotionBlur(entity_number, toggle_boolean){ }
	_0xE12ABE5E3A389A6C(entity_number, p1_boolean){ }
	_0xA80AE305E0A3044F(entity_number, p1_boolean){ }
	_0xDC6F8601FAF2E893(entity_number, toggle_boolean){ }
	_0x2C2E3DC128F44309(entity_number, p1_boolean){ }
	_0x1A092BB0C3808B96(entity_number, p1_boolean){ }
	_0xCE6294A232D03786(p0_number, p1_number){ }
	_0x46F8696933A63C9B(p0_number, p1_number){ }
	_0xB328DCC3A3AA401B(p0_number){ }
	enableEntityUnk(entity_number){ }
	_0xB17BC6453F6CF5AC(p0_number, p1_number){ }
	_0x68B562E124CC0AEF(p0_number, p1_number){ }
	_0x36F32DE87082343E(p0_number, p1_number){ }
	getEntityPickup(entity_number, modelHash_number){ }
	_0xD7B80E7C3BEFC396(p0_number, p1_number){ }
	setDecisionMaker(ped_number, name_number){ }
	clearDecisionMakerEventResponse(name_number, type_number){ }
	blockDecisionMakerEvent(name_number, type_number){ }
	unblockDecisionMakerEvent(name_number, type_number){ }
	addShockingEventAtPosition(type_number, x_number, y_number, z_number, duration_number){ }
	addShockingEventForEntity(type_number, entity_number, duration_number){ }
	isShockingEventInSphere(type_number, x_number, y_number, z_number, radius_number){ }
	removeShockingEvent(event_number){ }
	removeAllShockingEvents(p0_boolean){ }
	removeShockingEventSpawnBlockingAreas(){ }
	suppressShockingEventsNextFrame(){ }
	suppressShockingEventTypeNextFrame(type_number){ }
	suppressAgitationEventsNextFrame(){ }
	getNumDecorations(character_number){ }
	getTattooCollectionData(character_number, index_number, outComponent_number){ }
	initShopPedComponent(outComponent_number){ }
	initShopPedProp(outProp_number){ }
	_0x50F457823CE6EB5F(p0_number, p1_number, p2_number, p3_number){ }
	getNumPropsFromOutfit(character_number, p1_number, p2_number, p3_boolean, p4_number, componentId_number){ }
	getShopPedQueryComponent(componentId_number, outComponent_number){ }
	getShopPedComponent(componentHash_number, outComponent_number){ }
	getShopPedQueryProp(p0_number, p1_number){ }
	getShopPedProp(componentHash_number, outProp_number){ }
	getHashNameForComponent(entity_number, componentId_number, drawableVariant_number, textureVariant_number){ }
	getHashNameForProp(entity_number, componentId_number, propIndex_number, propTextureIndex_number){ }
	getItemVariantsCount(componentHash_number){ }
	getNumDlcPedPropsUnk(propHash_number){ }
	getVariantComponent(componentHash_number, componentId_number, p2_number, p3_number, p4_number){ }
	_0xD81B7F27BC773E66(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	getNumForcedComponents(componentHash_number){ }
	_0x017568A8182D98A6(p0_number){ }
	getForcedComponent(componentHash_number, componentId_number, nameHash_number, enumValue_number, componentType_number){ }
	_0xE1CA84EBF72E691D(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	isTagRestricted(componentHash_number, drawableSlotHash_number, componentId_number){ }
	_0xF3FBE2D50A6A8C28(character_number, p1_boolean){ }
	getShopPedQueryOutfit(p0_number, outfit_number){ }
	getShopPedOutfit(p0_number, p1_number){ }
	getShopPedOutfitLocate(p0_number){ }
	getShopPedOutfitPropVariant(outfit_number, slot_number, item_number){ }
	getShopPedOutfitComponentVariant(outfit_number, slot_number, item_number){ }
	getNumDlcVehicles(){ }
	getDlcVehicleModel(dlcVehicleIndex_number){ }
	getDlcVehicleData(dlcVehicleIndex_number, outData_number){ }
	getDlcVehicleFlags(dlcVehicleIndex_number){ }
	getNumDlcWeapons(){ }
	getDlcWeaponData(dlcWeaponIndex_number, outData_number){ }
	getNumDlcWeaponComponents(dlcWeaponIndex_number){ }
	getDlcWeaponComponentData(dlcWeaponIndex_number, dlcWeapCompIndex_number, ComponentDataPtr_number){ }
	isContentItemLocked(itemHash_number){ }
	isDlcVehicleMod(hash_number){ }
	getDlcVehicleModLockHash(hash_number){ }
	loadContentChangeSetGroup(hash_number){ }
	unloadContentChangeSetGroup(hash_number){ }
	startScriptFire(X_number, Y_number, Z_number, maxChildren_number, isGasFire_boolean){ }
	removeScriptFire(fireHandle_number){ }
	startEntityFire(entity_number){ }
	stopEntityFire(entity_number){ }
	isEntityOnFire(entity_number){ }
	getNumberOfFiresInRange(x_number, y_number, z_number, radius_number){ }
	stopFireInRange(x_number, y_number, z_number, radius_number){ }
	getClosestFirePos(outPosition_setAsUndefined, x_number, y_number, z_number){ }
	addExplosion(x_number, y_number, z_number, explosionType_number, damageScale_number, isAudible_boolean, isInvisible_boolean, cameraShake_number, noDamage_boolean){ }
	addOwnedExplosion(ped_number, x_number, y_number, z_number, explosionType_number, damageScale_number, isAudible_boolean, isInvisible_boolean, cameraShake_number){ }
	addExplosionWithUserVfx(x_number, y_number, z_number, explosionType_number, explosionFx_number, damageScale_number, isAudible_boolean, isInvisible_boolean, cameraShake_number){ }
	isExplosionInArea(explosionType_number, x1_number, y1_number, z1_number, x2_number, y2_number, z2_number){ }
	_0x6070104B699B2EF4(explosionType_number, x1_number, y1_number, z1_number, x2_number, y2_number, z2_number){ }
	isExplosionInSphere(explosionType_number, x_number, y_number, z_number, radius_number){ }
	getEntityInsideExplosionSphere(explosionType_number, x_number, y_number, z_number, radius_number){ }
	isExplosionInAngledArea(explosionType_number, x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, angle_number){ }
	getEntityInsideExplosionArea(explosionType_number, x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, radius_number){ }
	setDebugLinesAndSpheresDrawingActive(enabled_boolean){ }
	drawDebugLine(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number){ }
	drawDebugLineWithTwoColours(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, r1_number, g1_number, b1_number, r2_number, g2_number, b2_number, alpha1_number, alpha2_number){ }
	drawDebugSphere(x_number, y_number, z_number, radius_number, red_number, green_number, blue_number, alpha_number){ }
	drawDebugBox(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number){ }
	drawDebugCross(x_number, y_number, z_number, size_number, red_number, green_number, blue_number, alpha_number){ }
	drawDebugText(text_string, x_number, y_number, z_number, red_number, green_number, blue_number, alpha_number){ }
	drawDebugText2d(text_string, x_number, y_number, z_number, red_number, green_number, blue_number, alpha_number){ }
	drawLine(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, red_number, green_number, blue_number, alpha_number){ }
	drawPoly(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, x3_number, y3_number, z3_number, red_number, green_number, blue_number, alpha_number){ }
	_0x29280002282F1928(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number, p11_number, p12_number, p13_number, p14_number, p15_number, p16_number, p17_number, p18_number, p19_number, p20_number, p21_number, p22_number, p23_number){ }
	_0x736D7AA1B750856B(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number, p11_number, p12_number, p13_number, p14_number, p15_number, p16_number, p17_number, p18_number, p19_number, p20_number, p21_number, p22_number, p23_number, p24_number, p25_number, p26_number, p27_number, p28_number, p29_number, p30_number, p31_number){ }
	drawBox(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, red_number, green_number, blue_number, alpha_number){ }
	_0x23BA6B0C2AD7B0D3(p0_boolean){ }
	_0xC5C8F970D4EDFF71(p0_number){ }
	_0x1DD2139A9A20DCE8(){ }
	_0x90A78ECAA4E78453(){ }
	_0x0A46AF8A78DC5E0A(){ }
	_0x4862437A486F91B0(p0_number, p1_number, p2_number, p3_number){ }
	_0x1670F8D05056F257(p0_number){ }
	_0x7FA5D82B8F58EC06(){ }
	_0x5B0316762AFD4A64(){ }
	_0x346EF3ECAAAB149E(){ }
	_0xA67C35C56EB1BD9D(){ }
	_0x0D6CA79EEEBD8CA3(){ }
	_0xD801CC02177FA3F1(){ }
	_0x1BBC135A4D25EDDE(p0_boolean){ }
	_0xF3F776ADA161E47D(p0_number, p1_number){ }
	_0x3DEC726C25A11BAC(p0_number){ }
	_0x0C0C4E81E1AC60A0(){ }
	_0x759650634F07B6B4(p0_number){ }
	_0xCB82A0BF0E3E3265(p0_number){ }
	_0x6A12D88881435DCA(){ }
	_0x1072F115DAB0717E(p0_boolean, p1_boolean){ }
	getMaximumNumberOfPhotos(){ }
	getMaximumNumberOfCloudPhotos(){ }
	getCurrentNumberOfPhotos(){ }
	_0x2A893980E96B659A(p0_number){ }
	_0xF5BED327CEA362B1(p0_number){ }
	_0x4AF92ACD3141D96C(){ }
	_0xE791DF1F73ED2C8B(p0_number){ }
	_0xEC72C258667BE5EA(p0_number){ }
	returnTwo(p0_number){ }
	drawLightWithRangeAndShadow(x_number, y_number, z_number, r_number, g_number, b_number, range_number, intensity_number, shadow_number){ }
	drawLightWithRange(posX_number, posY_number, posZ_number, colorR_number, colorG_number, colorB_number, range_number, intensity_number){ }
	drawSpotLight(posX_number, posY_number, posZ_number, dirX_number, dirY_number, dirZ_number, colorR_number, colorG_number, colorB_number, distance_number, brightness_number, hardness_number, radius_number, falloff_number){ }
	drawSpotLightWithShadow(posX_number, posY_number, posZ_number, dirX_number, dirY_number, dirZ_number, colorR_number, colorG_number, colorB_number, distance_number, brightness_number, roundness_number, radius_number, falloff_number, shadowId_number){ }
	_0xC9B18B4619F48F7B(p0_number){ }
	updateEntityShitOrSomething(object_number){ }
	_0x9641588DAB93B4B5(p0_number){ }
	_0x393BD2275CEB7793(){ }
	drawMarker(type_number, posX_number, posY_number, posZ_number, dirX_number, dirY_number, dirZ_number, rotX_number, rotY_number, rotZ_number, scaleX_number, scaleY_number, scaleZ_number, red_number, green_number, blue_number, alpha_number, bobUpAndDown_boolean, faceCamera_boolean, p19_number, rotate_boolean, textureDict_string, textureName_string, drawOnEnts_boolean){ }
	_0xE82728F0DE75D13A(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number, p11_number, p12_number, p13_number, p14_number, p15_number, p16_number, p17_number, p18_number, p19_number, p20_number, p21_number, p22_number, p23_number, p24_number, p25_number){ }
	_0x799017F9E3B10112(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number){ }
	createCheckpoint(type_number, posX1_number, posY1_number, posZ1_number, posX2_number, posY2_number, posZ2_number, radius_number, red_number, green_number, blue_number, alpha_number, reserved_number){ }
	setCheckpointScale(checkpoint_number, p0_number){ }
	_0x44621483FF966526(p0_number, p1_number){ }
	setCheckpointCylinderHeight(checkpoint_number, nearHeight_number, farHeight_number, radius_number){ }
	setCheckpointRgba(checkpoint_number, red_number, green_number, blue_number, alpha_number){ }
	setCheckpointIconRgba(checkpoint_number, red_number, green_number, blue_number, alpha_number){ }
	_0xF51D36185993515D(checkpoint_number, posX_number, posY_number, posZ_number, unkX_number, unkY_number, unkZ_number){ }
	_0x615D3925E87A3B26(checkpoint_number){ }
	_0xDB1EA9411C8911EC(p0_number){ }
	_0x3C788E7F6438754D(p0_number, p1_number, p2_number, p3_number){ }
	deleteCheckpoint(checkpoint_number){ }
	_0x22A249A53034450A(p0_boolean){ }
	_0xDC459CFA0CCE245B(toggle_boolean){ }
	requestStreamedTextureDict(textureDict_string, p1_boolean){ }
	hasStreamedTextureDictLoaded(textureDict_string){ }
	setStreamedTextureDictAsNoLongerNeeded(textureDict_string){ }
	drawRect(x_number, y_number, width_number, height_number, r_number, g_number, b_number, a_number, p8_boolean){ }
	setScriptGfxDrawBehindPausemenu(toggle_boolean){ }
	setScriptGfxDrawOrder(drawOrder_number){ }
	setScriptGfxAlign(x_number, y_number){ }
	resetScriptGfxAlign(){ }
	setScriptGfxAlignParams(x_number, y_number, p2_number, p3_number){ }
	getScriptGfxPosition(p0_number, p1_number, p2_number, p3_number){ }
	getSafeZoneSize(){ }
	drawSprite(textureDict_string, textureName_string, screenX_number, screenY_number, width_number, height_number, heading_number, red_number, green_number, blue_number, alpha_number, p11_boolean){ }
	_0x2D3B147AFAD49DE0(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number, p11_number){ }
	drawInteractiveSprite(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number){ }
	addEntityIcon(entity_number, icon_string){ }
	setEntityIconVisibility(entity_number, toggle_boolean){ }
	setEntityIconColor(entity_number, red_number, green_number, blue_number, alpha_number){ }
	setDrawOrigin(x_number, y_number, z_number, p3_number){ }
	clearDrawOrigin(){ }
	setBinkMovieRequested(name_string){ }
	playBinkMovie(binkMovie_number){ }
	stopBinkMovie(binkMovie_number){ }
	releaseBinkMovie(binkMovie_number){ }
	drawBinkMovie(binkMovie_number, p1_number, p2_number, p3_number, p4_number, p5_number, r_number, g_number, b_number, a_number){ }
	setBinkMovieProgress(binkMovie_number, progress_number){ }
	setBinkMovieUnk(binkMovie_number, value_number){ }
	attachTvAudioToEntity(entity_number){ }
	setTvAudioFrontend(toggle_boolean){ }
	_0x6805D58CAA427B72(p0_number, p1_number){ }
	loadMovieMeshSet(movieMeshSetName_string){ }
	releaseMovieMeshSet(movieMeshSet_number){ }
	_0x9B6E70C5CEEF4EEB(p0_number){ }
	getScreenResolution(x_number, y_number){ }
	getActiveScreenResolution(x_number, y_number){ }
	getAspectRatio(b_boolean){ }
	_0xB2EBE8CBC58B90E9(){ }
	getIsWidescreen(){ }
	getIsHidef(){ }
	_0xEFABC7722293DA7C(){ }
	setNightvision(toggle_boolean){ }
	getRequestingnightvision(){ }
	getUsingnightvision(){ }
	_0xEF398BEEE4EF45F9(p0_boolean){ }
	_0x814AF7DCAACC597B(p0_number){ }
	_0x43FA7CBE20DAB219(p0_number){ }
	setNoiseoveride(toggle_boolean){ }
	setNoisinessoveride(value_number){ }
	getScreenCoordFromWorldCoord(worldX_number, worldY_number, worldZ_number, screenX_number, screenY_number){ }
	getTextureResolution(textureDict_string, textureName_string){ }
	_0x95EB5E34F821BABE(p0_number, p1_number, p2_number){ }
	_0xE2892E7E55D7073A(p0_number){ }
	setFlash(p0_number, p1_number, fadeIn_number, duration_number, fadeOut_number){ }
	disableOcclusionThisFrame(){ }
	setArtificialLightsState(state_boolean){ }
	_0xC35A6D07C93802B2(){ }
	createTrackedPoint(){ }
	setTrackedPointInfo(point_number, x_number, y_number, z_number, radius_number){ }
	isTrackedPointVisible(point_number){ }
	destroyTrackedPoint(point_number){ }
	_0xBE197EAA669238F4(p0_number, p1_number, p2_number, p3_number){ }
	_0x61F95E5BB3E0A8C6(p0_number){ }
	_0xAE51BC858F32BA66(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	_0x649C97D52332341A(p0_number){ }
	_0x2C42340F916C5930(p0_number){ }
	_0x14FC5833464340A8(){ }
	_0x0218BA067D249DEA(){ }
	_0x1612C45F9E3E0D44(){ }
	_0x5DEBD9C4DC995692(){ }
	_0xAAE9BE70EC7C69AB(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number){ }
	_0x6D955F6A9E0295B1(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	_0x302C91AB2D477F7E(){ }
	_0x03FC694AE06C5A20(){ }
	_0xD2936CAB8B58FCBD(p0_number, p1_boolean, p2_number, p3_number, p4_number, p5_number, p6_boolean, p7_number){ }
	_0x5F0F3F56635809EF(p0_number){ }
	_0x5E9DAF5A20F15908(p0_number){ }
	_0x36F6626459D91457(p0_number){ }
	_0x259BA6D4E6F808F1(p0_number){ }
	setFarShadowsSuppressed(toggle_boolean){ }
	_0x25FC3E33A31AD0C9(p0_boolean){ }
	cascadeshadowsSetType(type_string){ }
	cascadeshadowsResetType(){ }
	_0x6DDBF9DFFC4AC080(p0_boolean){ }
	_0xD39D13C9FEBF0511(p0_boolean){ }
	_0x02AC28F3A01FA04A(p0_number){ }
	_0x0AE73D8DF3A762B2(p0_boolean){ }
	_0xCA465D9CC0D231BA(p0_number){ }
	golfTrailSetEnabled(toggle_boolean){ }
	golfTrailSetPath(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_boolean){ }
	golfTrailSetRadius(p0_number, p1_number, p2_number){ }
	golfTrailSetColour(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number, p11_number){ }
	golfTrailSetTessellation(p0_number, p1_number){ }
	_0xC0416B061F2B7E5E(p0_boolean){ }
	_0xB1BB03742917A5D6(type_number, xPos_number, yPos_number, zPos_number, p4_number, red_number, green_number, blue_number, alpha_number){ }
	golfTrailSetShaderParams(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	golfTrailSetFacing(p0_boolean){ }
	_0xA4819F5E23E2FFAD(){ }
	_0xA4664972A9B8F8BA(p0_number){ }
	setSeethrough(toggle_boolean){ }
	getUsingseethrough(){ }
	seethroughReset(){ }
	seethroughSetFadeStartDistance(distance_number){ }
	seethroughSetFadeEndDistance(distance_number){ }
	seethroughGetMaxThickness(){ }
	seethroughSetMaxThickness(thickness_number){ }
	seethroughSetNoiseAmountMin(amount_number){ }
	seethroughSetNoiseAmountMax(amount_number){ }
	seethroughSetHiLightIntensity(intensity_number){ }
	seethroughSetHiLightNoise(noise_number){ }
	seethroughSetHeatscale(index_number, heatScale_number){ }
	seethroughSetColorNear(red_number, green_number, blue_number){ }
	_0xB3C641F3630BF6DA(p0_number){ }
	_0xE59343E9E96529E7(){ }
	_0x6A51F78772175A51(toggle_boolean){ }
	_0xE63D7C6EECECB66B(toggle_boolean){ }
	_0xE3E2C1B4C59DBC77(unk_number){ }
	transitionToBlurred(transitionTime_number){ }
	transitionFromBlurred(transitionTime_number){ }
	_0xDE81239437E8C5A8(){ }
	_0x5CCABFFCA31DDE33(){ }
	_0x7B226C785A52A0A9(){ }
	togglePausedRenderphases(toggle_boolean){ }
	getTogglePausedRenderphasesStatus(){ }
	_0xE1C8709406F2C41C(){ }
	_0x851CD923176EBA7C(){ }
	_0xBA3D65906822BED5(p0_boolean, p1_boolean, p2_number, p3_number, p4_number, p5_number){ }
	_0xB569F41F3E7E83A4(p0_number){ }
	_0x7AC24EAB6D74118D(p0_boolean){ }
	_0xBCEDB009461DA156(){ }
	_0x27FEB5254759CDE3(textureDict_string, p1_boolean){ }
	startParticleFxNonLoopedAtCoord(effectName_string, xPos_number, yPos_number, zPos_number, xRot_number, yRot_number, zRot_number, scale_number, xAxis_boolean, yAxis_boolean, zAxis_boolean){ }
	startNetworkedParticleFxNonLoopedAtCoord(effectName_string, xPos_number, yPos_number, zPos_number, xRot_number, yRot_number, zRot_number, scale_number, xAxis_boolean, yAxis_boolean, zAxis_boolean, p11_boolean){ }
	startParticleFxNonLoopedOnPedBone(effectName_string, ped_number, offsetX_number, offsetY_number, offsetZ_number, rotX_number, rotY_number, rotZ_number, boneIndex_number, scale_number, axisX_boolean, axisY_boolean, axisZ_boolean){ }
	startNetworkedParticleFxNonLoopedOnPedBone(effectName_string, ped_number, offsetX_number, offsetY_number, offsetZ_number, rotX_number, rotY_number, rotZ_number, boneIndex_number, scale_number, axisX_boolean, axisY_boolean, axisZ_boolean){ }
	startParticleFxNonLoopedOnEntity(effectName_string, entity_number, offsetX_number, offsetY_number, offsetZ_number, rotX_number, rotY_number, rotZ_number, scale_number, axisX_boolean, axisY_boolean, axisZ_boolean){ }
	startNetworkedParticleFxNonLoopedOnEntity(effectName_string, entity_number, offsetX_number, offsetY_number, offsetZ_number, rotX_number, rotY_number, rotZ_number, scale_number, axisX_boolean, axisY_boolean, axisZ_boolean){ }
	setParticleFxNonLoopedColour(r_number, g_number, b_number){ }
	setParticleFxNonLoopedAlpha(alpha_number){ }
	_0x8CDE909A0370BB3A(toggle_boolean){ }
	startParticleFxLoopedAtCoord(effectName_string, x_number, y_number, z_number, xRot_number, yRot_number, zRot_number, scale_number, xAxis_boolean, yAxis_boolean, zAxis_boolean, p11_boolean){ }
	startParticleFxLoopedOnPedBone(effectName_string, ped_number, xOffset_number, yOffset_number, zOffset_number, xRot_number, yRot_number, zRot_number, boneIndex_number, scale_number, xAxis_boolean, yAxis_boolean, zAxis_boolean){ }
	startParticleFxLoopedOnEntity(effectName_string, entity_number, xOffset_number, yOffset_number, zOffset_number, xRot_number, yRot_number, zRot_number, scale_number, xAxis_boolean, yAxis_boolean, zAxis_boolean){ }
	startParticleFxLoopedOnEntityBone(effectName_string, entity_number, xOffset_number, yOffset_number, zOffset_number, xRot_number, yRot_number, zRot_number, boneIndex_number, scale_number, xAxis_boolean, yAxis_boolean, zAxis_boolean){ }
	startNetworkedParticleFxLoopedOnEntity(effectName_string, entity_number, xOffset_number, yOffset_number, zOffset_number, xRot_number, yRot_number, zRot_number, scale_number, xAxis_boolean, yAxis_boolean, zAxis_boolean, p12_number, p13_number, p14_number, p15_number){ }
	startNetworkedParticleFxLoopedOnEntityBone(effectName_string, entity_number, xOffset_number, yOffset_number, zOffset_number, xRot_number, yRot_number, zRot_number, boneIndex_number, scale_number, xAxis_boolean, yAxis_boolean, zAxis_boolean, p13_number, p14_number, p15_number, p16_number){ }
	stopParticleFxLooped(ptfxHandle_number, p1_boolean){ }
	removeParticleFx(ptfxHandle_number, p1_boolean){ }
	removeParticleFxFromEntity(entity_number){ }
	removeParticleFxInRange(X_number, Y_number, Z_number, radius_number){ }
	_0xBA0127DA25FD54C9(p0_number, p1_number){ }
	doesParticleFxLoopedExist(ptfxHandle_number){ }
	setParticleFxLoopedOffsets(ptfxHandle_number, x_number, y_number, z_number, rotX_number, rotY_number, rotZ_number){ }
	setParticleFxLoopedEvolution(ptfxHandle_number, propertyName_string, amount_number, noNetwork_boolean){ }
	setParticleFxLoopedColour(ptfxHandle_number, r_number, g_number, b_number, p4_boolean){ }
	setParticleFxLoopedAlpha(ptfxHandle_number, alpha_number){ }
	setParticleFxLoopedScale(ptfxHandle_number, scale_number){ }
	setParticleFxLoopedFarClipDist(ptfxHandle_number, range_number){ }
	setParticleFxCamInsideVehicle(p0_boolean){ }
	setParticleFxCamInsideNonplayerVehicle(vehicle_number, p1_boolean){ }
	setParticleFxShootoutBoat(p0_number){ }
	_0x2A251AA48B2B46DB(){ }
	_0x908311265D42A820(p0_number){ }
	_0x5F6DF3D92271E8A1(toggle_boolean){ }
	_0x2B40A97646381508(p0_number){ }
	enableClownBloodVfx(toggle_boolean){ }
	enableAlienBloodVfx(toggle_boolean){ }
	_0x27E32866E9A5C416(p0_number){ }
	_0xBB90E12CAC1DAB25(p0_number){ }
	_0xCA4AE345A153D573(p0_boolean){ }
	_0x54E22EA2C1956A8D(p0_number){ }
	_0x949F397A288B28B3(p0_number){ }
	_0xBA3D194057C79A7B(p0_string){ }
	_0x5DBF05DB5926D089(p0_number){ }
	_0x9B079E5221D984D3(p0_boolean){ }
	useParticleFxAsset(name_string){ }
	setParticleFxOverride(oldAsset_string, newAsset_string){ }
	resetParticleFxOverride(name_string){ }
	_0xA46B73FAA3460AE1(p0_boolean){ }
	_0xF78B803082D4386F(p0_number){ }
	washDecalsInRange(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	washDecalsFromVehicle(vehicle_number, p1_number){ }
	fadeDecalsInRange(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	removeDecalsInRange(x_number, y_number, z_number, range_number){ }
	removeDecalsFromObject(obj_number){ }
	removeDecalsFromObjectFacing(obj_number, x_number, y_number, z_number){ }
	removeDecalsFromVehicle(vehicle_number){ }
	addDecal(decalType_number, posX_number, posY_number, posZ_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, width_number, height_number, rCoef_number, gCoef_number, bCoef_number, opacity_number, timeout_number, p17_boolean, p18_boolean, p19_boolean){ }
	addPetrolDecal(x_number, y_number, z_number, groundLvl_number, width_number, transparency_number){ }
	_0x99AC7F0D8B9C893D(p0_number){ }
	_0x967278682CB6967A(x_number, y_number, z_number, p3_number){ }
	_0x0A123435A26C36CD(){ }
	removeDecal(decal_number){ }
	isDecalAlive(decal_number){ }
	getDecalWashLevel(decal_number){ }
	_0xD9454B5752C857DC(){ }
	_0x27CFB1B1E078CB2D(){ }
	_0x4B5CFC83122DF602(){ }
	getIsPetrolDecalInRange(xCoord_number, yCoord_number, zCoord_number, radius_number){ }
	overrideDecalTexture(decalType_number, textureDict_string, textureName_string){ }
	undoDecalTextureOverride(decalType_number){ }
	moveVehicleDecals(p0_number, p1_number){ }
	addVehicleCrewEmblem(vehicle_number, ped_number, boneIndex_number, x1_number, x2_number, x3_number, y1_number, y2_number, y3_number, z1_number, z2_number, z3_number, scale_number, p13_number, alpha_number){ }
	_0x82ACC484FFA3B05F(p0_number){ }
	removeVehicleCrewEmblem(vehicle_number, p1_number){ }
	getVehicleCrewEmblemRequestState(vehicle_number, p1_number){ }
	doesVehicleHaveCrewEmblem(vehicle_number, p1_number){ }
	_0x0E4299C549F0D1F1(toggle_boolean){ }
	_0x02369D5C8A51FDCF(toggle_boolean){ }
	_0x46D1A61A21F566FC(p0_number){ }
	overrideInteriorSmokeName(name_string){ }
	overrideInteriorSmokeLevel(level_number){ }
	overrideInteriorSmokeEnd(){ }
	_0xA44FF770DFBC5DAE(){ }
	disableVehicleDistantlights(toggle_boolean){ }
	_0x03300B57FCAC6DDB(p0_boolean){ }
	_0x98EDF76A7271E4F2(){ }
	setForcePedFootstepsTracks(toggle_boolean){ }
	setForceVehicleTrails(toggle_boolean){ }
	_0xEFD97FF47B745B8D(p0_number){ }
	presetInteriorAmbientCache(timecycleModifierName_string){ }
	setTimecycleModifier(modifierName_string){ }
	setTimecycleModifierStrength(strength_number){ }
	setTransitionTimecycleModifier(modifierName_string, transition_number){ }
	_0x1CBA05AE7BD7EE05(p0_number){ }
	clearTimecycleModifier(){ }
	getTimecycleModifierIndex(){ }
	getTimecycleTransitionModifierIndex(){ }
	_0x98D18905BF723B99(){ }
	pushTimecycleModifier(){ }
	popTimecycleModifier(){ }
	setCurrentPlayerTcmodifier(modifierName_string){ }
	setPlayerTcmodifierTransition(value_number){ }
	setNextPlayerTcmodifier(modifierName_string){ }
	addTcmodifierOverride(modifierName1_string, modifierName2_string){ }
	_0x15E33297C3E8DC60(p0_string){ }
	setExtraTimecycleModifier(modifierName_string){ }
	clearExtraTimecycleModifier(){ }
	getExtraTimecycleModifierIndex(){ }
	setExtraTimecycleModifierStrength(strength_number){ }
	resetExtraTimecycleModifierStrength(){ }
	requestScaleformMovie(scaleformName_string){ }
	requestScaleformMovieInstance(scaleformName_string){ }
	requestScaleformMovieInteractive(scaleformName_string){ }
	hasScaleformMovieLoaded(scaleformHandle_number){ }
	_0x2FCB133CA50A49EB(p0_number){ }
	_0x86255B1FC929E33E(p0_number){ }
	hasScaleformMovieFilenameLoaded(scaleformName_string){ }
	hasScaleformContainerMovieLoadedIntoParent(scaleformHandle_number){ }
	setScaleformMovieAsNoLongerNeeded(scaleformHandle_number){ }
	setScaleformMovieToUseSystemTime(scaleform_number, toggle_boolean){ }
	_0x32F34FF7F617643B(p0_number, p1_number){ }
	_0xE6A9F00D4240B519(p0_number, p1_number){ }
	drawScaleformMovie(scaleformHandle_number, x_number, y_number, width_number, height_number, red_number, green_number, blue_number, alpha_number, unk_number){ }
	drawScaleformMovieFullscreen(scaleform_number, red_number, green_number, blue_number, alpha_number, unk_number){ }
	drawScaleformMovieFullscreenMasked(scaleform1_number, scaleform2_number, red_number, green_number, blue_number, alpha_number){ }
	drawScaleformMovie3d(scaleform_number, posX_number, posY_number, posZ_number, rotX_number, rotY_number, rotZ_number, p7_number, p8_number, p9_number, scaleX_number, scaleY_number, scaleZ_number, p13_number){ }
	drawScaleformMovie3dSolid(scaleform_number, posX_number, posY_number, posZ_number, rotX_number, rotY_number, rotZ_number, p7_number, p8_number, p9_number, scaleX_number, scaleY_number, scaleZ_number, p13_number){ }
	callScaleformMovieMethod(scaleform_number, method_string){ }
	callScaleformMovieMethodWithNumber(scaleform_number, methodName_string, param1_number, param2_number, param3_number, param4_number, param5_number){ }
	callScaleformMovieMethodWithString(scaleform_number, methodName_string, param1_string, param2_string, param3_string, param4_string, param5_string){ }
	callScaleformMovieMethodWithNumberAndString(scaleform_number, methodName_string, floatParam1_number, floatParam2_number, floatParam3_number, floatParam4_number, floatParam5_number, stringParam1_string, stringParam2_string, stringParam3_string, stringParam4_string, stringParam5_string){ }
	beginScaleformScriptHudMovieMethod(hudComponent_number, methodName_string){ }
	beginScaleformMovieMethod(scaleform_number, methodName_string){ }
	beginScaleformMovieMethodOnFrontend(methodName_string){ }
	beginScaleformMovieMethodOnFrontendHeader(methodName_string){ }
	endScaleformMovieMethod(){ }
	endScaleformMovieMethodReturnValue(){ }
	isScaleformMovieMethodReturnValueReady(returnValueData_number){ }
	getScaleformMovieMethodReturnValueInt(returnValueData_number){ }
	getScaleformMovieMethodReturnValueBool(returnValueData_number){ }
	getScaleformMovieMethodReturnValueString(returnValueData_number){ }
	scaleformMovieMethodAddParamInt(value_number){ }
	scaleformMovieMethodAddParamFloat(value_number){ }
	scaleformMovieMethodAddParamBool(value_boolean){ }
	beginTextCommandScaleformString(componentType_string){ }
	endTextCommandScaleformString(){ }
	endTextCommandScaleformString2(){ }
	scaleformMovieMethodAddParamTextureNameString2(string_string){ }
	scaleformMovieMethodAddParamTextureNameString(string_string){ }
	scaleformMovieMethodAddParamPlayerNameString(string_string){ }
	_0x5E657EF1099EDD65(p0_number){ }
	scaleformMovieMethodAddParamIntString(value_number){ }
	requestScaleformScriptHudMovie(hudComponent_number){ }
	hasScaleformScriptHudMovieLoaded(hudComponent_number){ }
	removeScaleformScriptHudMovie(hudComponent_number){ }
	_0xD1C7CB175E012964(scaleformHandle_number){ }
	setTvChannel(channel_number){ }
	getTvChannel(){ }
	setTvVolume(volume_number){ }
	getTvVolume(){ }
	drawTvChannel(xPos_number, yPos_number, xScale_number, yScale_number, rotation_number, red_number, green_number, blue_number, alpha_number){ }
	setTvChannelPlaylist(tvChannel_number, playlistName_string, restart_boolean){ }
	setTvChannelPlaylistAtHour(tvChannel_number, playlistName_string, hour_number){ }
	clearTvChannelPlaylist(tvChannel_number){ }
	isPlaylistUnk(tvChannel_number, p1_number){ }
	isTvPlaylistItemPlaying(videoCliphash_number){ }
	enableMovieKeyframeWait(toggle_boolean){ }
	_0xD1C55B110E4DF534(p0_number){ }
	_0x30432A0118736E00(){ }
	enableMovieSubtitles(toggle_boolean){ }
	ui3dsceneIsAvailable(){ }
	ui3dscenePushPreset(presetName_string){ }
	_0x98C4FE6EC34154CA(presetName_string, ped_number, p2_number, posX_number, posY_number, posZ_number){ }
	_0x7A42B2E236E71415(){ }
	_0x108BE26959A9D9BB(toggle_boolean){ }
	terraingridActivate(toggle_boolean){ }
	terraingridSetParams(x_number, y_number, z_number, p3_number, rotation_number, p5_number, width_number, height_number, p8_number, scale_number, glowIntensity_number, normalHeight_number, heightDiff_number){ }
	terraingridSetColours(lowR_number, lowG_number, lowB_number, lowAlpha_number, r_number, g_number, b_number, alpha_number, highR_number, highG_number, highB_number, highAlpha_number){ }
	animpostfxPlay(effectName_string, duration_number, looped_boolean){ }
	animpostfxStop(effectName_string){ }
	animpostfxGetUnk(effectName_string){ }
	animpostfxIsRunning(effectName_string){ }
	animpostfxStopAll(){ }
	animpostfxStopAndDoUnk(effectName_string){ }
	beginTextCommandBusyspinnerOn(string_string){ }
	endTextCommandBusyspinnerOn(busySpinnerType_number){ }
	busyspinnerOff(){ }
	preloadBusyspinner(){ }
	busyspinnerIsOn(){ }
	busyspinnerIsDisplaying(){ }
	_0x9245E81072704B8A(p0_boolean){ }
	setMouseCursorActiveThisFrame(){ }
	setMouseCursorSprite(spriteId_number){ }
	_0x98215325A695E78A(p0_boolean){ }
	_0x3D9ACB1EB139E702(){ }
	_0x632B2940C67F4EA9(scaleformHandle_number, p1_number, p2_number, p3_number){ }
	_0x6F1554B0CC2089FA(p0_boolean){ }
	clearNotificationsPos(pos_number){ }
	_0x32888337579A5970(){ }
	hideHudNotificationsThisFrame(){ }
	_0x15CFA549788D35EF(){ }
	_0xA8FDB297A8D25FBA(){ }
	removeNotification(notificationId_number){ }
	_0xA13C11E1B5C06BFC(){ }
	_0x583049884A2EEE3C(){ }
	_0xFDB423997FA30340(){ }
	_0xE1CD1E48E025E661(){ }
	_0xA9CBFD40B3FA3010(){ }
	_0xD4438C0564490E63(){ }
	_0xB695E2CD0A2DA9EE(){ }
	getCurrentNotification(){ }
	_0x56C8B608CFD49854(){ }
	_0xADED7F5748ACAFE6(){ }
	setNotificationBackgroundColor(hudColorIndex_number){ }
	setNotificationFlashColor(red_number, green_number, blue_number, alpha_number){ }
	_0x17AD8C9706BDD88A(p0_number){ }
	_0x4A0C7C9BB10ABB36(p0_boolean){ }
	_0xFDD85225B2DEA55E(){ }
	_0xFDEC055AB549E328(){ }
	_0x80FE4F3AB4E1B62A(){ }
	_0xBAE4F9B97CD43B30(p0_boolean){ }
	_0x317EBA71D7543F52(p0_number, p1_number, p2_number, p3_number){ }
	setNotificationTextEntry(text_string){ }
	setNotificationMessage(picName1_string, picName2_string, flash_boolean, iconType_number, sender_string, subject_string, p6_string){ }
	setNotificationMessage2(picName1_string, picName2_string, flash_boolean, iconType_number, sender_string, subject_string){ }
	setNotificationMessage3(picName1_string, picName2_string, flash_boolean, iconType_number, sender_string, subject_string){ }
	setNotificationMessage4(picName1_string, picName2_string, flash_boolean, iconType_number, sender_string, subject_string, duration_number){ }
	setNotificationMessageClanTag(picName1_string, picName2_string, flash_boolean, iconType_number, sender_string, subject_string, duration_number, clanTag_string){ }
	setNotificationMessageClanTag2(picName1_string, picName2_string, flash_boolean, iconType1_number, sender_string, subject_string, duration_number, clanTag_string, iconType2_number, p9_number){ }
	drawNotification(blink_boolean, p1_boolean){ }
	drawNotification2(blink_boolean, p1_boolean){ }
	drawNotification3(blink_boolean, p1_boolean){ }
	drawNotificationAward(p0_string, p1_string, p2_number, p3_number, p4_string){ }
	drawNotificationApartmentInvite(p0_boolean, p1_boolean, p2_number, p3_number, isLeader_boolean, unk0_boolean, clanDesc_number, R_number, G_number, B_number){ }
	drawNotificationClanInvite(p0_boolean, p1_boolean, p2_number, p3_number, isLeader_boolean, unk0_boolean, clanDesc_number, playerName_string, R_number, G_number, B_number){ }
	_0x33EE12743CCD6343(p0_number, p1_number, p2_number){ }
	_0xC8F3AAF93D0600BF(p0_number, p1_number, p2_number, p3_number){ }
	_0x7AE0589093A2E088(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	drawNotification4(blink_boolean, p1_boolean){ }
	_0x8EFCCF6EC66D85E4(p0_number, p1_number, p2_number, p3_boolean, p4_boolean){ }
	_0xB6871B0555B02996(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number){ }
	drawNotificationWithIcon(type_number, image_number, text_string){ }
	drawNotificationWithButton(type_number, button_string, text_string){ }
	beginTextCommandPrint(GxtEntry_string){ }
	endTextCommandPrint(duration_number, drawImmediately_boolean){ }
	beginTextCommandIsMessageDisplayed(text_string){ }
	endTextCommandIsMessageDisplayed(){ }
	beginTextCommandDisplayText(text_string){ }
	endTextCommandDisplayText(x_number, y_number, p2_number){ }
	beginTextCommandGetWidth(text_string){ }
	endTextCommandGetWidth(p0_boolean){ }
	beginTextCommandLineCount(entry_string){ }
	endTextCommandLineCount(x_number, y_number){ }
	beginTextCommandDisplayHelp(inputType_string){ }
	endTextCommandDisplayHelp(p0_number, loop_boolean, beep_boolean, shape_number){ }
	beginTextCommandIsThisHelpMessageBeingDisplayed(labelName_string){ }
	endTextCommandIsThisHelpMessageBeingDisplayed(p0_number){ }
	beginTextCommandSetBlipName(gxtentry_string){ }
	endTextCommandSetBlipName(blip_number){ }
	beginTextCommandObjective(p0_string){ }
	endTextCommandObjective(p0_boolean){ }
	beginTextCommandClearPrint(text_string){ }
	endTextCommandClearPrint(){ }
	beginTextCommandOverrideButtonText(gxtEntry_string){ }
	endTextCommandOverrideButtonText(p0_number){ }
	addTextComponentInteger(value_number){ }
	addTextComponentFloat(value_number, decimalPlaces_number){ }
	addTextComponentSubstringTextLabel(labelName_string){ }
	addTextComponentSubstringTextLabelHashKey(gxtEntryHash_number){ }
	addTextComponentSubstringBlipName(blip_number){ }
	addTextComponentSubstringPlayerName(text_string){ }
	addTextComponentSubstringTime(timestamp_number, flags_number){ }
	addTextComponentFormattedInteger(value_number, commaSeparated_boolean){ }
	addTextComponentSubstringPhoneNumber(p0_string, p1_number){ }
	addTextComponentSubstringWebsite(website_string){ }
	addTextComponentSubstringUnk(p0_string){ }
	setColourOfNextTextComponent(hudColor_number){ }
	getTextSubstring(text_string, position_number, length_number){ }
	getTextSubstringSafe(text_string, position_number, length_number, maxLength_number){ }
	getTextSubstringSlice(text_string, startPosition_number, endPosition_number){ }
	getLabelText(labelName_string){ }
	clearPrints(){ }
	clearBrief(){ }
	clearAllHelpMessages(){ }
	clearThisPrint(p0_string){ }
	clearSmallPrints(){ }
	doesTextBlockExist(gxt_string){ }
	requestAdditionalText(gxt_string, slot_number){ }
	requestAdditionalTextForDlc(gxt_string, slot_number){ }
	hasAdditionalTextLoaded(slot_number){ }
	clearAdditionalText(p0_number, p1_boolean){ }
	isStreamingAdditionalText(p0_number){ }
	hasThisAdditionalTextLoaded(gxt_string, slot_number){ }
	isMessageBeingDisplayed(){ }
	doesTextLabelExist(gxt_string){ }
	_0x98C3CF913D895111(string_string, length_number){ }
	getLengthOfStringWithThisTextLabel(gxt_string){ }
	getLengthOfLiteralString(string_string){ }
	getLengthOfLiteralStringInBytes(string_string){ }
	getStreetNameFromHashKey(hash_number){ }
	isHudPreferenceSwitchedOn(){ }
	isRadarPreferenceSwitchedOn(){ }
	isSubtitlePreferenceSwitchedOn(){ }
	displayHud(toggle_boolean){ }
	_0x7669F9E39DC17063(){ }
	displayHudWhenPausedThisFrame(){ }
	displayRadar(toggle_boolean){ }
	_0xCD74233600C4EA6B(toggle_boolean){ }
	_0xC2D2AD9EAAE265B8(){ }
	isHudHidden(){ }
	isRadarHidden(){ }
	isMinimapRendering(){ }
	_0x0C698D8F099174C7(p0_number){ }
	_0xE4C3B169876D33D7(p0_number){ }
	_0xEB81A3DADD503187(){ }
	setBlipRoute(blip_number, enabled_boolean){ }
	clearAllBlipRoutes(){ }
	setBlipRouteColour(blip_number, colour_number){ }
	_0x2790F4B17D098E26(toggle_boolean){ }
	_0x6CDD58146A436083(p0_number){ }
	_0xD1942374085C8469(p0_number){ }
	addNextMessageToPreviousBriefs(p0_boolean){ }
	_0x57D760D55F54E071(p0_number){ }
	setRadarZoomPrecise(zoom_number){ }
	setRadarZoom(zoomLevel_number){ }
	setRadarZoomToBlip(blip_number, zoom_number){ }
	setRadarZoomToDistance(zoom_number){ }
	_0xD2049635DEB9C375(){ }
	getHudColour(hudColorIndex_number, r_number, g_number, b_number, a_number){ }
	setScriptVariableHudColour(r_number, g_number, b_number, a_number){ }
	setScriptVariable2HudColour(r_number, g_number, b_number, a_number){ }
	replaceHudColour(hudColorIndex_number, hudColorIndex2_number){ }
	replaceHudColourWithRgba(hudColorIndex_number, r_number, g_number, b_number, a_number){ }
	setAbilityBarVisibilityInMultiplayer(visible_boolean){ }
	flashAbilityBar(millisecondsToFlash_number){ }
	setAbilityBarValue(p0_number, p1_number){ }
	flashWantedDisplay(p0_boolean){ }
	_0xBA8D65C1C65702E5(toggle_boolean){ }
	getTextScaleHeight(size_number, font_number){ }
	setTextScale(scale_number, size_number){ }
	setTextColour(red_number, green_number, blue_number, alpha_number){ }
	setTextCentre(align_boolean){ }
	setTextRightJustify(toggle_boolean){ }
	setTextJustification(justifyType_number){ }
	setTextWrap(start_number, end_number){ }
	setTextLeading(p0_number){ }
	setTextProportional(p0_boolean){ }
	setTextFont(fontType_number){ }
	setTextDropShadow(){ }
	setTextDropshadow(distance_number, r_number, g_number, b_number, a_number){ }
	setTextOutline(){ }
	setTextEdge(p0_number, r_number, g_number, b_number, a_number){ }
	setTextRenderId(renderId_number){ }
	getDefaultScriptRendertargetRenderId(){ }
	registerNamedRendertarget(name_string, p1_boolean){ }
	isNamedRendertargetRegistered(name_string){ }
	releaseNamedRendertarget(name_string){ }
	linkNamedRendertarget(modelHash_number){ }
	getNamedRendertargetRenderId(name_string){ }
	isNamedRendertargetLinked(modelHash_number){ }
	clearHelp(toggle_boolean){ }
	isHelpMessageOnScreen(){ }
	_0x214CD562A939246A(){ }
	isHelpMessageBeingDisplayed(){ }
	isHelpMessageFadingOut(){ }
	_0xB9C362BABECDDC7A(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	_0x4A9923385BDB9DAD(){ }
	getBlipInfoIdIterator(){ }
	getNumberOfActiveBlips(){ }
	getNextBlipInfoId(blipSprite_number){ }
	getFirstBlipInfoId(blipSprite_number){ }
	_0xD484BF71050CA1EE(p0_number){ }
	getBlipInfoIdCoord(blip_number){ }
	getBlipInfoIdDisplay(blip_number){ }
	getBlipInfoIdType(blip_number){ }
	getBlipInfoIdEntityIndex(blip_number){ }
	getBlipInfoIdPickupIndex(blip_number){ }
	getBlipFromEntity(entity_number){ }
	addBlipForRadius(posX_number, posY_number, posZ_number, radius_number){ }
	addBlipForArea(x_number, y_number, z_number, scaleX_number, scaleY_number){ }
	addBlipForEntity(entity_number){ }
	addBlipForPickup(pickup_number){ }
	addBlipForCoord(x_number, y_number, z_number){ }
	_0x72DD432F3CDFC0EE(posX_number, posY_number, posZ_number, radius_number, p4_number){ }
	_0x60734CC207C9833C(p0_boolean){ }
	setBlipCoords(blip_number, posX_number, posY_number, posZ_number){ }
	getBlipCoords(blip_number){ }
	setBlipSprite(blip_number, spriteId_number){ }
	getBlipSprite(blip_number){ }
	setBlipNameFromTextFile(blip_number, gxtEntry_string){ }
	setBlipNameToPlayerName(blip_number, player_number){ }
	setBlipAlpha(blip_number, alpha_number){ }
	getBlipAlpha(blip_number){ }
	setBlipFade(blip_number, opacity_number, duration_number){ }
	_0x2C173AE2BDB9385E(blip_number){ }
	setBlipRotation(blip_number, rotation_number){ }
	_0xA8B6AFDAC320AC87(p0_number, p1_number){ }
	setBlipFlashTimer(blip_number, duration_number){ }
	setBlipFlashInterval(blip_number, p1_number){ }
	setBlipColour(blip_number, color_number){ }
	setBlipSecondaryColour(blip_number, r_number, g_number, b_number){ }
	getBlipColour(blip_number){ }
	getBlipHudColour(blip_number){ }
	isBlipShortRange(blip_number){ }
	isBlipOnMinimap(blip_number){ }
	doesBlipHaveGpsRoute(blip_number){ }
	setBlipHiddenOnLegend(blip_number, toggle_boolean){ }
	setBlipHighDetail(blip_number, toggle_boolean){ }
	setBlipAsMissionCreatorBlip(blip_number, toggle_boolean){ }
	isMissionCreatorBlip(blip_number){ }
	_0x5C90988E7C8E1AF4(){ }
	_0x4167EFE0527D706E(){ }
	_0xF1A6C18B35BCADE6(p0_boolean){ }
	_0x2916A928514C9827(){ }
	_0xB552929B85FC27EC(p0_number, p1_number){ }
	setBlipFlashes(blip_number, toggle_boolean){ }
	setBlipFlashesAlternate(blip_number, toggle_boolean){ }
	isBlipFlashing(blip_number){ }
	setBlipAsShortRange(blip_number, toggle_boolean){ }
	setBlipScale(blip_number, scale_number){ }
	setBlipPriority(blip_number, priority_number){ }
	setBlipDisplay(blip_number, displayId_number){ }
	setBlipCategory(blip_number, index_number){ }
	removeBlip(blip_number){ }
	setBlipAsFriendly(blip_number, toggle_boolean){ }
	pulseBlip(blip_number){ }
	showNumberOnBlip(blip_number, number_number){ }
	hideNumberOnBlip(blip_number){ }
	showHeightOnBlip(blip_number, toggle_boolean){ }
	showTickOnBlip(blip_number, toggle_boolean){ }
	showHeadingIndicatorOnBlip(blip_number, toggle_boolean){ }
	showOutlineIndicatorOnBlip(blip_number, toggle_boolean){ }
	showFriendIndicatorOnBlip(blip_number, toggle_boolean){ }
	showCrewIndicatorOnBlip(blip_number, toggle_boolean){ }
	_0xC4278F70131BAA6D(p0_number, p1_boolean){ }
	_0x4B5B620C9B59ED34(p0_number, p1_number){ }
	_0x2C9F302398E13141(p0_number, p1_number){ }
	setBlipShrink(blip_number, toggle_boolean){ }
	setRadiusBlipEdge(p0_number, p1_boolean){ }
	doesBlipExist(blip_number){ }
	setWaypointOff(){ }
	_0xD8E694757BCEA8E9(){ }
	refreshWaypoint(){ }
	isWaypointActive(){ }
	setNewWaypoint(x_number, y_number){ }
	setBlipBright(blip_number, toggle_boolean){ }
	setBlipShowCone(blip_number, toggle_boolean){ }
	_0xC594B315EDF2D4AF(ped_number){ }
	_0xF83D0FEBE75E62C9(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number){ }
	_0x35A3CD97B2C0A6D2(p0_number){ }
	_0x8410C5E0CD847B9D(){ }
	setMinimapComponent(p0_number, p1_boolean, p2_number){ }
	showSigninUi(){ }
	getMainPlayerBlipId(){ }
	_0x41350B4FC28E3941(p0_boolean){ }
	hideLoadingOnFadeThisFrame(){ }
	setRadarAsInteriorThisFrame(interior_number, x_number, y_number, z_number, zoom_number){ }
	_0x504DFE62A1692296(toggle_boolean){ }
	setRadarAsExteriorThisFrame(){ }
	setPlayerBlipPositionThisFrame(x_number, y_number){ }
	_0xA17784FCA9548D15(p0_number, p1_number, p2_number){ }
	_0x9049FE339D5F6F6F(){ }
	disableRadarThisFrame(){ }
	_0x20FE7FDFEEAD38C0(){ }
	centerPlayerOnRadarThisFrame(){ }
	_0x55F5A5F07134DE60(){ }
	setWidescreenFormat(p0_number){ }
	displayAreaName(toggle_boolean){ }
	displayCash(toggle_boolean){ }
	_0x170F541E1CADD1DE(p0_boolean){ }
	setPlayerCashChange(cash_number, bank_number){ }
	displayAmmoThisFrame(display_boolean){ }
	displaySniperScopeThisFrame(){ }
	hideHudAndRadarThisFrame(){ }
	_0xE67C6DFD386EA5E7(p0_boolean){ }
	setMultiplayerWalletCash(){ }
	removeMultiplayerWalletCash(){ }
	setMultiplayerBankCash(){ }
	removeMultiplayerBankCash(){ }
	setMultiplayerHudCash(p0_number, p1_number){ }
	removeMultiplayerHudCash(){ }
	hideHelpTextThisFrame(){ }
	_0x801879A9B4F4B2FB(){ }
	displayHelpTextThisFrame(message_string, p1_boolean){ }
	hudForceWeaponWheel(show_boolean){ }
	_0x488043841BBE156F(){ }
	blockWeaponWheelThisFrame(){ }
	_0xA48931185F0536FE(){ }
	_0x72C1056D678BB7D8(weaponHash_number){ }
	_0xA13E93403F26C812(p0_number){ }
	_0x14C9FDCC41F81F63(p0_boolean){ }
	setGpsFlags(p0_number, p1_number){ }
	clearGpsFlags(){ }
	setRaceTrackRender(toggle_boolean){ }
	clearGpsRaceTrack(){ }
	startGpsCustomRoute(hudColor_number, p1_boolean, p2_boolean){ }
	addPointToGpsCustomRoute(x_number, y_number, z_number){ }
	setGpsCustomRouteRender(p0_boolean, p1_number, p2_number){ }
	clearGpsCustomRoute(){ }
	startGpsMultiRoute(hudColor_number, p1_boolean, p2_boolean){ }
	addPointToGpsMultiRoute(x_number, y_number, z_number){ }
	setGpsMultiRouteRender(toggle_boolean){ }
	clearGpsMultiRoute(){ }
	clearGpsPlayerWaypoint(){ }
	setGpsFlashes(toggle_boolean){ }
	_0x7B21E0BB01E8224A(p0_number){ }
	flashMinimapDisplay(){ }
	_0x6B1DE27EE78E6A19(p0_number){ }
	toggleStealthRadar(toggle_boolean){ }
	setMinimapInSpectatorMode(toggle_boolean, ped_number){ }
	setMissionName(p0_boolean, name_string){ }
	setMissionName2(p0_boolean, name_string){ }
	_0x817B86108EB94E51(p0_boolean, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number){ }
	setMinimapBlockWaypoint(toggle_boolean){ }
	setNorthYanktonMap(toggle_boolean){ }
	setMinimapRevealed(toggle_boolean){ }
	getMinimapRevealPercentage(){ }
	getMinimapAreaIsRevealed(x_number, y_number, radius_number){ }
	_0x62E849B7EB28E770(p0_boolean){ }
	_0x0923DBF87DFF735E(x_number, y_number, z_number){ }
	setMinimapGolfCourse(hole_number){ }
	setMinimapGolfCourseOff(){ }
	lockMinimapAngle(angle_number){ }
	unlockMinimapAngle(){ }
	lockMinimapPosition(x_number, y_number){ }
	unlockMinimapPosition(){ }
	setMinimapAltitudeIndicatorLevel(altitude_number, p1_boolean, p2_number){ }
	_0x3F5CC444DCAAA8F2(p0_number, p1_number, p2_boolean){ }
	_0x975D66A0BC17064C(p0_number){ }
	_0x06A320535F5F0248(p0_number){ }
	setBigmapActive(toggleBigMap_boolean, showFullMap_boolean){ }
	isHudComponentActive(id_number){ }
	isScriptedHudComponentActive(id_number){ }
	hideScriptedHudComponentThisFrame(id_number){ }
	isScriptedHudComponentHiddenThisFrame(id_number){ }
	hideHudComponentThisFrame(id_number){ }
	showHudComponentThisFrame(id_number){ }
	hideAreaAndVehicleNameThisFrame(){ }
	resetReticuleValues(){ }
	resetHudComponentValues(id_number){ }
	setHudComponentPosition(id_number, x_number, y_number){ }
	getHudComponentPosition(id_number){ }
	clearReminderMessage(){ }
	getScreenCoordFromWorldCoord2(worldX_number, worldY_number, worldZ_number, screenX_number, screenY_number){ }
	openReportugcMenu(){ }
	forceCloseReportugcMenu(){ }
	isReportugcMenuOpen(){ }
	_0x2432784ACA090DA4(p0_number){ }
	_0x7679CC1BCEBE3D4C(p0_number, p1_number, p2_number){ }
	_0x784BA7E0ECEB4178(p0_number, x_number, y_number, z_number){ }
	_0xB094BC1DB4018240(p0_number, p1_number, p2_number, p3_number){ }
	_0x788E7FD431BD67F1(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	clearFloatingHelp(p0_number, p1_boolean){ }
	createMpGamerTagWithCrewColor(player_number, username_string, pointedClanTag_boolean, isRockstarClan_boolean, clanTag_string, p5_number, r_number, g_number, b_number){ }
	isMpGamerTagMovieActive(){ }
	createFakeMpGamerTag(ped_number, username_string, pointedClanTag_boolean, isRockstarClan_boolean, clanTag_string, p5_number){ }
	removeMpGamerTag(gamerTagId_number){ }
	isMpGamerTagActive(gamerTagId_number){ }
	isMpGamerTagFree(gamerTagId_number){ }
	setMpGamerTagVisibility(gamerTagId_number, component_number, toggle_boolean, p3_number){ }
	_0xEE76FF7E6A0166B0(gamerTagId_number, p1_boolean){ }
	setMpGamerTagIcons(gamerTagId_number, p1_boolean){ }
	_0xD29EC58C2F6B5014(p0_number, p1_number){ }
	_0x1563FE35E9928E67(p0_number, p1_number, p2_number){ }
	setMpGamerTagColour(gamerTagId_number, flag_number, color_number){ }
	setMpGamerTagHealthBarColour(headDisplayId_number, color_number){ }
	setMpGamerTagAlpha(gamerTagId_number, component_number, alpha_number){ }
	setMpGamerTagWantedLevel(gamerTagId_number, wantedlvl_number){ }
	setMpGamerTagUnk(gamerTagId_number, p1_number){ }
	setMpGamerTagName(gamerTagId_number, string_string){ }
	isValidMpGamerTagMovie(gamerTagId_number){ }
	setMpGamerTagBigText(gamerTagId_number, string_string){ }
	getCurrentWebpageId(){ }
	getCurrentWebsiteId(){ }
	_0xE3B05614DCE1D014(p0_number){ }
	_0xB99C4E4D9499DF29(p0_number){ }
	isWarningMessageActive2(){ }
	setWarningMessage(titleMsg_string, flags_number, promptMsg_string, p3_boolean, p4_number, p5_string, p6_string, showBg_boolean, p8_number){ }
	setWarningMessageWithHeader(titleMsg_string, p1_string, flags_number, promptMsg_string, p4_boolean, p5_number, p6_number, p7_number, showBg_boolean, p9_number){ }
	setWarningMessage3(entryHeader_string, entryLine1_string, instructionalKey_number, entryLine2_string, p4_boolean, p5_number, p6_number, p7_number, p8_number, p9_boolean, p10_number){ }
	setWarningMessageWithHeaderUnk(entryHeader_string, entryLine1_string, flags_number, entryLine2_string, p4_boolean, p5_number, p6_number, p7_number, showBg_boolean, p9_number, p10_number){ }
	setWarningMessage4(p0_string, p1_string, p2_number, p3_number, p4_string, p5_boolean, p6_number, p7_number, p8_string, p9_string, p10_boolean, p11_number){ }
	getWarningMessageTitleHash(){ }
	setWarningMessageListRow(index_number, name_string, cash_number, rp_number, lvl_number, colour_number){ }
	_0xDAF87174BE7454FF(p0_number){ }
	removeWarningMessageListItems(){ }
	isWarningMessageActive(){ }
	clearDynamicPauseMenuErrorMessage(){ }
	setMapFullScreen(toggle_boolean){ }
	_0x1EAE6DD17B7A5EFA(p0_number){ }
	_0x551DF99658DB6EE8(p0_number, p1_number, p2_number){ }
	_0x2708FC083123F9FF(){ }
	forceSonarBlipsThisFrame(){ }
	_0x3F0CF9CB7E589B88(){ }
	_0x82CEDC33687E1F50(p0_boolean){ }
	_0x211C4EF450086857(){ }
	_0xBF4F34A85CA2970C(){ }
	activateFrontendMenu(menuhash_number, togglePause_boolean, component_number){ }
	restartFrontendMenu(menuHash_number, p1_number){ }
	getCurrentFrontendMenuVersion(){ }
	setPauseMenuActive(toggle_boolean){ }
	disableFrontendThisFrame(){ }
	suppressFrontendRenderingThisFrame(){ }
	allowPauseMenuWhenDeadThisFrame(){ }
	setFrontendActive(active_boolean){ }
	isPauseMenuActive(){ }
	_0x2F057596F2BD0061(){ }
	getPauseMenuState(){ }
	_0x5BFF36D6ED83E0AE(){ }
	isPauseMenuRestarting(){ }
	logDebugInfo(p0_string){ }
	_0x77F16B447824DA6C(p0_number){ }
	_0xCDCA26E80FAECB8F(){ }
	_0x2DE6C5E2E996F178(p0_number){ }
	pauseMenuActivateContext(contextHash_number){ }
	pauseMenuDeactivateContext(contextHash_number){ }
	pauseMenuIsContextActive(contextHash_number){ }
	_0x2A25ADC48F87841F(){ }
	_0xDE03620F8703A9DF(){ }
	_0x359AF31A4B52F5ED(){ }
	_0x13C4B962653A5280(){ }
	_0xC8E1071177A23BE5(p0_number, p1_number, p2_number){ }
	_0x4895BDEA16E7C080(p0_number){ }
	_0xC78E239AC5B2DDB9(p0_boolean, p1_number, p2_number){ }
	_0xF06EBB91A81E09E3(p0_boolean){ }
	isFrontendReadyForControl(){ }
	_0xEC9264727EEC0F28(){ }
	_0x14621BB1DF14E2B2(){ }
	_0x66E7CB63C97B7D20(){ }
	_0x593FEAE1F73392D4(){ }
	_0x4E3CD0EF8A489541(){ }
	_0xF284AC67940C6812(){ }
	_0x2E22FEFA0100275E(){ }
	_0x0CF54F20DE43879C(p0_number){ }
	_0x36C1451A88A09630(p0_number, p1_number){ }
	_0x7E17BE53E1AAABAF(p0_number, p1_number, p2_number){ }
	_0xA238192F33110615(p0_number, p1_number, p2_number){ }
	_0xEF4CED81CEBEDC6D(p0_number, p1_number){ }
	_0xCA6B2F7CE32AB653(p0_number, p1_number, p2_number){ }
	_0x90A6526CF0381030(p0_number, p1_number, p2_number, p3_number){ }
	_0x24A49BEAF468DC90(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	_0x5FBD7095FE7AE57F(p0_number, p1_number){ }
	_0x8F08017F9D7C47BD(p0_number, p1_number, p2_number){ }
	_0x052991E59076E4E4(p0_number, p1_number){ }
	clearPedInPauseMenu(){ }
	givePedToPauseMenu(ped_number, p1_number){ }
	setPauseMenuPedLighting(p0_boolean){ }
	setPauseMenuPedSleepState(state_boolean){ }
	openOnlinePoliciesMenu(){ }
	_0xF13FE2A80C05C561(){ }
	isOnlinePoliciesMenuActive(){ }
	openSocialClubMenu(){ }
	closeSocialClubMenu(){ }
	setSocialClubTour(name_string){ }
	isSocialClubActive(){ }
	_0x1185A8087587322C(p0_boolean){ }
	forceCloseTextInputBox(){ }
	_0x577599CCED639CA2(p0_number){ }
	_0x6A1738B4323FE2D9(p0_number){ }
	isMultiplayerChatActive(){ }
	closeMultiplayerChat(){ }
	_0x7C226D5346D4D10A(p0_number){ }
	_0xF47E567B3630DD12(p0_number, p1_number){ }
	setTextChatUnk(p0_boolean){ }
	setIsInTournament(toggle_boolean){ }
	setPedHasAiBlip(ped_number, hasCone_boolean){ }
	setPedHasAiBlipWithColor(ped_number, hasCone_boolean, color_number){ }
	doesPedHaveAiBlip(ped_number){ }
	setPedAiBlipGangId(ped_number, gangId_number){ }
	setPedAiBlipHasCone(ped_number, toggle_boolean){ }
	setPedAiBlipForcedOn(ped_number, toggle_boolean){ }
	setPedAiBlipNoticeRange(ped_number, range_number){ }
	setPedAiBlipSprite(ped_number, spriteId_number){ }
	getAiBlip2(ped_number){ }
	getAiBlip(ped_number){ }
	hasDirectorModeBeenTriggered(){ }
	setDirectorModeClearTriggeredFlag(){ }
	setPlayerIsInDirectorMode(toggle_boolean){ }
	_0x04655F9D075D0AE5(toggle_boolean){ }
	getInteriorHeading(interior_number){ }
	getInteriorInfo(interior_number, position_setAsUndefined, nameHash_number){ }
	getInteriorGroupId(interior_number){ }
	getOffsetFromInteriorInWorldCoords(interior_number, x_number, y_number, z_number){ }
	isInteriorScene(){ }
	isValidInterior(interior_number){ }
	clearRoomForEntity(entity_number){ }
	forceRoomForEntity(entity_number, interior_number, roomHashKey_number){ }
	getRoomKeyFromEntity(entity_number){ }
	getKeyForEntityInRoom(entity_number){ }
	getInteriorFromEntity(entity_number){ }
	_0x82EBB79E258FA2B7(entity_number, interior_number){ }
	_0x38C1CB1CB119A016(p0_number, p1_number){ }
	forceRoomForGameViewport(interiorID_number, roomHashKey_number){ }
	_0xAF348AFCB575A441(roomName_string){ }
	_0x405DC2AEF6AF95B9(roomHashKey_number){ }
	getRoomKeyForGameViewport(){ }
	clearRoomForGameViewport(){ }
	_0xE7D267EC6CA966C3(){ }
	getInteriorAtCoords(x_number, y_number, z_number){ }
	addPickupToInteriorRoomByName(pickup_number, roomName_string){ }
	pinInteriorInMemory(interior_number){ }
	unpinInterior(interior_number){ }
	isInteriorReady(interior_number){ }
	_0x4C2330E61D3DEB56(interior_number){ }
	getInteriorAtCoordsWithType(x_number, y_number, z_number, interiorType_string){ }
	getInteriorAtCoordsWithTypehash(x_number, y_number, z_number, typeHash_number){ }
	_0x483ACA1176CA93F1(){ }
	areCoordsCollidingWithExterior(x_number, y_number, z_number){ }
	getInteriorFromCollision(x_number, y_number, z_number){ }
	_0x7ECDF98587E92DEC(p0_number){ }
	activateInteriorEntitySet(interior_number, entitySetName_string){ }
	deactivateInteriorEntitySet(interior_number, entitySetName_string){ }
	isInteriorEntitySetActive(interior_number, entitySetName_string){ }
	setInteriorEntitySetColor(interior_number, entitySetName_string, color_number){ }
	refreshInterior(interior_number){ }
	hideMapObjectThisFrame(mapObjectHash_number){ }
	_0x50C375537449F369(p0_number){ }
	disableInterior(interior_number, toggle_boolean){ }
	isInteriorDisabled(interior_number){ }
	capInterior(interior_number, toggle_boolean){ }
	isInteriorCapped(interior_number){ }
	_0x9E6542F0CE8E70A3(toggle_boolean){ }
	_0x7241CCB7D020DB69(entity_number, toggle_boolean){ }
	createItemset(p0_boolean){ }
	destroyItemset(p0_number){ }
	isItemsetValid(p0_number){ }
	addToItemset(p0_number, p1_number){ }
	removeFromItemset(p0_number, p1_number){ }
	getItemsetSize(x_number){ }
	getIndexedItemInItemset(p0_number, p1_number){ }
	isInItemset(p0_number, p1_number){ }
	cleanItemset(p0_number){ }
	_0xF2CA003F167E21D2(){ }
	loadingscreenGetLoadFreemode(){ }
	loadingscreenSetLoadFreemode(toggle_boolean){ }
	loadingscreenGetLoadFreemodeWithEventName(){ }
	loadingscreenSetLoadFreemodeWithEventName(toggle_boolean){ }
	loadingscreenIsLoadingFreemode(){ }
	loadingscreenSetIsLoadingFreemode(toggle_boolean){ }
	_0xFA1E0E893D915215(toggle_boolean){ }
	localizationGetSystemLanguage(){ }
	getCurrentLanguage(){ }
	localizationGetUserLanguage(){ }
	getAllocatedStackSize(){ }
	getNumberOfFreeStacksOfThisSize(stackSize_number){ }
	setRandomSeed(seed_number){ }
	setTimeScale(timeScale_number){ }
	setMissionFlag(toggle_boolean){ }
	getMissionFlag(){ }
	setRandomEventFlag(toggle_boolean){ }
	getRandomEventFlag(){ }
	getGlobalCharBuffer(){ }
	_0x4DCDF92BF64236CD(p0_string, p1_string){ }
	_0x31125FD509D9043F(p0_string){ }
	_0xEBD3205A207939ED(p0_string){ }
	_0x97E7E2C04245115B(p0_number){ }
	_0xEB078CA2B5E82ADD(p0_string, p1_string){ }
	_0x703CC7F60CBB2B57(p0_string){ }
	_0x8951EB9C6906D3C8(){ }
	_0xBA4B8D83BDC75551(p0_string){ }
	hasResumedFromSuspend(){ }
	_0x65D2EBB47E1CEC21(toggle_boolean){ }
	_0x6F2135B6129620C1(toggle_boolean){ }
	_0x8D74E26F54B4E5C3(p0_string){ }
	getBaseElementMetadata(p0_number, p1_number, p2_number, p3_boolean){ }
	getPrevWeatherTypeHashName(){ }
	getNextWeatherTypeHashName(){ }
	isPrevWeatherType(weatherType_string){ }
	isNextWeatherType(weatherType_string){ }
	setWeatherTypePersist(weatherType_string){ }
	setWeatherTypeNowPersist(weatherType_string){ }
	setWeatherTypeNow(weatherType_string){ }
	setWeatherTypeOvertimePersist(weatherType_string, time_number){ }
	setRandomWeatherType(){ }
	clearWeatherTypePersist(){ }
	_0x0CF97F497FE7D048(p0_number){ }
	getWeatherTypeTransition(weatherType1_number, weatherType2_number, percentWeather2_number){ }
	setWeatherTypeTransition(weatherType1_number, weatherType2_number, percentWeather2_number){ }
	setOverrideWeather(weatherType_string){ }
	clearOverrideWeather(){ }
	_0xB8F87EAD7533B176(p0_number){ }
	_0xC3EAD29AB273ECE8(p0_number){ }
	_0xA7A1127490312C36(p0_number){ }
	_0x31727907B2C43C55(p0_number){ }
	_0x405591EC8FD9096D(p0_number){ }
	_0xF751B16FB32ABC1D(p0_number){ }
	_0xB3E6360DDE733E82(p0_number){ }
	_0x7C9C0B1EEB1F9072(p0_number){ }
	_0x6216B116083A7CB4(p0_number){ }
	_0x9F5E6BB6B34540DA(p0_number){ }
	_0xB9854DFDE0D833D6(p0_number){ }
	_0xC54A08C85AE4D410(p0_number){ }
	_0xA8434F1DFF41D6E7(p0_number){ }
	_0xC3C221ADDDE31A11(p0_number){ }
	setWind(speed_number){ }
	setWindSpeed(speed_number){ }
	getWindSpeed(){ }
	setWindDirection(direction_number){ }
	getWindDirection(){ }
	setRainFxIntensity(intensity_number){ }
	getRainLevel(){ }
	getSnowLevel(){ }
	forceLightningFlash(){ }
	_0x02DEAAC8F8EA7FE7(p0_string){ }
	preloadCloudHat(name_string){ }
	loadCloudHat(name_string, transitionTime_number){ }
	unloadCloudHat(name_string, p1_number){ }
	clearCloudHat(){ }
	setCloudHatOpacity(opacity_number){ }
	getCloudHatOpacity(){ }
	getGameTimer(){ }
	getFrameTime(){ }
	getBenchmarkTime(){ }
	getFrameCount(){ }
	getRandomFloatInRange(startRange_number, endRange_number){ }
	getRandomIntInRange(startRange_number, endRange_number){ }
	getGroundZFor3dCoord(x_number, y_number, z_number, groundZ_number, unk_boolean, p5_boolean){ }
	getGroundZCoordWithOffsets(x_number, y_number, z_number, groundZ_number, offsets_setAsUndefined){ }
	_0x9E82F0F362881B29(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	asin(p0_number){ }
	acos(p0_number){ }
	tan(p0_number){ }
	atan(p0_number){ }
	atan2(p0_number, p1_number){ }
	getDistanceBetweenCoords(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, useZ_boolean){ }
	getAngleBetween2dVectors(x1_number, y1_number, x2_number, y2_number){ }
	getHeadingFromVector2d(dx_number, dy_number){ }
	_0x7F8F6405F4777AF6(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_boolean){ }
	_0x21C235BC64831E5A(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_boolean){ }
	_0xF56DFB7B61BE7276(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number, p11_number, p12_number){ }
	setBit(address_number, offset_number){ }
	clearBit(address_number, offset_number){ }
	getHashKey(string_string){ }
	_0xF2F6A2FA49278625(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number, p11_number, p12_number){ }
	isAreaOccupied(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_boolean, p7_boolean, p8_boolean, p9_boolean, p10_boolean, p11_number, p12_boolean){ }
	isPositionOccupied(x_number, y_number, z_number, range_number, p4_boolean, p5_boolean, p6_boolean, p7_boolean, p8_boolean, p9_number, p10_boolean){ }
	isPointObscuredByAMissionEntity(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	clearArea(X_number, Y_number, Z_number, radius_number, p4_boolean, ignoreCopCars_boolean, ignoreObjects_boolean, p7_boolean){ }
	clearAreaOfEverything(x_number, y_number, z_number, radius_number, p4_boolean, p5_boolean, p6_boolean, p7_boolean){ }
	clearAreaOfVehicles(x_number, y_number, z_number, radius_number, p4_boolean, p5_boolean, p6_boolean, p7_boolean, p8_boolean, p9_boolean){ }
	clearAngledAreaOfVehicles(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_boolean, p8_boolean, p9_boolean, p10_boolean, p11_boolean, p12_number){ }
	clearAreaOfObjects(x_number, y_number, z_number, radius_number, flags_number){ }
	clearAreaOfPeds(x_number, y_number, z_number, radius_number, flags_number){ }
	clearAreaOfCops(x_number, y_number, z_number, radius_number, flags_number){ }
	clearAreaOfProjectiles(x_number, y_number, z_number, radius_number, flags_number){ }
	_0x7EC6F9A478A6A512(){ }
	setSaveMenuActive(ignoreVehicle_boolean){ }
	_0x397BAA01068BAA96(){ }
	setCreditsActive(toggle_boolean){ }
	_0xB51B9AB9EF81868C(toggle_boolean){ }
	haveCreditsReachedEnd(){ }
	terminateAllScriptsWithThisName(scriptName_string){ }
	networkSetScriptIsSafeForNetworkGame(){ }
	addHospitalRestart(x_number, y_number, z_number, p3_number, p4_number){ }
	disableHospitalRestart(hospitalIndex_number, toggle_boolean){ }
	addPoliceRestart(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	disablePoliceRestart(policeIndex_number, toggle_boolean){ }
	setRestartCustomPosition(x_number, y_number, z_number, heading_number){ }
	clearRestartCustomPosition(){ }
	pauseDeathArrestRestart(toggle_boolean){ }
	ignoreNextRestart(toggle_boolean){ }
	setFadeOutAfterDeath(toggle_boolean){ }
	setFadeOutAfterArrest(toggle_boolean){ }
	setFadeInAfterDeathArrest(toggle_boolean){ }
	setFadeInAfterLoad(toggle_boolean){ }
	registerSaveHouse(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	setSaveHouse(p0_number, p1_boolean, p2_boolean){ }
	overrideSaveHouse(p0_boolean, p1_number, p2_number, p3_number, p4_number, p5_boolean, p6_number, p7_number){ }
	_0xA4A0065E39C9F25C(p0_setAsUndefined, p1_number, fadeInAfterLoad_boolean, p3_boolean){ }
	doAutoSave(){ }
	getIsAutoSaveOff(){ }
	isAutoSaveInProgress(){ }
	_0x2107A3773771186D(){ }
	_0x06462A961E94B67C(){ }
	beginReplayStats(p0_number, p1_number){ }
	addReplayStatValue(value_number){ }
	endReplayStats(){ }
	_0xD642319C54AADEB6(){ }
	_0x5B1F2E327B6B6FE1(){ }
	getReplayStatMissionType(){ }
	getReplayStatCount(){ }
	getReplayStatAtIndex(index_number){ }
	clearReplayStats(){ }
	_0x72DE52178C291CB5(){ }
	_0x44A0BDC559B35F6E(){ }
	_0xEB2104E905C6F2E9(){ }
	_0x2B5E102E4A42F2BF(){ }
	isMemoryCardInUse(){ }
	shootSingleBulletBetweenCoords(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, damage_number, p7_boolean, weaponHash_number, ownerPed_number, isAudible_boolean, isInvisible_boolean, speed_number){ }
	shootSingleBulletBetweenCoordsIgnoreEntity(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, damage_number, p7_boolean, weaponHash_number, ownerPed_number, isAudible_boolean, isInvisible_boolean, speed_number, entity_number, p14_number){ }
	shootSingleBulletBetweenCoordsIgnoreEntityNew(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, damage_number, p7_boolean, weaponHash_number, ownerPed_number, isAudible_boolean, isInvisible_boolean, speed_number, entity_number, p14_boolean, p15_boolean, p16_boolean, p17_boolean, p18_number, p19_number){ }
	getModelDimensions(modelHash_number, minimum_setAsUndefined, maximum_setAsUndefined){ }
	setFakeWantedLevel(fakeWantedLevel_number){ }
	getFakeWantedLevel(){ }
	isBitSet(address_number, offset_number){ }
	usingMissionCreator(toggle_boolean){ }
	allowMissionCreatorWarp(toggle_boolean){ }
	setMinigameInProgress(toggle_boolean){ }
	isMinigameInProgress(){ }
	isThisAMinigameScript(){ }
	isSniperInverted(){ }
	shouldUseMetricMeasurements(){ }
	getProfileSetting(profileSetting_number){ }
	areStringsEqual(string1_string, string2_string){ }
	compareStrings(str1_string, str2_string, matchCase_boolean, maxLength_number){ }
	absi(value_number){ }
	absf(value_number){ }
	isSniperBulletInArea(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number){ }
	isProjectileInArea(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, ownedByPlayer_boolean){ }
	isProjectileTypeInArea(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, type_number, p7_boolean){ }
	isProjectileTypeInAngledArea(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_boolean){ }
	isProjectileTypeInRadius(p0_number, p1_number, p2_number, p3_number, p4_number, p5_boolean){ }
	getIsProjectileTypeInArea(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number){ }
	getProjectileNearPedCoords(ped_number, weaponHash_number, radius_number, entity_number, p4_boolean){ }
	getProjectileNearPed(ped_number, weaponhash_number, p2_number, p3_number, p4_number, p5_boolean){ }
	isBulletInAngledArea(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_boolean){ }
	isBulletInArea(p0_number, p1_number, p2_number, p3_number, p4_boolean){ }
	isBulletInBox(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_boolean){ }
	hasBulletImpactedInArea(x_number, y_number, z_number, p3_number, p4_boolean, p5_boolean){ }
	hasBulletImpactedInBox(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_boolean, p7_boolean){ }
	isOrbisVersion(){ }
	isDurangoVersion(){ }
	isXbox360Version(){ }
	isPs3Version(){ }
	isPcVersion(){ }
	isAussieVersion(){ }
	isStringNull(string_string){ }
	isStringNullOrEmpty(string_string){ }
	stringToInt(string_string, outInteger_number){ }
	setBitsInRange(unkVar_number, rangeStart_number, rangeEnd_number, p3_number){ }
	getBitsInRange(unkVar_number, rangeStart_number, rangeEnd_number){ }
	addStuntJump(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number, p11_number, p12_number, p13_number, p14_number, p15_number, p16_number, p17_number){ }
	addStuntJumpAngled(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number, p11_number, p12_number, p13_number, p14_number, p15_number, p16_number, p17_number, p18_number, p19_number){ }
	_0xFB80AB299D2EE1BD(toggle_boolean){ }
	deleteStuntJump(p0_number){ }
	enableStuntJumpSet(p0_number){ }
	disableStuntJumpSet(p0_number){ }
	setStuntJumpsCanTrigger(toggle_boolean){ }
	isStuntJumpInProgress(){ }
	isStuntJumpMessageShowing(){ }
	getNumSuccessfulStuntJumps(){ }
	getTotalSuccessfulStuntJumps(){ }
	cancelStuntJump(){ }
	setGamePaused(toggle_boolean){ }
	setThisScriptCanBePaused(toggle_boolean){ }
	setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle_boolean){ }
	hasButtonCombinationJustBeenEntered(hash_number, amount_number){ }
	hasCheatStringJustBeenEntered(hash_number){ }
	useFreemodeMapBehavior(p0_number){ }
	setUnkMapFlag(flag_number){ }
	isFrontendFading(){ }
	populateNow(){ }
	getIndexOfCurrentLevel(){ }
	setGravityLevel(level_number){ }
	startSaveData(p0_number, p1_number, p2_boolean){ }
	stopSaveData(){ }
	_0xA09F896CE912481F(p0_boolean){ }
	registerIntToSave(p0_number, name_string){ }
	registerInt64ToSave(p0_number, name_string){ }
	registerEnumToSave(p0_number, name_string){ }
	registerFloatToSave(p0_number, name_string){ }
	registerBoolToSave(p0_number, name_string){ }
	registerTextLabelToSave(p0_number, name_string){ }
	registerTextLabelToSave2(p0_number, name_string){ }
	_0x48F069265A0E4BEC(p0_number, name_string){ }
	_0x8269816F6CFD40F8(p0_number, name_string){ }
	_0xFAA457EF263E8763(p0_number, name_string){ }
	startSaveStructWithSize(p0_number, size_number, structName_string){ }
	stopSaveStruct(){ }
	startSaveArrayWithSize(p0_number, size_number, arrayName_string){ }
	stopSaveArray(){ }
	copyMemory(dst_number, src_number, size_number){ }
	enableDispatchService(dispatchService_number, toggle_boolean){ }
	blockDispatchServiceResourceCreation(dispatchService_number, toggle_boolean){ }
	getNumDispatchedUnitsForPlayer(dispatchService_number){ }
	createIncident(dispatchService_number, x_number, y_number, z_number, numUnits_number, radius_number, outIncidentID_number, p7_number, p8_number){ }
	createIncidentWithEntity(dispatchService_number, ped_number, numUnits_number, radius_number, outIncidentID_number, p5_number, p6_number){ }
	deleteIncident(incidentId_number){ }
	isIncidentValid(incidentId_number){ }
	setIncidentRequestedUnits(incidentId_number, dispatchService_number, numUnits_number){ }
	setIncidentUnk(incidentId_number, p1_number){ }
	findSpawnPointInDirection(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, distance_number, spawnPoint_setAsUndefined){ }
	addPopMultiplierArea(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, p6_number, p7_number, p8_boolean, p9_boolean){ }
	doesPopMultiplierAreaExist(id_number){ }
	removePopMultiplierArea(id_number, p1_boolean){ }
	isPopMultiplierAreaUnk(id_number){ }
	addPopMultiplierSphere(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_boolean, p7_boolean){ }
	doesPopMultiplierSphereExist(id_number){ }
	removePopMultiplierSphere(id_number, p1_boolean){ }
	enableTennisMode(ped_number, toggle_boolean, p2_boolean){ }
	isTennisMode(ped_number){ }
	playTennisSwingAnim(ped_number, animDict_string, animName_string, p3_number, p4_number, p5_boolean){ }
	getTennisSwingAnimComplete(ped_number){ }
	_0x19BFED045C647C49(ped_number){ }
	_0xE95B0C7D5BA3B96B(ped_number){ }
	playTennisDiveAnim(ped_number, p1_number, p2_number, p3_number, p4_number, p5_boolean){ }
	_0x54F157E0336A3822(ped_number, p1_string, p2_number){ }
	setDispatchSpawnLocation(x_number, y_number, z_number){ }
	resetDispatchIdealSpawnDistance(){ }
	setDispatchIdealSpawnDistance(p0_number){ }
	resetDispatchTimeBetweenSpawnAttempts(p0_number){ }
	setDispatchTimeBetweenSpawnAttempts(p0_number, p1_number){ }
	setDispatchTimeBetweenSpawnAttemptsMultiplier(p0_number, p1_number){ }
	_0x918C7B2D2FF3928B(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	_0x2D4259F1FEB81DA9(p0_number, p1_number, p2_number, p3_number){ }
	removeDispatchSpawnBlockingArea(p0_number){ }
	resetDispatchSpawnBlockingAreas(){ }
	_0xD9F692D349249528(){ }
	_0xE532EC1A63231B4F(p0_number, p1_number){ }
	_0xB8721407EE9C3FF6(p0_number, p1_number, p2_number){ }
	_0xB3CD58CCA6CDA852(){ }
	_0x2587A48BC88DFADF(p0_boolean){ }
	displayOnscreenKeyboard2(p0_number, windowTitle_string, p2_number, defaultText_string, defaultConcat1_string, defaultConcat2_string, defaultConcat3_string, defaultConcat4_string, defaultConcat5_string, defaultConcat6_string, defaultConcat7_string, maxInputLength_number){ }
	displayOnscreenKeyboard(p0_number, windowTitle_string, p2_string, defaultText_string, defaultConcat1_string, defaultConcat2_string, defaultConcat3_string, maxInputLength_number){ }
	updateOnscreenKeyboard(){ }
	getOnscreenKeyboardResult(){ }
	cancelOnscreenKeyboard(){ }
	_0x3ED1438C1F5C6612(p0_number){ }
	removeStealthKill(hash_number, p1_boolean){ }
	_0x1EAE0A6E978894A2(p0_number, p1_boolean){ }
	setExplosiveAmmoThisFrame(player_number){ }
	setFireAmmoThisFrame(player_number){ }
	setExplosiveMeleeThisFrame(player_number){ }
	setSuperJumpThisFrame(player_number){ }
	_0x438822C279B73B93(p0_number){ }
	_0xA1183BCFEE0F93D1(p0_number){ }
	_0x6FDDF453C0C756EC(){ }
	_0xFB00CA71DA386228(){ }
	areProfileSettingsValid(){ }
	_0xE3D969D2785FFB5E(){ }
	resetLocalplayerState(){ }
	_0x0A60017F841A54F2(p0_number, p1_number, p2_number, p3_number){ }
	_0x1FF6BF9A63E5757F(){ }
	_0x1BB299305C3E8C13(p0_number, p1_number, p2_number, p3_number){ }
	_0x8EF5573A1F801A5C(p0_number, p1_number, p2_number){ }
	startBenchmarkRecording(){ }
	stopBenchmarkRecording(){ }
	resetBenchmarkRecording(){ }
	saveBenchmarkRecording(){ }
	uiIsSingleplayerPauseMenuActive(){ }
	landingMenuIsActive(){ }
	isCommandLineBenchmarkValueSet(){ }
	getBenchmarkIterationsFromCommandLine(){ }
	getBenchmarkPassFromCommandLine(){ }
	restartGame(){ }
	forceSocialClubUpdate(){ }
	hasAsyncInstallFinished(){ }
	cleanupAsyncInstall(){ }
	isInPowerSavingMode(){ }
	getPowerSavingModeDuration(){ }
	setPlayerIsInAnimalForm(toggle_boolean){ }
	getIsPlayerInAnimalForm(){ }
	setPlayerRockstarEditorDisabled(toggle_boolean){ }
	_0x23227DF0B2115469(){ }
	_0xD10282B6E3751BA0(){ }
	_0x693478ACBD7F18E7(){ }
	createMobilePhone(phoneType_number){ }
	destroyMobilePhone(){ }
	setMobilePhoneScale(scale_number){ }
	setMobilePhoneRotation(rotX_number, rotY_number, rotZ_number, p3_number){ }
	getMobilePhoneRotation(rotation_setAsUndefined, p1_number){ }
	setMobilePhonePosition(posX_number, posY_number, posZ_number){ }
	getMobilePhonePosition(position_setAsUndefined){ }
	scriptIsMovingMobilePhoneOffscreen(toggle_boolean){ }
	canPhoneBeSeenOnScreen(){ }
	setMobilePhoneUnk(toggle_boolean){ }
	cellCamMoveFinger(direction_number){ }
	cellCamSetLean(toggle_boolean){ }
	cellCamActivate(p0_boolean, p1_boolean){ }
	cellCamDisableThisFrame(toggle_boolean){ }
	_0xA2CCBE62CD4C91A4(toggle_number){ }
	_0x1B0B4AEED5B9B41C(p0_number){ }
	_0x53F4892D18EC90A4(p0_number){ }
	_0x3117D84EFA60F77B(p0_number){ }
	_0x15E69E2802C24B8D(p0_number){ }
	_0xAC2890471901861C(p0_number){ }
	_0xD6ADE981781FCA09(p0_number){ }
	_0xF1E22DC13F5EEBAD(p0_number){ }
	_0x466DA42C89865553(p0_number){ }
	cellCamIsCharVisibleNoFaceCheck(entity_number){ }
	getMobilePhoneRenderId(renderId_number){ }
	networkInitializeCash(wallet_number, bank_number){ }
	networkDeleteCharacter(characterSlot_number, p1_boolean, p2_boolean){ }
	networkManualDeleteCharacter(characterSlot_number){ }
	networkGetIsHighEarner(){ }
	networkClearCharacterWallet(characterSlot_number){ }
	networkGivePlayerJobshareCash(amount_number, networkHandle_number){ }
	networkReceivePlayerJobshareCash(value_number, networkHandle_number){ }
	networkCanShareJobCash(){ }
	networkRefundCash(index_number, context_string, reason_string, unk_boolean){ }
	networkDeductCash(amount_number, p1_string, p2_string, p3_boolean, p4_boolean, p5_boolean){ }
	networkMoneyCanBet(amount_number, p1_boolean, p2_boolean){ }
	networkCanBet(amount_number){ }
	networkCanBuyLotteryTicket(cost_number){ }
	_0xCD0F5B5D932AE473(){ }
	canPayGoon(p0_number, p1_number, amount_number, p3_number){ }
	networkEarnFromCashingOut(amount_number){ }
	networkEarnFromPickup(amount_number){ }
	networkEarnFromGangPickup(amount_number){ }
	networkEarnFromAssassinateTargetKilled(amount_number){ }
	networkEarnFromArmourTruck(amount_number){ }
	networkEarnFromCrateDrop(amount_number){ }
	networkEarnFromBetting(amount_number, p1_string){ }
	networkEarnFromJob(amount_number, p1_string){ }
	networkEarnFromPremiumJob(amount_number, p1_string){ }
	networkEarnFromBendJob(amount_number, heistHash_string){ }
	networkEarnFromChallengeWin(p0_number, p1_number, p2_boolean){ }
	networkEarnFromBounty(amount_number, networkHandle_number, p2_number, p3_number){ }
	networkEarnFromImportExport(amount_number, modelHash_number){ }
	networkEarnFromHoldups(amount_number){ }
	networkEarnFromProperty(amount_number, propertyName_number){ }
	networkEarnFromAiTargetKill(p0_number, p1_number){ }
	networkEarnFromNotBadsport(amount_number){ }
	networkEarnFromRockstar(amount_number){ }
	networkEarnFromVehicle(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number){ }
	networkEarnFromPersonalVehicle(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number){ }
	networkEarnFromDailyObjectives(p0_number, p1_string, p2_number){ }
	networkEarnFromAmbientJob(p0_number, p1_string, p2_number){ }
	_0xD20D79671A598594(p0_number, p1_number, p2_number){ }
	networkEarnFromJobBonus(p0_number, p1_number, p2_number){ }
	_0x9D4FDBB035229669(p0_number, p1_number, p2_number){ }
	_0x11B0A20C493F7E36(p0_number, p1_number, p2_number){ }
	_0xCDA1C62BE2777802(p0_number, p1_number, p2_number){ }
	_0x08B0CA7A6AB3AC32(p0_number, p1_number, p2_number){ }
	_0x0CB1BE0633C024A8(p0_number, p1_number, p2_number, p3_number){ }
	networkEarnFromWarehouse(amount_number, id_number){ }
	networkEarnFromContraband(amount_number, p1_number){ }
	_0x84C0116D012E8FC2(p0_number){ }
	_0x6B7E4FB50D5F3D65(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	_0x31BA138F6304FB9F(p0_number, p1_number){ }
	_0x55A1E095DB052FA5(p0_number, p1_number){ }
	networkEarnFromBusinessProduct(amount_number, p1_number, p2_number, p3_number){ }
	networkEarnFromVehicleExport(amount_number, p1_number, p2_number){ }
	networkEarnFromSmuggling(amount_number, p1_number, p2_number, p3_number){ }
	_0xF6B170F9A02E9E87(p0_number){ }
	_0x42FCE14F50F27291(p0_number){ }
	_0xA75EAC69F59E96E7(p0_number){ }
	_0xC5156361F26E2212(p0_number){ }
	_0x0B39CF0D53F1C883(p0_number, p1_number, p2_number){ }
	_0x1FDA0AA679C9919B(p0_number){ }
	_0xFFFBA1B1F7C0B6F4(p0_number){ }
	networkCanSpendMoney(p0_number, p1_boolean, p2_boolean, p3_boolean, p4_number, p5_number){ }
	networkCanSpendMoney2(p0_number, p1_boolean, p2_boolean, p3_boolean, p4_number, p5_number, p6_number){ }
	networkBuyItem(player_number, item_number, p2_number, p3_number, p4_boolean, item_name_string, p6_number, p7_number, p8_number, p9_boolean){ }
	networkSpentTaxi(amount_number, p1_boolean, p2_boolean){ }
	networkPayEmployeeWage(p0_number, p1_boolean, p2_boolean){ }
	networkPayUtilityBill(amount_number, p1_boolean, p2_boolean){ }
	networkPayMatchEntryFee(amount_number, matchId_string, p2_boolean, p3_boolean){ }
	networkSpentBetting(amount_number, p1_number, matchId_string, p3_boolean, p4_boolean){ }
	networkSpentWager(p0_number, p1_number, amount_number){ }
	networkSpentInStripclub(p0_number, p1_boolean, p2_number, p3_boolean){ }
	networkBuyHealthcare(cost_number, p1_boolean, p2_boolean){ }
	networkBuyAirstrike(cost_number, p1_boolean, p2_boolean){ }
	networkBuyBackupGang(p0_number, p1_number, p2_boolean, p3_boolean){ }
	networkBuyHeliStrike(cost_number, p1_boolean, p2_boolean){ }
	networkSpentAmmoDrop(p0_number, p1_boolean, p2_boolean){ }
	networkBuyBounty(amount_number, victim_number, p2_boolean, p3_boolean){ }
	networkBuyProperty(cost_number, propertyName_number, p2_boolean, p3_boolean){ }
	networkBuySmokes(p0_number, p1_boolean, p2_boolean){ }
	networkSpentHeliPickup(p0_number, p1_boolean, p2_boolean){ }
	networkSpentBoatPickup(p0_number, p1_boolean, p2_boolean){ }
	networkSpentBullShark(p0_number, p1_boolean, p2_boolean){ }
	networkSpentCashDrop(amount_number, p1_boolean, p2_boolean){ }
	networkSpentHireMugger(p0_number, p1_boolean, p2_boolean){ }
	networkSpentRobbedByMugger(amount_number, p1_boolean, p2_boolean){ }
	networkSpentHireMercenary(p0_number, p1_boolean, p2_boolean){ }
	networkSpentBuyWantedlevel(p0_number, p1_number, p2_boolean, p3_boolean){ }
	networkSpentBuyOfftheradar(p0_number, p1_boolean, p2_boolean){ }
	networkSpentBuyRevealPlayers(p0_number, p1_boolean, p2_boolean){ }
	networkSpentCarwash(p0_number, p1_number, p2_number, p3_boolean, p4_boolean){ }
	networkSpentCinema(p0_number, p1_number, p2_boolean, p3_boolean){ }
	networkSpentTelescope(p0_number, p1_boolean, p2_boolean){ }
	networkSpentHoldups(p0_number, p1_boolean, p2_boolean){ }
	networkSpentBuyPassiveMode(p0_number, p1_boolean, p2_boolean){ }
	networkSpentBankInterest(p0_number, p1_boolean, p2_boolean){ }
	networkSpentProstitutes(p0_number, p1_boolean, p2_boolean){ }
	networkSpentArrestBail(p0_number, p1_boolean, p2_boolean){ }
	networkSpentPayVehicleInsurancePremium(amount_number, vehicleModel_number, networkHandle_number, notBankrupt_boolean, hasTheMoney_boolean){ }
	networkSpentCallPlayer(p0_number, p1_number, p2_boolean, p3_boolean){ }
	networkSpentBounty(p0_number, p1_boolean, p2_boolean){ }
	networkSpentFromRockstar(p0_number, p1_boolean, p2_boolean){ }
	_0x9B5016A6433A68C5(){ }
	processCashGift(p0_number, p1_number, p2_string){ }
	networkSpentPlayerHealthcare(p0_number, p1_number, p2_boolean, p3_boolean){ }
	networkSpentNoCops(p0_number, p1_boolean, p2_boolean){ }
	networkSpentRequestJob(p0_number, p1_boolean, p2_boolean){ }
	networkSpentRequestHeist(p0_number, p1_boolean, p2_boolean){ }
	networkBuyLotteryTicket(p0_number, p1_number, p2_boolean, p3_boolean){ }
	networkBuyFairgroundRide(amount_number, p1_number, p2_boolean, p3_boolean){ }
	_0x7C4FCCD2E4DEB394(){ }
	networkSpentJobSkip(amount_number, matchId_string, p2_boolean, p3_boolean){ }
	networkSpentBoss(amount_number, p1_boolean, p2_boolean){ }
	networkSpentPayGoon(p0_number, p1_number, amount_number){ }
	_0xDBC966A01C02BCA7(p0_number, p1_number, p2_number){ }
	networkSpentMoveYacht(amount_number, p1_boolean, p2_boolean){ }
	_0xFC4EE00A7B3BFB76(p0_number, p1_number, p2_number){ }
	networkBuyContraband(p0_number, p1_number, p2_number, p3_boolean, p4_boolean){ }
	networkSpentVipUtilityCharges(p0_number, p1_number, p2_number){ }
	_0x112209CE0290C03A(p0_number, p1_number, p2_number, p3_number){ }
	_0xED5FD7AF10F5E262(p0_number, p1_number, p2_number, p3_number){ }
	_0x0D30EB83668E63C5(p0_number, p1_number, p2_number, p3_number){ }
	_0xB49ECA122467D05F(p0_number, p1_number, p2_number, p3_number){ }
	_0xE23ADC6FCB1F29AE(p0_number, p1_number, p2_number){ }
	_0x0FE8E1FCD2B86B33(p0_number, p1_number, p2_number, p3_number){ }
	_0x69EF772B192614C1(p0_number, p1_number, p2_number, p3_number){ }
	_0x8E243837643D9583(p0_number, p1_number, p2_number, p3_number){ }
	_0xBD0EFB25CCA8F97A(p0_number, p1_number, p2_number, p3_number){ }
	_0xA95F667A755725DA(p0_number, p1_number, p2_number, p3_number){ }
	networkSpentPurchaseWarehouse(amount_number, data_number, p2_boolean, p3_boolean){ }
	_0x4128464231E3CA0B(p0_number, p1_number, p2_number, p3_number){ }
	_0x2FAB6614CE22E196(p0_number, p1_number, p2_number, p3_number){ }
	_0x05F04155A226FBBF(p0_number, p1_number, p2_number, p3_number){ }
	_0xE8B0B270B6E7C76E(p0_number, p1_number, p2_number, p3_number){ }
	_0x5BCDE0F640C773D2(p0_number, p1_number, p2_number, p3_number){ }
	_0x998E18CEB44487FC(p0_number, p1_number, p2_number, p3_number){ }
	_0xFA07759E6FDDD7CF(p0_number, p1_number, p2_number, p3_number){ }
	_0x6FD97159FE3C971A(p0_number, p1_number, p2_number, p3_number){ }
	_0x675D19C6067CAE08(p0_number, p1_number, p2_number, p3_number){ }
	_0xA51B086B0B2C0F7A(p0_number, p1_number, p2_number, p3_number){ }
	_0xD7CCCBA28C4ECAF0(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	_0x0035BB914316F1E3(p0_number, p1_number, p2_number, p3_number){ }
	_0x5F456788B05FAEAC(p0_number, p1_number, p2_number){ }
	_0xA75CCF58A60A5FD1(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number){ }
	_0xB4C2EC463672474E(p0_number, p1_number, p2_number, p3_number){ }
	_0x2AFC2D19B50797F2(p0_number, p1_number, p2_number, p3_number){ }
	networkSpentImportExportRepair(p0_number, p1_number, p2_number){ }
	networkSpentPurchaseHangar(p0_number, p1_number, p2_number, p3_number){ }
	networkSpentUpgradeHangar(p0_number, p1_number, p2_number, p3_number){ }
	networkSpentHangarUtilityCharges(amount_number, p1_boolean, p2_boolean){ }
	networkSpentHangarStaffCharges(amount_number, p1_boolean, p2_boolean){ }
	networkSpentBuyTruck(p0_number, p1_number, p2_number, p3_number){ }
	networkSpentUpgradeTruck(p0_number, p1_number, p2_number, p3_number){ }
	networkSpentBuyBunker(p0_number, p1_number, p2_number, p3_number){ }
	networkSpentUpgradeBunker(p0_number, p1_number, p2_number, p3_number){ }
	networkEarnFromSellBunker(amount_number, bunkerHash_number){ }
	networkSpentBallisticEquipment(amount_number, p1_boolean, p2_boolean){ }
	networkEarnFromRdrBonus(amount_number, p1_number){ }
	networkEarnFromWagePayment(amount_number){ }
	networkEarnFromWagePaymentBonus(amount_number){ }
	networkSpentBuyBase(p0_number, p1_number, p2_number, p3_number){ }
	networkSpentUpgradeBase(p0_number, p1_number, p2_number, p3_number){ }
	networkSpentBuyTiltrotor(p0_number, p1_number, p2_number, p3_number){ }
	networkSpentUpgradeTiltrotor(p0_number, p1_number, p2_number, p3_number){ }
	networkSpentEmployAssassins(p0_number, p1_number, p2_number, p3_number){ }
	networkSpentGangopsCannon(p0_number, p1_number, p2_number, p3_number){ }
	networkSpentGangopsStartMission(p0_number, p1_number, p2_number, p3_number){ }
	networkEarnFromSellBase(amount_number, baseNameHash_number){ }
	networkEarnFromTargetRefund(amount_number, p1_number){ }
	networkEarnFromGangopsWages(amount_number, p1_number){ }
	networkEarnFromGangopsWagesBonus(amount_number, p1_number){ }
	networkEarnFromDarChallenge(amount_number, p1_number){ }
	networkEarnFromDoomsdayFinaleBonus(amount_number, vehicleHash_number){ }
	networkEarnFromGangopsAwards(amount_number, unk_string, p2_number){ }
	networkEarnFromGangopsElite(amount_number, unk_string, actIndex_number){ }
	networkRivalDeliveryCompleted(earnedMoney_number){ }
	networkSpentGangopsStartStrand(type_number, amount_number, p2_boolean, p3_boolean){ }
	networkSpentGangopsTripSkip(amount_number, p1_boolean, p2_boolean){ }
	networkEarnFromGangopsJobsPrepParticipation(amount_number){ }
	networkEarnFromGangopsJobsSetup(amount_number, unk_string){ }
	networkEarnFromGangopsJobsFinale(amount_number, unk_string){ }
	_0x2A7CEC72C3443BCC(p0_number, p1_number, p2_number){ }
	_0xE0F82D68C7039158(p0_number){ }
	_0xB4DEAE67F35E2ACD(p0_number){ }
	networkEarnFromBbEventBonus(amount_number){ }
	_0x2A93C46AAB1EACC9(p0_number, p1_number, p2_number, p3_number){ }
	_0x226C284C830D0CA8(p0_number, p1_number, p2_number, p3_number){ }
	networkEarnFromHackerTruckMission(p0_number, amount_number, p2_number, p3_number){ }
	_0xED76D195E6E3BF7F(p0_number, p1_number, p2_number, p3_number){ }
	_0x1DC9B749E7AE282B(p0_number, p1_number, p2_number, p3_number){ }
	_0xC6E74CF8C884C880(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	_0x65482BFD0923C8A1(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	networkSpentRdrhatchetBonus(amount_number, p1_boolean, p2_boolean){ }
	networkSpentNightclubEntryFee(player_number, amount_number, p1_number, p2_boolean, p3_boolean){ }
	networkSpentNightclubBarDrink(amount_number, p1_number, p2_boolean, p3_boolean){ }
	networkSpentBountyHunterMission(amount_number, p1_boolean, p2_boolean){ }
	networkSpentRehireDj(amount_number, p1_number, p2_boolean, p3_boolean){ }
	networkSpentArenaJoinSpectator(amount_number, p1_number, p2_boolean, p3_boolean){ }
	networkEarnFromArenaSkillLevelProgression(amount_number, p1_number){ }
	networkEarnFromArenaCareerProgression(amount_number, p1_number){ }
	networkSpentMakeItRain(amount_number, p1_boolean, p2_boolean){ }
	networkSpentBuyArena(amount_number, p1_boolean, p2_boolean, p3_string){ }
	networkSpentUpgradeArena(amount_number, p1_boolean, p2_boolean, p3_string){ }
	networkSpentArenaSpectatorBox(amount_number, p1_number, p2_boolean, p3_boolean){ }
	networkSpentSpinTheWheelPayment(amount_number, p1_number, p2_boolean, p3_boolean){ }
	networkEarnFromSpinTheWheelCash(amount_number){ }
	networkSpentArenaPremium(amount_number, p1_boolean, p2_boolean){ }
	networkEarnFromArenaWar(amount_number, p1_number, p2_number, p3_number){ }
	networkEarnFromAssassinateTargetKilled2(amount_number){ }
	networkEarnFromBbEventCargo(amount_number){ }
	networkGetVcBankBalance(){ }
	networkGetVcWalletBalance(characterSlot_number){ }
	networkGetVcBalance(){ }
	networkGetEvcBalance(){ }
	networkGetPvcBalance(){ }
	networkGetStringWalletBalance(characterSlot_number){ }
	networkGetStringBankBalance(){ }
	networkGetStringBankWalletBalance(){ }
	networkGetVcWalletBalanceIsNotLessThan(amount_number, characterSlot_number){ }
	networkGetVcBankBalanceIsNotLessThan(amount_number){ }
	networkGetVcBankWalletBalanceIsNotLessThan(amount_number, characterSlot_number){ }
	networkGetRemainingVcDailyTransfers(){ }
	_0x08E8EEADFD0DC4A0(amount_number){ }
	networkCanReceivePlayerCash(p0_number, p1_number, p2_number, p3_number){ }
	networkGetRemainingVcDailyTransfers2(){ }
	withdrawCashFromBank(amount_number){ }
	depositCashInBank(amount_number){ }
	_0xE154B48B68EF72BC(p0_number){ }
	_0x6FCF8DDEA146C45B(p0_number){ }
	netGameserverUseServerTransactions(){ }
	netGameserverCatalogItemExists(name_string){ }
	netGameserverCatalogItemExistsHash(hash_number){ }
	netGameserverGetPrice(itemHash_number, categoryHash_number, p2_boolean){ }
	netGameserverCatalogIsReady(){ }
	netGameserverIsCatalogValid(){ }
	_0x85F6C9ABA1DE2BCF(){ }
	_0x357B152EF96C30B6(){ }
	netGameserverGetCatalogState(state_number){ }
	_0xE3E5A7C64CA2C6ED(){ }
	_0x0395CB47B022E62C(p0_number){ }
	netGameserverStartSession(charSlot_number){ }
	_0x72EB7BA9B69BF6AB(){ }
	_0x170910093218C8B9(p0_number){ }
	_0xC13C38E47EA5DF31(p0_number){ }
	netGameserverIsSessionValid(charSlot_number){ }
	_0x74A0FD0688F1EE45(p0_number){ }
	netGameserverSessionApplyReceivedData(charSlot_number){ }
	netGameserverIsSessionRefreshPending(){ }
	netGameserverGetBalance(inventory_boolean, playerbalance_boolean){ }
	_0x613F125BA3BD2EB9(){ }
	netGameserverGetTransactionManagerData(p0_number, p1_boolean){ }
	netGameserverBasketStart(transactionId_number, categoryHash_number, actionHash_number, flags_number){ }
	netGameserverBasketDelete(){ }
	netGameserverBasketEnd(){ }
	netGameserverBasketAddItem(itemData_number, quantity_number){ }
	netGameserverBasketIsFull(){ }
	netGameserverBasketApplyServerData(p0_number, p1_number){ }
	netGameserverCheckoutStart(transactionId_number){ }
	_0xC830417D630A50F9(transactionId_number){ }
	_0x79EDAC677CA62F81(transactionId_number){ }
	netGameserverBeginService(transactionId_number, categoryHash_number, itemHash_number, actionTypeHash_number, value_number, flags_number){ }
	netGameserverEndService(transactionId_number){ }
	netGameserverDeleteCharacterSlot(slot_number, transfer_boolean, reason_number){ }
	netGameserverDeleteCharacterSlotGetStatus(){ }
	netGameserverDeleteSetTelemetryNonceSeed(){ }
	netGameserverTransferBankToWallet(charSlot_number, amount_number){ }
	netGameserverTransferWalletToBank(charSlot_number, amount_number){ }
	netGameserverTransferCashGetStatus(){ }
	netGameserverTransferCashGetStatus2(){ }
	netGameserverTransferCashSetTelemetryNonceSeed(){ }
	netGameserverSetTelemetryNonceSeed(p0_number){ }
	getOnlineVersion(){ }
	networkIsSignedIn(){ }
	networkIsSignedOnline(){ }
	_0xBD545D44CCE70597(){ }
	_0xEBCAB9E5048434F4(){ }
	_0x74FB3E29E6D10FA9(){ }
	_0x7808619F31FF22DB(){ }
	_0xA0FA4EC6A05DA44E(){ }
	networkAreRosAvailable(){ }
	_0x8D11E61A4ABF49CC(){ }
	networkIsCloudAvailable(){ }
	_0x67A5589628E0CFF6(){ }
	_0xBA9775570DB788CF(){ }
	networkIsHost(){ }
	_0x4237E822315D8BA9(){ }
	networkHaveOnlinePrivileges(){ }
	networkHasAgeRestrictedProfile(){ }
	_0x72D918C99BCACC54(p0_number){ }
	_0xAEEF48CDF5B6CE7C(p0_number, p1_number){ }
	_0x78321BEA235FD8CD(p0_number, p1_boolean){ }
	_0x595F028698072DD9(p0_number, p1_number, p2_boolean){ }
	_0x83F28CE49FBBFFBA(p0_number, p1_number, p2_boolean){ }
	_0x07EAB372C8841D99(p0_number, p1_number, p2_number){ }
	_0x906CA41A4B74ECA4(){ }
	_0x023ACAB2DC9DC4A4(){ }
	_0x76BF03FADBF154F5(){ }
	networkGetAgeGroup(){ }
	_0x0CF6CC51AA18F0F8(p0_number, p1_number, p2_number){ }
	_0x1F7BC3539F9E0224(){ }
	networkHaveOnlinePrivilege2(){ }
	_0xA8ACB6459542A8C8(){ }
	_0x83FE8D7229593017(){ }
	_0x53C10C8BD774F2C9(){ }
	networkCanBail(){ }
	networkBail(p0_number, p1_number, p2_number){ }
	_0x283B6062A2C01E9B(){ }
	_0x8B4FFC790CA131EF(p0_number, p1_number, p2_number, p3_number){ }
	networkTransitionTrack(hash_number, p1_number, p2_number, state_number, p4_number){ }
	_0x04918A41BC9B8157(p0_number, p1_number, p2_number){ }
	networkCanAccessMultiplayer(loadingState_number){ }
	networkIsMultiplayerDisabled(){ }
	networkCanEnterMultiplayer(){ }
	networkSessionEnter(p0_number, p1_number, p2_number, maxPlayers_number, p4_number, p5_number){ }
	networkSessionFriendMatchmaking(p0_number, p1_number, maxPlayers_number, p3_boolean){ }
	networkSessionCrewMatchmaking(p0_number, p1_number, p2_number, maxPlayers_number, p4_boolean){ }
	networkSessionActivityQuickmatch(p0_number, p1_number, p2_number, p3_number){ }
	networkSessionHost(p0_number, maxPlayers_number, p2_boolean){ }
	networkSessionHostClosed(p0_number, maxPlayers_number){ }
	networkSessionHostFriendsOnly(p0_number, maxPlayers_number){ }
	networkSessionIsClosedFriends(){ }
	networkSessionIsClosedCrew(){ }
	networkSessionIsSolo(){ }
	networkSessionIsPrivate(){ }
	networkSessionEnd(p0_boolean, p1_boolean){ }
	networkSessionKickPlayer(player_number){ }
	networkSessionGetIsPlayerVotedToKick(player_number){ }
	_0x041C7F2A6C9894E6(p0_number, p1_number, p2_number){ }
	_0x59DF79317F85A7E0(){ }
	_0xFFE1E5B792D92B34(){ }
	networkSessionSetMatchmakingGroup(matchmakingGroup_number){ }
	networkSessionSetMaxPlayers(playerType_number, playerCount_number){ }
	networkSessionGetUnk(p0_number){ }
	_0xCAE55F48D3D7875C(p0_number){ }
	_0xF49ABC20D8552257(p0_number){ }
	_0x4811BBAC21C5FCD5(p0_number){ }
	_0x5539C3EBF104A53A(p0_boolean){ }
	_0x702BC4D605522539(p0_number){ }
	_0x3F52E880AAF6C8CA(p0_boolean){ }
	_0xF1EEA2DDA9FFA69D(p0_number){ }
	_0x5ECD378EE64450AB(p0_number){ }
	_0x59D421683D31835A(p0_number){ }
	_0x1153FA02A659051C(){ }
	networkSessionHosted(p0_boolean){ }
	networkAddFollowers(p0_number, p1_number){ }
	networkClearFollowers(){ }
	networkGetServerTime(hours_number, minutes_number, seconds_number){ }
	_0x600F8CB31C7AAB6E(p0_number){ }
	networkGetTargetingMode(){ }
	_0xE532D6811B3A4D2A(p0_number){ }
	networkFindMatchedGamers(p0_number, p1_number, p2_number, p3_number){ }
	networkIsFindingGamers(){ }
	_0xF9B83B77929D8863(){ }
	networkGetNumFoundGamers(){ }
	networkGetFoundGamer(p0_number, p1_number){ }
	networkClearFoundGamers(){ }
	networkGetGamerStatus(p0_number){ }
	_0x2CC848A861D01493(){ }
	_0x94A8394D150B013A(){ }
	_0x5AE17C6B0134B7F1(){ }
	_0x02A8BEC6FD9AF660(p0_number, p1_number){ }
	networkClearGetGamerStatus(){ }
	networkSessionJoinInvite(){ }
	networkSessionCancelInvite(){ }
	networkSessionForceCancelInvite(){ }
	networkHasPendingInvite(){ }
	_0xC42DD763159F3461(){ }
	networkAcceptInvite(){ }
	networkSessionWasInvited(){ }
	networkSessionGetInviter(networkHandle_number){ }
	_0xD313DE83394AF134(){ }
	_0xBDB6F89C729CF388(){ }
	networkSuppressInvite(toggle_boolean){ }
	networkBlockInvites(toggle_boolean){ }
	networkBlockInvites2(toggle_boolean){ }
	_0xF814FEC6A19FD6E0(){ }
	networkBlockKickedPlayers(p0_boolean){ }
	_0x7AC752103856FB20(p0_boolean){ }
	_0x74698374C45701D2(){ }
	_0x140E6A44870A11CE(){ }
	networkSessionHostSinglePlayer(p0_number){ }
	networkSessionLeaveSinglePlayer(){ }
	networkIsGameInProgress(){ }
	networkIsSessionActive(){ }
	networkIsInSession(){ }
	networkIsSessionStarted(){ }
	networkIsSessionBusy(){ }
	networkCanSessionEnd(){ }
	networkSessionMarkVisible(toggle_boolean){ }
	networkSessionIsVisible(){ }
	networkSessionBlockJoinRequests(toggle_boolean){ }
	networkSessionChangeSlots(p0_number, p1_boolean){ }
	networkSessionGetPrivateSlots(){ }
	networkSessionVoiceHost(){ }
	networkSessionVoiceLeave(){ }
	networkSessionVoiceConnectToPlayer(p0_number){ }
	networkSetKeepFocuspoint(p0_boolean, p1_number){ }
	_0x5B8ED3DB018927B1(p0_number){ }
	_0x855BC38818F6F684(){ }
	_0xB5D3453C98456528(){ }
	_0xEF0912DDF7C4CB4B(){ }
	networkSendTextMessage(message_string, networkHandle_number){ }
	networkSetActivitySpectator(toggle_boolean){ }
	networkIsActivitySpectator(){ }
	_0x0E4F77F7B9D74D84(p0_number){ }
	networkSetActivitySpectatorMax(maxSpectators_number){ }
	networkGetActivityPlayerNum(p0_boolean){ }
	networkIsActivitySpectatorFromHandle(networkHandle_number){ }
	networkHostTransition(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number){ }
	networkDoTransitionQuickmatch(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	networkDoTransitionQuickmatchAsync(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	networkDoTransitionQuickmatchWithGroup(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number){ }
	networkJoinGroupActivity(){ }
	_0x1888694923EF4591(){ }
	_0xB13E88E655E5A3BC(){ }
	networkIsTransitionClosedFriends(){ }
	networkIsTransitionClosedCrew(){ }
	networkIsTransitionSolo(){ }
	networkIsTransitionPrivate(){ }
	_0x617F49C2668E6155(){ }
	_0x261E97AD7BCF3D40(p0_boolean){ }
	_0x39917E1B4CB0F911(p0_boolean){ }
	_0x2CE9D95E4051AECD(p0_number){ }
	networkSetTransitionCreatorHandle(p0_number){ }
	networkClearTransitionCreatorHandle(){ }
	networkInviteGamersToTransition(p0_number, p1_number){ }
	networkSetGamerInvitedToTransition(networkHandle_number){ }
	networkLeaveTransition(){ }
	networkLaunchTransition(){ }
	_0xA2E9C1AB8A92E8CD(toggle_boolean){ }
	networkBailTransition(){ }
	networkDoTransitionToGame(p0_boolean, maxPlayers_number){ }
	networkDoTransitionToNewGame(p0_boolean, maxPlayers_number, p2_boolean){ }
	networkDoTransitionToFreemode(p0_number, p1_number, p2_boolean, players_number, p4_boolean){ }
	networkDoTransitionToNewFreemode(p0_number, p1_number, players_number, p3_boolean, p4_boolean, p5_boolean){ }
	networkIsTransitionToGame(){ }
	networkGetTransitionMembers(data_number, dataCount_number){ }
	networkApplyTransitionParameter(p0_number, p1_number){ }
	networkApplyTransitionParameterString(p0_number, string_string, p2_boolean){ }
	networkSendTransitionGamerInstruction(networkHandle_number, p1_string, p2_number, p3_number, p4_boolean){ }
	networkMarkTransitionGamerAsFullyJoined(p0_number){ }
	networkIsTransitionHost(){ }
	networkIsTransitionHostFromHandle(networkHandle_number){ }
	networkGetTransitionHost(networkHandle_number){ }
	networkIsInTransition(){ }
	networkIsTransitionStarted(){ }
	networkIsTransitionBusy(){ }
	networkIsTransitionMatchmaking(){ }
	_0xC571D0E77D8BBC29(){ }
	_0x1398582B7F72B3ED(p0_number){ }
	_0x1F8E00FB18239600(p0_number){ }
	_0xF6F4383B7C92F11A(p0_number){ }
	networkOpenTransitionMatchmaking(){ }
	networkCloseTransitionMatchmaking(){ }
	networkIsTransitionOpenToMatchmaking(){ }
	networkSetTransitionVisibilityLock(p0_boolean, p1_boolean){ }
	networkIsTransitionVisibilityLocked(){ }
	networkSetTransitionActivityId(p0_number){ }
	networkChangeTransitionSlots(p0_number, p1_number){ }
	_0x973D76AA760A6CB6(p0_boolean){ }
	networkHasPlayerStartedTransition(player_number){ }
	networkAreTransitionDetailsValid(p0_number){ }
	networkJoinTransition(player_number){ }
	networkHasInvitedGamerToTransition(p0_number){ }
	_0x3F9990BF5F22759C(p0_number){ }
	networkIsActivitySession(){ }
	_0x4A9FDE3A5A6D0437(toggle_boolean){ }
	networkSendPresenceInvite(networkHandle_number, p1_number, p2_number, p3_number){ }
	networkSendPresenceTransitionInvite(p0_number, p1_number, p2_number, p3_number){ }
	_0x1171A97A3D3981B6(p0_number, p1_number, p2_number, p3_number){ }
	_0x742B58F723233ED9(p0_number){ }
	networkGetNumPresenceInvites(){ }
	networkAcceptPresenceInvite(p0_number){ }
	networkRemovePresenceInvite(p0_number){ }
	networkGetPresenceInviteId(p0_number){ }
	networkGetPresenceInviteInviter(p0_number){ }
	networkGetPresenceInviteHandle(p0_number, p1_number){ }
	networkGetPresenceInviteSessionId(p0_number){ }
	_0x24409FC4C55CB22D(p0_number){ }
	_0xD39B3FFF8FFDD5BF(p0_number){ }
	_0x728C4CC7920CD102(p0_number){ }
	_0x3DBF2DF0AEB7D289(p0_number){ }
	_0x8806CEBFABD3CE05(p0_number){ }
	networkHasFollowInvite(){ }
	networkActionFollowInvite(){ }
	networkClearFollowInvite(){ }
	_0xEBF8284D8CADEB53(){ }
	networkRemoveTransitionInvite(p0_number){ }
	networkRemoveAllTransitionInvite(){ }
	_0xF083835B70BA9BFE(){ }
	networkInviteGamers(p0_number, p1_number, p2_number, p3_number){ }
	networkHasInvitedGamer(p0_number){ }
	_0x71DC455F5CD1C2B1(networkHandle_number){ }
	_0x3855FB5EB2C5E8B2(p0_number){ }
	networkGetCurrentlySelectedGamerHandleFromInviteMenu(p0_number){ }
	networkSetCurrentlySelectedGamerHandleFromInviteMenu(p0_number){ }
	networkSetInviteOnCallForInviteMenu(p0_number){ }
	networkCheckDataManagerSucceededForHandle(p0_number, p1_number){ }
	_0x4AD490AE1536933B(p0_number, p1_number){ }
	_0x0D77A82DC2D0DA59(p0_number, p1_number){ }
	filloutPmPlayerList(networkHandle_number, p1_number, p2_number){ }
	filloutPmPlayerListWithNames(p0_number, p1_number, p2_number, p3_number){ }
	_0xE26CCFF8094D8C74(p0_number){ }
	networkSetCurrentDataManagerHandle(p0_number){ }
	networkIsInPlatformParty(){ }
	networkGetPlatformPartyUnk(){ }
	networkGetPlatformPartyMembers(data_number, dataSize_number){ }
	_0xFD8B834A8BA05048(){ }
	networkIsChattingInPlatformParty(networkHandle_number){ }
	_0x2BF66D2E7414F686(){ }
	_0x14922ED3E38761F0(){ }
	_0x6CE50E47F5543D0C(){ }
	_0xFA2888E3833C8E96(){ }
	_0x25D990F8E0E3F13C(){ }
	_0xF1B84178F8674195(p0_number){ }
	networkGetRandomInt(){ }
	networkGetRandomIntRanged(rangeStart_number, rangeEnd_number){ }
	networkPlayerIsCheater(){ }
	_0x172F75B6EE2233BA(){ }
	networkPlayerIsBadsport(){ }
	triggerScriptCrcCheckOnPlayer(player_number, p1_number, scriptHash_number){ }
	_0xA12D3A5A3753CC23(){ }
	_0xF287F506767CC8A9(){ }
	remoteCheatDetected(player_number, a_number, b_number){ }
	badSportPlayerLeftDetected(networkHandle_number, event_number, amountReceived_number){ }
	networkApplyPedScarData(ped_number, p1_number){ }
	networkSetThisScriptIsNetworkScript(lobbySize_number, p1_boolean, playerId_number){ }
	networkIsThisScriptMarked(p0_number, p1_boolean, p2_number){ }
	networkGetThisScriptIsNetworkScript(){ }
	networkGetNumParticipantsHost(){ }
	networkGetNumParticipants(){ }
	networkGetScriptStatus(){ }
	networkRegisterHostBroadcastVariables(vars_number, numVars_number){ }
	networkRegisterPlayerBroadcastVariables(vars_number, numVars_number){ }
	networkFinishBroadcastingData(){ }
	_0x5D10B3795F3FC886(){ }
	networkGetPlayerIndex(player_number){ }
	networkGetParticipantIndex(index_number){ }
	networkGetPlayerIndexFromPed(ped_number){ }
	networkGetNumConnectedPlayers(){ }
	networkIsPlayerConnected(player_number){ }
	networkGetTotalNumPlayers(){ }
	networkIsParticipantActive(p0_number){ }
	networkIsPlayerActive(player_number){ }
	networkIsPlayerAParticipant(player_number){ }
	networkIsHostOfThisScript(){ }
	networkGetHostOfThisScript(){ }
	networkGetHostOfScript(scriptName_string, p1_number, p2_number){ }
	networkSetMissionFinished(){ }
	networkIsScriptActive(scriptName_string, player_number, p2_boolean, p3_number){ }
	_0x560B423D73015E77(p0_number){ }
	networkGetNumScriptParticipants(p0_number, p1_number, p2_number){ }
	_0x638A3A81733086DB(){ }
	_0x1AD5B71586B94820(p0_number, p1_number, p2_number){ }
	_0x2302C0264EA58D31(){ }
	_0x741A3D8380319A81(){ }
	participantId(){ }
	participantIdToInt(){ }
	_0x2DA41ED6E1FCD7A5(p0_number, p1_number){ }
	networkGetDestroyerOfNetworkId(netId_number, weaponHash_number){ }
	_0xC434133D9BA52777(p0_number, p1_number){ }
	_0x83660B734994124D(p0_number, p1_number, p2_number){ }
	networkGetDestroyerOfEntity(p0_number, p1_number, weaponHash_number){ }
	networkGetEntityKillerOfPlayer(player_number, weaponHash_number){ }
	networkResurrectLocalPlayer(x_number, y_number, z_number, heading_number, unk_boolean, changetime_boolean, p6_number){ }
	networkSetLocalPlayerInvincibleTime(time_number){ }
	networkIsLocalPlayerInvincible(){ }
	networkDisableInvincibleFlashing(player_number, toggle_boolean){ }
	networkSetLocalPlayerSyncLookAt(toggle_boolean){ }
	_0xB07D3185E11657A5(entity_number){ }
	networkGetNetworkIdFromEntity(entity_number){ }
	networkGetEntityFromNetworkId(netId_number){ }
	networkGetEntityIsNetworked(entity_number){ }
	networkGetEntityIsLocal(entity_number){ }
	networkRegisterEntityAsNetworked(entity_number){ }
	networkUnregisterNetworkedEntity(entity_number){ }
	networkDoesNetworkIdExist(netID_number){ }
	networkDoesEntityExistWithNetworkId(entity_number){ }
	networkRequestControlOfNetworkId(netId_number){ }
	networkHasControlOfNetworkId(netId_number){ }
	_0x7242F8B741CE1086(netId_number){ }
	networkRequestControlOfEntity(entity_number){ }
	networkRequestControlOfDoor(doorID_number){ }
	networkHasControlOfEntity(entity_number){ }
	networkHasControlOfPickup(pickup_number){ }
	networkHasControlOfDoor(doorHash_number){ }
	networkIsDoorNetworked(doorHash_number){ }
	vehToNet(vehicle_number){ }
	pedToNet(ped_number){ }
	objToNet(object_number){ }
	netToVeh(netHandle_number){ }
	netToPed(netHandle_number){ }
	netToObj(netHandle_number){ }
	netToEnt(netHandle_number){ }
	networkGetLocalHandle(networkHandle_number, bufferSize_number){ }
	networkHandleFromUserId(userId_string, networkHandle_number, bufferSize_number){ }
	networkHandleFromMemberId(memberId_string, networkHandle_number, bufferSize_number){ }
	networkHandleFromPlayer(player_number, networkHandle_number, bufferSize_number){ }
	networkHashFromPlayerHandle(player_number){ }
	networkHashFromGamerHandle(networkHandle_number){ }
	networkHandleFromFriend(friendIndex_number, networkHandle_number, bufferSize_number){ }
	networkGamertagFromHandleStart(networkHandle_number){ }
	networkGamertagFromHandlePending(){ }
	networkGamertagFromHandleSucceeded(){ }
	networkGetGamertagFromHandle(networkHandle_number){ }
	_0xD66C9E72B3CC4982(p0_number, p1_number){ }
	_0x58CC181719256197(p0_number, p1_number, p2_number){ }
	networkAreHandlesTheSame(netHandle1_number, netHandle2_number){ }
	networkIsHandleValid(networkHandle_number, bufferSize_number){ }
	networkGetPlayerFromGamerHandle(networkHandle_number){ }
	networkMemberIdFromGamerHandle(networkHandle_number){ }
	networkIsGamerInMySession(networkHandle_number){ }
	networkShowProfileUi(networkHandle_number){ }
	networkPlayerGetName(player_number){ }
	networkPlayerGetUserid(player_number, userID_number){ }
	networkPlayerIsRockstarDev(player_number){ }
	networkPlayerSomething(player_number){ }
	networkGetEntityNetScriptId(entity_number){ }
	_0x37D5F739FD494675(p0_number){ }
	networkIsInactiveProfile(p0_number){ }
	networkGetMaxFriends(){ }
	networkGetFriendCount(){ }
	networkGetFriendName(friendIndex_number){ }
	networkGetFriendNameFromIndex(friendIndex_number){ }
	networkIsFriendOnline(name_string){ }
	networkIsFriendHandleOnline(networkHandle_number){ }
	networkIsFriendInSameTitle(friendName_string){ }
	networkIsFriendInMultiplayer(friendName_string){ }
	networkIsFriend(networkHandle_number){ }
	networkIsPendingFriend(p0_number){ }
	networkIsAddingFriend(){ }
	networkAddFriend(networkHandle_number, message_string){ }
	networkIsFriendIndexOnline(friendIndex_number){ }
	_0x1B857666604B1A74(toggle_boolean){ }
	_0x82377B65E943F72D(p0_number){ }
	networkCanSetWaypoint(){ }
	_0x4C2A9FDC22377075(){ }
	_0xB309EBEA797E001F(p0_number){ }
	_0x26F07DD83A5F7F98(){ }
	networkHasHeadset(){ }
	_0x7D395EA61622E116(p0_boolean){ }
	_0xC0D2AF00BCC234CA(){ }
	networkGamerHasHeadset(networkHandle_number){ }
	networkIsGamerTalking(networkHandle_number){ }
	networkCanCommunicateWithGamer2(networkHandle_number){ }
	networkCanCommunicateWithGamer(networkHandle_number){ }
	networkIsGamerMutedByMe(networkHandle_number){ }
	networkAmIMutedByGamer(networkHandle_number){ }
	networkIsGamerBlockedByMe(networkHandle_number){ }
	networkAmIBlockedByGamer(networkHandle_number){ }
	networkCanViewGamerUserContent(networkHandle_number){ }
	networkHasViewGamerUserContentResult(networkHandle_number){ }
	networkCanPlayMultiplayerWithGamer(networkHandle_number){ }
	networkCanGamerPlayMultiplayerWithMe(networkHandle_number){ }
	networkIsPlayerTalking(player_number){ }
	networkPlayerHasHeadset(player_number){ }
	networkIsPlayerMutedByMe(player_number){ }
	networkAmIMutedByPlayer(player_number){ }
	networkIsPlayerBlockedByMe(player_number){ }
	networkAmIBlockedByPlayer(player_number){ }
	networkGetPlayerLoudness(player_number){ }
	networkSetTalkerProximity(value_number){ }
	networkGetTalkerProximity(){ }
	networkSetVoiceActive(toggle_boolean){ }
	_0xCFEB46DCD7D8D5EB(p0_boolean){ }
	networkOverrideTransitionChat(p0_boolean){ }
	networkSetTeamOnlyChat(toggle_boolean){ }
	_0x265559DA40B3F327(p0_number){ }
	_0x4348BFDA56023A2F(p0_number, p1_number){ }
	networkOverrideTeamRestrictions(team_number, toggle_boolean){ }
	networkSetOverrideSpectatorMode(toggle_boolean){ }
	_0x3C5C1E2C2FF814B1(p0_boolean){ }
	_0x9D7AFCBF21C51712(p0_boolean){ }
	_0xF46A1E03E8755980(p0_boolean){ }
	_0x6A5D89D7769A40D8(p0_boolean){ }
	networkOverrideChatRestrictions(player_number, toggle_boolean){ }
	networkOverrideSendRestrictions(player_number, toggle_boolean){ }
	networkChatMute(toggle_boolean){ }
	networkOverrideReceiveRestrictions(player_number, toggle_boolean){ }
	_0x0FF2862B61A58AF9(toggle_boolean){ }
	networkSetVoiceChannel(channel_number){ }
	networkClearVoiceChannel(){ }
	networkApplyVoiceProximityOverride(x_number, y_number, z_number){ }
	networkClearVoiceProximityOverride(){ }
	_0x5E3AA4CA2B6FB0EE(p0_number){ }
	_0xCA575C391FEA25CC(p0_number){ }
	_0xADB57E5B663CCA8B(p0_number, p1_number, p2_number){ }
	networkIsTextChatActive(){ }
	shutdownAndLaunchSinglePlayerGame(){ }
	shutdownAndLoadMostRecentSave(){ }
	networkSetFriendlyFireOption(toggle_boolean){ }
	networkSetRichPresence(p0_number, p1_number, p2_number, p3_number){ }
	networkSetRichPresenceString(p0_number, string_string){ }
	networkGetTimeoutTime(){ }
	networkRespawnCoords(player_number, x_number, y_number, z_number, p4_boolean, p5_boolean){ }
	_0xBF22E0F32968E967(player_number, p1_boolean){ }
	removeAllStickyBombsFromEntity(entity_number, ped_number){ }
	_0x2E4C123D1C8A710E(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	networkClanServiceIsValid(){ }
	networkClanPlayerIsActive(networkHandle_number){ }
	networkClanPlayerGetDesc(clanDesc_number, bufferSize_number, networkHandle_number){ }
	networkClanIsRockstarClan(clanDesc_number, bufferSize_number){ }
	_0xF45352426FF3A4F0(clanDesc_number, bufferSize_number, p2_string){ }
	networkClanGetNumMembershipDesc(){ }
	networkClanGetMembershipDesc(memberDesc_number, p1_number){ }
	networkClanDownloadMembership(networkHandle_number){ }
	networkClanDownloadMembershipPending(p0_number){ }
	networkIsClanMembershipFinishedDownloading(){ }
	networkClanRemoteMembershipsAreInCache(p0_number){ }
	networkClanGetMembershipCount(p0_number){ }
	networkClanGetMembershipValid(p0_number, p1_number){ }
	networkClanGetMembership(p0_number, clanMembership_number, p2_number){ }
	networkClanJoin(clanDesc_number){ }
	networkClanAnimation(animDict_string, animName_string){ }
	_0x2B51EDBEFC301339(p0_number, p1_string){ }
	_0xC32EA7A2F6CA7557(){ }
	networkClanGetEmblemTxdName(netHandle_number, txdName_string){ }
	_0x13518FF1C6B28938(p0_number){ }
	_0xA134777FF7F33331(p0_number, p1_number){ }
	_0x113E6E3E50E286B0(p0_number){ }
	networkGetPrimaryClanDataClear(){ }
	networkGetPrimaryClanDataCancel(){ }
	networkGetPrimaryClanDataStart(p0_number, p1_number){ }
	networkGetPrimaryClanDataPending(){ }
	networkGetPrimaryClanDataSuccess(){ }
	networkGetPrimaryClanDataNew(p0_number, p1_number){ }
	setNetworkIdCanMigrate(netId_number, toggle_boolean){ }
	setNetworkIdExistsOnAllMachines(netId_number, toggle_boolean){ }
	setNetworkIdSyncToPlayer(netId_number, player_number, toggle_boolean){ }
	networkSetEntityCanBlend(entity_number, toggle_boolean){ }
	_0x0379DAF89BA09AA5(p0_number, p1_number){ }
	networkSetEntityInvisibleToNetwork(entity_number, toggle_boolean){ }
	setNetworkIdVisibleInCutscene(netId_number, p1_boolean, p2_boolean){ }
	_0x32EBD154CB6B8B99(p0_number, p1_number, p2_number){ }
	setNetworkCutsceneEntities(toggle_boolean){ }
	_0x3FA36981311FA4FF(netId_number, state_boolean){ }
	networkCanNetworkIdBeSeen(netId_number){ }
	setLocalPlayerVisibleInCutscene(p0_boolean, p1_boolean){ }
	setLocalPlayerInvisibleLocally(p0_boolean){ }
	setLocalPlayerVisibleLocally(p0_boolean){ }
	setPlayerInvisibleLocally(player_number, toggle_boolean){ }
	setPlayerVisibleLocally(player_number, toggle_boolean){ }
	fadeOutLocalPlayer(p0_boolean){ }
	networkFadeOutEntity(entity_number, normal_boolean, slow_boolean){ }
	networkFadeInEntity(entity_number, state_boolean, p2_number){ }
	networkIsPlayerFading(player_number){ }
	networkIsEntityFading(entity_number){ }
	isPlayerInCutscene(player_number){ }
	setEntityVisibleInCutscene(p0_number, p1_boolean, p2_boolean){ }
	setEntityLocallyInvisible(entity_number){ }
	setEntityLocallyVisible(entity_number){ }
	isDamageTrackerActiveOnNetworkId(netID_number){ }
	activateDamageTrackerOnNetworkId(netID_number, toggle_boolean){ }
	isDamageTrackerActiveOnPlayer(player_number){ }
	activateDamageTrackerOnPlayer(player_number, toggle_boolean){ }
	isSphereVisibleToAnotherMachine(p0_number, p1_number, p2_number, p3_number){ }
	isSphereVisibleToPlayer(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	reserveNetworkMissionObjects(amount_number){ }
	reserveNetworkMissionPeds(amount_number){ }
	reserveNetworkMissionVehicles(amount_number){ }
	_0x797F9C5E661D920E(p0_number){ }
	_0x2C8DF5D129595281(p0_number){ }
	_0x42613035157E4208(p0_number){ }
	canRegisterMissionObjects(amount_number){ }
	canRegisterMissionPeds(amount_number){ }
	canRegisterMissionVehicles(amount_number){ }
	canRegisterMissionPickups(amount_number){ }
	_0xE16AA70CE9BEEDC3(p0_number){ }
	canRegisterMissionEntities(ped_amt_number, vehicle_amt_number, object_amt_number, pickup_amt_number){ }
	getNumReservedMissionObjects(p0_boolean, p1_number){ }
	getNumReservedMissionPeds(p0_boolean, p1_number){ }
	getNumReservedMissionVehicles(p0_boolean, p1_number){ }
	_0x12B6281B6C6706C0(p0_boolean){ }
	_0xCB215C4B56A7FAE7(p0_boolean){ }
	_0x0CD9AB83489430EA(p0_boolean){ }
	_0xE42D626EEC94E5D9(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	_0xC7BE335216B5EC7C(){ }
	_0x0C1F7D49C39D2289(){ }
	_0x0AFCE529F69B21FF(){ }
	_0xA72835064DD63E4C(){ }
	_0xBA7F0B77D80A4EB7(p0_number, p1_number){ }
	getNetworkTime(){ }
	getNetworkTimeAccurate(){ }
	hasNetworkTimeStarted(){ }
	getTimeOffset(timeA_number, timeB_number){ }
	isTimeLessThan(timeA_number, timeB_number){ }
	isTimeMoreThan(timeA_number, timeB_number){ }
	isTimeEqualTo(timeA_number, timeB_number){ }
	getTimeDifference(timeA_number, timeB_number){ }
	getTimeAsString(time_number){ }
	_0xF12E6CD06C73D69E(){ }
	getCloudTimeAsInt(){ }
	getDateAndTimeFromUnixEpoch(unixEpoch_number, timeStructure_number){ }
	networkSetInSpectatorMode(toggle_boolean, playerPed_number){ }
	networkSetInSpectatorModeExtended(toggle_boolean, playerPed_number, p2_boolean){ }
	networkSetInFreeCamMode(toggle_boolean){ }
	_0x5C707A667DF8B9FA(toggle_boolean, player_number){ }
	networkIsInSpectatorMode(){ }
	networkSetInMpCutscene(p0_boolean, p1_boolean){ }
	networkIsInMpCutscene(){ }
	networkIsPlayerInMpCutscene(player_number){ }
	_0xFAC18E7356BD3210(){ }
	setNetworkVehicleRespotTimer(netId_number, time_number, p2_number, p3_number){ }
	setNetworkObjectNonContact(object_number, toggle_boolean){ }
	_0xA2A707979FE754DC(p0_number, p1_number){ }
	_0x838DA0936A24ED4D(p0_number, p1_number){ }
	usePlayerColourInsteadOfTeamColour(toggle_boolean, p1_boolean){ }
	_0x21D04D7BC538C146(entity_number){ }
	_0x13F1FCB111B820B0(p0_boolean){ }
	_0xA7C511FA1C5BDA38(p0_number, p1_number){ }
	_0x658500AE6D723A7E(p0_number){ }
	_0x17330EBF2F2124A8(){ }
	_0x4BA166079D658ED4(p0_number, p1_number){ }
	_0xD7B6C73CAD419BCF(p0_boolean){ }
	_0x7EF7649B64D7FF10(entity_number){ }
	_0x77758139EC9B66C7(p0_boolean){ }
	networkCreateSynchronisedScene(x_number, y_number, z_number, xRot_number, yRot_number, zRot_number, p6_number, p7_boolean, p8_boolean, p9_number, p10_number, p11_number){ }
	networkAddPedToSynchronisedScene(ped_number, netScene_number, animDict_string, animnName_string, speed_number, speedMultiplier_number, duration_number, flag_number, playbackRate_number, p9_number){ }
	_0xA5EAFE473E45C442(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number){ }
	networkAddEntityToSynchronisedScene(entity_number, netScene_number, animDict_string, animName_string, speed_number, speedMulitiplier_number, flag_number){ }
	networkForceLocalUseOfSyncedSceneCamera(netScene_number, animDict_string, animName_string){ }
	networkAttachSynchronisedSceneToEntity(netScene_number, entity_number, bone_number){ }
	networkStartSynchronisedScene(netScene_number){ }
	networkStopSynchronisedScene(netScene_number){ }
	networkConvertSynchronisedSceneToSynchronizedScene(netScene_number){ }
	_0xC9B43A33D09CADA7(p0_number){ }
	_0x144DA052257AE7D8(p0_number){ }
	_0xFB1F9381E80FA13F(p0_number, p1_number){ }
	_0x5A6FFA2433E2F14C(player_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, flags_number){ }
	_0x4BA92A18502BCA61(player_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number, flags_number){ }
	_0x3C891A251567DFCE(p0_number){ }
	_0xFB8F2A6F3DF08CBE(){ }
	networkGetRespawnResult(randomInt_number, coordinates_setAsUndefined, heading_number){ }
	_0x6C34F1208B8923FD(p0_number){ }
	_0x17E0198B3882C2CB(){ }
	_0xFB680D403909DC70(p0_number, p1_number){ }
	networkEndTutorialSession(){ }
	networkIsInTutorialSession(){ }
	_0xB37E4E6A2388CA7B(){ }
	_0x35F0B98A8387274D(){ }
	_0x3B39236746714134(player_number){ }
	networkIsPlayerEqualToIndex(player_number, index_number){ }
	networkConcealPlayer(player_number, toggle_boolean, p2_boolean){ }
	networkIsPlayerConcealed(player_number){ }
	networkConcealEntity(entity_number, toggle_boolean){ }
	networkIsEntityConcealed(entity_number){ }
	networkOverrideClockTime(Hours_number, Minutes_number, Seconds_number){ }
	networkClearClockTimeOverride(){ }
	networkIsClockTimeOverridden(){ }
	networkAddEntityArea(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	networkAddEntityAngledArea(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	_0x25B99872D588A101(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	_0x2B1C623823DB0D9D(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	networkRemoveEntityArea(p0_number){ }
	_0xE64A3CA08DFA37A9(p0_number){ }
	_0x4DF7CFFF471A7FB1(p0_number){ }
	_0x4A2D4E8BF4265B0F(p0_number){ }
	networkSetNetworkIdDynamic(netID_number, toggle_boolean){ }
	_0xA6FCECCF4721D679(p0_number){ }
	_0x95BAF97C82464629(p0_number, p1_number){ }
	networkRequestCloudBackgroundScripts(){ }
	networkIsCloudBackgroundScriptsRequestPending(){ }
	networkRequestCloudTunables(){ }
	networkIsTunableCloudRequestPending(){ }
	networkGetTunablesVersion(){ }
	networkDoesTunableExist(tunableContext_string, tunableName_string){ }
	networkAccessTunableInt(tunableContext_string, tunableName_string, value_number){ }
	networkAccessTunableFloat(tunableContext_string, tunableName_string, value_number){ }
	networkAccessTunableBool(tunableContext_string, tunableName_string){ }
	networkDoesTunableExistHash(tunableContext_number, tunableName_number){ }
	networkAllocateTunablesRegistrationDataMap(){ }
	networkAccessTunableIntHash(tunableContext_number, tunableName_number, value_number){ }
	networkRegisterTunableIntHash(contextHash_number, nameHash_number, value_number){ }
	networkAccessTunableFloatHash(tunableContext_number, tunableName_number, value_number){ }
	networkRegisterTunableFloatHash(contextHash_number, nameHash_number, value_number){ }
	networkAccessTunableBoolHash(tunableContext_number, tunableName_number){ }
	networkRegisterTunableBoolHash(contextHash_number, nameHash_number, value_boolean){ }
	networkTryAccessTunableBoolHash(tunableContext_number, tunableName_number, defaultValue_boolean){ }
	networkGetContentModifierListId(contentHash_number){ }
	_0x7DB53B37A2F211A0(){ }
	networkResetBodyTracker(){ }
	networkGetNumBodyTrackers(){ }
	_0x2E0BF682CC778D49(p0_number){ }
	_0x0EDE326D47CD0F3E(ped_number, player_number){ }
	_0x890E2C5ABED7236D(p0_number, p1_number){ }
	networkExplodeVehicle(vehicle_number, isAudible_boolean, isInvisible_boolean, p3_boolean){ }
	_0x2A5E0621DD815A9A(p0_number, p1_number, p2_number, p3_number){ }
	_0xCD71A4ECAB22709E(entity_number){ }
	_0xA7E30DE9272B6D49(ped_number, x_number, y_number, z_number, p4_number){ }
	_0xE6717E652B8C8D8A(p0_number, p1_number){ }
	_0x407091CF6037118E(netID_number){ }
	networkSetPropertyId(id_number){ }
	networkClearPropertyId(){ }
	_0x367EF5E2F439B4C6(p0_number){ }
	_0x94538037EE44F5CF(p0_boolean){ }
	networkCacheLocalPlayerHeadBlendData(){ }
	networkHasCachedPlayerHeadBlendData(player_number){ }
	networkApplyCachedPlayerHeadBlendData(ped_number, player_number){ }
	getNumCommerceItems(){ }
	isCommerceDataValid(){ }
	_0xB606E6CC59664972(p0_number){ }
	_0x1D4DC17C38FEAFF0(){ }
	getCommerceItemId(index_number){ }
	getCommerceItemName(index_number){ }
	_0xCA94551B50B4932C(p0_number){ }
	getCommerceItemNumCats(index_number){ }
	getCommerceItemCat(index_number, index2_number){ }
	_0x58C21165F6545892(p0_string, p1_string, p2_number){ }
	isCommerceStoreOpen(){ }
	setStoreEnabled(toggle_boolean){ }
	requestCommerceItemImage(index_number){ }
	releaseAllCommerceItemImages(){ }
	_0x722F5D28B61C5EA8(p0_number){ }
	isStoreAvailableToUser(){ }
	_0x265635150FB0D82E(){ }
	_0x444C4525ECE0A4B9(){ }
	_0x59328EB08C5CEB2B(){ }
	_0xFAE628F1E9ADB239(p0_number, p1_number, p2_number){ }
	_0x754615490A029508(){ }
	_0x155467ACA0F55705(){ }
	cloudDeleteMemberFile(p0_string){ }
	_0x4C61B39930D045DA(p0_number){ }
	_0x3A3D5568AF297CD5(p0_number){ }
	cloudCheckAvailability(){ }
	_0xC7ABAC5DE675EE3B(){ }
	_0x0B0CC10720653F3B(){ }
	_0x8B0C2964BA471961(){ }
	_0x88B588B41FF7868E(){ }
	_0x67FC09BC554A75E5(){ }
	_0x966DD84FB6A46017(){ }
	_0x152D90E4C1B4738A(p0_number, p1_number){ }
	_0x9FEDF86898F100E9(){ }
	_0x5E24341A7F92A74B(){ }
	_0x24E4E51FC16305F9(){ }
	_0xFBC5E768C7A77A6A(){ }
	_0xC55A0B40FFB1ED23(){ }
	ugcClearCreateResult(){ }
	_0x9BF438815F5D96EA(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	_0x692D58DF40657E8C(p0_number, p1_number, p2_number, p3_number, p4_number, p5_boolean){ }
	ugcQueryByContentId(contentId_string, latestVersion_boolean, contentTypeName_string){ }
	ugcQueryByContentIds(data_number, count_number, latestVersion_boolean, contentTypeName_string){ }
	ugcQueryRecentlyCreatedContent(offset_number, count_number, contentTypeName_string, p3_number){ }
	_0xD5A4B59980401588(p0_number, p1_number, p2_number, p3_number){ }
	_0x3195F8DD0D531052(p0_number, p1_number, p2_number, p3_number){ }
	_0xF9E1CCAE8BA4C281(p0_number, p1_number, p2_number, p3_number){ }
	_0x9F6E2821885CAEE2(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	_0x678BB03C1A3BD51E(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	setBalanceAddMachine(contentId_string, contentTypeName_string){ }
	setBalanceAddMachines(data_number, dataCount_number, contentTypeName_string){ }
	_0xA7862BC5ED1DFD7E(p0_number, p1_number, p2_number, p3_number){ }
	_0x97A770BEEF227E2B(p0_number, p1_number, p2_number, p3_number){ }
	_0x5324A0E3E4CE3570(p0_number, p1_number, p2_number, p3_number){ }
	_0xE9B99B6853181409(){ }
	_0xD53ACDBEF24A46E8(){ }
	_0x02ADA21EA2F6918F(){ }
	_0x941E5306BCD7C2C7(){ }
	_0xC87E740D9F3872CC(){ }
	_0xEDF7F927136C224B(){ }
	_0xE0A6138401BCB837(){ }
	_0x769951E2455E2EB5(){ }
	_0x3A17A27D75C74887(){ }
	ugcClearQueryResults(){ }
	getContentUserId(p0_number){ }
	_0x584770794D758C18(p0_number, p1_number){ }
	_0x8C8D2739BA44AF0F(p0_number){ }
	_0x703F12425ECA8BF5(p0_number){ }
	_0xAEAB987727C5A8A4(p0_number){ }
	getContentCategory(p0_number){ }
	getContentId(p0_number){ }
	getRootContentId(p0_number){ }
	_0xBF09786A7FCAB582(p0_number){ }
	getContentDescriptionHash(p0_number){ }
	ugcGetCloudPath(p0_number, p1_number){ }
	_0xCFD115B373C0DF63(p0_number, p1_number){ }
	getContentFileVersion(p0_number, p1_number){ }
	_0x1D610EB0FEA716D9(p0_number){ }
	_0x7FCC39C46C3C03BD(p0_number){ }
	_0x32DD916F3F7C9672(p0_number){ }
	_0x3054F114121C21EA(p0_number){ }
	_0xA9240A96C74CCA13(p0_number){ }
	_0x1ACCFBA3D8DAB2EE(p0_number, p1_number){ }
	_0x759299C5BB31D2A9(p0_number, p1_number){ }
	_0x87E5C46C187FE0AE(p0_number, p1_number){ }
	_0x4E548C0D7AE39FF9(p0_number, p1_number){ }
	_0x70EA8DA57840F9BE(p0_number){ }
	_0x993CBE59D350D225(p0_number){ }
	ugcRequestCloudFile(p0_number, p1_number){ }
	ugcRequestCloudFileByContentId(contentTypeName_string, contentId_string, p2_number, p3_number, p4_number){ }
	_0x5E0165278F6339EE(p0_number){ }
	_0x2D5DC831176D0114(p0_number){ }
	_0xEBFA8D50ADDC54C4(p0_number){ }
	_0x162C23CA83ED0A62(p0_number){ }
	_0x40F7E66472DF3E5C(p0_number, p1_number){ }
	_0x5A34CD9C3C5BEC44(p0_number){ }
	_0x68103E2247887242(){ }
	ugcPublish(contentId_string, baseContentId_string, contentTypeName_string){ }
	_0x274A1519DFC1094F(p0_number, p1_boolean, p2_number){ }
	_0xD05D1A6C74DA3498(p0_number, p1_boolean, p2_number){ }
	_0x45E816772E93A9DB(){ }
	_0x299EF3C576773506(){ }
	_0x793FF272D5B365F4(){ }
	_0x5A0A3D1A186A5508(){ }
	_0xA1E5E0204A6FCC70(){ }
	_0xB746D20B17F2A229(p0_number, p1_number){ }
	_0x63B406D7884BFA95(){ }
	_0x4D02279C83BE69FE(){ }
	_0x597F8DBA9B206FC7(){ }
	_0x5CAE833B0EE0C500(p0_number){ }
	ugcClearOfflineQuery(){ }
	_0xF98DDE0A8ED09323(p0_boolean){ }
	_0xFD75DABC0957BF33(p0_boolean){ }
	_0xF53E48461B71EECB(p0_number){ }
	facebookSetHeistComplete(heistName_string, cashEarned_number, xpEarned_number){ }
	facebookSetCreateCharacterComplete(){ }
	facebookSetMilestoneComplete(milestoneId_number){ }
	facebookIsSendingData(){ }
	facebookDoUnkCheck(){ }
	facebookIsAvailable(){ }
	textureDownloadRequest(PlayerHandle_number, FilePath_string, Name_string, p3_boolean){ }
	_0x0B203B4AFDE53A4F(p0_number, p1_number, p2_boolean){ }
	_0x308F96458B7087CC(p0_number, p1_number, p2_number, p3_number, p4_number, p5_boolean){ }
	textureDownloadRelease(p0_number){ }
	textureDownloadHasFailed(p0_number){ }
	textureDownloadGetName(p0_number){ }
	getStatusOfTextureDownload(p0_number){ }
	_0x60EDD13EB3AC1FF3(){ }
	networkShouldShowConnectivityTroubleshooting(){ }
	networkIsCableConnected(){ }
	networkGetRosPrivilege9(){ }
	networkGetRosPrivilege10(){ }
	networkHasPlayerBeenBanned(){ }
	networkHaveSocialClubPrivilege(){ }
	networkGetRosPrivilege3(){ }
	networkGetRosPrivilege4(){ }
	networkHasRosPrivilege(index_number){ }
	networkGetBanData(p0_number, banType_number, timeData_number){ }
	networkGetRosPrivilege24(){ }
	networkGetRosPrivilege25(){ }
	_0x36391F397731595D(p0_number){ }
	_0xDEB2B99A1AF1A2A6(p0_number){ }
	_0x9465E683B12D3F6B(){ }
	networkHasGameBeenAltered(){ }
	networkUpdatePlayerScars(){ }
	_0xC505036A35AFD01B(toggle_boolean){ }
	_0x267C78C60E806B9A(p0_number, p1_boolean){ }
	_0x6BFF5F84102DF80A(player_number){ }
	_0x5C497525F803486B(){ }
	_0x6FB7BB3607D27FA2(){ }
	_0x45A83257ED02D9BC(){ }
	_0x16D3D49902F697BB(player_number){ }
	_0xD414BE129BB81B32(player_number){ }
	_0x0E3A041ED6AC2B45(player_number){ }
	_0x350C23949E43686C(player_number){ }
	networkGetNumUnackedForPlayer(player_number){ }
	_0x3765C3A3E8192E10(player_number){ }
	networkGetOldestResendCountForPlayer(player_number){ }
	networkReportMyself(){ }
	_0x64D779659BC37B19(entity_number){ }
	networkGetPlayerCoords(player_number){ }
	_0x33DE49EDF4DDE77A(entity_number){ }
	_0xAA5FAFCD2C5F5E47(entity_number){ }
	_0xAEDF1BC1C133D6E3(){ }
	_0x2555CF7DA5473794(){ }
	_0x6FD992C4A1C1B986(){ }
	createObject(modelHash_number, x_number, y_number, z_number, isNetwork_boolean, thisScriptCheck_boolean, dynamic_boolean){ }
	createObjectNoOffset(modelHash_number, x_number, y_number, z_number, isNetwork_boolean, thisScriptCheck_boolean, dynamic_boolean){ }
	deleteObject(object_number){ }
	placeObjectOnGroundProperly(object_number){ }
	_0xD76EEEF746057FD6(object_number){ }
	slideObject(object_number, toX_number, toY_number, toZ_number, speedX_number, speedY_number, speedZ_number, collision_boolean){ }
	setObjectTargettable(object_number, targettable_boolean){ }
	setObjectSomething(object_number, p1_boolean){ }
	getClosestObjectOfType(x_number, y_number, z_number, radius_number, modelHash_number, isMission_boolean, p6_boolean, p7_boolean){ }
	hasObjectBeenBroken(object_number, p1_number){ }
	hasClosestObjectOfTypeBeenBroken(p0_number, p1_number, p2_number, p3_number, modelHash_number, p5_number){ }
	_0x46494A2475701343(p0_number, p1_number, p2_number, p3_number, modelHash_number, p5_boolean){ }
	_0x2542269291C6AC84(p0_number){ }
	getObjectOffsetFromCoords(xPos_number, yPos_number, zPos_number, heading_number, xOffset_number, yOffset_number, zOffset_number){ }
	_0x163F8B586BC95F2A(object_number, radius_number, modelHash_number, x_number, y_number, z_number, p6_setAsUndefined, p7_number){ }
	setStateOfClosestDoorOfType(type_number, x_number, y_number, z_number, locked_boolean, heading_number, p6_boolean){ }
	getStateOfClosestDoorOfType(type_number, x_number, y_number, z_number, locked_boolean, heading_number){ }
	doorControl(doorHash_number, x_number, y_number, z_number, locked_boolean, xRotMult_number, yRotMult_number, zRotMult_number){ }
	addDoorToSystem(doorHash_number, modelHash_number, x_number, y_number, z_number, p5_boolean, p6_boolean, p7_boolean){ }
	removeDoorFromSystem(doorHash_number){ }
	setDoorAccelerationLimit(doorHash_number, limit_number, p2_boolean, p3_boolean){ }
	_0x160AA1B32F6139B8(doorHash_number){ }
	_0x4BC2854478F3A749(doorHash_number){ }
	_0x03C27E13B42A0E82(doorHash_number, p1_number, p2_boolean, p3_boolean){ }
	_0x9BA001CB45CBF627(doorHash_number, heading_number, p2_boolean, p3_boolean){ }
	setDoorAjarAngle(doorHash_number, ajar_number, p2_boolean, p3_boolean){ }
	_0x65499865FCA6E5EC(doorHash_number){ }
	_0xC485E07E4F0B7958(doorHash_number, p1_boolean, p2_boolean, p3_boolean){ }
	_0xD9B71952F78A2640(doorHash_number, p1_boolean){ }
	_0xA85A21582451E951(doorHash_number, p1_boolean){ }
	isDoorRegisteredWithSystem(doorHash_number){ }
	isDoorClosed(doorHash_number){ }
	_0xC7F29CA00F46350E(p0_boolean){ }
	_0x701FDA1E82076BA4(){ }
	_0xDF97CDD4FC08FD34(p0_number){ }
	_0x589F80B325CC82C5(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	isGarageEmpty(garageHash_number, p1_boolean, p2_number){ }
	isPlayerEntirelyInsideGarage(garageHash_number, player_number, p2_number, p3_number){ }
	isPlayerPartiallyInsideGarage(garageHash_number, player_number, p2_number){ }
	_0x85B6C850546FDDE2(garageHash_number, p1_boolean, p2_boolean, p3_boolean, p4_number){ }
	isAnyEntityEntirelyInsideGarage(garageHash_number, p1_boolean, p2_boolean, p3_boolean, p4_number){ }
	isObjectEntirelyInsideGarage(garageHash_number, entity_number, p2_number, p3_number){ }
	isObjectPartiallyInsideGarage(garageHash_number, entity_number, p2_number){ }
	clearGarageArea(garageHash_number, isNetwork_boolean){ }
	_0x190428512B240692(garageHash_number, vehicles_boolean, peds_boolean, objects_boolean, isNetwork_boolean){ }
	_0x659F9D71F52843F8(p0_number, p1_number){ }
	_0xF2E1A7133DD356A6(garageHash_number, toggle_boolean){ }
	_0x66A49D021870FE88(){ }
	doesObjectOfTypeExistAtCoords(x_number, y_number, z_number, radius_number, hash_number, p5_boolean){ }
	isPointInAngledArea(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_boolean, p11_boolean){ }
	_0x4D89D607CB3DD1D2(object_number, toggle_boolean){ }
	setObjectPhysicsParams(object_number, weight_number, p2_number, p3_number, p4_number, p5_number, gravity_number, p7_number, p8_number, p9_number, p10_number, buoyancy_number){ }
	getObjectFragmentDamageHealth(p0_number, p1_boolean){ }
	setActivateObjectPhysicsAsSoonAsItIsUnfrozen(object_number, toggle_boolean){ }
	isAnyObjectNearPoint(x_number, y_number, z_number, range_number, p4_boolean){ }
	isObjectNearPoint(objectHash_number, x_number, y_number, z_number, range_number){ }
	_0x4A39DB43E47CF3AA(p0_number){ }
	_0xE7E4C198B0185900(p0_number, p1_number, p2_boolean){ }
	_0xE05F6AEEFEB0BB02(p0_number, p1_number, p2_number){ }
	_0xF9C1681347C8BD15(object_number){ }
	trackObjectVisibility(object_number){ }
	isObjectVisible(object_number){ }
	_0xC6033D32241F6FB5(object_number, toggle_boolean){ }
	_0xEB6F1A9B5510A5D2(p0_number, p1_boolean){ }
	setUnkGlobalBoolRelatedToDamage(value_boolean){ }
	_0xBCE595371A5FBAAF(p0_number, p1_boolean){ }
	getRayfireMapObject(x_number, y_number, z_number, rotation_number, name_string){ }
	setStateOfRayfireMapObject(object_number, state_number){ }
	getStateOfRayfireMapObject(object_number){ }
	doesRayfireMapObjectExist(object_number){ }
	getRayfireMapObjectAnimPhase(object_number){ }
	createPickup(pickupHash_number, posX_number, posY_number, posZ_number, p4_number, value_number, p6_boolean, modelHash_number){ }
	createPickupRotate(pickupHash_number, posX_number, posY_number, posZ_number, rotX_number, rotY_number, rotZ_number, flag_number, amount_number, p9_number, p10_boolean, modelHash_number){ }
	_0x394CD08E31313C28(){ }
	_0x826D1EE4D1CAFC78(p0_number, p1_number){ }
	createAmbientPickup(pickupHash_number, posX_number, posY_number, posZ_number, flags_number, value_number, modelHash_number, p7_boolean, p8_boolean){ }
	_0x1E3F1B1B891A2AAA(p0_number, p1_number){ }
	createPortablePickup(pickupHash_number, x_number, y_number, z_number, placeOnGround_boolean, modelHash_number){ }
	createPortablePickup2(pickupHash_number, x_number, y_number, z_number, placeOnGround_boolean, modelHash_number){ }
	attachPortablePickupToPed(ped_number, p1_number){ }
	detachPortablePickupFromPed(ped_number){ }
	hidePickup(pickup_number, toggle_boolean){ }
	_0x0BF3B3BD47D79C08(modelHash_number, p1_number){ }
	_0x78857FC65CADB909(p0_boolean){ }
	getSafePickupCoords(x_number, y_number, z_number, p3_number, p4_number){ }
	_0xD4A7A435B3710D05(x_number, y_number, z_number, radius_number){ }
	_0xB7C6D80FB371659A(){ }
	getPickupCoords(pickup_number){ }
	_0x8DCA505A5C196F05(p0_number, p1_number){ }
	removeAllPickupsOfType(pickupHash_number){ }
	hasPickupBeenCollected(pickup_number){ }
	removePickup(pickup_number){ }
	createMoneyPickups(x_number, y_number, z_number, value_number, amount_number, model_number){ }
	doesPickupExist(pickup_number){ }
	doesPickupObjectExist(pickupObject_number){ }
	getPickupObject(pickup_number){ }
	_0xFC481C641EBBD27D(p0_number){ }
	_0x0378C08504160D0D(p0_number){ }
	doesPickupOfTypeExistInArea(pickupHash_number, x_number, y_number, z_number, radius_number){ }
	setPickupRegenerationTime(pickup_number, duration_number){ }
	_0x758A5C1B3B1E1990(p0_number){ }
	_0x616093EC6B139DD9(player_number, pickupHash_number, toggle_boolean){ }
	setLocalPlayerCanUsePickupsWithThisModel(modelHash_number, toggle_boolean){ }
	setTeamPickupObject(object_number, p1_number, p2_boolean){ }
	_0x92AEFB5F6E294023(object_number, p1_boolean, p2_boolean){ }
	_0x0596843B34B95CE5(p0_number, p1_number){ }
	_0xA08FE5E49BDC39DD(p0_number, p1_number, p2_boolean){ }
	_0x62454A641B41F3C5(p0_number){ }
	_0x39A5FB7EAF150840(p0_number, p1_number){ }
	_0xDB41D07A45A6D4B7(p0_number){ }
	setPickupGenerationRangeMultiplier(multiplier_number){ }
	getPickupGenerationRangeMultiplier(){ }
	_0x31F924B53EADDF65(p0_boolean){ }
	_0x1C1B69FAE509BA97(p0_number, p1_number){ }
	_0x858EC9FD25DE04AA(p0_number, p1_number){ }
	_0x3ED2B83AB2E82799(p0_number, p1_number){ }
	_0x8881C98A31117998(p0_number, p1_number){ }
	_0x8CFF648FBD7330F1(p0_number){ }
	_0x46F3ADD1E2D5BAF2(p0_number, p1_number){ }
	_0x641F272B52E2F0F8(p0_number, p1_number){ }
	_0x4C134B4DF76025D0(p0_number, p1_number){ }
	_0xAA059C615DE9DD03(p0_number, p1_number){ }
	_0xF92099527DB8E2A7(p0_number, p1_number){ }
	_0xA2C1F5E92AFE49ED(){ }
	_0x762DB2D380B48D04(p0_number){ }
	highlightPlacementCoords(x_number, y_number, z_number, colorIndex_number){ }
	_0xBFFE53AE7E67FCDC(p0_number, p1_number){ }
	_0xD05A3241B9A86F19(p0_number, p1_number){ }
	_0xB2D0BDE54F0E8E5A(object_number, toggle_boolean){ }
	getWeaponTypeFromPickupType(pickupHash_number){ }
	_0xD6429A016084F1A5(p0_number){ }
	isPickupWeaponObjectValid(object_number){ }
	getObjectTextureVariation(object_number){ }
	setObjectTextureVariation(object_number, textureVariation_number){ }
	_0xF12E33034D887F66(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	setObjectLightColor(object_number, p1_boolean, r_number, g_number, b_number){ }
	_0xADF084FB8F075D06(p0_number){ }
	setObjectColour(object_number, toggle_boolean){ }
	_0x96EE0EBA0163DF80(p0_number, p1_number){ }
	_0xDF6CA0330F2E737B(p0_number, p1_number){ }
	getPickupHash(pickupHash_number){ }
	setForceObjectThisFrame(x_number, y_number, z_number, p3_number){ }
	markObjectForDeletion(object_number){ }
	_0x8CAAB2BD3EA58BD4(p0_number){ }
	_0x63ECF581BC70E363(p0_number, p1_number){ }
	_0x911024442F4898F0(p0_number, p1_number, p2_number){ }
	_0xB20834A7DD3D8896(p0_number, p1_number, p2_number, p3_number){ }
	_0x734E1714D077DA9A(p0_number, p1_number){ }
	_0x1A6CBB06E2D0D79D(p0_number, p1_number){ }
	_0x43C677F1E1158005(p0_number, p1_number){ }
	_0x3BD770D281982DB5(p0_number, p1_number){ }
	_0x1C57C94A6446492A(p0_number, p1_number){ }
	_0xB5B7742424BD4445(p0_number, p1_number){ }
	isControlEnabled(padIndex_number, control_number){ }
	isControlPressed(padIndex_number, control_number){ }
	isControlReleased(padIndex_number, control_number){ }
	isControlJustPressed(padIndex_number, control_number){ }
	isControlJustReleased(padIndex_number, control_number){ }
	getControlValue(padIndex_number, control_number){ }
	getControlNormal(padIndex_number, control_number){ }
	_0x5B73C77D9EB66E24(p0_boolean){ }
	getControlUnboundNormal(padIndex_number, control_number){ }
	setControlNormal(padIndex_number, control_number, amount_number){ }
	isDisabledControlPressed(padIndex_number, control_number){ }
	isDisabledControlReleased(padIndex_number, control_number){ }
	isDisabledControlJustPressed(padIndex_number, control_number){ }
	isDisabledControlJustReleased(padIndex_number, control_number){ }
	getDisabledControlNormal(padIndex_number, control_number){ }
	getDisabledControlUnboundNormal(padIndex_number, control_number){ }
	_0xD7D22F5592AED8BA(p0_number){ }
	isInputDisabled(padIndex_number){ }
	isInputJustDisabled(padIndex_number){ }
	setCursorLocation(x_number, y_number){ }
	_0x23F09EADC01449D6(padIndex_number){ }
	_0x6CD79468A1E595C6(padIndex_number){ }
	getControlInstructionalButton(padIndex_number, control_number, p2_boolean){ }
	_0x80C2FD58D720C801(padIndex_number, control_number, p2_boolean){ }
	_0x8290252FFF36ACB5(padIndex_number, red_number, green_number, blue_number){ }
	_0xCB0360EFEFB2580D(padIndex_number){ }
	setPadShake(padIndex_number, duration_number, frequency_number){ }
	_0x14D29BB12D47F68C(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	stopPadShake(padIndex_number){ }
	_0xF239400E16C23E08(p0_number, p1_number){ }
	_0xA0CEFCEA390AAB9B(p0_number){ }
	isLookInverted(){ }
	_0xE1615EC03B3BB4FD(){ }
	getLocalPlayerAimState(){ }
	getLocalPlayerAimState2(){ }
	_0x25AAA32BDC98F2A3(){ }
	getIsUsingAlternateDriveby(){ }
	getAllowMovementWhileZoomed(){ }
	setPlayerpadShakesWhenControllerDisabled(toggle_boolean){ }
	setInputExclusive(padIndex_number, control_number){ }
	disableControlAction(padIndex_number, control_number, disable_boolean){ }
	enableControlAction(padIndex_number, control_number, enable_boolean){ }
	disableAllControlActions(padIndex_number){ }
	enableAllControlActions(padIndex_number){ }
	switchToInputMappingScheme(name_string){ }
	switchToInputMappingScheme2(name_string){ }
	resetInputMappingScheme(){ }
	disableInputGroup(padIndex_number){ }
	setRoadsInArea(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, unknown1_boolean, unknown2_boolean){ }
	setRoadsInAngledArea(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, angle_number, unknown1_boolean, unknown2_boolean, unknown3_boolean){ }
	setPedPathsInArea(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, unknown_boolean, p7_number){ }
	getSafeCoordForPed(x_number, y_number, z_number, onGround_boolean, outPosition_setAsUndefined, flags_number){ }
	getClosestVehicleNode(x_number, y_number, z_number, outPosition_setAsUndefined, nodeType_number, p5_number, p6_number){ }
	getClosestMajorVehicleNode(x_number, y_number, z_number, outPosition_setAsUndefined, unknown1_number, unknown2_number){ }
	getClosestVehicleNodeWithHeading(x_number, y_number, z_number, outPosition_setAsUndefined, outHeading_number, nodeType_number, p6_number, p7_number){ }
	getNthClosestVehicleNode(x_number, y_number, z_number, nthClosest_number, outPosition_setAsUndefined, unknown1_number, unknown2_number, unknown3_number){ }
	getNthClosestVehicleNodeId(x_number, y_number, z_number, nth_number, nodetype_number, p5_number, p6_number){ }
	getNthClosestVehicleNodeWithHeading(x_number, y_number, z_number, nthClosest_number, outPosition_setAsUndefined, heading_number, unknown1_number, unknown2_number, unknown3_number, unknown4_number){ }
	getNthClosestVehicleNodeIdWithHeading(x_number, y_number, z_number, nthClosest_number, outPosition_setAsUndefined, outHeading_number, p6_number, p7_number, p8_number){ }
	getNthClosestVehicleNodeFavourDirection(x_number, y_number, z_number, desiredX_number, desiredY_number, desiredZ_number, nthClosest_number, outPosition_setAsUndefined, outHeading_number, nodetype_number, p10_number, p11_number){ }
	getVehicleNodeProperties(x_number, y_number, z_number, density_number, flags_number){ }
	isVehicleNodeIdValid(vehicleNodeId_number){ }
	getVehicleNodePosition(nodeId_number, outPosition_setAsUndefined){ }
	getVehicleNodeIsGpsAllowed(nodeID_number){ }
	getVehicleNodeIsSwitchedOff(nodeID_number){ }
	getClosestRoad(x_number, y_number, z_number, p3_number, p4_number, p5_setAsUndefined, p6_setAsUndefined, p7_number, p8_number, p9_number, p10_boolean){ }
	_0x228E5C6AD4D74BFD(toggle_boolean){ }
	arePathNodesLoadedInArea(x1_number, y1_number, x2_number, y2_number){ }
	_0x07FB139B592FA687(p0_number, p1_number, p2_number, p3_number){ }
	setRoadsBackToOriginal(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	setRoadsBackToOriginalInAngledArea(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, p6_number, p7_number){ }
	_0x0B919E1FB47CC4E0(p0_number){ }
	_0xAA76052DDA9BFC3E(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	setPedPathsBackToOriginal(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	getRandomVehicleNode(x_number, y_number, z_number, radius_number, p4_boolean, p5_boolean, p6_boolean, outPosition_setAsUndefined, nodeId_number){ }
	getStreetNameAtCoord(x_number, y_number, z_number, streetName_number, crossingRoad_number){ }
	generateDirectionsToCoord(x_number, y_number, z_number, p3_boolean, direction_number, p5_number, distToNxJunction_number){ }
	setIgnoreNoGpsFlag(toggle_boolean){ }
	_0x1FC289A0C3FF470F(toggle_boolean){ }
	setGpsDisabledZone(x1_number, y1_number, z1_number, x2_number, y2_number, z3_number){ }
	_0xBBB45C3CF5C8AA85(){ }
	_0xF3162836C28F9DA5(p0_number, p1_number, p2_number, p3_number){ }
	_0x869DAACBBE9FA006(){ }
	_0xA0F8A7517A273C05(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	_0x16F46FB18C8009E4(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	isPointOnRoad(x_number, y_number, z_number, vehicle_number){ }
	getNextGpsDisabledZoneIndex(){ }
	setGpsDisabledZoneAtIndex(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, index_number){ }
	clearGpsDisabledZoneAtIndex(index_number){ }
	addNavmeshRequiredRegion(x_number, y_number, radius_number){ }
	removeNavmeshRequiredRegions(){ }
	isNavmeshRequiredRegionOwnedByAnyThread(){ }
	disableNavmeshInArea(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	areAllNavmeshRegionsLoaded(){ }
	isNavmeshLoadedInArea(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number){ }
	_0x01708E8DD3FF8C65(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	addNavmeshBlockingObject(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_boolean, p8_number){ }
	updateNavmeshBlockingObject(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number){ }
	removeNavmeshBlockingObject(p0_number){ }
	doesNavmeshBlockingObjectExist(p0_number){ }
	_0x29C24BFBED8AB8FB(p0_number, p1_number){ }
	_0x8ABE8608576D9CE3(p0_number, p1_number, p2_number, p3_number){ }
	_0x336511A34F2E5185(left_number, right_number){ }
	_0x3599D741C9AC6310(p0_number, p1_number, p2_number, p3_number){ }
	calculateTravelDistanceBetweenPoints(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number){ }
	createPed(pedType_number, modelHash_number, x_number, y_number, z_number, heading_number, isNetwork_boolean, thisScriptCheck_boolean){ }
	deletePed(ped_number){ }
	clonePed(ped_number, heading_number, isNetwork_boolean, thisScriptCheck_boolean){ }
	clonePedEx(ped_number, heading_number, isNetwork_boolean, thisScriptCheck_boolean, p4_number){ }
	clonePedToTarget(ped_number, targetPed_number){ }
	clonePedToTargetEx(ped_number, targetPed_number, p2_number){ }
	isPedInVehicle(ped_number, vehicle_number, atGetIn_boolean){ }
	isPedInModel(ped_number, modelHash_number){ }
	isPedInAnyVehicle(ped_number, atGetIn_boolean){ }
	isCopPedInArea3d(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number){ }
	isPedInjured(ped_number){ }
	isPedHurt(ped_number){ }
	isPedFatallyInjured(ped_number){ }
	isPedDeadOrDying(ped_number, p1_boolean){ }
	isConversationPedDead(ped_number){ }
	isPedAimingFromCover(ped_number){ }
	isPedReloading(ped_number){ }
	isPedAPlayer(ped_number){ }
	createPedInsideVehicle(vehicle_number, pedType_number, modelHash_number, seat_number, isNetwork_boolean, thisScriptCheck_boolean){ }
	setPedDesiredHeading(ped_number, heading_number){ }
	freezePedCameraRotation(ped_number){ }
	isPedFacingPed(ped_number, otherPed_number, angle_number){ }
	isPedInMeleeCombat(ped_number){ }
	isPedStopped(ped_number){ }
	isPedShootingInArea(ped_number, x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, p7_boolean, p8_boolean){ }
	isAnyPedShootingInArea(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, p6_boolean, p7_boolean){ }
	isPedShooting(ped_number){ }
	setPedAccuracy(ped_number, accuracy_number){ }
	getPedAccuracy(ped_number){ }
	_0x87DDEB611B329A9C(multiplier_number){ }
	isPedModel(ped_number, modelHash_number){ }
	explodePedHead(ped_number, weaponHash_number){ }
	removePedElegantly(ped_number){ }
	addArmourToPed(ped_number, amount_number){ }
	setPedArmour(ped_number, amount_number){ }
	setPedIntoVehicle(ped_number, vehicle_number, seatIndex_number){ }
	setPedAllowVehiclesOverride(ped_number, toggle_boolean){ }
	canCreateRandomPed(unk_boolean){ }
	createRandomPed(posX_number, posY_number, posZ_number){ }
	createRandomPedAsDriver(vehicle_number, returnHandle_boolean){ }
	canCreateRandomDriver(){ }
	canCreateRandomBikeRider(){ }
	setPedMoveAnimsBlendOut(ped_number){ }
	setPedCanBeDraggedOut(ped_number, toggle_boolean){ }
	_0xF2BEBCDFAFDAA19E(toggle_boolean){ }
	isPedMale(ped_number){ }
	isPedHuman(ped_number){ }
	getVehiclePedIsIn(ped_number, lastVehicle_boolean){ }
	resetPedLastVehicle(ped_number){ }
	setPedDensityMultiplierThisFrame(multiplier_number){ }
	setScenarioPedDensityMultiplierThisFrame(p0_number, p1_number){ }
	_0x5A7F62FDA59759BD(){ }
	setScriptedConversionCoordThisFrame(x_number, y_number, z_number){ }
	setPedNonCreationArea(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number){ }
	clearPedNonCreationArea(){ }
	_0x4759CC730F947C81(){ }
	isPedOnMount(ped_number){ }
	getMount(ped_number){ }
	isPedOnVehicle(ped_number){ }
	isPedOnSpecificVehicle(ped_number, vehicle_number){ }
	setPedMoney(ped_number, amount_number){ }
	getPedMoney(ped_number){ }
	_0xFF4803BC019852D9(p0_number, p1_number){ }
	_0x6B0E6172C9A4D902(p0_boolean){ }
	_0x9911F4A24485F653(p0_boolean){ }
	setPedSuffersCriticalHits(ped_number, toggle_boolean){ }
	_0xAFC976FD0580C7B3(ped_number, toggle_boolean){ }
	isPedSittingInVehicle(ped_number, vehicle_number){ }
	isPedSittingInAnyVehicle(ped_number){ }
	isPedOnFoot(ped_number){ }
	isPedOnAnyBike(ped_number){ }
	isPedPlantingBomb(ped_number){ }
	getDeadPedPickupCoords(ped_number, p1_number, p2_number){ }
	isPedInAnyBoat(ped_number){ }
	isPedInAnySub(ped_number){ }
	isPedInAnyHeli(ped_number){ }
	isPedInAnyPlane(ped_number){ }
	isPedInFlyingVehicle(ped_number){ }
	setPedDiesInWater(ped_number, toggle_boolean){ }
	setPedDiesInSinkingVehicle(ped_number, toggle_boolean){ }
	getPedArmour(ped_number){ }
	setPedStayInVehicleWhenJacked(ped_number, toggle_boolean){ }
	setPedCanBeShotInVehicle(ped_number, toggle_boolean){ }
	getPedLastDamageBone(ped_number, outBone_number){ }
	clearPedLastDamageBone(ped_number){ }
	setAiWeaponDamageModifier(value_number){ }
	resetAiWeaponDamageModifier(){ }
	setAiMeleeWeaponDamageModifier(modifier_number){ }
	resetAiMeleeWeaponDamageModifier(){ }
	_0x2F3C3D9F50681DE4(p0_number, p1_boolean){ }
	setPedCanBeTargetted(ped_number, toggle_boolean){ }
	setPedCanBeTargettedByTeam(ped_number, team_number, toggle_boolean){ }
	setPedCanBeTargettedByPlayer(ped_number, player_number, toggle_boolean){ }
	_0x061CB768363D6424(ped_number, toggle_boolean){ }
	_0xFD325494792302D7(ped_number, toggle_boolean){ }
	isPedInAnyPoliceVehicle(ped_number){ }
	forcePedToOpenParachute(ped_number){ }
	isPedInParachuteFreeFall(ped_number){ }
	isPedFalling(ped_number){ }
	isPedJumping(ped_number){ }
	_0x412F1364FA066CFB(p0_number){ }
	_0x451D05012CCEC234(p0_number){ }
	isPedClimbing(ped_number){ }
	isPedVaulting(ped_number){ }
	isPedDiving(ped_number){ }
	isPedJumpingOutOfVehicle(ped_number){ }
	isPedOpeningADoor(ped_number){ }
	getPedParachuteState(ped_number){ }
	getPedParachuteLandingType(ped_number){ }
	setPedParachuteTintIndex(ped_number, tintIndex_number){ }
	getPedParachuteTintIndex(ped_number, outTintIndex_number){ }
	setPedReserveParachuteTintIndex(ped_number, p1_number){ }
	createParachuteObject(ped_number, p1_boolean, p2_boolean){ }
	setPedDucking(ped_number, toggle_boolean){ }
	isPedDucking(ped_number){ }
	isPedInAnyTaxi(ped_number){ }
	setPedIdRange(ped_number, value_number){ }
	setPedHighlyPerceptive(ped_number, toggle_boolean){ }
	_0x2F074C904D85129E(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	_0xEC4B4B3B9908052A(ped_number, unk_number){ }
	_0x733C87D4CE22BEA2(p0_number){ }
	setPedSeeingRange(ped_number, value_number){ }
	setPedHearingRange(ped_number, value_number){ }
	setPedVisualFieldMinAngle(ped_number, value_number){ }
	setPedVisualFieldMaxAngle(ped_number, value_number){ }
	setPedVisualFieldMinElevationAngle(ped_number, angle_number){ }
	setPedVisualFieldMaxElevationAngle(ped_number, angle_number){ }
	setPedVisualFieldPeripheralRange(ped_number, range_number){ }
	setPedVisualFieldCenterAngle(ped_number, angle_number){ }
	getPedVisualFieldCenterAngle(ped_number){ }
	setPedStealthMovement(ped_number, p1_boolean, action_string){ }
	getPedStealthMovement(ped_number){ }
	createGroup(unused_number){ }
	setPedAsGroupLeader(ped_number, groupId_number){ }
	setPedAsGroupMember(ped_number, groupId_number){ }
	setPedCanTeleportToGroupLeader(pedHandle_number, groupHandle_number, toggle_boolean){ }
	removeGroup(groupId_number){ }
	removePedFromGroup(ped_number){ }
	isPedGroupMember(ped_number, groupId_number){ }
	isPedHangingOnToVehicle(ped_number){ }
	setGroupSeparationRange(groupHandle_number, separationRange_number){ }
	setPedMinGroundTimeForStungun(ped_number, ms_number){ }
	isPedProne(ped_number){ }
	isPedInCombat(ped_number, target_number){ }
	canPedInCombatSeeTarget(ped_number, target_number){ }
	isPedDoingDriveby(ped_number){ }
	isPedJacking(ped_number){ }
	isPedBeingJacked(ped_number){ }
	isPedBeingStunned(ped_number, p1_number){ }
	getPedsJacker(ped_number){ }
	getJackTarget(ped_number){ }
	isPedFleeing(ped_number){ }
	isPedInCover(ped_number, exceptUseWeapon_boolean){ }
	isPedInCoverFacingLeft(ped_number){ }
	isPedInHighCover(ped_number){ }
	isPedGoingIntoCover(ped_number){ }
	setPedPinnedDown(ped_number, pinned_boolean, i_number){ }
	getSeatPedIsTryingToEnter(ped_number){ }
	getVehiclePedIsTryingToEnter(ped_number){ }
	getPedSourceOfDeath(ped_number){ }
	getPedCauseOfDeath(ped_number){ }
	getPedTimeOfDeath(ped_number){ }
	_0x5407B7288D0478B7(p0_number){ }
	_0x336B3D200AB007CB(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	setPedRelationshipGroupDefaultHash(ped_number, hash_number){ }
	setPedRelationshipGroupHash(ped_number, hash_number){ }
	setRelationshipBetweenGroups(relationship_number, group1_number, group2_number){ }
	clearRelationshipBetweenGroups(relationship_number, group1_number, group2_number){ }
	addRelationshipGroup(name_string, groupHash_number){ }
	removeRelationshipGroup(groupHash_number){ }
	_0xCC6E3B6BB69501F1(p0_number){ }
	getRelationshipBetweenPeds(ped1_number, ped2_number){ }
	getPedRelationshipGroupDefaultHash(ped_number){ }
	getPedRelationshipGroupHash(ped_number){ }
	getRelationshipBetweenGroups(group1_number, group2_number){ }
	_0x5615E0C5EB2BC6E2(p0_number, p1_number){ }
	_0xAD27D957598E49E9(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	setPedCanBeTargetedWithoutLos(ped_number, toggle_boolean){ }
	setPedToInformRespectedFriends(ped_number, radius_number, maxFriends_number){ }
	isPedRespondingToEvent(ped_number, event_number){ }
	setPedFiringPattern(ped_number, patternHash_number){ }
	setPedShootRate(ped_number, shootRate_number){ }
	setCombatFloat(ped_number, combatType_number, p2_number){ }
	getCombatFloat(ped_number, p1_number){ }
	getGroupSize(groupID_number, unknown_number, sizeInMembers_number){ }
	doesGroupExist(groupId_number){ }
	getPedGroupIndex(ped_number){ }
	isPedInGroup(ped_number){ }
	getPlayerPedIsFollowing(ped_number){ }
	setGroupFormation(groupId_number, formationType_number){ }
	setGroupFormationSpacing(groupId_number, p1_number, p2_number, p3_number){ }
	resetGroupFormationDefaultSpacing(groupHandle_number){ }
	getVehiclePedIsUsing(ped_number){ }
	getVehiclePedIsEntering(ped_number){ }
	setPedGravity(ped_number, toggle_boolean){ }
	applyDamageToPed(ped_number, damageAmount_number, p2_boolean, p3_number){ }
	getTimeOfLastPedWeaponDamage(ped_number, weaponHash_number){ }
	setPedAllowedToDuck(ped_number, toggle_boolean){ }
	setPedNeverLeavesGroup(ped_number, toggle_boolean){ }
	getPedType(ped_number){ }
	setPedAsCop(ped_number, toggle_boolean){ }
	setPedMaxHealth(ped_number, value_number){ }
	getPedMaxHealth(ped_number){ }
	setPedMaxTimeInWater(ped_number, value_number){ }
	setPedMaxTimeUnderwater(ped_number, value_number){ }
	_0x2735233A786B1BEF(ped_number, p1_number){ }
	setPedVehicleForcedSeatUsage(ped_number, vehicle_number, seatIndex_number, flags_number){ }
	clearAllPedVehicleForcedSeatUsage(ped_number){ }
	_0xB282749D5E028163(p0_number, p1_number){ }
	setPedCanBeKnockedOffVehicle(ped_number, state_number){ }
	canKnockPedOffVehicle(ped_number){ }
	knockPedOffVehicle(ped_number){ }
	setPedCoordsNoGang(ped_number, posX_number, posY_number, posZ_number){ }
	getPedAsGroupMember(groupID_number, memberNumber_number){ }
	getPedAsGroupLeader(groupID_number){ }
	setPedKeepTask(ped_number, toggle_boolean){ }
	_0x49E50BDB8BA4DAB2(ped_number, toggle_boolean){ }
	isPedSwimming(ped_number){ }
	isPedSwimmingUnderWater(ped_number){ }
	setPedCoordsKeepVehicle(ped_number, posX_number, posY_number, posZ_number){ }
	setPedDiesInVehicle(ped_number, toggle_boolean){ }
	setCreateRandomCops(toggle_boolean){ }
	setCreateRandomCopsNotOnScenarios(toggle_boolean){ }
	setCreateRandomCopsOnScenarios(toggle_boolean){ }
	canCreateRandomCops(){ }
	setPedAsEnemy(ped_number, toggle_boolean){ }
	setPedCanSmashGlass(ped_number, p1_boolean, p2_boolean){ }
	isPedInAnyTrain(ped_number){ }
	isPedGettingIntoAVehicle(ped_number){ }
	isPedTryingToEnterALockedVehicle(ped_number){ }
	setEnableHandcuffs(ped_number, toggle_boolean){ }
	setEnableBoundAnkles(ped_number, toggle_boolean){ }
	setEnableScuba(ped_number, toggle_boolean){ }
	setCanAttackFriendly(ped_number, toggle_boolean, p2_boolean){ }
	getPedAlertness(ped_number){ }
	setPedAlertness(ped_number, value_number){ }
	setPedGetOutUpsideDownVehicle(ped_number, toggle_boolean){ }
	setPedMovementClipset(ped_number, clipSet_string, p2_number){ }
	resetPedMovementClipset(ped_number, p1_number){ }
	setPedStrafeClipset(ped_number, clipSet_string){ }
	resetPedStrafeClipset(ped_number){ }
	setPedWeaponMovementClipset(ped_number, clipSet_string){ }
	resetPedWeaponMovementClipset(ped_number){ }
	setPedDriveByClipsetOverride(ped_number, clipset_string){ }
	clearPedDriveByClipsetOverride(ped_number){ }
	setPedCoverClipsetOverride(ped_number, p1_string){ }
	clearPedCoverClipsetOverride(ped_number){ }
	_0x80054D7FCC70EEC6(ped_number){ }
	setPedInVehicleContext(ped_number, context_number){ }
	resetPedInVehicleContext(ped_number){ }
	isScriptedScenarioPedUsingConditionalAnim(ped_number, animDict_string, anim_string){ }
	setPedAlternateWalkAnim(ped_number, animDict_string, animName_string, p3_number, p4_boolean){ }
	clearPedAlternateWalkAnim(ped_number, p1_number){ }
	setPedAlternateMovementAnim(ped_number, stance_number, animDictionary_string, animationName_string, p4_number, p5_boolean){ }
	clearPedAlternateMovementAnim(ped_number, stance_number, p2_number){ }
	setPedGestureGroup(ped_number, animGroupGesture_string){ }
	getAnimInitialOffsetPosition(animDict_string, animName_string, x_number, y_number, z_number, xRot_number, yRot_number, zRot_number, p8_number, p9_number){ }
	getAnimInitialOffsetRotation(animDict_string, animName_string, x_number, y_number, z_number, xRot_number, yRot_number, zRot_number, p8_number, p9_number){ }
	getPedDrawableVariation(ped_number, componentId_number){ }
	getNumberOfPedDrawableVariations(ped_number, componentId_number){ }
	getPedTextureVariation(ped_number, componentId_number){ }
	getNumberOfPedTextureVariations(ped_number, componentId_number, drawableId_number){ }
	getNumberOfPedPropDrawableVariations(ped_number, propId_number){ }
	getNumberOfPedPropTextureVariations(ped_number, propId_number, drawableId_number){ }
	getPedPaletteVariation(ped_number, componentId_number){ }
	_0x9E30E91FB03A2CAF(p0_number, p1_number){ }
	_0x1E77FA7A62EE6C4C(p0_number){ }
	_0xF033419D1B81FAE8(p0_number){ }
	isPedComponentVariationValid(ped_number, componentId_number, drawableId_number, textureId_number){ }
	setPedComponentVariation(ped_number, componentId_number, drawableId_number, textureId_number, paletteId_number){ }
	setPedRandomComponentVariation(ped_number, p1_number){ }
	setPedRandomProps(ped_number){ }
	setPedDefaultComponentVariation(ped_number){ }
	setPedBlendFromParents(ped_number, p1_number, p2_number, p3_number, p4_number){ }
	setPedHeadBlendData(ped_number, shapeFirstID_number, shapeSecondID_number, shapeThirdID_number, skinFirstID_number, skinSecondID_number, skinThirdID_number, shapeMix_number, skinMix_number, thirdMix_number, isParent_boolean){ }
	getPedHeadBlendData(ped_number, headBlendData_number){ }
	updatePedHeadBlendData(ped_number, shapeMix_number, skinMix_number, thirdMix_number){ }
	setPedEyeColor(ped_number, index_number){ }
	_0x76BBA2CEE66D47E9(p0_number){ }
	setPedHeadOverlay(ped_number, overlayID_number, index_number, opacity_number){ }
	getPedHeadOverlayValue(ped_number, overlayID_number){ }
	getNumHeadOverlayValues(overlayID_number){ }
	setPedHeadOverlayColor(ped_number, overlayID_number, colorType_number, colorID_number, secondColorID_number){ }
	setPedHairColor(ped_number, colorID_number, highlightColorID_number){ }
	getNumHairColors(){ }
	getNumMakeupColors(){ }
	getPedHairRgbColor(p0_number, r_number, g_number, b_number){ }
	getPedMakeupRgbColor(p0_number, r_number, g_number, b_number){ }
	_0xED6D8E27A43B8CDE(p0_number){ }
	_0xEA9960D07DADCF10(p0_number){ }
	_0x3E802F11FBE27674(p0_number){ }
	_0xF41B5D290C99A3D6(p0_number){ }
	isPedHairColorValid(colorID_number){ }
	_0xAAA6A3698A69E048(p0_number){ }
	isPedLipstickColorValid(colorID_number){ }
	isPedBlushColorValid(colorID_number){ }
	_0x09E7ECA981D9B210(p0_number){ }
	_0xC56FBF2F228E1DAC(modelHash_number, p1_number, p2_number){ }
	setPedFaceFeature(ped_number, index_number, scale_number){ }
	hasPedHeadBlendFinished(ped_number){ }
	_0x4668D80430D6C299(ped_number){ }
	setHeadBlendPaletteColor(ped_number, r_number, g_number, b_number, p4_number){ }
	disableHeadBlendPaletteColor(ped_number){ }
	getFirstParentIdForPedType(type_number){ }
	getNumParentPedsOfType(type_number){ }
	_0x39D55A620FCB6A3A(ped_number, slot_number, drawableId_number, textureId_number){ }
	_0x66680A92700F43DF(p0_number){ }
	_0x5AAB586FFEC0FD96(p0_number){ }
	isPedPropValid(ped_number, componentId_number, drawableId_number, TextureId_number){ }
	_0x784002A632822099(ped_number){ }
	_0xF79F9DEF0AADE61A(ped_number){ }
	getPedPropIndex(ped_number, componentId_number){ }
	setPedPropIndex(ped_number, componentId_number, drawableId_number, TextureId_number, attach_boolean){ }
	knockOffPedProp(ped_number, p1_boolean, p2_boolean, p3_boolean, p4_boolean){ }
	clearPedProp(ped_number, propId_number){ }
	clearAllPedProps(ped_number){ }
	_0xAFF4710E2A0A6C12(ped_number){ }
	getPedPropTextureIndex(ped_number, componentId_number){ }
	_0x1280804F7CFD2D6C(p0_number){ }
	_0x36C6984C3ED0C911(p0_number){ }
	clearPedScubaGearVariation(ped_number){ }
	_0xFEC9A3B1820F3331(p0_number){ }
	setBlockingOfNonTemporaryEvents(ped_number, toggle_boolean){ }
	setPedBoundsOrientation(ped_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	registerTarget(ped_number, target_number){ }
	registerHatedTargetsAroundPed(ped_number, radius_number){ }
	getRandomPedAtCoord(x_number, y_number, z_number, xRadius_number, yRadius_number, zRadius_number, pedType_number){ }
	getClosestPed(x_number, y_number, z_number, radius_number, p4_boolean, p5_boolean, outPed_number, p7_boolean, p8_boolean, pedType_number){ }
	setScenarioPedsToBeReturnedByNextCommand(value_boolean){ }
	_0x03EA03AF85A85CB7(ped_number, p1_boolean, p2_boolean, p3_boolean, p4_boolean, p5_boolean, p6_boolean, p7_boolean, p8_number){ }
	setDriverRacingModifier(driver_number, modifier_number){ }
	setDriverAbility(driver_number, ability_number){ }
	setDriverAggressiveness(driver_number, aggressiveness_number){ }
	canPedRagdoll(ped_number){ }
	setPedToRagdoll(ped_number, time1_number, time2_number, ragdollType_number, p4_boolean, p5_boolean, p6_boolean){ }
	setPedToRagdollWithFall(ped_number, time_number, p2_number, ragdollType_number, x_number, y_number, z_number, p7_number, p8_number, p9_number, p10_number, p11_number, p12_number, p13_number){ }
	setPedRagdollOnCollision(ped_number, toggle_boolean){ }
	isPedRagdoll(ped_number){ }
	isPedRunningRagdollTask(ped_number){ }
	setPedRagdollForceFall(ped_number){ }
	resetPedRagdollTimer(ped_number){ }
	setPedCanRagdoll(ped_number, toggle_boolean){ }
	isPedRunningMeleeTask(ped_number){ }
	isPedRunningMobilePhoneTask(ped_number){ }
	_0xA3F3564A5B3646C0(ped_number){ }
	setRagdollBlockingFlags(ped_number, flags_number){ }
	clearRagdollBlockingFlags(ped_number, flags_number){ }
	setPedAngledDefensiveArea(ped_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_boolean, p9_boolean){ }
	setPedSphereDefensiveArea(ped_number, x_number, y_number, z_number, radius_number, p5_boolean, p6_boolean){ }
	setPedDefensiveSphereAttachedToPed(ped_number, target_number, xOffset_number, yOffset_number, zOffset_number, radius_number, p6_boolean){ }
	setPedDefensiveSphereAttachedToVehicle(ped_number, target_number, xOffset_number, yOffset_number, zOffset_number, radius_number, p6_boolean){ }
	setPedDefensiveAreaAttachedToPed(ped_number, attachPed_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_boolean, p10_boolean){ }
	setPedDefensiveAreaDirection(ped_number, p1_number, p2_number, p3_number, p4_boolean){ }
	removePedDefensiveArea(ped_number, toggle_boolean){ }
	getPedDefensiveAreaPosition(ped_number, p1_boolean){ }
	isPedDefensiveAreaActive(ped_number, p1_boolean){ }
	setPedPreferredCoverSet(ped_number, itemSet_number){ }
	removePedPreferredCoverSet(ped_number){ }
	reviveInjuredPed(ped_number){ }
	resurrectPed(ped_number){ }
	setPedNameDebug(ped_number, name_string){ }
	getPedExtractedDisplacement(ped_number, worldSpace_boolean){ }
	setPedDiesWhenInjured(ped_number, toggle_boolean){ }
	setPedEnableWeaponBlocking(ped_number, toggle_boolean){ }
	_0xF9ACF4A08098EA25(ped_number, p1_boolean){ }
	resetPedVisibleDamage(ped_number){ }
	applyPedBloodDamageByZone(ped_number, p1_number, p2_number, p3_number, p4_number){ }
	applyPedBlood(ped_number, boneIndex_number, xRot_number, yRot_number, zRot_number, woundType_string){ }
	applyPedBloodByZone(ped_number, p1_number, p2_number, p3_number, p4_number){ }
	applyPedBloodSpecific(ped_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number){ }
	applyPedDamageDecal(ped_number, damageZone_number, xOffset_number, yOffset_number, heading_number, scale_number, alpha_number, variation_number, fadeIn_boolean, decalName_string){ }
	applyPedDamagePack(ped_number, damagePack_string, damage_number, mult_number){ }
	clearPedBloodDamage(ped_number){ }
	clearPedBloodDamageByZone(ped_number, p1_number){ }
	hidePedBloodDamageByZone(ped_number, p1_number, p2_boolean){ }
	clearPedDamageDecalByZone(ped_number, p1_number, p2_string){ }
	getPedDecorationsState(ped_number){ }
	_0x2B694AFCF64E6994(ped_number, p1_boolean){ }
	clearPedWetness(ped_number){ }
	setPedWetnessHeight(ped_number, height_number){ }
	setPedWetnessEnabledThisFrame(ped_number){ }
	clearPedEnvDirt(ped_number){ }
	setPedSweat(ped_number, sweat_number){ }
	addPedDecorationFromHashes(ped_number, collection_number, overlay_number){ }
	addPedDecorationFromHashesInCorona(ped_number, collection_number, overlay_number){ }
	getPedDecorationZoneFromHashes(collection_number, overlay_number){ }
	clearPedDecorations(ped_number){ }
	clearPedDecorationsLeaveScars(ped_number){ }
	wasPedSkeletonUpdated(ped_number){ }
	getPedBoneCoords(ped_number, boneId_number, offsetX_number, offsetY_number, offsetZ_number){ }
	createNmMessage(startImmediately_boolean, messageId_number){ }
	givePedNmMessage(ped_number){ }
	addScenarioBlockingArea(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, p6_boolean, p7_boolean, p8_boolean, p9_boolean){ }
	removeScenarioBlockingAreas(){ }
	removeScenarioBlockingArea(p0_number, p1_boolean){ }
	setScenarioPedsSpawnInSphereArea(x_number, y_number, z_number, range_number, p4_number){ }
	doesScenarioBlockingAreaExist(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number){ }
	isPedUsingScenario(ped_number, scenario_string){ }
	isPedUsingAnyScenario(ped_number){ }
	_0xFE07FF6495D52E2A(p0_number, p1_number, p2_number, p3_number){ }
	_0x9A77DFD295E29B09(p0_number, p1_boolean){ }
	_0x25361A96E0F7E419(p0_number, p1_number, p2_number, p3_number){ }
	_0xEC6935EBE0847B90(p0_number, p1_number, p2_number, p3_number){ }
	_0xA3A9299C4F2ADB98(p0_number){ }
	_0xF1C03A5352243A30(p0_number){ }
	_0xEEED8FAFEC331A70(p0_number, p1_number, p2_number, p3_number){ }
	_0x425AECF167663F48(ped_number, p1_boolean){ }
	_0x5B6010B3CBC29095(p0_number, p1_boolean){ }
	_0xCEDA60A74219D064(p0_number, p1_boolean){ }
	playFacialAnim(ped_number, animName_string, animDict_string){ }
	_0x5687C7F05B39E401(ped_number, animDict_string){ }
	setFacialIdleAnimOverride(ped_number, animName_string, animDict_string){ }
	clearFacialIdleAnimOverride(ped_number){ }
	setPedCanPlayGestureAnims(ped_number, toggle_boolean){ }
	setPedCanPlayVisemeAnims(ped_number, toggle_boolean, p2_boolean){ }
	setPedCanPlayInjuredAnims(ped_number, p1_boolean){ }
	setPedCanPlayAmbientAnims(ped_number, toggle_boolean){ }
	setPedCanPlayAmbientBaseAnims(ped_number, toggle_boolean){ }
	_0xC2EE020F5FB4DB53(ped_number){ }
	setPedCanArmIk(ped_number, toggle_boolean){ }
	setPedCanHeadIk(ped_number, toggle_boolean){ }
	setPedCanLegIk(ped_number, toggle_boolean){ }
	setPedCanTorsoIk(ped_number, toggle_boolean){ }
	_0xF5846EDB26A98A24(ped_number, p1_boolean){ }
	_0x6647C5F6F5792496(ped_number, p1_boolean){ }
	setPedCanUseAutoConversationLookat(ped_number, toggle_boolean){ }
	isPedHeadtrackingPed(ped1_number, ped2_number){ }
	isPedHeadtrackingEntity(ped_number, entity_number){ }
	setPedPrimaryLookat(ped_number, lookAt_number){ }
	_0x78C4E9961DB3EB5B(p0_number, p1_number){ }
	setPedClothProne(p0_number, p1_number){ }
	_0xA660FAF550EB37E5(p0_number, p1_boolean){ }
	setPedConfigFlag(ped_number, flagId_number, value_boolean){ }
	setPedResetFlag(ped_number, flagId_number, doReset_boolean){ }
	getPedConfigFlag(ped_number, flagId_number, p2_boolean){ }
	getPedResetFlag(ped_number, flagId_number){ }
	setPedGroupMemberPassengerIndex(ped_number, index_number){ }
	setPedCanEvasiveDive(ped_number, toggle_boolean){ }
	isPedEvasiveDiving(ped_number, evadingEntity_number){ }
	setPedShootsAtCoord(ped_number, x_number, y_number, z_number, toggle_boolean){ }
	setPedModelIsSuppressed(ped_number, toggle_boolean){ }
	stopAnyPedModelBeingSuppressed(){ }
	setPedCanBeTargetedWhenInjured(ped_number, toggle_boolean){ }
	setPedGeneratesDeadBodyEvents(ped_number, toggle_boolean){ }
	_0xE43A13C9E4CCCBCF(ped_number, p1_boolean){ }
	_0x3E9679C1DFCF422C(p0_number, p1_number){ }
	setPedCanRagdollFromPlayerImpact(ped_number, toggle_boolean){ }
	givePedHelmet(ped_number, cannotRemove_boolean, helmetFlag_number, textureIndex_number){ }
	removePedHelmet(ped_number, instantly_boolean){ }
	_0x14590DDBEDB1EC85(ped_number){ }
	setPedHelmet(ped_number, canWearHelmet_boolean){ }
	setPedHelmetFlag(ped_number, helmetFlag_number){ }
	setPedHelmetPropIndex(ped_number, propIndex_number, p2_boolean){ }
	setPedHelmetUnk(ped_number, p1_boolean, p2_number, p3_number){ }
	isPedHelmetUnk(ped_number){ }
	setPedHelmetTextureIndex(ped_number, textureIndex_number){ }
	isPedWearingHelmet(ped_number){ }
	_0x687C0B594907D2E8(ped_number){ }
	_0x451294E859ECC018(p0_number){ }
	_0x9D728C1E12BF5518(p0_number){ }
	_0xF2385935BFFD4D92(p0_number){ }
	setPedToLoadCover(ped_number, toggle_boolean){ }
	setPedCanCowerInCover(ped_number, toggle_boolean){ }
	setPedCanPeekInCover(ped_number, toggle_boolean){ }
	setPedPlaysHeadOnHornAnimWhenDiesInVehicle(ped_number, toggle_boolean){ }
	setPedLegIkMode(ped_number, mode_number){ }
	setPedMotionBlur(ped_number, toggle_boolean){ }
	setPedCanSwitchWeapon(ped_number, toggle_boolean){ }
	setPedDiesInstantlyInWater(ped_number, toggle_boolean){ }
	_0x1A330D297AAC6BC1(ped_number, p1_number){ }
	stopPedWeaponFiringWhenDropped(ped_number){ }
	setScriptedAnimSeatOffset(ped_number, p1_number){ }
	setPedCombatMovement(ped_number, combatMovement_number){ }
	getPedCombatMovement(ped_number){ }
	setPedCombatAbility(ped_number, p1_number){ }
	setPedCombatRange(ped_number, p1_number){ }
	getPedCombatRange(ped_number){ }
	setPedCombatAttributes(ped_number, attributeIndex_number, enabled_boolean){ }
	setPedTargetLossResponse(ped_number, responseType_number){ }
	isPedPerformingMeleeAction(ped_number){ }
	isPedPerformingStealthKill(ped_number){ }
	_0xEBD0EDBA5BE957CF(ped_number){ }
	isPedBeingStealthKilled(ped_number){ }
	getMeleeTargetForPed(ped_number){ }
	wasPedKilledByStealth(ped_number){ }
	wasPedKilledByTakedown(ped_number){ }
	wasPedKnockedOut(ped_number){ }
	setPedFleeAttributes(ped_number, attributeFlags_number, enable_boolean){ }
	setPedCowerHash(ped_number, p1_string){ }
	_0x2016C603D6B8987C(ped_number, toggle_boolean){ }
	setPedSteersAroundPeds(ped_number, toggle_boolean){ }
	setPedSteersAroundObjects(ped_number, toggle_boolean){ }
	setPedSteersAroundVehicles(ped_number, toggle_boolean){ }
	_0xA9B61A329BFDCBEA(p0_number, p1_boolean){ }
	_0x570389D1C3DE3C6B(p0_number){ }
	_0x576594E8D64375E2(p0_number, p1_boolean){ }
	_0xA52D5247A4227E14(p0_number){ }
	isAnyPedNearPoint(x_number, y_number, z_number, radius_number){ }
	_0x2208438012482A1A(ped_number, p1_boolean, p2_boolean){ }
	_0xFCF37A457CB96DC0(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	requestPedVisibilityTracking(ped_number){ }
	requestPedVehicleVisibilityTracking(ped_number, p1_boolean){ }
	_0xCD018C591F94CB43(ped_number, p1_boolean){ }
	_0x75BA1CB3B7D40CAF(ped_number, p1_boolean){ }
	isTrackedPedVisible(ped_number){ }
	_0x511F1A683387C7E2(ped_number){ }
	isPedTracked(ped_number){ }
	hasPedReceivedEvent(ped_number, eventId_number){ }
	canPedSeeHatedPed(ped1_number, ped2_number){ }
	_0x9C6A6C19B6C0C496(ped_number, p1_number){ }
	_0x2DFC81C9B9608549(ped_number, p1_number){ }
	getPedBoneIndex(ped_number, boneId_number){ }
	getPedRagdollBoneIndex(ped_number, bone_number){ }
	setPedEnveffScale(ped_number, value_number){ }
	getPedEnveffScale(ped_number){ }
	setEnablePedEnveffScale(ped_number, toggle_boolean){ }
	_0x110F526AB784111F(ped_number, p1_number){ }
	_0xD69411AA0CEBF9E9(ped_number, p1_number, p2_number, p3_number){ }
	setPedReflectionIntensity(ped_number, intensity_number){ }
	getPedReflectionIntensity(ped_number){ }
	isPedShaderEffectValid(ped_number){ }
	_0xE906EC930F5FE7C8(p0_number, p1_number){ }
	_0x1216E0BFA72CC703(p0_number, p1_number){ }
	_0x2B5AA717A181FB4C(p0_number, p1_boolean){ }
	_0xB8B52E498014F5B0(ped_number){ }
	createSynchronizedScene(x_number, y_number, z_number, roll_number, pitch_number, yaw_number, p6_number){ }
	createSynchronizedScene2(x_number, y_number, z_number, radius_number, object_number){ }
	isSynchronizedSceneRunning(sceneId_number){ }
	setSynchronizedSceneOrigin(sceneID_number, x_number, y_number, z_number, roll_number, pitch_number, yaw_number, p7_boolean){ }
	setSynchronizedScenePhase(sceneID_number, phase_number){ }
	getSynchronizedScenePhase(sceneID_number){ }
	setSynchronizedSceneRate(sceneID_number, rate_number){ }
	getSynchronizedSceneRate(sceneID_number){ }
	setSynchronizedSceneLooped(sceneID_number, toggle_boolean){ }
	isSynchronizedSceneLooped(sceneID_number){ }
	setSynchronizedSceneOcclusionPortal(sceneID_number, p1_boolean){ }
	_0x7F2F4F13AC5257EF(p0_number){ }
	attachSynchronizedSceneToEntity(sceneID_number, entity_number, boneIndex_number){ }
	detachSynchronizedScene(sceneID_number){ }
	disposeSynchronizedScene(scene_number){ }
	forcePedMotionState(ped_number, motionStateHash_number, p2_boolean, p3_number, p4_boolean){ }
	_0xF60165E1D2C5370B(ped_number, p1_number, p2_number){ }
	setPedMaxMoveBlendRatio(ped_number, value_number){ }
	setPedMinMoveBlendRatio(ped_number, value_number){ }
	setPedMoveRateOverride(ped_number, value_number){ }
	_0x0B3E35AC043707D9(p0_number, p1_number){ }
	_0x46B05BCAE43856B0(ped_number, flag_number){ }
	getPedNearbyVehicles(ped_number, sizeAndVehs_number){ }
	getPedNearbyPeds(ped_number, sizeAndPeds_number, ignore_number){ }
	_0x7350823473013C02(ped_number){ }
	isPedUsingActionMode(ped_number){ }
	setPedUsingActionMode(ped_number, p1_boolean, p2_number, action_string){ }
	setMovementModeOverride(ped_number, name_string){ }
	setPedCapsule(ped_number, value_number){ }
	registerPedheadshot(ped_number){ }
	registerPedheadshot3(ped_number){ }
	registerPedheadshotTransparent(ped_number){ }
	unregisterPedheadshot(id_number){ }
	isPedheadshotValid(id_number){ }
	isPedheadshotReady(id_number){ }
	getPedheadshotTxdString(id_number){ }
	requestPedheadshotImgUpload(id_number){ }
	releasePedheadshotImgUpload(id_number){ }
	_0xEBB376779A760AA8(){ }
	_0x876928DDDFCCC9CD(){ }
	_0xE8A169E666CBC541(){ }
	_0xC1F6EBF9A3D55538(p0_number, p1_number){ }
	_0x600048C60D5C2C51(p0_number){ }
	_0x2DF9038C90AD5264(p0_number, p1_number, p2_number, p3_number, p4_number, interiorFlags_number, scale_number, duration_number){ }
	_0xB2AFF10216DEFA2F(x_number, y_number, z_number, p3_number, p4_number, p5_number, p6_number, interiorFlags_number, scale_number, duration_number){ }
	_0xFEE4A5459472A9F8(){ }
	_0x3C67506996001F5E(){ }
	_0xA586FBEB32A53DBB(){ }
	_0xF445DE8DA80A1792(){ }
	_0xA635C11B8C44AFC2(){ }
	_0x280C7E3AC7F56E90(p0_number, p1_number, p2_number, p3_number){ }
	_0xB782F8238512BAD5(p0_number, p1_number){ }
	setIkTarget(ped_number, ikIndex_number, entityLookAt_number, boneLookAt_number, offsetX_number, offsetY_number, offsetZ_number, p7_number, blendInDuration_number, blendOutDuration_number){ }
	_0xED3C76ADFA6D07C4(ped_number){ }
	requestActionModeAsset(asset_string){ }
	hasActionModeAssetLoaded(asset_string){ }
	removeActionModeAsset(asset_string){ }
	requestStealthModeAsset(asset_string){ }
	hasStealthModeAssetLoaded(asset_string){ }
	removeStealthModeAsset(asset_string){ }
	setPedLodMultiplier(ped_number, multiplier_number){ }
	_0xE861D0B05C7662B8(p0_number, p1_number, p2_number){ }
	_0x129466ED55140F8D(ped_number, toggle_boolean){ }
	setForceStepType(ped_number, p1_boolean, type_number, p3_number){ }
	isAnyHostilePedNearPoint(ped_number, x_number, y_number, z_number, radius_number){ }
	_0x820E9892A77E97CD(p0_number, p1_number){ }
	_0x06087579E7AA85A9(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	_0xD8C3BE3EE94CAF2D(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	_0xD33DAA36272177C4(ped_number){ }
	_0x711794453CFD692B(p0_number, p1_number){ }
	_0x83A169EABCDB10A2(p0_number, p1_number){ }
	_0x288DF530C92DAD6F(p0_number, p1_number){ }
	_0x3795688A307E1EB6(Ped_number){ }
	_0x0F62619393661D6E(p0_number, p1_number, p2_number){ }
	_0xDFE68C4B787E1BFB(p0_number){ }
	setEnableScubaGearLight(ped_number, toggle_boolean){ }
	isScubaGearLightEnabled(ped_number){ }
	_0x637822DC2AFEEBF8(p0_number){ }
	addRope(x_number, y_number, z_number, rotX_number, rotY_number, rotZ_number, length_number, ropeType_number, maxLength_number, minLength_number, p10_number, p11_boolean, p12_boolean, rigid_boolean, p14_number, breakWhenShot_boolean, unkPtr_number){ }
	deleteRope(ropeId_number){ }
	deleteChildRope(ropeId_number){ }
	doesRopeExist(ropeId_number){ }
	ropeDrawShadowEnabled(ropeId_number, toggle_boolean){ }
	loadRopeData(ropeId_number, rope_preset_string){ }
	pinRopeVertex(ropeId_number, vertex_number, x_number, y_number, z_number){ }
	unpinRopeVertex(ropeId_number, vertex_number){ }
	getRopeVertexCount(ropeId_number){ }
	attachEntitiesToRope(ropeId_number, ent1_number, ent2_number, ent1_x_number, ent1_y_number, ent1_z_number, ent2_x_number, ent2_y_number, ent2_z_number, length_number, p10_boolean, p11_boolean, p12_number, p13_number){ }
	attachRopeToEntity(ropeId_number, entity_number, x_number, y_number, z_number, p5_boolean){ }
	detachRopeFromEntity(ropeId_number, entity_number){ }
	ropeSetUpdatePinverts(ropeId_number){ }
	_0xDC57A637A20006ED(ropeId_number, p1_number){ }
	_0x36CCB9BE67B970FD(ropeId_number, p1_boolean){ }
	_0x84DE3B5FB3E666F0(ropeId_number){ }
	getRopeLastVertexCoord(ropeId_number){ }
	getRopeVertexCoord(ropeId_number, vertex_number){ }
	startRopeWinding(ropeId_number){ }
	stopRopeWinding(ropeId_number){ }
	startRopeUnwindingFront(ropeId_number){ }
	stopRopeUnwindingFront(ropeId_number){ }
	ropeConvertToSimple(ropeId_number){ }
	ropeLoadTextures(){ }
	ropeAreTexturesLoaded(){ }
	ropeUnloadTextures(){ }
	doesRopeBelongToThisScript(ropeId_number){ }
	_0xBC0CE682D4D05650(ropeId_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number, p11_number, p12_number, p13_number){ }
	_0xB1B6216CA2E7B55E(p0_number, p1_boolean, p2_boolean){ }
	_0xB743F735C03D7810(ropeId_number, p1_number){ }
	ropeGetDistanceBetweenEnds(ropeId_number){ }
	ropeForceLength(ropeId_number, length_number){ }
	ropeResetLength(ropeId_number, length_number){ }
	applyImpulseToCloth(posX_number, posY_number, posZ_number, vecX_number, vecY_number, vecZ_number, impulse_number){ }
	setDamping(entity_number, vertex_number, value_number){ }
	activatePhysics(entity_number){ }
	setCgoffset(entity_number, x_number, y_number, z_number){ }
	getCgoffset(entity_number){ }
	setCgAtBoundcenter(entity_number){ }
	breakEntityGlass(entity_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_boolean){ }
	_0x0C112765300C7E1E(p0_number){ }
	setDisableBreaking(object_number, toggle_boolean){ }
	_0xCC6E963682533882(object_number){ }
	setDisableFragDamage(object_number, toggle_boolean){ }
	setEntityProofUnk(entity_number, toggle_boolean){ }
	_0x9EBD751E5787BAF2(p0_boolean){ }
	_0xAA6A6098851C396F(p0_boolean){ }
	getPlayerPed(player_number){ }
	getPlayerPedScriptIndex(player_number){ }
	setPlayerModel(player_number, model_number){ }
	changePlayerPed(player_number, ped_number, p2_boolean, resetDamage_boolean){ }
	getPlayerRgbColour(player_number, r_number, g_number, b_number){ }
	getNumberOfPlayers(){ }
	getPlayerTeam(player_number){ }
	setPlayerTeam(player_number, team_number){ }
	getNumberOfPlayersInTeam(team_number){ }
	getPlayerName(player_number){ }
	getWantedLevelRadius(player_number){ }
	getPlayerWantedCentrePosition(player_number){ }
	setPlayerWantedCentrePosition(player_number, position_setAsUndefined, p2_boolean, p3_boolean){ }
	getWantedLevelThreshold(wantedLevel_number){ }
	setPlayerWantedLevel(player_number, wantedLevel_number, disableNoMission_boolean){ }
	setPlayerWantedLevelNoDrop(player_number, wantedLevel_number, p2_boolean){ }
	setPlayerWantedLevelNow(player_number, p1_boolean){ }
	arePlayerFlashingStarsAboutToDrop(player_number){ }
	arePlayerStarsGreyedOut(player_number){ }
	_0x7E07C78925D5FD96(p0_number){ }
	setDispatchCopsForPlayer(player_number, toggle_boolean){ }
	isPlayerWantedLevelGreater(player_number, wantedLevel_number){ }
	clearPlayerWantedLevel(player_number){ }
	isPlayerDead(player_number){ }
	isPlayerPressingHorn(player_number){ }
	setPlayerControl(player_number, bHasControl_boolean, flags_number){ }
	getPlayerWantedLevel(player_number){ }
	setMaxWantedLevel(maxWantedLevel_number){ }
	setPoliceRadarBlips(toggle_boolean){ }
	setPoliceIgnorePlayer(player_number, toggle_boolean){ }
	isPlayerPlaying(player_number){ }
	setEveryoneIgnorePlayer(player_number, toggle_boolean){ }
	setAllRandomPedsFlee(player_number, toggle_boolean){ }
	setAllRandomPedsFleeThisFrame(player_number){ }
	_0xDE45D1A1EF45EE61(player_number, toggle_boolean){ }
	_0xC3376F42B1FACCC6(player_number){ }
	_0xFAC75988A7D078D3(player_number){ }
	setIgnoreLowPriorityShockingEvents(player_number, toggle_boolean){ }
	setWantedLevelMultiplier(multiplier_number){ }
	setWantedLevelDifficulty(player_number, difficulty_number){ }
	resetWantedLevelDifficulty(player_number){ }
	startFiringAmnesty(duration_number){ }
	reportCrime(player_number, crimeType_number, wantedLvlThresh_number){ }
	switchCrimeType(player_number, p1_number){ }
	_0xBC9490CA15AEA8FB(player_number){ }
	_0x4669B3ED80F24B4E(player_number){ }
	_0x2F41A3BAE005E5FA(p0_number, p1_number){ }
	_0xAD73CE5A09E42D12(player_number){ }
	_0x36F1B38855F2A8DF(player_number){ }
	_0xDC64D2C53493ED12(player_number){ }
	_0xB45EFF719D8427A6(p0_number){ }
	_0x0032A6DBA562C518(){ }
	canPlayerStartMission(player_number){ }
	isPlayerReadyForCutscene(player_number){ }
	isPlayerTargettingEntity(player_number, entity_number){ }
	getPlayerTargetEntity(player_number, entity_number){ }
	isPlayerFreeAiming(player_number){ }
	isPlayerFreeAimingAtEntity(player_number, entity_number){ }
	getEntityPlayerIsFreeAimingAt(player_number, entity_number){ }
	setPlayerLockonRangeOverride(player_number, range_number){ }
	setPlayerCanDoDriveBy(player_number, toggle_boolean){ }
	setPlayerCanBeHassledByGangs(player_number, toggle_boolean){ }
	setPlayerCanUseCover(player_number, toggle_boolean){ }
	getMaxWantedLevel(){ }
	isPlayerTargettingAnything(player_number){ }
	setPlayerSprint(player_number, toggle_boolean){ }
	resetPlayerStamina(player_number){ }
	restorePlayerStamina(player_number, p1_number){ }
	getPlayerSprintStaminaRemaining(player_number){ }
	getPlayerSprintTimeRemaining(player_number){ }
	getPlayerUnderwaterTimeRemaining(player_number){ }
	_0xA0D3E4F7AAFB7E78(p0_number, p1_number){ }
	getPlayerGroup(player_number){ }
	getPlayerMaxArmour(player_number){ }
	isPlayerControlOn(player_number){ }
	isPlayerCamControlDisabled(){ }
	isPlayerScriptControlOn(player_number){ }
	isPlayerClimbing(player_number){ }
	isPlayerBeingArrested(player_number, atArresting_boolean){ }
	resetPlayerArrestState(player_number){ }
	getPlayersLastVehicle(){ }
	getPlayerIndex(){ }
	intToPlayerindex(value_number){ }
	intToParticipantindex(value_number){ }
	getTimeSincePlayerHitVehicle(player_number){ }
	getTimeSincePlayerHitPed(player_number){ }
	getTimeSincePlayerDroveOnPavement(player_number){ }
	getTimeSincePlayerDroveAgainstTraffic(player_number){ }
	isPlayerFreeForAmbientTask(player_number){ }
	playerId(){ }
	playerPedId(){ }
	networkPlayerIdToInt(){ }
	hasForceCleanupOccurred(cleanupFlags_number){ }
	forceCleanup(cleanupFlags_number){ }
	forceCleanupForAllThreadsWithThisName(name_string, cleanupFlags_number){ }
	forceCleanupForThreadWithThisId(id_number, cleanupFlags_number){ }
	getCauseOfMostRecentForceCleanup(){ }
	setPlayerMayOnlyEnterThisVehicle(player_number, vehicle_number){ }
	setPlayerMayNotEnterAnyVehicle(player_number){ }
	giveAchievementToPlayer(achievement_number){ }
	setAchievementProgress(achievement_number, progress_number){ }
	getAchievementProgress(achievement_number){ }
	hasAchievementBeenPassed(achievement_number){ }
	isPlayerOnline(){ }
	isPlayerLoggingInNp(){ }
	displaySystemSigninUi(unk_boolean){ }
	isSystemUiBeingDisplayed(){ }
	setPlayerInvincible(player_number, toggle_boolean){ }
	getPlayerInvincible(player_number){ }
	setPlayerInvincibleKeepRagdollEnabled(player_number, toggle_boolean){ }
	_0xCAC57395B151135F(player_number, p1_boolean){ }
	removePlayerHelmet(player_number, p2_boolean){ }
	givePlayerRagdollControl(player_number, toggle_boolean){ }
	setPlayerLockon(player_number, toggle_boolean){ }
	setPlayerTargetingMode(targetMode_number){ }
	setPlayerTargetLevel(targetLevel_number){ }
	_0xB9CF1F793A9F1BF1(){ }
	_0xCB645E85E97EA48B(){ }
	clearPlayerHasDamagedAtLeastOnePed(player_number){ }
	hasPlayerDamagedAtLeastOnePed(player_number){ }
	clearPlayerHasDamagedAtLeastOneNonAnimalPed(player_number){ }
	hasPlayerDamagedAtLeastOneNonAnimalPed(player_number){ }
	setAirDragMultiplierForPlayersVehicle(player_number, multiplier_number){ }
	setSwimMultiplierForPlayer(player_number, multiplier_number){ }
	setRunSprintMultiplierForPlayer(player_number, multiplier_number){ }
	getTimeSinceLastArrest(){ }
	getTimeSinceLastDeath(){ }
	assistedMovementCloseRoute(){ }
	assistedMovementFlushRoute(){ }
	setPlayerForcedAim(player_number, toggle_boolean){ }
	setPlayerForcedZoom(player_number, toggle_boolean){ }
	setPlayerForceSkipAimIntro(player_number, toggle_boolean){ }
	disablePlayerFiring(player_number, toggle_boolean){ }
	_0xB885852C39CC265D(){ }
	setDisableAmbientMeleeMove(player_number, toggle_boolean){ }
	setPlayerMaxArmour(player_number, value_number){ }
	_0x821FDC827D6F4090(p0_number){ }
	_0xB214D570EAD7F81A(player_number, p1_number){ }
	_0x17F7471EACA78290(p0_number){ }
	specialAbilityDeactivate(player_number){ }
	specialAbilityDeactivateFast(player_number){ }
	specialAbilityReset(player_number){ }
	_0xC9A763D8FE87436A(player_number){ }
	specialAbilityChargeSmall(player_number, p1_boolean, p2_boolean){ }
	specialAbilityChargeMedium(player_number, p1_boolean, p2_boolean){ }
	specialAbilityChargeLarge(player_number, p1_boolean, p2_boolean){ }
	specialAbilityChargeContinuous(player_number, p2_number){ }
	specialAbilityChargeAbsolute(player_number, p1_number, p2_boolean){ }
	specialAbilityChargeNormalized(player_number, normalizedValue_number, p2_boolean){ }
	specialAbilityFillMeter(player_number, p1_boolean){ }
	specialAbilityDepleteMeter(player_number, p1_boolean){ }
	specialAbilityLock(playerModel_number){ }
	specialAbilityUnlock(playerModel_number){ }
	isSpecialAbilityUnlocked(playerModel_number){ }
	isSpecialAbilityActive(player_number){ }
	isSpecialAbilityMeterFull(player_number){ }
	enableSpecialAbility(player_number, toggle_boolean){ }
	isSpecialAbilityEnabled(player_number){ }
	setSpecialAbilityMultiplier(multiplier_number){ }
	_0xFFEE8FA29AB9A18E(player_number){ }
	_0x5FC472C501CCADB3(player_number){ }
	_0xF10B44FD479D69F3(player_number, p1_number){ }
	_0xDD2620B7B9D16FF1(player_number, p1_number){ }
	startPlayerTeleport(player_number, x_number, y_number, z_number, heading_number, p5_boolean, p6_boolean, p7_boolean){ }
	hasPlayerTeleportFinished(player_number){ }
	stopPlayerTeleport(){ }
	isPlayerTeleportActive(){ }
	getPlayerCurrentStealthNoise(player_number){ }
	setPlayerHealthRechargeMultiplier(player_number, regenRate_number){ }
	getPlayerHealthRechargeLimit(player_number){ }
	setPlayerHealthRechargeLimit(player_number, limit_number){ }
	_0xEFD79FA81DFBA9CB(p0_number, p1_number){ }
	setPlayerWeaponDamageModifier(player_number, modifier_number){ }
	setPlayerWeaponDefenseModifier(player_number, modifier_number){ }
	setPlayerWeaponDefenseModifier2(player_number, modifier_number){ }
	setPlayerMeleeWeaponDamageModifier(player_number, modifier_number, p2_boolean){ }
	setPlayerMeleeWeaponDefenseModifier(player_number, modifier_number){ }
	setPlayerVehicleDamageModifier(player_number, modifier_number){ }
	setPlayerVehicleDefenseModifier(player_number, modifier_number){ }
	_0x8D768602ADEF2245(player_number, p1_number){ }
	_0xD821056B9ACF8052(p0_number, p1_number){ }
	_0x31E90B8873A4CD3B(p0_number, p1_number){ }
	setPlayerParachuteTintIndex(player_number, tintIndex_number){ }
	getPlayerParachuteTintIndex(player_number, tintIndex_number){ }
	setPlayerReserveParachuteTintIndex(player_number, index_number){ }
	getPlayerReserveParachuteTintIndex(player_number, index_number){ }
	setPlayerParachutePackTintIndex(player_number, tintIndex_number){ }
	getPlayerParachutePackTintIndex(player_number, tintIndex_number){ }
	setPlayerHasReserveParachute(player_number){ }
	getPlayerHasReserveParachute(player_number){ }
	setPlayerCanLeaveParachuteSmokeTrail(player_number, enabled_boolean){ }
	setPlayerParachuteSmokeTrailColor(player_number, r_number, g_number, b_number){ }
	getPlayerParachuteSmokeTrailColor(player_number, r_number, g_number, b_number){ }
	setPlayerResetFlagPreferRearSeats(player_number, flags_number){ }
	setPlayerNoiseMultiplier(player_number, multiplier_number){ }
	setPlayerSneakingNoiseMultiplier(player_number, multiplier_number){ }
	canPedHearPlayer(player_number, ped_number){ }
	simulatePlayerInputGait(player_number, amount_number, gaitType_number, speed_number, p4_boolean, p5_boolean){ }
	resetPlayerInputGait(player_number){ }
	setAutoGiveParachuteWhenEnterPlane(player_number, toggle_boolean){ }
	setAutoGiveScubaGearWhenExitVehicle(player_number, toggle_boolean){ }
	setPlayerStealthPerceptionModifier(player_number, value_number){ }
	_0x690A61A6D13583F6(player_number){ }
	_0x9EDD76E87D5D51BA(player_number){ }
	setPlayerSimulateAiming(player_number, toggle_boolean){ }
	setPlayerClothPinFrames(player_number, toggle_boolean){ }
	setPlayerClothPackageIndex(index_number){ }
	setPlayerClothLockCounter(value_number){ }
	playerAttachVirtualBound(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number){ }
	playerDetachVirtualBound(){ }
	hasPlayerBeenSpottedInStolenVehicle(player_number){ }
	isPlayerBattleAware(player_number){ }
	_0xBC0753C9CA14B506(player_number, p1_number, p2_boolean){ }
	extendWorldBoundaryForPlayer(x_number, y_number, z_number){ }
	resetWorldBoundaryForPlayer(){ }
	isPlayerRidingTrain(player_number){ }
	hasPlayerLeftTheWorld(player_number){ }
	setPlayerLeavePedBehind(player_number, toggle_boolean){ }
	setPlayerParachuteVariationOverride(player_number, p1_number, p2_number, p3_number, p4_boolean){ }
	clearPlayerParachuteVariationOverride(player_number){ }
	setPlayerParachuteModelOverride(player_number, model_number){ }
	clearPlayerParachuteModelOverride(player_number){ }
	setPlayerParachutePackModelOverride(player_number, model_number){ }
	clearPlayerParachutePackModelOverride(player_number){ }
	disablePlayerVehicleRewards(player_number){ }
	_0x2F7CEB6520288061(p0_boolean){ }
	setPlayerBluetoothState(player_number, state_boolean){ }
	isPlayerBluetoothEnable(player_number){ }
	_0x5501B7A5CDB79D37(player_number){ }
	getPlayerFakeWantedLevel(player_number){ }
	_0x55FCC0C390620314(p0_number, p1_number, p2_number){ }
	_0x2382AB11450AE7BA(p0_number, p1_number){ }
	_0x6E4361FF3E8CD7CA(p0_number){ }
	_0x237440E46D918649(p0_number){ }
	_0xEE4EBDD2593BA844(p0_number, p1_number){ }
	_0x7BAE68775557AE0B(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	_0x7148E0F43D11F0D9(){ }
	_0x70A382ADEC069DD3(p0_number, p1_number, p2_number){ }
	_0x48621C9FCA3EBD28(p0_number){ }
	_0x81CBAE94390F9F89(){ }
	_0x13B350B8AD0EEE10(){ }
	_0x293220DA1B46CEBC(p0_number, p1_number, p2_number){ }
	_0x208784099002BC30(missionNameLabel_string, p1_number){ }
	stopRecordingThisFrame(){ }
	_0xF854439EFBB3B583(){ }
	disableRockstarEditorCameraChanges(){ }
	_0x66972397E0757E7A(p0_number, p1_number, p2_number){ }
	startRecording(mode_number){ }
	stopRecordingAndSaveClip(){ }
	stopRecordingAndDiscardClip(){ }
	saveRecordingClip(){ }
	isRecording(){ }
	_0xDF4B952F7D381B95(){ }
	_0x4282E08174868BE3(){ }
	_0x33D47E85B476ABCD(p0_boolean){ }
	_0x7E2BD3EF6C205F09(p0_string, p1_boolean){ }
	isInteriorRenderingDisabled(){ }
	_0x5AD3932DAEB1E5D3(){ }
	_0xE058175F8EAFE79A(p0_boolean){ }
	resetEditorValues(){ }
	activateRockstarEditor(){ }
	requestScript(scriptName_string){ }
	setScriptAsNoLongerNeeded(scriptName_string){ }
	hasScriptLoaded(scriptName_string){ }
	doesScriptExist(scriptName_string){ }
	requestScriptWithNameHash(scriptHash_number){ }
	setScriptWithNameHashAsNoLongerNeeded(scriptHash_number){ }
	hasScriptWithNameHashLoaded(scriptHash_number){ }
	doesScriptWithNameHashExist(scriptHash_number){ }
	terminateThread(threadId_number){ }
	isThreadActive(threadId_number){ }
	getNameOfThread(threadId_number){ }
	scriptThreadIteratorReset(){ }
	scriptThreadIteratorGetNextThreadId(){ }
	getIdOfThisThread(){ }
	terminateThisThread(){ }
	getNumberOfReferencesOfScriptWithNameHash(scriptHash_number){ }
	getThisScriptName(){ }
	getHashOfThisScriptName(){ }
	getNumberOfEvents(eventGroup_number){ }
	getEventExists(eventGroup_number, eventIndex_number){ }
	getEventAtIndex(eventGroup_number, eventIndex_number){ }
	getEventData(eventGroup_number, eventIndex_number, argStruct_number, argStructSize_number){ }
	triggerScriptEvent(eventGroup_number, args_number, argCount_number, bit_number){ }
	shutdownLoadingScreen(){ }
	setNoLoadingScreen(toggle_boolean){ }
	getNoLoadingScreen(){ }
	_0xB1577667C3708F9B(){ }
	_0x836B62713E0534CA(){ }
	_0x760910B49D2B98EA(){ }
	bgrStartContextHash(contextHash_number){ }
	bgrEndContextHash(contextHash_number){ }
	bgrStartContext(contextName_string){ }
	bgrEndContext(contextName_string){ }
	_0x0F6F1EBBC4E1D5E6(scriptIndex_number, p1_string){ }
	_0x22E21FBCFC88C149(scriptIndex_number, p1_string){ }
	_0x829CD22E043A2577(p0_number){ }
	startShapeTestLosProbe(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, flags_number, entity_number, p8_number){ }
	startShapeTestRay(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, flags_number, entity_number, p8_number){ }
	startShapeTestBoundingBox(entity_number, flags1_number, flags2_number){ }
	startShapeTestBox(x_number, y_number, z_number, x1_number, y2_number, z2_number, rotX_number, rotY_number, rotZ_number, p9_number, p10_number, entity_number, p12_number){ }
	startShapeTestBound(entity_number, flags1_number, flags2_number){ }
	startShapeTestCapsule(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, radius_number, flags_number, entity_number, p9_number){ }
	startShapeTestSweptSphere(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, radius_number, flags_number, entity_number, p9_number){ }
	startShapeTestSurroundingCoords(pVec1_setAsUndefined, pVec2_setAsUndefined, flag_number, entity_number, flag2_number){ }
	getShapeTestResult(rayHandle_number, hit_boolean, endCoords_setAsUndefined, surfaceNormal_setAsUndefined, entityHit_number){ }
	getShapeTestResultIncludingMaterial(rayHandle_number, hit_boolean, endCoords_setAsUndefined, surfaceNormal_setAsUndefined, materialHash_number, entityHit_number){ }
	shapeTestResultEntity(entityHit_number){ }
	getTotalScInboxIds(){ }
	scInboxMessageInit(p0_number){ }
	isScInboxValid(p0_number){ }
	scInboxMessagePop(p0_number){ }
	scInboxMessageGetDataInt(p0_number, context_string, out_number){ }
	scInboxMessageGetDataBool(p0_number, p1_string){ }
	scInboxMessageGetDataString(p0_number, context_string, out_string){ }
	scInboxMessageDoApply(p0_number){ }
	scInboxMessageGetString(p0_number){ }
	scInboxMessagePushGamerToEventRecipList(networkHandle_number){ }
	scInboxMessageSendUgcStatUpdateEvent(data_number){ }
	scInboxMessageGetUgcdata(p0_number, p1_number){ }
	scInboxMessageSendBountyPresenceEvent(data_number){ }
	scInboxMessageGetBountyData(index_number, outData_number){ }
	scInboxGetEmails(offset_number, limit_number){ }
	_0x16DA8172459434AA(){ }
	_0x7DB18CA8CAD5B098(){ }
	_0x4737980E8A283806(p0_number, p1_number){ }
	_0x44ACA259D67651DB(p0_number, p1_number){ }
	scEmailMessagePushGamerToRecipList(networkHandle_number){ }
	scEmailMessageClearRecipList(){ }
	_0x116FB94DC4B79F17(p0_string){ }
	_0x07DBD622D9533857(p0_number){ }
	setHandleRockstarMessageViaScript(toggle_boolean){ }
	isRockstarMessageReadyForScript(){ }
	rockstarMessageGetString(){ }
	_0x1F1E9682483697C7(p0_number, p1_number){ }
	_0xC4C4575F62534A24(){ }
	_0x287F1F75D2803595(p0_number, p1_number){ }
	_0x487912FD248EFDDF(p0_number, p1_number){ }
	_0xC85A7127E7AD02AA(){ }
	_0xA770C8EEC6FB2AC5(){ }
	scGetIsProfileAttributeSet(name_string){ }
	_0x7FFCBFEE44ECFABF(){ }
	_0x2D874D4AE612A65F(){ }
	scProfanityCheckString(string_string, token_number){ }
	scProfanityCheckUgcString(string_string, token_number){ }
	scProfanityGetCheckIsValid(token_number){ }
	scProfanityGetCheckIsPending(token_number){ }
	scProfanityGetStringPassed(token_number){ }
	scProfanityGetStringStatus(token_number){ }
	_0xF6BAAAF762E1BF40(p0_string, p1_number){ }
	_0xF22CA0FD74B80E7A(p0_number){ }
	_0x9237E334F6E43156(p0_number){ }
	_0x700569DBA175A77C(p0_number){ }
	_0x1D4446A62D35B0D0(p0_number, p1_number){ }
	_0x2E89990DDFF670C3(p0_number, p1_number){ }
	_0xD0EE05FE193646EA(p0_number, p1_number, p2_number){ }
	_0x1989C6E6F67E76A8(p0_number, p1_number, p2_number){ }
	_0x07C61676E5BB52CD(p0_number){ }
	_0x8147FFF6A718E1AD(p0_number){ }
	_0x0F73393BAC7E6730(p0_number, p1_number){ }
	_0xD302E99EDF0449CF(p0_number){ }
	_0x5C4EBFFA98BDB41C(p0_number){ }
	_0xFF8F3A92B75ED67A(){ }
	_0x4ED9C8D6DA297639(){ }
	_0x710BCDA8071EDED1(){ }
	_0x50A8A36201DBF83E(){ }
	_0x9DE5D2F723575ED0(){ }
	_0xC2C97EA97711D1AE(){ }
	_0x450819D8CF90C416(){ }
	_0x4A7D6E727F941747(p0_number){ }
	_0xE75A4A2E5E316D86(){ }
	_0x2570E26BE63964E3(){ }
	_0x1D12A56FC95BE92E(){ }
	_0x33DF47CC0642061B(){ }
	_0xA468E0BE12B12C70(){ }
	_0x8CC469AB4D349B7C(p0_number, p1_string, p2_number){ }
	_0xC5A35C73B68F3C49(){ }
	_0x699E4A5C8C893A18(p0_number, p1_string, p2_number){ }
	_0x19853B5B17D77BCA(p0_number, p1_number){ }
	_0x6BFB12CE158E3DD4(p0_number){ }
	_0xFE4C1D0D3B9CC17E(p0_number, p1_number){ }
	_0xD8122C407663B995(){ }
	_0x3001BEF2FECA3680(){ }
	_0x92DA6E70EF249BD1(p0_string, p1_number){ }
	_0x675721C9F644D161(){ }
	_0xE4F6E8D07A2F0F51(p0_number){ }
	_0x8A4416C0DB05FA66(p0_number){ }
	_0xEA95C0853A27888E(){ }
	scGetNickname(){ }
	_0x225798743970412B(p0_number){ }
	scGetHasAchievementBeenPassed(achievement_number){ }
	statClearSlotForReload(statSlot_number){ }
	statLoad(p0_number){ }
	statSave(p0_number, p1_boolean, p2_number){ }
	_0x5688585E6D563CD8(p0_number){ }
	statLoadPending(p0_number){ }
	statSavePending(){ }
	statSavePendingOrRequested(){ }
	statDeleteSlot(p0_number){ }
	statSlotIsLoaded(p0_number){ }
	_0x7F2C4CDF2E82DF4C(p0_number){ }
	_0xE496A53BA5F50A56(p0_number){ }
	_0xF434A10BA01C37D0(toggle_boolean){ }
	_0x7E6946F68A38B74F(p0_number){ }
	_0xA8733668D1047B51(p0_number){ }
	_0xECB41AC6AB754401(){ }
	_0x9B4BD21D69B1E609(){ }
	_0xC0E0D686DDFC6EAE(){ }
	statSetInt(statName_number, value_number, save_boolean){ }
	statSetFloat(statName_number, value_number, save_boolean){ }
	statSetBool(statName_number, value_boolean, save_boolean){ }
	statSetGxtLabel(statName_number, value_string, save_boolean){ }
	statSetDate(statName_number, value_number, numFields_number, save_boolean){ }
	statSetString(statName_number, value_string, save_boolean){ }
	statSetPos(statName_number, x_number, y_number, z_number, save_boolean){ }
	statSetMaskedInt(statName_number, p1_number, p2_number, p3_number, save_boolean){ }
	statSetUserId(statName_number, value_string, save_boolean){ }
	statSetCurrentPosixTime(statName_number, p1_boolean){ }
	statGetInt(statHash_number, outValue_number, p2_number){ }
	statGetFloat(statHash_number, outValue_number, p2_number){ }
	statGetBool(statHash_number, outValue_boolean, p2_number){ }
	statGetDate(statHash_number, p1_number, p2_number, p3_number){ }
	statGetString(statHash_number, p1_number){ }
	statGetPos(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	statGetMaskedInt(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	statGetUserId(p0_number){ }
	statGetLicensePlate(statName_number){ }
	statSetLicensePlate(statName_number, str_string){ }
	statIncrement(statName_number, value_number){ }
	_0x5A556B229A169402(){ }
	_0xB1D2BB1E1631F5B1(){ }
	_0xBED9F5693F34ED17(statName_number, p1_number, outValue_number){ }
	_0x26D7399B9587FE89(p0_number){ }
	_0xA78B8FA58200DA56(p0_number){ }
	statGetNumberOfDays(statName_number){ }
	statGetNumberOfHours(statName_number){ }
	statGetNumberOfMinutes(statName_number){ }
	statGetNumberOfSeconds(statName_number){ }
	statSetProfileSettingValue(profileSetting_number, value_number){ }
	_0xF4D8E7AC2A27758C(p0_number){ }
	_0x94F12ABF9C79E339(p0_number){ }
	getPackedBoolStatKey(index_number, spStat_boolean, charStat_boolean, character_number){ }
	getPackedIntStatKey(index_number, spStat_boolean, charStat_boolean, character_number){ }
	getPackedTitleUpdateBoolStatKey(index_number, spStat_boolean, charStat_boolean, character_number){ }
	getPackedTitleUpdateIntStatKey(index_number, spStat_boolean, charStat_boolean, character_number){ }
	getNgstatBoolHash(index_number, spStat_boolean, charStat_boolean, character_number, section_string){ }
	getNgstatIntHash(index_number, spStat_boolean, charStat_boolean, character_number, section_string){ }
	statGetBoolMasked(statName_number, mask_number, p2_number){ }
	statSetBoolMasked(statName_number, value_boolean, mask_number, save_boolean){ }
	playstatsBackgroundScriptAction(action_string, value_number){ }
	playstatsNpcInvite(p0_number){ }
	playstatsAwardXp(amount_number, type_number, category_number){ }
	playstatsRankUp(rank_number){ }
	playstatsStartOfflineMode(){ }
	_0xA071E0ED98F91286(p0_number, p1_number){ }
	_0xC5BE134EC7BA96A0(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	playstatsMissionStarted(p0_number, p1_number, p2_number, p3_boolean){ }
	playstatsMissionOver(p0_number, p1_number, p2_number, p3_boolean, p4_boolean, p5_boolean){ }
	playstatsMissionCheckpoint(p0_number, p1_number, p2_number, p3_number){ }
	playstatsRandomMissionDone(name_string, p1_number, p2_number, p3_number){ }
	playstatsRosBet(amount_number, act_number, player_number, cm_number){ }
	playstatsRaceCheckpoint(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	_0x6DEE77AFF8C21BD1(playerAccountId_number, posixTime_number){ }
	playstatsMatchStarted(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	playstatsShopItem(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	playstatsCrateDrop(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number){ }
	playstatsCrateCreated(p0_number, p1_number, p2_number){ }
	playstatsHoldUp(p0_number, p1_number, p2_number, p3_number){ }
	playstatsImpExp(p0_number, p1_number, p2_number, p3_number){ }
	playstatsRaceToPoint(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number){ }
	playstatsAcquiredHiddenPackage(p0_number){ }
	playstatsWebsiteVisited(scaleformHash_number, p1_number){ }
	playstatsFriendActivity(p0_number, p1_number){ }
	playstatsOddjobDone(p0_number, p1_number, p2_number){ }
	playstatsPropChange(p0_number, p1_number, p2_number, p3_number){ }
	playstatsClothChange(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	playstatsWeaponModeChange(weaponHash_number, componentHashTo_number, componentHashFrom_number){ }
	playstatsCheatApplied(cheat_string){ }
	_0xF8C54A461C3E11DC(p0_number, p1_number, p2_number, p3_number){ }
	_0xF5BB8DAC426A52C0(p0_number, p1_number, p2_number, p3_number){ }
	_0xA736CF7FB7C5BFF4(p0_number, p1_number, p2_number, p3_number){ }
	_0x14E0B2D1AD1044E0(p0_number, p1_number, p2_number, p3_number){ }
	playstatsQuickfixTool(element_number, item_string){ }
	playstatsIdleKick(time_number){ }
	_0xD1032E482629049E(p0_number){ }
	playstatsHeistSaveCheat(hash_number, p1_number){ }
	playstatsDirectorMode(p0_number){ }
	playstatsAwardBadsport(id_number){ }
	playstatsPegasaircraft(modelHash_number){ }
	_0x6A60E43998228229(p0_number){ }
	_0xBFAFDB5FAAA5C5AB(p0_number){ }
	_0x8C9D11605E59D955(p0_number){ }
	_0x3DE3AA516FB126A4(p0_number){ }
	_0xBAA2F0490E146BE8(p0_number){ }
	_0x1A7CE7CD3E653485(p0_number){ }
	_0x419615486BBF1956(p0_number){ }
	_0x84DFC579C2FC214C(p0_number){ }
	_0x0A9C7F36E5D7B683(p0_number){ }
	_0x164C5FF663790845(p0_number){ }
	_0xEDBF6C9B0D2C65C8(p0_number){ }
	_0x6551B1F7F6CD46EA(p0_number){ }
	_0x2CD90358F67D0AA8(p0_number){ }
	playstatsPiMenuHideSettings(data_number){ }
	leaderboardsGetNumberOfColumns(p0_number, p1_number){ }
	leaderboardsGetColumnId(p0_number, p1_number, p2_number){ }
	leaderboardsGetColumnType(p0_number, p1_number, p2_number){ }
	leaderboardsReadClearAll(){ }
	leaderboardsReadClear(p0_number, p1_number, p2_number){ }
	leaderboardsReadPending(p0_number, p1_number, p2_number){ }
	leaderboardsReadAnyPending(){ }
	leaderboardsReadSuccessful(p0_number, p1_number, p2_number){ }
	leaderboards2ReadFriendsByRow(p0_number, p1_number, p2_number, p3_boolean, p4_number, p5_number){ }
	leaderboards2ReadByHandle(p0_number, p1_number){ }
	leaderboards2ReadByRow(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	leaderboards2ReadByRank(p0_number, p1_number, p2_number){ }
	leaderboards2ReadByRadius(p0_number, p1_number, p2_number){ }
	leaderboards2ReadByScoreInt(p0_number, p1_number, p2_number){ }
	leaderboards2ReadByScoreFloat(p0_number, p1_number, p2_number){ }
	_0xC38DC1E90D22547C(p0_number, p1_number, p2_number){ }
	leaderboards2ReadByPlatform(p0_number, gamerHandleCsv_string, platformName_string){ }
	_0xA0F93D5465B3094D(p0_number){ }
	_0x71B008056E5692D6(){ }
	_0x34770B9CE0E03B91(p0_number, p1_number){ }
	_0x88578F6EC36B4A3A(p0_number, p1_number){ }
	_0x38491439B6BA7F7D(p0_number, p1_number){ }
	leaderboards2WriteData(p0_number){ }
	leaderboardsWriteAddColumn(p0_number, p1_number, p2_number){ }
	leaderboardsWriteAddColumnLong(p0_number, p1_number, p2_number){ }
	leaderboardsCacheDataRow(p0_number){ }
	leaderboardsClearCacheData(){ }
	_0x8EC74CEB042E7CFF(p0_number){ }
	leaderboardsGetCacheExists(p0_number){ }
	leaderboardsGetCacheTime(p0_number){ }
	leaderboardsGetCacheNumberOfRows(p0_number){ }
	leaderboardsGetCacheDataRow(p0_number, p1_number, p2_number){ }
	updateStatInt(statHash_number, value_number, p2_number){ }
	updateStatFloat(statHash_number, value_number, p2_number){ }
	_0x6483C25849031C4F(p0_number, p1_number, p2_number, p3_number){ }
	_0x5EAD2BF6484852E4(){ }
	_0xC141B8917E0017EC(){ }
	_0xB475F27C6A994D65(){ }
	_0xF1A1803D3476F215(value_number){ }
	_0x38BAAA5DD4C9D19F(value_number){ }
	_0x55384438FC55AD8E(value_number){ }
	_0x723C1CE13FBFDB67(p0_number, p1_number){ }
	_0x0D01D20616FC73FB(p0_number, p1_number){ }
	_0x428EAF89E24F6C36(p0_number, p1_number){ }
	_0x047CBED6F6F8B63C(){ }
	leaderboards2WriteDataForEventType(p0_number, p1_number){ }
	_0x6F361B8889A792A3(){ }
	_0xC847B43F369AC0B5(){ }
	statMigrateSave(platformName_string){ }
	_0x9A62EC95AE10E011(){ }
	_0x4C89FE2BDEB3F169(){ }
	_0xC6E0E2616A7576BB(){ }
	_0x5BD5F255321C4AAF(p0_number){ }
	_0xDEAAF77EB3687E97(p0_number, p1_number){ }
	statSaveMigrationStatusStart(){ }
	statGetSaveMigrationStatus(data_number){ }
	statSaveMigrationCancel(){ }
	statGetCancelSaveMigrationStatus(){ }
	statSaveMigrationConsumeContentUnlock(contentId_number, srcPlatform_string, srcGamerHandle_string){ }
	statGetSaveMigrationConsumeContentUnlockStatus(p0_number){ }
	_0x98E2BC1CA26287C3(){ }
	_0x629526ABA383BCAA(){ }
	_0xBE3DB208333D9844(){ }
	_0x33D72899E24C3365(p0_number, p1_number){ }
	_0xA761D4AC6115623D(){ }
	_0xF11F01D98113536A(p0_number){ }
	_0x8B9CDBD6C566C38C(){ }
	_0xE8853FBCE7D8D0D6(){ }
	_0xA943FD1722E11EFD(){ }
	_0x84A810B375E69C0E(){ }
	_0x9EC8858184CD253A(){ }
	_0xBA9749CC94C1FD85(){ }
	_0x55A8BECAF28A4EB7(){ }
	_0x32CAC93C9DE73D32(){ }
	_0xAFF47709F1D5DCCE(){ }
	_0x6E0A5253375C4584(){ }
	_0x1A8EA222F9C67DBB(p0_number){ }
	_0xF9F2922717B819EC(){ }
	_0x0B8B7F74BF061C6D(){ }
	_0xB3DA2606774A8E2D(){ }
	setHasContentUnlocksFlags(value_number){ }
	setSaveMigrationTransactionId(transactionId_number){ }
	_0x6BC0ACD0673ACEBE(p0_number, p1_number, p2_number){ }
	_0x8D8ADB562F09A245(p0_number){ }
	_0xD1A1EE3B4FA8E760(p0_number){ }
	_0x88087EE1F28024AE(p0_number){ }
	_0xFCC228E07217FCAC(p0_number){ }
	_0x678F86D8FC040BDB(p0_number){ }
	_0xA6F54BB2FFCA35EA(p0_number){ }
	_0x5FF2C33B13A02A11(p0_number){ }
	_0x282B6739644F4347(p0_number){ }
	_0xF06A6F41CB445443(p0_number){ }
	_0x7B18DA61F6BAE9D5(p0_number){ }
	_0x06EAF70AE066441E(p0_number){ }
	_0x14EDA9EE27BD1626(p0_number){ }
	_0x930F504203F561C9(p0_number){ }
	_0xE3261D791EB44ACB(p0_number){ }
	_0x73001E34F85137F8(p0_number){ }
	_0x53CAE13E9B426993(p0_number){ }
	_0x7D36291161859389(p0_number){ }
	playstatsSpentPiCustomLoadout(amount_number){ }
	_0xD6781E42755531F7(p0_number){ }
	_0xC729991A9065376E(p0_number){ }
	_0x2605663BD4F23B5D(p0_number){ }
	_0x04D90BA8207ADA2D(p0_number){ }
	_0x60EEDC12AF66E846(p0_number){ }
	_0x3EBEAC6C3F81F6BD(p0_number){ }
	_0x96E6D5150DBF1C09(p0_number, p1_number, p2_number){ }
	_0xA3C53804BDB68ED2(p0_number, p1_number){ }
	_0x6BCCF9948492FD85(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	hiredLimo(p0_number, p1_number){ }
	orderedBossVehicle(p0_number, p1_number, vehicleHash_number){ }
	_0xD1C9B92BDD3F151D(p0_number, p1_number, p2_number){ }
	_0x44919CC079BB60BF(p0_number){ }
	_0x7033EEFD9B28088E(p0_number){ }
	_0xAA525DFF66BB82F5(p0_number, p1_number, p2_number){ }
	_0x015B03EE1C43E6EC(p0_number){ }
	playstatsStuntPerformedEventAllowTrigger(){ }
	playstatsStuntPerformedEventDisallowTrigger(){ }
	_0xBF371CD2B64212FD(p0_number){ }
	_0x7D8BA05688AD64C7(p0_number){ }
	_0x0B565B0AAE56A0E8(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	_0x28ECB8AC2F607DB2(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	playstatsChangeMcEmblem(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	_0xCC25A4553DFBF9EA(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	_0xF534D94DFA2EAD26(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	_0xD558BEC0BBA7E8D2(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	playstatsEarnedMcPoints(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	_0x03C2EEBB04B3FB72(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	_0x8989CBD7B4E82534(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	_0x27AA1C973CACFE63(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number){ }
	playstatsCopyRankIntoNewSlot(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	playstatsDupeDetection(data_number){ }
	playstatsBanAlert(p0_number){ }
	playstatsGunrunMissionEnded(data_number){ }
	_0xDAF80797FC534BEC(p0_number){ }
	_0x316DB59CD14C1774(p0_number){ }
	_0x2D7A9B577E72385E(p0_number){ }
	_0x830C3A44EB3F2CF9(p0_number){ }
	_0xB26F670685631727(p0_number){ }
	_0xC14BD9F5337219B2(p0_number){ }
	playstatsStoneHatchetEnd(data_number){ }
	playstatsSmugMissionEnded(data_number){ }
	playstatsH2FmprepEnd(data_number){ }
	playstatsH2InstanceEnd(data_number, p1_number, p2_number, p3_number){ }
	playstatsDarMissionEnd(data_number){ }
	playstatsEnterSessionPack(data_number){ }
	playstatsDroneUsage(p0_number, p1_number, p2_number){ }
	playstatsSpectatorWheelSpin(p0_number, p1_number, p2_number, p3_number){ }
	playstatsArenaWarSpectator(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	playstatsArenaWarsEnded(data_number){ }
	loadAllObjectsNow(){ }
	loadScene(x_number, y_number, z_number){ }
	networkUpdateLoadScene(){ }
	isNetworkLoadingScene(){ }
	setInteriorActive(interiorID_number, toggle_boolean){ }
	requestModel(model_number){ }
	requestMenuPedModel(model_number){ }
	hasModelLoaded(model_number){ }
	requestModelsInRoom(interior_number, roomName_string){ }
	setModelAsNoLongerNeeded(model_number){ }
	isModelInCdimage(model_number){ }
	isModelValid(model_number){ }
	isModelAPed(model_number){ }
	isModelAVehicle(model_number){ }
	requestCollisionAtCoord(x_number, y_number, z_number){ }
	requestCollisionForModel(model_number){ }
	hasCollisionForModelLoaded(model_number){ }
	requestAdditionalCollisionAtCoord(x_number, y_number, z_number){ }
	doesAnimDictExist(animDict_string){ }
	requestAnimDict(animDict_string){ }
	hasAnimDictLoaded(animDict_string){ }
	removeAnimDict(animDict_string){ }
	requestAnimSet(animSet_string){ }
	hasAnimSetLoaded(animSet_string){ }
	removeAnimSet(animSet_string){ }
	requestClipSet(clipSet_string){ }
	hasClipSetLoaded(clipSet_string){ }
	removeClipSet(clipSet_string){ }
	requestIpl(iplName_string){ }
	removeIpl(iplName_string){ }
	isIplActive(iplName_string){ }
	setStreaming(toggle_boolean){ }
	setGamePausesForStreaming(toggle_boolean){ }
	setReducePedModelBudget(toggle_boolean){ }
	setReduceVehicleModelBudget(toggle_boolean){ }
	setDitchPoliceModels(toggle_boolean){ }
	getNumberOfStreamingRequests(){ }
	requestPtfxAsset(){ }
	hasPtfxAssetLoaded(){ }
	removePtfxAsset(){ }
	requestNamedPtfxAsset(fxName_string){ }
	hasNamedPtfxAssetLoaded(fxName_string){ }
	removeNamedPtfxAsset(fxName_string){ }
	setVehiclePopulationBudget(p0_number){ }
	setPedPopulationBudget(p0_number){ }
	clearFocus(){ }
	setFocusArea(x_number, y_number, z_number, offsetX_number, offsetY_number, offsetZ_number){ }
	setFocusEntity(entity_number){ }
	isEntityFocus(entity_number){ }
	_0x0811381EF5062FEC(p0_number){ }
	setMapdatacullboxEnabled(name_string, toggle_boolean){ }
	_0x4E52E752C76E7E7A(p0_number){ }
	formatFocusHeading(x_number, y_number, z_number, rad_number, p4_number, p5_number){ }
	_0x1F3F018BC3AFA77C(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number){ }
	_0x0AD9710CEE2F590F(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	_0x1EE7D8DF4425F053(p0_number){ }
	_0x7D41E9D2D17C5B2D(p0_number){ }
	_0x07C313F94746702C(p0_number){ }
	_0xBC9823AB80A3DCAC(){ }
	newLoadSceneStart(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number){ }
	newLoadSceneStartSphere(x_number, y_number, z_number, radius_number, p4_number){ }
	newLoadSceneStop(){ }
	isNewLoadSceneActive(){ }
	isNewLoadSceneLoaded(){ }
	_0x71E7B2E657449AAD(){ }
	startPlayerSwitch(from_number, to_number, flags_number, switchType_number){ }
	stopPlayerSwitch(){ }
	isPlayerSwitchInProgress(){ }
	getPlayerSwitchType(){ }
	getIdealPlayerSwitchType(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number){ }
	getPlayerSwitchState(){ }
	getPlayerShortSwitchState(){ }
	_0x5F2013F8BC24EE69(p0_number){ }
	_0x78C0D93253149435(){ }
	setPlayerSwitchOutro(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number){ }
	setPlayerSwitchEstablishingShot(name_string){ }
	_0x43D1680C6D19A8E9(){ }
	_0x74DE2E8739086740(){ }
	_0x8E2A065ABDAE6994(){ }
	_0xAD5FDF34B81BFE79(){ }
	isSwitchReadyForDescent(){ }
	enableSwitchPauseBeforeDescent(){ }
	disableSwitchOutroFx(){ }
	switchOutPlayer(ped_number, flags_number, unknown_number){ }
	switchInPlayer(ped_number){ }
	_0x933BBEEB8C61B5F4(){ }
	_0x08C2D6C52A3104BB(){ }
	_0x5B48A06DD0E792A5(){ }
	isSwitchSkippingDescent(){ }
	_0x1E9057A74FD73E23(){ }
	_0x0C15B0E443B2349D(){ }
	_0xA76359FC80B2438E(p0_number){ }
	_0xBED8CA5FF5E04113(p0_number, p1_number, p2_number, p3_number){ }
	_0x472397322E92A856(){ }
	_0x40AEFD1A244741F2(p0_boolean){ }
	_0x03F1A106BDA7DD3E(){ }
	_0x95A7DABDDBB78AE7(iplName1_string, iplName2_string){ }
	_0x63EB2B972A218CAC(){ }
	_0xFB199266061F820A(){ }
	_0xF4A0DADB70F57FA6(){ }
	_0x5068F488DDB54DD8(){ }
	prefetchSrl(srl_string){ }
	isSrlLoaded(){ }
	beginSrl(){ }
	endSrl(){ }
	setSrlTime(p0_number){ }
	_0xEF39EE20C537E98C(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	_0xBEB2D9A1D9A8F55A(p0_number, p1_number, p2_number, p3_number){ }
	_0x20C6C7E4EB082A7F(p0_boolean){ }
	_0xF8155A7F03DDFC8E(p0_number){ }
	setHdArea(x_number, y_number, z_number, radius_number){ }
	clearHdArea(){ }
	initCreatorBudget(){ }
	shutdownCreatorBudget(){ }
	addModelToCreatorBudget(modelHash_number){ }
	removeModelFromCreatorBudget(modelHash_number){ }
	getUsedCreatorModelMemoryPercentage(){ }
	taskPause(ped_number, ms_number){ }
	taskStandStill(ped_number, time_number){ }
	taskJump(ped_number, unused_boolean, p2_number, p3_number){ }
	taskCower(ped_number, duration_number){ }
	taskHandsUp(ped_number, duration_number, facingPed_number, p3_number, p4_boolean){ }
	updateTaskHandsUpDuration(ped_number, duration_number){ }
	taskOpenVehicleDoor(ped_number, vehicle_number, timeOut_number, doorIndex_number, speed_number){ }
	taskEnterVehicle(ped_number, vehicle_number, timeout_number, seat_number, speed_number, flag_number, p6_number){ }
	taskLeaveVehicle(ped_number, vehicle_number, flags_number){ }
	taskGetOffBoat(ped_number, boat_number){ }
	taskSkyDive(ped_number, p1_boolean){ }
	taskParachute(ped_number, p1_boolean, p2_boolean){ }
	taskParachuteToTarget(ped_number, x_number, y_number, z_number){ }
	setParachuteTaskTarget(ped_number, x_number, y_number, z_number){ }
	setParachuteTaskThrust(ped_number, thrust_number){ }
	taskRappelFromHeli(ped_number, p1_number){ }
	taskVehicleDriveToCoord(ped_number, vehicle_number, x_number, y_number, z_number, speed_number, p6_number, vehicleModel_number, drivingMode_number, stopRange_number, p10_number){ }
	taskVehicleDriveToCoordLongrange(ped_number, vehicle_number, x_number, y_number, z_number, speed_number, driveMode_number, stopRange_number){ }
	taskVehicleDriveWander(ped_number, vehicle_number, speed_number, drivingStyle_number){ }
	taskFollowToOffsetOfEntity(ped_number, entity_number, offsetX_number, offsetY_number, offsetZ_number, movementSpeed_number, timeout_number, stoppingRange_number, persistFollowing_boolean){ }
	taskGoStraightToCoord(ped_number, x_number, y_number, z_number, speed_number, timeout_number, targetHeading_number, distanceToSlide_number){ }
	taskGoStraightToCoordRelativeToEntity(entity1_number, entity2_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	taskAchieveHeading(ped_number, heading_number, timeout_number){ }
	taskFlushRoute(){ }
	taskExtendRoute(x_number, y_number, z_number){ }
	taskFollowPointRoute(ped_number, speed_number, unknown_number){ }
	taskGoToEntity(entity_number, target_number, duration_number, distance_number, speed_number, p5_number, p6_number){ }
	taskSmartFleeCoord(ped_number, x_number, y_number, z_number, distance_number, time_number, p6_boolean, p7_boolean){ }
	taskSmartFleePed(ped_number, fleeTarget_number, distance_number, fleeTime_number, p4_boolean, p5_boolean){ }
	taskReactAndFleePed(ped_number, fleeTarget_number){ }
	taskShockingEventReact(ped_number, eventHandle_number){ }
	taskWanderInArea(ped_number, x_number, y_number, z_number, radius_number, minimalLength_number, timeBetweenWalks_number){ }
	taskWanderStandard(ped_number, p1_number, p2_number){ }
	taskVehiclePark(ped_number, vehicle_number, x_number, y_number, z_number, heading_number, mode_number, radius_number, keepEngineOn_boolean){ }
	taskStealthKill(killer_number, target_number, actionType_number, p3_number, p4_number){ }
	taskPlantBomb(ped_number, x_number, y_number, z_number, heading_number){ }
	taskFollowNavMeshToCoord(ped_number, x_number, y_number, z_number, speed_number, timeout_number, stoppingRange_number, persistFollowing_boolean, unk_number){ }
	taskFollowNavMeshToCoordAdvanced(ped_number, x_number, y_number, z_number, speed_number, timeout_number, unkFloat_number, unkInt_number, unkX_number, unkY_number, unkZ_number, unk_40000f_number){ }
	setPedPathCanUseClimbovers(ped_number, Toggle_boolean){ }
	setPedPathCanUseLadders(ped_number, Toggle_boolean){ }
	setPedPathCanDropFromHeight(ped_number, Toggle_boolean){ }
	_0x88E32DB8C1A4AA4B(ped_number, p1_number){ }
	setPedPathMayEnterWater(ped_number, mayEnterWater_boolean){ }
	setPedPathPreferToAvoidWater(ped_number, avoidWater_boolean){ }
	setPedPathAvoidFire(ped_number, avoidFire_boolean){ }
	setGlobalMinBirdFlightHeight(height_number){ }
	getNavmeshRouteDistanceRemaining(ped_number, p1_number, p2_number){ }
	getNavmeshRouteResult(ped_number){ }
	_0x3E38E28A1D80DDF6(ped_number){ }
	taskGoToCoordAnyMeans(ped_number, x_number, y_number, z_number, speed_number, p5_number, p6_boolean, walkingStyle_number, p8_number){ }
	taskGoToCoordAnyMeansExtraParams(ped_number, x_number, y_number, z_number, speed_number, p5_number, p6_boolean, walkingStyle_number, p8_number, p9_number, p10_number, p11_number, p12_number){ }
	taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(ped_number, x_number, y_number, z_number, speed_number, p5_number, p6_boolean, walkingStyle_number, p8_number, p9_number, p10_number, p11_number, p12_number, p13_number){ }
	taskPlayAnim(ped_number, animDictionary_string, animationName_string, speed_number, speedMultiplier_number, duration_number, flag_number, playbackRate_number, lockX_boolean, lockY_boolean, lockZ_boolean){ }
	taskPlayAnimAdvanced(ped_number, animDict_string, animName_string, posX_number, posY_number, posZ_number, rotX_number, rotY_number, rotZ_number, speed_number, speedMultiplier_number, duration_number, flag_number, animTime_number, p14_number, p15_number){ }
	stopAnimTask(ped_number, animDictionary_string, animationName_string, p3_number){ }
	taskScriptedAnimation(ped_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	playEntityScriptedAnim(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	stopAnimPlayback(ped_number, p1_number, p2_boolean){ }
	setAnimWeight(p0_number, p1_number, p2_number, p3_number, p4_boolean){ }
	setAnimRate(p0_number, p1_number, p2_number, p3_boolean){ }
	setAnimLooped(p0_number, p1_boolean, p2_number, p3_boolean){ }
	taskPlayPhoneGestureAnimation(ped_number, animDict_string, animation_string, boneMaskType_string, p4_number, p5_number, p6_boolean, p7_boolean){ }
	taskStopPhoneGestureAnimation(ped_number, p1_number){ }
	isPlayingPhoneGestureAnim(ped_number){ }
	getPhoneGestureAnimCurrentTime(ped_number){ }
	getPhoneGestureAnimTotalTime(ped_number){ }
	taskVehiclePlayAnim(vehicle_number, animation_set_string, animation_name_string){ }
	taskLookAtCoord(entity_number, x_number, y_number, z_number, duration_number, p5_number, p6_number){ }
	taskLookAtEntity(ped_number, lookAt_number, duration_number, unknown1_number, unknown2_number){ }
	taskClearLookAt(ped_number){ }
	openSequenceTask(taskSequenceId_number){ }
	closeSequenceTask(taskSequenceId_number){ }
	taskPerformSequence(ped_number, taskSequenceId_number){ }
	taskPerformSequenceLocally(ped_number, taskSequenceId_number){ }
	clearSequenceTask(taskSequenceId_number){ }
	setSequenceToRepeat(taskSequenceId_number, repeat_boolean){ }
	getSequenceProgress(ped_number){ }
	getIsTaskActive(ped_number, taskIndex_number){ }
	getScriptTaskStatus(targetPed_number, taskHash_number){ }
	getActiveVehicleMissionType(vehicle_number){ }
	taskLeaveAnyVehicle(ped_number, p1_number, p2_number){ }
	taskAimGunScripted(ped_number, scriptTask_number, p2_boolean, p3_boolean){ }
	taskAimGunScriptedWithTarget(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_boolean, p7_boolean){ }
	updateTaskAimGunScriptedTarget(p0_number, p1_number, p2_number, p3_number, p4_number, p5_boolean){ }
	getClipSetForScriptedGunTask(p0_number){ }
	taskAimGunAtEntity(ped_number, entity_number, duration_number, p3_boolean){ }
	taskTurnPedToFaceEntity(ped_number, entity_number, duration_number){ }
	taskAimGunAtCoord(ped_number, x_number, y_number, z_number, time_number, p5_boolean, p6_boolean){ }
	taskShootAtCoord(ped_number, x_number, y_number, z_number, duration_number, firingPattern_number){ }
	taskShuffleToNextVehicleSeat(ped_number, vehicle_number, p2_number){ }
	clearPedTasks(ped_number){ }
	clearPedSecondaryTask(ped_number){ }
	taskEveryoneLeaveVehicle(vehicle_number){ }
	taskGotoEntityOffset(ped_number, p1_number, p2_number, x_number, y_number, z_number, duration_number){ }
	taskGotoEntityOffsetXy(p0_number, oed_number, duration_number, p3_number, p4_number, p5_number, p6_number, p7_boolean){ }
	taskTurnPedToFaceCoord(ped_number, x_number, y_number, z_number, duration_number){ }
	taskVehicleTempAction(driver_number, vehicle_number, action_number, time_number){ }
	taskVehicleMission(p0_number, p1_number, veh_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_boolean){ }
	taskVehicleMissionPedTarget(ped_number, vehicle_number, pedTarget_number, mode_number, maxSpeed_number, drivingStyle_number, minDistance_number, p7_number, p8_boolean){ }
	taskVehicleMissionCoorsTarget(ped_number, vehicle_number, x_number, y_number, z_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_boolean){ }
	taskVehicleEscort(ped_number, vehicle_number, targetVehicle_number, mode_number, speed_number, drivingStyle_number, minDistance_number, p7_number, noRoadsDistance_number){ }
	taskVehicleFollow(driver_number, vehicle_number, targetEntity_number, speed_number, drivingStyle_number, minDistance_number){ }
	taskVehicleChase(driver_number, targetEnt_number){ }
	taskVehicleHeliProtect(pilot_number, vehicle_number, entityToFollow_number, targetSpeed_number, p4_number, radius_number, altitude_number, p7_number){ }
	setTaskVehicleChaseBehaviorFlag(ped_number, flag_number, set_boolean){ }
	setTaskVehicleChaseIdealPursuitDistance(ped_number, distance_number){ }
	taskHeliChase(pilot_number, entityToFollow_number, x_number, y_number, z_number){ }
	taskPlaneChase(pilot_number, entityToFollow_number, x_number, y_number, z_number){ }
	taskPlaneLand(pilot_number, plane_number, runwayStartX_number, runwayStartY_number, runwayStartZ_number, runwayEndX_number, runwayEndY_number, runwayEndZ_number){ }
	_0xDBBC7A2432524127(vehicle_number){ }
	_0x53DDC75BC3AC0A90(vehicle_number){ }
	taskPlaneGotoPreciseVtol(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number){ }
	taskHeliMission(pilot_number, aircraft_number, targetVehicle_number, targetPed_number, destinationX_number, destinationY_number, destinationZ_number, missionFlag_number, maxSpeed_number, landingRadius_number, targetHeading_number, unk1_number, unk2_number, unk3_number, landingFlags_number){ }
	taskHeliEscortHeli(pilot_number, heli1_number, heli2_number, p3_number, p4_number, p5_number){ }
	taskPlaneMission(pilot_number, aircraft_number, targetVehicle_number, targetPed_number, destinationX_number, destinationY_number, destinationZ_number, missionFlag_number, angularDrag_number, unk_number, targetHeading_number, maxZ_number, minZ_number, p13_number){ }
	taskPlaneTaxi(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	taskBoatMission(pedDriver_number, boat_number, p2_number, p3_number, x_number, y_number, z_number, p7_number, maxSpeed_number, drivingStyle_number, p10_number, p11_number){ }
	taskDriveBy(driverPed_number, targetPed_number, targetVehicle_number, targetX_number, targetY_number, targetZ_number, distanceToShoot_number, pedAccuracy_number, p8_boolean, firingPattern_number){ }
	setDrivebyTaskTarget(shootingPed_number, targetPed_number, targetVehicle_number, x_number, y_number, z_number){ }
	clearDrivebyTaskUnderneathDrivingTask(ped_number){ }
	isDrivebyTaskUnderneathDrivingTask(ped_number){ }
	controlMountedWeapon(ped_number){ }
	setMountedWeaponTarget(shootingPed_number, targetPed_number, targetVehicle_number, x_number, y_number, z_number, p6_number, p7_number){ }
	isMountedWeaponTaskUnderneathDrivingTask(ped_number){ }
	taskUseMobilePhone(ped_number, p1_number, p2_number){ }
	taskUseMobilePhoneTimed(ped_number, duration_number){ }
	taskChatToPed(ped_number, target_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number){ }
	taskWarpPedIntoVehicle(ped_number, vehicle_number, seat_number){ }
	taskShootAtEntity(entity_number, target_number, duration_number, firingPattern_number){ }
	taskClimb(ped_number, unused_boolean){ }
	taskClimbLadder(ped_number, p1_number){ }
	clearPedTasksImmediately(ped_number){ }
	taskPerformSequenceFromProgress(p0_number, p1_number, p2_number, p3_number){ }
	setNextDesiredMoveState(p0_number){ }
	setPedDesiredMoveBlendRatio(ped_number, p1_number){ }
	getPedDesiredMoveBlendRatio(ped_number){ }
	taskGotoEntityAiming(ped_number, target_number, distanceToStopAt_number, StartAimingDist_number){ }
	taskSetDecisionMaker(ped_number, p1_number){ }
	taskSetSphereDefensiveArea(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	taskClearDefensiveArea(p0_number){ }
	taskPedSlideToCoord(ped_number, x_number, y_number, z_number, heading_number, p5_number){ }
	taskPedSlideToCoordHdgRate(ped_number, x_number, y_number, z_number, heading_number, p5_number, p6_number){ }
	addCoverPoint(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_boolean){ }
	removeCoverPoint(coverpoint_number){ }
	doesScriptedCoverPointExistAtCoords(x_number, y_number, z_number){ }
	getScriptedCoverPointCoords(coverpoint_number){ }
	taskCombatPed(ped_number, targetPed_number, p2_number, p3_number){ }
	taskCombatPedTimed(p0_number, ped_number, p2_number, p3_number){ }
	taskSeekCoverFromPos(ped_number, x_number, y_number, z_number, duration_number, p5_boolean){ }
	taskSeekCoverFromPed(ped_number, target_number, duration_number, p3_boolean){ }
	taskSeekCoverToCoverPoint(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_boolean){ }
	taskSeekCoverToCoords(ped_number, x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, p7_number, p8_boolean){ }
	taskPutPedDirectlyIntoCover(ped_number, x_number, y_number, z_number, timeout_number, p5_boolean, p6_number, p7_boolean, p8_boolean, p9_number, p10_boolean){ }
	taskExitCover(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	taskPutPedDirectlyIntoMelee(ped_number, meleeTarget_number, p2_number, p3_number, p4_number, p5_boolean){ }
	taskToggleDuck(p0_boolean, p1_boolean){ }
	taskGuardCurrentPosition(p0_number, p1_number, p2_number, p3_boolean){ }
	taskGuardAssignedDefensiveArea(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	taskGuardSphereDefensiveArea(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number){ }
	taskStandGuard(ped_number, x_number, y_number, z_number, heading_number, scenarioName_string){ }
	setDriveTaskCruiseSpeed(driver_number, cruiseSpeed_number){ }
	setDriveTaskMaxCruiseSpeed(p0_number, p1_number){ }
	setDriveTaskDrivingStyle(ped_number, drivingStyle_number){ }
	addCoverBlockingArea(playerX_number, playerY_number, playerZ_number, radiusX_number, radiusY_number, radiusZ_number, p6_boolean, p7_boolean, p8_boolean, p9_boolean){ }
	removeAllCoverBlockingAreas(){ }
	_0xFA83CA6776038F64(x_number, y_number, z_number){ }
	_0x1F351CF1C6475734(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number){ }
	taskStartScenarioInPlace(ped_number, scenarioName_string, unkDelay_number, playEnterAnim_boolean){ }
	taskStartScenarioAtPosition(ped_number, scenarioName_string, x_number, y_number, z_number, heading_number, duration_number, sittingScenario_boolean, teleport_boolean){ }
	taskUseNearestScenarioToCoord(ped_number, x_number, y_number, z_number, distance_number, duration_number){ }
	taskUseNearestScenarioToCoordWarp(ped_number, x_number, y_number, z_number, radius_number, p5_number){ }
	taskUseNearestScenarioChainToCoord(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	taskUseNearestScenarioChainToCoordWarp(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	doesScenarioExistInArea(x_number, y_number, z_number, radius_number, b_boolean){ }
	doesScenarioOfTypeExistInArea(p0_number, p1_number, p2_number, p3_number, p4_number, p5_boolean){ }
	isScenarioOccupied(p0_number, p1_number, p2_number, p3_number, p4_boolean){ }
	pedHasUseScenarioTask(ped_number){ }
	playAnimOnRunningScenario(ped_number, animDict_string, animName_string){ }
	doesScenarioGroupExist(scenarioGroup_string){ }
	isScenarioGroupEnabled(scenarioGroup_string){ }
	setScenarioGroupEnabled(scenarioGroup_string, p1_boolean){ }
	resetScenarioGroupsEnabled(){ }
	setExclusiveScenarioGroup(scenarioGroup_string){ }
	resetExclusiveScenarioGroup(){ }
	isScenarioTypeEnabled(scenarioType_string){ }
	setScenarioTypeEnabled(scenarioType_string, toggle_boolean){ }
	resetScenarioTypesEnabled(){ }
	isPedActiveInScenario(ped_number){ }
	_0x621C6E4729388E41(ped_number){ }
	setPedCanPlayAmbientIdles(ped_number, p1_boolean, p2_boolean){ }
	taskCombatHatedTargetsInArea(ped_number, x_number, y_number, z_number, radius_number, p5_number){ }
	taskCombatHatedTargetsAroundPed(ped_number, radius_number, p2_number){ }
	taskCombatHatedTargetsAroundPedTimed(p0_number, p1_number, p2_number, p3_number){ }
	taskThrowProjectile(ped_number, x_number, y_number, z_number, p4_number, p5_number){ }
	taskSwapWeapon(ped_number, p1_boolean){ }
	taskReloadWeapon(ped_number, unused_boolean){ }
	isPedGettingUp(ped_number){ }
	taskWrithe(ped_number, target_number, time_number, p3_number, p4_number, p5_number){ }
	isPedInWrithe(ped_number){ }
	openPatrolRoute(patrolRoute_string){ }
	closePatrolRoute(){ }
	addPatrolRouteNode(p0_number, p1_string, x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, p8_number){ }
	addPatrolRouteLink(p0_number, p1_number){ }
	createPatrolRoute(){ }
	deletePatrolRoute(patrolRoute_string){ }
	taskPatrol(ped_number, p1_string, p2_number, p3_boolean, p4_boolean){ }
	taskStayInCover(ped_number){ }
	addVehicleSubtaskAttackCoord(ped_number, x_number, y_number, z_number){ }
	addVehicleSubtaskAttackPed(ped_number, ped2_number){ }
	taskVehicleShootAtPed(ped_number, target_number, p2_number){ }
	taskVehicleAimAtPed(ped_number, target_number){ }
	taskVehicleShootAtCoord(ped_number, x_number, y_number, z_number, p4_number){ }
	taskVehicleAimAtCoord(ped_number, x_number, y_number, z_number){ }
	taskVehicleGotoNavmesh(ped_number, vehicle_number, x_number, y_number, z_number, speed_number, behaviorFlag_number, stoppingRange_number){ }
	taskGoToCoordWhileAimingAtCoord(ped_number, x_number, y_number, z_number, aimAtX_number, aimAtY_number, aimAtZ_number, moveSpeed_number, p8_boolean, p9_number, p10_number, p11_boolean, flags_number, p13_boolean, firingPattern_number){ }
	taskGoToCoordWhileAimingAtEntity(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_boolean, p7_number, p8_number, p9_boolean, p10_number, p11_boolean, p12_number, p13_number){ }
	taskGoToCoordAndAimAtHatedEntitiesNearCoord(pedHandle_number, goToLocationX_number, goToLocationY_number, goToLocationZ_number, focusLocationX_number, focusLocationY_number, focusLocationZ_number, speed_number, shootAtEnemies_boolean, distanceToStopAt_number, noRoadsDistance_number, unkTrue_boolean, unkFlag_number, aimingFlag_number, firingPattern_number){ }
	taskGoToEntityWhileAimingAtCoord(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_boolean, p7_number, p8_number, p9_boolean, p10_boolean, p11_number){ }
	taskGoToEntityWhileAimingAtEntity(ped_number, entityToWalkTo_number, entityToAimAt_number, speed_number, shootatEntity_boolean, p5_number, p6_number, p7_boolean, p8_boolean, firingPattern_number){ }
	setHighFallTask(ped_number, p1_number, p2_number, p3_number){ }
	requestWaypointRecording(name_string){ }
	getIsWaypointRecordingLoaded(name_string){ }
	removeWaypointRecording(name_string){ }
	waypointRecordingGetNumPoints(name_string, points_number){ }
	waypointRecordingGetCoord(name_string, point_number, coord_setAsUndefined){ }
	waypointRecordingGetSpeedAtPoint(name_string, point_number){ }
	waypointRecordingGetClosestWaypoint(name_string, x_number, y_number, z_number, point_number){ }
	taskFollowWaypointRecording(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	isWaypointPlaybackGoingOnForPed(p0_number){ }
	getPedWaypointProgress(ped_number){ }
	getPedWaypointDistance(p0_number){ }
	setPedWaypointRouteOffset(p0_number, p1_number, p2_number, p3_number){ }
	getWaypointDistanceAlongRoute(p0_string, p1_number){ }
	waypointPlaybackGetIsPaused(p0_number){ }
	waypointPlaybackPause(p0_number, p1_boolean, p2_boolean){ }
	waypointPlaybackResume(p0_number, p1_boolean, p2_number, p3_number){ }
	waypointPlaybackOverrideSpeed(p0_number, p1_number, p2_boolean){ }
	waypointPlaybackUseDefaultSpeed(p0_number){ }
	useWaypointRecordingAsAssistedMovementRoute(p0_number, p1_boolean, p2_number, p3_number){ }
	waypointPlaybackStartAimingAtPed(p0_number, p1_number, p2_boolean){ }
	waypointPlaybackStartAimingAtCoord(p0_number, p1_number, p2_number, p3_number, p4_boolean){ }
	waypointPlaybackStartShootingAtPed(p0_number, p1_number, p2_boolean, p3_number){ }
	waypointPlaybackStartShootingAtCoord(p0_number, p1_number, p2_number, p3_number, p4_boolean, p5_number){ }
	waypointPlaybackStopAimingOrShooting(p0_number){ }
	assistedMovementRequestRoute(route_string){ }
	assistedMovementRemoveRoute(route_string){ }
	assistedMovementIsRouteLoaded(route_string){ }
	assistedMovementSetRouteProperties(route_string, props_number){ }
	assistedMovementOverrideLoadDistanceThisFrame(dist_number){ }
	taskVehicleFollowWaypointRecording(ped_number, vehicle_number, WPRecording_string, p3_number, p4_number, p5_number, p6_number, p7_number, p8_boolean, p9_number){ }
	isWaypointPlaybackGoingOnForVehicle(vehicle_number){ }
	getVehicleWaypointProgress(vehicle_number){ }
	getVehicleWaypointTargetPoint(vehicle_number){ }
	vehicleWaypointPlaybackPause(vehicle_number){ }
	vehicleWaypointPlaybackResume(vehicle_number){ }
	vehicleWaypointPlaybackUseDefaultSpeed(vehicle_number){ }
	vehicleWaypointPlaybackOverrideSpeed(vehicle_number, speed_number){ }
	taskSetBlockingOfNonTemporaryEvents(ped_number, toggle_boolean){ }
	taskForceMotionState(ped_number, state_number, p2_boolean){ }
	taskMoveNetworkByName(ped_number, task_string, multiplier_number, p3_boolean, animDict_string, flags_number){ }
	taskMoveNetworkAdvancedByName(ped_number, p1_string, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_boolean, animDict_string, flags_number){ }
	taskMoveNetworkScripted(ped_number, p1_string, data_number, p3_number, p4_boolean, animDict_string, flags_number){ }
	isTaskMoveNetworkActive(ped_number){ }
	isTaskMoveNetworkReadyForTransition(ped_number){ }
	requestTaskMoveNetworkStateTransition(ped_number, name_string){ }
	_0xAB13A5565480B6D9(ped_number, p1_string){ }
	getTaskMoveNetworkState(ped_number){ }
	_0x8423541E8B3A1589(p0_number, p1_number, p2_number){ }
	setTaskMoveNetworkSignalFloat(ped_number, signalName_string, value_number){ }
	setTaskMoveNetworkSignalFloat2(ped_number, signalName_string, value_number){ }
	_0x8634CEF2522D987B(ped_number, p1_string, value_number){ }
	setTaskMoveNetworkSignalBool(ped_number, signalName_string, value_boolean){ }
	getTaskMoveNetworkSignalFloat(ped_number, signalName_string){ }
	getTaskMoveNetworkSignalBool(ped_number, signalName_string){ }
	getTaskMoveNetworkEvent(ped_number, eventName_string){ }
	isMoveBlendRatioStill(ped_number){ }
	isMoveBlendRatioWalking(ped_number){ }
	isMoveBlendRatioRunning(ped_number){ }
	isMoveBlendRatioSprinting(ped_number){ }
	isPedStill(ped_number){ }
	isPedWalking(ped_number){ }
	isPedRunning(ped_number){ }
	isPedSprinting(ped_number){ }
	isPedStrafing(ped_number){ }
	taskSynchronizedScene(ped_number, scene_number, animDictionary_string, animationName_string, speed_number, speedMultiplier_number, duration_number, flag_number, playbackRate_number, p9_number){ }
	taskAgitatedAction(ped_number, ped2_number){ }
	taskSweepAimEntity(ped_number, anim_string, p2_string, p3_string, p4_string, p5_number, vehicle_number, p7_number, p8_number){ }
	updateTaskSweepAimEntity(ped_number, entity_number){ }
	taskSweepAimPosition(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number){ }
	updateTaskSweepAimPosition(p0_number, p1_number, p2_number, p3_number){ }
	taskArrestPed(ped_number, target_number){ }
	isPedRunningArrestTask(ped_number){ }
	isPedBeingArrested(ped_number){ }
	uncuffPed(ped_number){ }
	isPedCuffed(ped_number){ }
	createVehicle(modelHash_number, x_number, y_number, z_number, heading_number, isNetwork_boolean, thisScriptCheck_boolean, p7_boolean){ }
	deleteVehicle(vehicle_number){ }
	_0x7D6F9A3EF26136A0(vehicle_number, toggle_boolean, p2_boolean){ }
	setVehicleCanBeLockedOn(vehicle_number, canBeLockedOn_boolean, unk_boolean){ }
	setVehicleAllowNoPassengersLockon(veh_number, toggle_boolean){ }
	_0xE6B0E8CFC3633BF0(vehicle_number){ }
	_0x6EAAEFC76ACC311F(p0_number){ }
	_0x407DC5E97DB1A4D3(p0_number, p1_number){ }
	isVehicleModel(vehicle_number, model_number){ }
	doesScriptVehicleGeneratorExist(vehicleGenerator_number){ }
	createScriptVehicleGenerator(x_number, y_number, z_number, heading_number, p4_number, p5_number, modelHash_number, p7_number, p8_number, p9_number, p10_number, p11_boolean, p12_boolean, p13_boolean, p14_boolean, p15_boolean, p16_number){ }
	deleteScriptVehicleGenerator(vehicleGenerator_number){ }
	setScriptVehicleGenerator(vehicleGenerator_number, enabled_boolean){ }
	setAllVehicleGeneratorsActiveInArea(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, p6_boolean, p7_boolean){ }
	setAllVehicleGeneratorsActive(){ }
	setAllLowPriorityVehicleGeneratorsActive(active_boolean){ }
	_0x9A75585FB2E54FAD(x_number, y_number, z_number, p3_number){ }
	_0x0A436B8643716D14(){ }
	setVehicleOnGroundProperly(vehicle_number, p1_number){ }
	_0xE023E8AC4EF7C117(p0_number, p1_boolean, p2_boolean, p3_boolean){ }
	isVehicleStuckOnRoof(vehicle_number){ }
	addVehicleUpsidedownCheck(vehicle_number){ }
	removeVehicleUpsidedownCheck(vehicle_number){ }
	isVehicleStopped(vehicle_number){ }
	getVehicleNumberOfPassengers(vehicle_number){ }
	getVehicleMaxNumberOfPassengers(vehicle_number){ }
	getVehicleModelNumberOfSeats(modelHash_number){ }
	isSeatWarpOnly(vehicle_number, seatIndex_number){ }
	isTurretSeat(vehicle_number, seatIndex_number){ }
	doesVehicleAllowRappel(vehicle_number){ }
	setVehicleDensityMultiplierThisFrame(multiplier_number){ }
	setRandomVehicleDensityMultiplierThisFrame(multiplier_number){ }
	setParkedVehicleDensityMultiplierThisFrame(multiplier_number){ }
	unkSetDisableRandomTrains(toggle_boolean){ }
	setAmbientVehicleRangeMultiplierThisFrame(value_number){ }
	setFarDrawVehicles(toggle_boolean){ }
	setNumberOfParkedVehicles(value_number){ }
	setVehicleDoorsLocked(vehicle_number, doorLockStatus_number){ }
	setVehicleDoorDestroyType(vehicle_number, doorIndex_number, destroyType_number){ }
	setDisableVehicleSirenSound(vehicle_number, toggle_boolean){ }
	setVehicleDoorsLockedForPlayer(vehicle_number, player_number, toggle_boolean){ }
	getVehicleDoorsLockedForPlayer(vehicle_number, player_number){ }
	setVehicleDoorsLockedForAllPlayers(vehicle_number, toggle_boolean){ }
	setVehicleDoorsLockedForNonScriptPlayers(vehicle_number, toggle_boolean){ }
	setVehicleDoorsLockedForTeam(vehicle_number, team_number, toggle_boolean){ }
	setVehicleDoorsLockedForUnk(vehicle_number, toggle_boolean){ }
	_0x76D26A22750E849E(vehicle_number){ }
	explodeVehicle(vehicle_number, isAudible_boolean, isInvisible_boolean){ }
	setVehicleOutOfControl(vehicle_number, killDriver_boolean, explodeOnImpact_boolean){ }
	setVehicleTimedExplosion(vehicle_number, ped_number, toggle_boolean){ }
	addVehiclePhoneExplosiveDevice(vehicle_number){ }
	clearVehiclePhoneExplosiveDevice(){ }
	hasVehiclePhoneExplosiveDevice(){ }
	detonateVehiclePhoneExplosiveDevice(){ }
	setTaxiLights(vehicle_number, state_boolean){ }
	isTaxiLightOn(vehicle_number){ }
	isVehicleInGarageArea(garageName_string, vehicle_number){ }
	setVehicleColours(vehicle_number, colorPrimary_number, colorSecondary_number){ }
	setVehicleFullbeam(vehicle_number, toggle_boolean){ }
	setVehicleIsRacing(vehicle_number, toggle_boolean){ }
	setVehicleCustomPrimaryColour(vehicle_number, r_number, g_number, b_number){ }
	getVehicleCustomPrimaryColour(vehicle_number, r_number, g_number, b_number){ }
	clearVehicleCustomPrimaryColour(vehicle_number){ }
	getIsVehiclePrimaryColourCustom(vehicle_number){ }
	setVehicleCustomSecondaryColour(vehicle_number, r_number, g_number, b_number){ }
	getVehicleCustomSecondaryColour(vehicle_number, r_number, g_number, b_number){ }
	clearVehicleCustomSecondaryColour(vehicle_number){ }
	getIsVehicleSecondaryColourCustom(vehicle_number){ }
	setVehicleEnveffScale(vehicle_number, fade_number){ }
	getVehicleEnveffScale(vehicle_number){ }
	setCanResprayVehicle(vehicle_number, state_boolean){ }
	_0xAB31EF4DE6800CE9(p0_number, p1_number){ }
	_0x1B212B26DD3C04DF(vehicle_number, toggle_boolean){ }
	_0x33506883545AC0DF(vehicle_number, p1_boolean){ }
	jitterVehicle(vehicle_number, p1_boolean, yaw_number, pitch_number, roll_number){ }
	_0xED5EDE9E676643C9(p0_number, p1_number){ }
	setBoatAnchor(vehicle_number, toggle_boolean){ }
	getBoatAnchor(vehicle_number){ }
	_0x24F4121D07579880(p0_number){ }
	_0xE3EBAAE484798530(vehicle_number, p1_boolean){ }
	_0xB28B1FE5BFADD7F5(vehicle_number, p1_boolean){ }
	_0xE842A9398079BD82(vehicle_number, p1_number){ }
	_0xB0AD1238A709B1A2(vehicle_number){ }
	_0x8F719973E1445BA2(vehicle_number, toggle_boolean){ }
	_0xBD32E46AA95C1DD2(p0_number){ }
	setVehicleSiren(vehicle_number, toggle_boolean){ }
	isVehicleSirenOn(vehicle_number){ }
	isVehicleSirenAudioOn(vehicle_number){ }
	setVehicleStrong(vehicle_number, toggle_boolean){ }
	removeVehicleStuckCheck(vehicle_number){ }
	getVehicleColours(vehicle_number, colorPrimary_number, colorSecondary_number){ }
	isVehicleSeatFree(vehicle_number, seatIndex_number, p2_boolean){ }
	getPedInVehicleSeat(vehicle_number, index_number, p2_number){ }
	getLastPedInVehicleSeat(vehicle_number, seatIndex_number){ }
	getVehicleLightsState(vehicle_number, lightsOn_boolean, highbeamsOn_boolean){ }
	isVehicleTyreBurst(vehicle_number, wheelID_number, completely_boolean){ }
	setVehicleForwardSpeed(vehicle_number, speed_number){ }
	_0x6501129C9E0FFA05(p0_number, p1_number){ }
	bringVehicleToHalt(vehicle_number, distance_number, duration_number, unknown_boolean){ }
	_0xDCE97BDF8A0EABC8(p0_number, p1_number){ }
	_0x9849DE24FCF23CCC(p0_number, p1_number){ }
	_0x7C06330BFDDA182E(p0_number){ }
	_0xC69BB1D832A710EF(p0_number){ }
	setForkliftForkHeight(vehicle_number, height_number){ }
	isVehicleNearEntity(vehicle_number, entity_number){ }
	_0x62CA17B74C435651(vehicle_number){ }
	findVehicleCarryingThisEntity(entity_number){ }
	_0x89D630CF5EA96D23(vehicle_number, entity_number){ }
	_0x6A98C2ECF57FA5D4(vehicle_number, entity_number){ }
	_0x7C0043FDFF6436BC(x_number){ }
	_0x8AA9180DE2FEDD45(vehicle_number, p1_boolean){ }
	_0x0A6A279F3AA4FD70(vehicle_number, p1_boolean){ }
	_0x634148744F385576(vehicle_number){ }
	_0x107A473D7A6647A9(p0_number){ }
	_0xE6F13851780394DA(vehicle_number, p1_number){ }
	setCarBootOpen(vehicle_number){ }
	setVehicleTyreBurst(vehicle_number, index_number, onRim_boolean, p3_number){ }
	setVehicleDoorsShut(vehicle_number, closeInstantly_boolean){ }
	setVehicleTyresCanBurst(vehicle_number, toggle_boolean){ }
	getVehicleTyresCanBurst(vehicle_number){ }
	setVehicleWheelsCanBreak(vehicle_number, enabled_boolean){ }
	setVehicleDoorOpen(vehicle_number, doorIndex_number, loose_boolean, openInstantly_boolean){ }
	_0x3B458DDB57038F08(p0_number, p1_number, p2_number){ }
	_0xA247F9EF01D8082E(p0_number){ }
	removeVehicleWindow(vehicle_number, windowIndex_number){ }
	rollDownWindows(vehicle_number){ }
	rollDownWindow(vehicle_number, windowIndex_number){ }
	rollUpWindow(vehicle_number, windowIndex_number){ }
	smashVehicleWindow(vehicle_number, index_number){ }
	fixVehicleWindow(vehicle_number, index_number){ }
	detachVehicleWindscreen(vehicle_number){ }
	ejectJb700Roof(vehicle_number, x_number, y_number, z_number){ }
	setVehicleLights(vehicle_number, state_number){ }
	_0xC45C27EF50F36ADC(vehicle_number, p1_boolean){ }
	setVehicleLightsMode(vehicle_number, p1_number){ }
	setVehicleAlarm(vehicle_number, state_boolean){ }
	startVehicleAlarm(vehicle_number){ }
	isVehicleAlarmActivated(vehicle_number){ }
	setVehicleInteriorlight(vehicle_number, toggle_boolean){ }
	_0x8821196D91FA2DE5(p0_number, p1_number){ }
	setVehicleLightMultiplier(vehicle_number, multiplier_number){ }
	attachVehicleToTrailer(vehicle_number, trailer_number, radius_number){ }
	_0x16B5E274BDE402F8(vehicle_number, trailer_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, p10_number, p11_number){ }
	_0x374706271354CB18(vehicle_number, p1_number, p2_number){ }
	detachVehicleFromTrailer(vehicle_number){ }
	isVehicleAttachedToTrailer(vehicle_number){ }
	_0x2A8F319B392E7B3F(vehicle_number, p1_number){ }
	_0x95CF53B3D687F9FA(vehicle_number){ }
	_0x878C75C09FBDB942(p0_number){ }
	setVehicleTyreFixed(vehicle_number, tyreIndex_number){ }
	setVehicleNumberPlateText(vehicle_number, plateText_string){ }
	getVehicleNumberPlateText(vehicle_number){ }
	getNumberOfVehicleNumberPlates(){ }
	setVehicleNumberPlateTextIndex(vehicle_number, plateIndex_number){ }
	getVehicleNumberPlateTextIndex(vehicle_number){ }
	setRandomTrains(toggle_boolean){ }
	createMissionTrain(variation_number, x_number, y_number, z_number, direction_boolean){ }
	switchTrainTrack(intersectionId_number, state_boolean){ }
	setTrainTrackSpawnFrequency(trackIndex_number, frequency_number){ }
	deleteAllTrains(){ }
	setTrainSpeed(train_number, speed_number){ }
	setTrainCruiseSpeed(train_number, speed_number){ }
	setRandomBoats(toggle_boolean){ }
	setGarbageTrucks(toggle_boolean){ }
	doesVehicleHaveStuckVehicleCheck(vehicle_number){ }
	getVehicleRecordingId(p0_number, p1_string){ }
	requestVehicleRecording(i_number, name_string){ }
	hasVehicleRecordingBeenLoaded(p0_number, p1_number){ }
	removeVehicleRecording(p0_number, p1_number){ }
	getPositionOfVehicleRecordingIdAtTime(id_number, time_number){ }
	getPositionOfVehicleRecordingAtTime(p0_number, p1_number, p2_string){ }
	getRotationOfVehicleRecordingIdAtTime(id_number, time_number){ }
	getRotationOfVehicleRecordingAtTime(p0_number, p1_number, p2_number){ }
	getTotalDurationOfVehicleRecordingId(p0_number){ }
	getTotalDurationOfVehicleRecording(p0_number, p1_number){ }
	getPositionInRecording(p0_number){ }
	getTimePositionInRecording(p0_number){ }
	startPlaybackRecordedVehicle(vehicle_number, p1_number, playback_string, p3_boolean){ }
	startPlaybackRecordedVehicleWithFlags(vehicle_number, p1_number, playback_string, p3_number, p4_number, p5_number){ }
	_0x1F2E4E06DEA8992B(vehicle_number, p1_boolean){ }
	stopPlaybackRecordedVehicle(vehicle_number){ }
	pausePlaybackRecordedVehicle(vehicle_number){ }
	unpausePlaybackRecordedVehicle(vehicle_number){ }
	isPlaybackGoingOnForVehicle(vehicle_number){ }
	isPlaybackUsingAiGoingOnForVehicle(vehicle_number){ }
	getCurrentPlaybackForVehicle(vehicle_number){ }
	skipToEndAndStopPlaybackRecordedVehicle(vehicle_number){ }
	setPlaybackSpeed(vehicle_number, speed_number){ }
	startPlaybackRecordedVehicleUsingAi(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	skipTimeInPlaybackRecordedVehicle(p0_number, p1_number){ }
	setPlaybackToUseAi(vehicle_number, flag_number){ }
	setPlaybackToUseAiTryToRevertBackLater(p0_number, p1_number, p2_number, p3_boolean){ }
	_0x5845066D8A1EA7F7(vehicle_number, x_number, y_number, z_number, p4_number){ }
	_0x796A877E459B99EA(p0_number, p1_number, p2_number, p3_number){ }
	_0xFAF2A78061FD9EF4(p0_number, p1_number, p2_number, p3_number){ }
	_0x063AE2B2CC273588(p0_number, p1_boolean){ }
	explodeVehicleInCutscene(vehicle_number, p1_boolean){ }
	addVehicleStuckCheckWithWarp(p0_number, p1_number, p2_number, p3_boolean, p4_boolean, p5_boolean, p6_number){ }
	setVehicleModelIsSuppressed(model_number, suppressed_boolean){ }
	getRandomVehicleInSphere(x_number, y_number, z_number, radius_number, modelHash_number, flags_number){ }
	getRandomVehicleFrontBumperInSphere(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	getRandomVehicleBackBumperInSphere(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	getClosestVehicle(x_number, y_number, z_number, radius_number, modelHash_number, flags_number){ }
	getTrainCarriage(train_number, trailerNumber_number){ }
	deleteMissionTrain(train_number){ }
	setMissionTrainAsNoLongerNeeded(train_number, p1_boolean){ }
	setMissionTrainCoords(train_number, x_number, y_number, z_number){ }
	isThisModelABoat(model_number){ }
	isThisModelAJetski(model_number){ }
	isThisModelAPlane(model_number){ }
	isThisModelAHeli(model_number){ }
	isThisModelACar(model_number){ }
	isThisModelATrain(model_number){ }
	isThisModelABike(model_number){ }
	isThisModelABicycle(model_number){ }
	isThisModelAQuadbike(model_number){ }
	isThisModelAnAmphibiousCar(model_number){ }
	isThisModelAnAmphibiousQuadbike(model_number){ }
	setHeliBladesFullSpeed(vehicle_number){ }
	setHeliBladesSpeed(vehicle_number, speed_number){ }
	_0x99CAD8E7AFDB60FA(vehicle_number, p1_number, p2_number){ }
	setVehicleCanBeTargetted(vehicle_number, state_boolean){ }
	_0xDBC631F109350B8C(vehicle_number, p1_boolean){ }
	setVehicleCanBeVisiblyDamaged(vehicle_number, state_boolean){ }
	_0x1AA8A837D2169D94(vehicle_number, p1_boolean){ }
	_0x2311DD7159F00582(vehicle_number, p1_boolean){ }
	_0x065D03A9D6B2C6B5(p0_number, p1_number){ }
	getVehicleDirtLevel(vehicle_number){ }
	setVehicleDirtLevel(vehicle_number, dirtLevel_number){ }
	isVehicleDamaged(vehicle_number){ }
	isVehicleDoorFullyOpen(vehicle_number, doorIndex_number){ }
	setVehicleEngineOn(vehicle_number, value_boolean, instantly_boolean, noAutoTurnOn_boolean){ }
	setVehicleUndriveable(vehicle_number, toggle_boolean){ }
	setVehicleProvidesCover(vehicle_number, toggle_boolean){ }
	setVehicleDoorControl(vehicle_number, doorIndex_number, speed_number, angle_number){ }
	setVehicleDoorLatched(vehicle_number, doorIndex_number, p2_boolean, p3_boolean, p4_boolean){ }
	getVehicleDoorAngleRatio(vehicle_number, door_number){ }
	getPedUsingVehicleDoor(vehicle_number, doorIndex_number){ }
	setVehicleDoorShut(vehicle_number, doorIndex_number, closeInstantly_boolean){ }
	setVehicleDoorBroken(vehicle_number, doorIndex_number, deleteDoor_boolean){ }
	setVehicleCanBreak(vehicle_number, toggle_boolean){ }
	doesVehicleHaveRoof(vehicle_number){ }
	_0xC4B3347BD68BD609(p0_number){ }
	_0xD3301660A57C9272(p0_number){ }
	_0xB9562064627FF9DB(p0_number, p1_number){ }
	isBigVehicle(vehicle_number){ }
	getNumberOfVehicleColours(vehicle_number){ }
	setVehicleColourCombination(vehicle_number, colorCombination_number){ }
	getVehicleColourCombination(vehicle_number){ }
	setVehicleXenonLightsColor(vehicle_number, colorIndex_number){ }
	getVehicleXenonLightsColor(vehicle_number){ }
	setVehicleIsConsideredByPlayer(vehicle_number, toggle_boolean){ }
	_0xBE5C1255A1830FF5(vehicle_number, toggle_boolean){ }
	_0x9BECD4B9FEF3F8A6(vehicle_number, p1_boolean){ }
	_0x88BC673CA9E0AE99(vehicle_number, p1_boolean){ }
	_0xE851E480B814D4BA(vehicle_number, p1_boolean){ }
	getRandomVehicleModelInMemory(p0_boolean, modelHash_number, successIndicator_number){ }
	getVehicleDoorLockStatus(vehicle_number){ }
	_0xCA4AC3EAAE46EC7B(p0_number, p1_number){ }
	isVehicleDoorDamaged(veh_number, doorID_number){ }
	setVehicleDoorCanBreak(vehicle_number, doorIndex_number, isBreakable_boolean){ }
	isVehicleBumperBouncing(vehicle_number, frontBumper_boolean){ }
	isVehicleBumperBrokenOff(vehicle_number, front_boolean){ }
	isCopVehicleInArea3d(x1_number, x2_number, y1_number, y2_number, z1_number, z2_number){ }
	isVehicleOnAllWheels(vehicle_number){ }
	_0x5873C14A52D74236(p0_number){ }
	getVehicleLayoutHash(vehicle_number){ }
	_0xA01BC64DD4BFBBAC(vehicle_number, p1_number){ }
	setRenderTrainAsDerailed(train_number, toggle_boolean){ }
	setVehicleExtraColours(vehicle_number, pearlescentColor_number, wheelColor_number){ }
	getVehicleExtraColours(vehicle_number, pearlescentColor_number, wheelColor_number){ }
	setVehicleInteriorColor(vehicle_number, color_number){ }
	getVehicleInteriorColor(vehicle_number, color_number){ }
	setVehicleDashboardColor(vehicle_number, color_number){ }
	getVehicleDashboardColor(vehicle_number, color_number){ }
	stopAllGarageActivity(){ }
	setVehicleFixed(vehicle_number){ }
	setVehicleDeformationFixed(vehicle_number){ }
	_0x206BC5DC9D1AC70A(vehicle_number, toggle_boolean){ }
	_0x51BB2D88D31A914B(vehicle_number, p1_boolean){ }
	_0x192547247864DFDD(vehicle_number, p1_boolean){ }
	setDisableVehiclePetrolTankFires(vehicle_number, toggle_boolean){ }
	setDisableVehiclePetrolTankDamage(vehicle_number, toggle_boolean){ }
	_0x91A0BD635321F145(vehicle_number, p1_boolean){ }
	_0xC50CE861B55EAB8B(vehicle_number, p1_boolean){ }
	_0x6EBFB22D646FFC18(vehicle_number, p1_boolean){ }
	_0x25367DE49D64CF16(vehicle_number, p1_boolean){ }
	removeVehiclesFromGeneratorsInArea(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, unk_number){ }
	setVehicleSteerBias(vehicle_number, value_number){ }
	isVehicleExtraTurnedOn(vehicle_number, extraId_number){ }
	setVehicleExtra(vehicle_number, extraId_number, disable_boolean){ }
	doesExtraExist(vehicle_number, extraId_number){ }
	_0x534E36D4DB9ECC5D(p0_number, p1_number){ }
	setConvertibleRoof(vehicle_number, p1_boolean){ }
	lowerConvertibleRoof(vehicle_number, instantlyLower_boolean){ }
	raiseConvertibleRoof(vehicle_number, instantlyRaise_boolean){ }
	getConvertibleRoofState(vehicle_number){ }
	isVehicleAConvertible(vehicle_number, p1_boolean){ }
	transformVehicleToSubmarine(vehicle_number, noAnimation_boolean){ }
	transformSubmarineToVehicle(vehicle_number, noAnimation_boolean){ }
	getIsSubmarineVehicleTransformed(vehicle_number){ }
	isVehicleStoppedAtTrafficLights(vehicle_number){ }
	setVehicleDamage(vehicle_number, xOffset_number, yOffset_number, zOffset_number, damage_number, radius_number, p6_boolean){ }
	_0x35BB21DE06784373(p0_number, p1_number){ }
	getVehicleEngineHealth(vehicle_number){ }
	setVehicleEngineHealth(vehicle_number, health_number){ }
	_0x2A86A0475B6A1434(p0_number, p1_number){ }
	getVehiclePetrolTankHealth(vehicle_number){ }
	setVehiclePetrolTankHealth(vehicle_number, health_number){ }
	isVehicleStuckTimerUp(vehicle_number, p1_number, p2_number){ }
	resetVehicleStuckTimer(vehicle_number, nullAttributes_number){ }
	isVehicleDriveable(vehicle_number, isOnFireCheck_boolean){ }
	setVehicleHasBeenOwnedByPlayer(vehicle_number, owned_boolean){ }
	setVehicleNeedsToBeHotwired(vehicle_number, toggle_boolean){ }
	_0x9F3F689B814F2599(vehicle_number, p1_boolean){ }
	_0x4E74E62E0A97E901(vehicle_number, p1_boolean){ }
	startVehicleHorn(vehicle_number, duration_number, mode_number, forever_boolean){ }
	setVehicleSilent(vehicle_number, toggle_boolean){ }
	setVehicleHasStrongAxles(vehicle_number, toggle_boolean){ }
	getDisplayNameFromVehicleModel(modelHash_number){ }
	getVehicleDeformationAtPos(vehicle_number, offsetX_number, offsetY_number, offsetZ_number){ }
	setVehicleLivery(vehicle_number, livery_number){ }
	getVehicleLivery(trailers2_number){ }
	getVehicleLiveryCount(vehicle_number){ }
	setVehicleRoofLivery(vehicle_number, livery_number){ }
	getVehicleRoofLivery(vehicle_number){ }
	getVehicleRoofLiveryCount(vehicle_number){ }
	isVehicleWindowIntact(vehicle_number, windowIndex_number){ }
	areAllVehicleWindowsIntact(vehicle_number){ }
	areAnyVehicleSeatsFree(vehicle_number){ }
	resetVehicleWheels(vehicle_number, toggle_boolean){ }
	isHeliPartBroken(vehicle_number, p1_boolean, p2_boolean, p3_boolean){ }
	getHeliMainRotorHealth(vehicle_number){ }
	getHeliTailRotorHealth(vehicle_number){ }
	getHeliEngineHealth(vehicle_number){ }
	_0x4056EA1105F5ABD7(p0_number, p1_number){ }
	_0xFE205F38AAA58E5B(p0_number, p1_number){ }
	_0x3EC8BF18AA453FE9(vehicle_number, p1_boolean){ }
	setVehicleNameDebug(vehicle_number, name_string){ }
	setVehicleExplodesOnHighExplosionDamage(vehicle_number, toggle_boolean){ }
	_0xD565F438137F0E10(p0_number, p1_number){ }
	_0x3441CAD2F2231923(vehicle_number, p1_boolean){ }
	setVehicleDisableTowing(vehicle_number, toggle_boolean){ }
	_0xE43701C36CAFF1A4(p0_number){ }
	controlLandingGear(vehicle_number, state_number){ }
	getLandingGearState(vehicle_number){ }
	isAnyVehicleNearPoint(x_number, y_number, z_number, radius_number){ }
	requestVehicleHighDetailModel(vehicle_number){ }
	removeVehicleHighDetailModel(vehicle_number){ }
	isVehicleHighDetail(vehicle_number){ }
	requestVehicleAsset(vehicleHash_number, vehicleAsset_number){ }
	hasVehicleAssetLoaded(vehicleAsset_number){ }
	removeVehicleAsset(vehicleAsset_number){ }
	setVehicleTowTruckArmPosition(vehicle_number, position_number){ }
	attachVehicleToTowTruck(towTruck_number, vehicle_number, rear_boolean, hookOffsetX_number, hookOffsetY_number, hookOffsetZ_number){ }
	detachVehicleFromTowTruck(towTruck_number, vehicle_number){ }
	detachVehicleFromAnyTowTruck(vehicle_number){ }
	isVehicleAttachedToTowTruck(towTruck_number, vehicle_number){ }
	getEntityAttachedToTowTruck(towTruck_number){ }
	setVehicleAutomaticallyAttaches(vehicle_number, p1_boolean, p2_number){ }
	setVehicleBulldozerArmPosition(vehicle_number, position_number, p2_boolean){ }
	setVehicleTankTurretPosition(vehicle_number, position_number, p2_boolean){ }
	_0x0581730AB9380412(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	_0x737E398138550FFF(p0_number, p1_number){ }
	_0x1093408B4B9D1146(p0_number, p1_number){ }
	_0x32CAEDF24A583345(p0_number){ }
	setVehicleDesiredVerticalFlightPhase(vehicle_number, angleRatio_number){ }
	setVehicleVerticalFlightPhase(vehicle_number, angle_number){ }
	getPlaneHoverModePercentage(plane_number){ }
	_0xCE2B43770B655F8F(p0_number, p1_number){ }
	_0xA4822F1CF23F4810(outVec_setAsUndefined, p1_number, outVec1_setAsUndefined, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number){ }
	setVehicleBurnout(vehicle_number, toggle_boolean){ }
	isVehicleInBurnout(vehicle_number){ }
	setVehicleReduceGrip(vehicle_number, toggle_boolean){ }
	_0x6DEE944E1EE90CFB(p0_number, p1_number){ }
	setVehicleIndicatorLights(vehicle_number, turnSignal_number, toggle_boolean){ }
	setVehicleBrakeLights(vehicle_number, toggle_boolean){ }
	setVehicleHandbrake(vehicle_number, toggle_boolean){ }
	setVehicleBrake(vehicle_number, toggle_boolean){ }
	_0x48ADC8A773564670(){ }
	_0x91D6DD290888CBAB(){ }
	_0x51DB102F4A3BA5E0(toggle_boolean){ }
	_0xA4A9A4C40E615885(p0_number){ }
	getVehicleTrailerVehicle(vehicle_number, trailer_number){ }
	_0xCAC66558B944DA67(vehicle_number, toggle_boolean){ }
	setVehicleRudderBroken(vehicle_number, toggle_boolean){ }
	setConvertibleRoofLatchState(vehicle_number, state_boolean){ }
	getVehicleEstimatedMaxSpeed(vehicle_number){ }
	getVehicleMaxBraking(vehicle_number){ }
	getVehicleMaxTraction(vehicle_number){ }
	getVehicleAcceleration(vehicle_number){ }
	getVehicleModelMaxSpeed(modelHash_number){ }
	getVehicleModelMaxBraking(modelHash_number){ }
	getVehicleModelMaxBrakingMaxMods(modelHash_number){ }
	getVehicleModelMaxTraction(modelHash_number){ }
	getVehicleModelAcceleration(modelHash_number){ }
	getVehicleModelDownForce(modelHash_number){ }
	getVehicleModelMaxKnots(modelHash_number){ }
	getVehicleModelMoveResistance(modelHash_number){ }
	getVehicleClassMaxSpeed(vehicleClass_number){ }
	getVehicleClassMaxTraction(vehicleClass_number){ }
	getVehicleClassMaxAgility(vehicleClass_number){ }
	getVehicleClassMaxAcceleration(vehicleClass_number){ }
	getVehicleClassMaxBraking(vehicleClass_number){ }
	addSpeedZoneForCoord(x_number, y_number, z_number, radius_number, speed_number, p5_boolean){ }
	removeSpeedZone(speedzone_number){ }
	openBombBayDoors(vehicle_number){ }
	closeBombBayDoors(vehicle_number){ }
	areBombBayDoorsOpen(aircraft_number){ }
	isVehicleSearchlightOn(vehicle_number){ }
	setVehicleSearchlight(heli_number, toggle_boolean, canBeUsedByAI_boolean){ }
	_0x639431E895B9AA57(ped_number, vehicle_number, p2_boolean, p3_boolean, p4_boolean){ }
	getEntryPositionOfDoor(vehicle_number, doorIndex_number){ }
	canShuffleSeat(vehicle_number, p1_number){ }
	getNumModKits(vehicle_number){ }
	setVehicleModKit(vehicle_number, modKit_number){ }
	getVehicleModKit(vehicle_number){ }
	getVehicleModKitType(vehicle_number){ }
	getVehicleWheelType(vehicle_number){ }
	setVehicleWheelType(vehicle_number, WheelType_number){ }
	getNumModColors(p0_number, p1_boolean){ }
	setVehicleModColor1(vehicle_number, paintType_number, color_number, p3_number){ }
	setVehicleModColor2(vehicle_number, paintType_number, color_number){ }
	getVehicleModColor1(vehicle_number, paintType_number, color_number, p3_number){ }
	getVehicleModColor2(vehicle_number, paintType_number, color_number){ }
	getVehicleModColor1Name(vehicle_number, p1_boolean){ }
	getVehicleModColor2Name(vehicle_number){ }
	isVehicleModLoadDone(vehicle_number){ }
	setVehicleMod(vehicle_number, modType_number, modIndex_number, customTires_boolean){ }
	getVehicleMod(vehicle_number, modType_number){ }
	getVehicleModVariation(vehicle_number, modType_number){ }
	getNumVehicleMods(vehicle_number, modType_number){ }
	removeVehicleMod(vehicle_number, modType_number){ }
	toggleVehicleMod(vehicle_number, modType_number, toggle_boolean){ }
	isToggleModOn(vehicle_number, modType_number){ }
	getModTextLabel(vehicle_number, modType_number, modValue_number){ }
	getModSlotName(vehicle_number, modType_number){ }
	getLiveryName(vehicle_number, liveryIndex_number){ }
	getVehicleModModifierValue(vehicle_number, modType_number, modIndex_number){ }
	getVehicleModIdentifierHash(vehicle_number, modType_number, modIndex_number){ }
	preloadVehicleMod(p0_number, modType_number, p2_number){ }
	hasPreloadModsFinished(p0_number){ }
	releasePreloadMods(vehicle_number){ }
	setVehicleTyreSmokeColor(vehicle_number, r_number, g_number, b_number){ }
	getVehicleTyreSmokeColor(vehicle_number, r_number, g_number, b_number){ }
	setVehicleWindowTint(vehicle_number, tint_number){ }
	getVehicleWindowTint(vehicle_number){ }
	getNumVehicleWindowTints(){ }
	getVehicleColor(vehicle_number, r_number, g_number, b_number){ }
	_0xEEBFC7A7EFDC35B4(vehicle_number){ }
	getVehicleCauseOfDestruction(vehicle_number){ }
	_0x5EE5632F47AE9695(vehicle_number, health_number){ }
	getIsLeftVehicleHeadlightDamaged(vehicle_number){ }
	getIsRightVehicleHeadlightDamaged(vehicle_number){ }
	isVehicleEngineOnFire(vehicle_number){ }
	setVehicleEnginePowerMultiplier(vehicle_number, value_number){ }
	setVehicleMaxSpeed(vehicle_number, speed_number){ }
	_0x1CF38D529D7441D9(vehicle_number, toggle_boolean){ }
	_0x1F9FB66F3A3842D2(vehicle_number, p1_boolean){ }
	_0x59C3757B3B7408E8(p0_number, p1_number, p2_number){ }
	addVehicleCombatAvoidanceArea(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	removeVehicleCombatAvoidanceArea(p0_number){ }
	isAnyPassengerRappelingFromVehicle(vehicle_number){ }
	setVehicleEngineTorqueMultiplier(vehicle_number, value_number){ }
	_0x0AD9E8F87FF7C16F(p0_number, p1_boolean){ }
	setVehicleIsWanted(vehicle_number, state_boolean){ }
	_0xF488C566413B4232(p0_number, p1_number){ }
	_0xC1F981A6F74F0C23(p0_number, p1_boolean){ }
	_0x0F3B4D4E43177236(p0_number, p1_boolean){ }
	_0x6636C535F6CC2725(vehicle_number){ }
	disablePlaneAileron(vehicle_number, p1_boolean, p2_boolean){ }
	getIsVehicleEngineRunning(vehicle_number){ }
	_0x1D97D1E3A70A649F(vehicle_number, p1_boolean){ }
	setBikeLeanAngle(vehicle_number, x_number, y_number){ }
	_0xAB04325045427AAE(vehicle_number, p1_boolean){ }
	_0xCFD778E7904C255E(vehicle_number){ }
	setLastDrivenVehicle(vehicle_number){ }
	getLastDrivenVehicle(){ }
	clearLastDrivenVehicle(){ }
	setVehicleHasBeenDrivenFlag(vehicle_number, toggle_boolean){ }
	setTaskVehicleGotoPlaneMinHeightAboveTerrain(plane_number, height_number){ }
	setVehicleLodMultiplier(vehicle_number, multiplier_number){ }
	_0x428BACCDF5E26EAD(vehicle_number, p1_boolean){ }
	_0x42A4BEB35D372407(p0_number){ }
	_0x2C8CBFE1EA5FC631(p0_number){ }
	_0x4D9D109F63FEE1D4(p0_number, p1_boolean){ }
	_0x279D50DE5652D935(vehicle_number, toggle_boolean){ }
	_0xE44A982368A4AF23(vehicle_number, vehicle2_number){ }
	_0xF25E02CB9C5818F8(){ }
	_0xBC3CCA5844452B06(p0_number){ }
	setVehicleShootAtTarget(driver_number, entity_number, xTarget_number, yTarget_number, zTarget_number){ }
	getVehicleLockOnTarget(vehicle_number, entity_number){ }
	setForceHdVehicle(vehicle_number, toggle_boolean){ }
	_0x182F266C2D9E2BEB(vehicle_number, p1_number){ }
	getVehiclePlateType(vehicle_number){ }
	trackVehicleVisibility(vehicle_number){ }
	isVehicleVisible(vehicle_number){ }
	setVehicleGravity(vehicle_number, toggle_boolean){ }
	_0xE6C0C80B8C867537(p0_boolean){ }
	_0xF051D9BFB6BA39C0(p0_number){ }
	_0x36492C2F0D134C56(vehicle_number){ }
	_0x48C633E94A8142A7(vehicle_number){ }
	setVehicleInactiveDuringPlayback(vehicle_number, toggle_boolean){ }
	_0xDFFCEF48E511DB48(p0_number, p1_boolean){ }
	isVehicleSprayable(vehicle_number){ }
	setVehicleEngineCanDegrade(vehicle_number, toggle_boolean){ }
	_0xF0E4BA16D1DB546C(vehicle_number, p1_number, p2_number){ }
	_0xF87D9F2301F7D206(vehicle_number){ }
	isPlaneLandingGearIntact(plane_number){ }
	arePlanePropellersIntact(plane_number){ }
	_0x4C815EB175086F84(p0_number, p1_number){ }
	setVehicleCanDeformWheels(vehicle_number, toggle_boolean){ }
	isVehicleStolen(vehicle_number){ }
	setVehicleIsStolen(vehicle_number, isStolen_boolean){ }
	setPlaneTurbulenceMultiplier(vehicle_number, value_number){ }
	arePlaneWingsIntact(plane_number){ }
	_0xB264C4D2F2B0A78B(vehicle_number){ }
	detachVehicleFromCargobob(vehicle_number, cargobob_number){ }
	detachVehicleFromAnyCargobob(vehicle_number){ }
	_0xAF03011701811146(p0_number, p1_number){ }
	isVehicleAttachedToCargobob(cargobob_number, vehicleAttached_number){ }
	getVehicleAttachedToCargobob(cargobob_number){ }
	_0x99093F60746708CA(p0_number){ }
	attachVehicleToCargobob(vehicle_number, cargobob_number, p2_number, x_number, y_number, z_number){ }
	_0xA1DD82F3CCF9A01E(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number){ }
	_0x571FEB383F629926(cargobob_number, p1_boolean){ }
	_0x1F34B0626C594380(p0_number, p1_number){ }
	_0x2C1D8B3B19E517CC(p0_number, p1_number){ }
	getCargobobHookPosition(cargobob_number){ }
	doesCargobobHavePickUpRope(cargobob_number){ }
	createPickUpRopeForCargobob(cargobob_number, state_number){ }
	removePickUpRopeForCargobob(cargobob_number){ }
	setCargobobHookPosition(p0_number, p1_number, p2_number, state_number){ }
	_0xC0ED6438E6D39BA8(p0_number, p1_number, p2_number){ }
	_0xCF1182F682F65307(p0_number, p1_number){ }
	_0x0D5F65A8F4EBDAB5(p0_number, p1_number){ }
	doesCargobobHavePickupMagnet(cargobob_number){ }
	setCargobobPickupMagnetActive(cargobob_number, isActive_boolean){ }
	setCargobobPickupMagnetStrength(cargobob_number, strength_number){ }
	_0xA17BAD153B51547E(cargobob_number, p1_number){ }
	_0x66979ACF5102FD2F(cargobob_number, p1_number){ }
	_0x6D8EAC07506291FB(cargobob_number, p1_number){ }
	_0xED8286F71A819BAA(cargobob_number, p1_number){ }
	_0x685D5561680D088B(vehicle_number, p1_number){ }
	_0xE301BD63E9E13CF0(vehicle_number, cargobob_number){ }
	_0x9BDDC73CC6A115D4(vehicle_number, p1_boolean, p2_boolean){ }
	_0x56EB5E94318D3FB6(vehicle_number, p1_boolean){ }
	doesVehicleHaveWeapons(vehicle_number){ }
	_0x2C4A1590ABF43E8B(vehicle_number, p1_boolean){ }
	disableVehicleWeapon(disabled_boolean, weaponHash_number, vehicle_number, owner_number){ }
	_0x563B65A643ED072E(p0_number, p1_number, p2_number){ }
	_0xE05DD0E9707003A3(p0_number, p1_boolean){ }
	_0x21115BCD6E44656A(p0_number, p1_boolean){ }
	getVehicleClass(vehicle_number){ }
	getVehicleClassFromName(modelHash_number){ }
	setPlayersLastVehicle(vehicle_number){ }
	setVehicleCanBeUsedByFleeingPeds(vehicle_number, toggle_boolean){ }
	_0xE5810AC70602F2F5(vehicle_number, p1_number){ }
	setVehicleDropsMoneyWhenBlownUp(vehicle_number, toggle_boolean){ }
	setVehicleJetEngineOn(vehicle_number, toggle_boolean){ }
	_0x6A973569BA094650(p0_number, p1_number){ }
	setVehicleHandlingHashForAi(vehicle_number, hash_number){ }
	setVehicleExtendedRemovalRange(vehicle_number, range_number){ }
	_0x9007A2F21DC108D4(p0_number, p1_number){ }
	setHelicopterRollPitchYawMult(helicopter_number, multiplier_number){ }
	setVehicleFrictionOverride(vehicle_number, friction_number){ }
	setVehicleWheelsCanBreakOffWhenBlowUp(vehicle_number, toggle_boolean){ }
	_0xF78F94D60248C737(vehicle_number, p1_boolean){ }
	setVehicleCeilingHeight(vehicle_number, height_number){ }
	_0x5E569EC46EC21CAE(vehicle_number, toggle_boolean){ }
	_0x6D6AF961B72728AE(vehicle_number){ }
	doesVehicleExistWithDecorator(decorator_string){ }
	setVehicleExclusiveDriver(vehicle_number, toggle_boolean){ }
	setVehicleExclusiveDriver2(vehicle_number, ped_number, index_number){ }
	_0xB09D25E77C33EB3F(p0_number, p1_number, p2_number){ }
	_0x500873A45724C863(vehicle_number, p1_number){ }
	_0xB055A34527CB8FD7(vehicle_number, p1_boolean){ }
	_0x1087BC8EC540DAEB(p0_number, p1_number){ }
	_0xB68CFAF83A02768D(p0_number, p1_number){ }
	_0x0205F5365292D2EB(p0_number, p1_number){ }
	_0xCF9159024555488C(p0_number){ }
	setDistantCarsEnabled(toggle_boolean){ }
	setVehicleNeonLightsColour(vehicle_number, r_number, g_number, b_number){ }
	_0xB93B2867F7B479D1(p0_number, p1_number){ }
	getVehicleNeonLightsColour(vehicle_number, r_number, g_number, b_number){ }
	setVehicleNeonLightEnabled(vehicle_number, index_number, toggle_boolean){ }
	isVehicleNeonLightEnabled(vehicle_number, index_number){ }
	_0x35E0654F4BAD7971(p0_boolean){ }
	disableVehicleNeonLights(vehicle_number, toggle_boolean){ }
	_0xB088E9A47AE6EDD5(vehicle_number, p1_boolean){ }
	requestVehicleDashboardScaleformMovie(vehicle_number){ }
	getVehicleBodyHealth(vehicle_number){ }
	setVehicleBodyHealth(vehicle_number, value_number){ }
	_0xDF7E3EEB29642C38(vehicle_number, out1_setAsUndefined, out2_setAsUndefined){ }
	getVehicleSuspensionHeight(vehicle_number){ }
	setCarHighSpeedBumpSeverityMultiplier(multiplier_number){ }
	getNumberOfVehicleDoors(vehicle_number){ }
	_0x28B18377EB6E25F6(p0_number, p1_number){ }
	_0xA7DCDF4DED40A8F4(vehicle_number, p1_boolean){ }
	getVehicleBodyHealth2(vehicle_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number){ }
	_0xD4C4642CB7F50B5D(vehicle_number){ }
	_0xC361AA040D6637A8(vehicle_number, p1_boolean){ }
	setVehicleKersAllowed(vehicle_number, toggle_boolean){ }
	getVehicleHasKers(vehicle_number){ }
	_0xE16142B94664DEFD(vehicle_number, p1_boolean){ }
	_0x26D99D5A82FD18E8(p0_number){ }
	_0x84EA99C62CB3EF0C(p0_number, p1_number, p2_number){ }
	_0x1201E8A3290A3B98(p0_number, p1_number){ }
	_0x8EA86DF356801C7D(p0_number, p1_number){ }
	_0xC24075310A8B9CD1(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	_0x5BA68A0840D546AC(p0_number, p1_number){ }
	_0x4419966C9936071A(vehicle_number){ }
	_0x870B8B7A766615C8(p0_number, p1_number, p2_number){ }
	_0x8533CAFDE1F0F336(p0_number){ }
	_0x4E20D2A627011E8E(vehicle_number, p1_number){ }
	setVehicleUnkDamageMultiplier(vehicle_number, multiplier_number){ }
	_0xD4196117AF7BB974(p0_number, p1_number){ }
	_0xBB2333BB87DDD87F(p0_number, p1_number){ }
	_0x73561D4425A021A2(p0_number, p1_number){ }
	_0x5B91B229243351A8(p0_number, p1_number){ }
	_0x7BBE7FF626A591FE(p0_number){ }
	_0x65B080555EA48149(p0_number){ }
	_0x428AD3E26C8D9EB0(vehicle_number, x_number, y_number, z_number, p4_number){ }
	_0xE2F53F172B45EDE1(){ }
	_0xBA91D045575699AD(vehicle_number){ }
	_0x80E3357FDEF45C21(p0_number, p1_number){ }
	_0xEFC13B1CE30D755D(p0_number, p1_number){ }
	getIsDoorValid(vehicle_number, doorIndex_number){ }
	setVehicleRocketBoostRefillTime(vehicle_number, seconds_number){ }
	getHasRocketBoost(vehicle_number){ }
	isVehicleRocketBoostActive(vehicle_number){ }
	setVehicleRocketBoostActive(vehicle_number, active_boolean){ }
	getHasRetractableWheels(vehicle_number){ }
	getIsWheelsLoweredStateActive(vehicle_number){ }
	raiseRetractableWheels(vehicle_number){ }
	lowerRetractableWheels(vehicle_number){ }
	getCanVehicleJump(vehicle_number){ }
	setUseHigherVehicleJumpForce(vehicle_number, toggle_boolean){ }
	_0xB2E0C0D6922D31F2(vehicle_number, toggle_boolean){ }
	setVehicleWeaponCapacity(vehicle_number, weaponIndex_number, capacity_number){ }
	getVehicleWeaponCapacity(vehicle_number, weaponIndex_number){ }
	getVehicleHasParachute(vehicle_number){ }
	getVehicleCanActivateParachute(vehicle_number){ }
	setVehicleParachuteActive(vehicle_number, active_boolean){ }
	_0x3DE51E9C80B116CF(p0_number){ }
	setVehicleReceivesRampDamage(vehicle_number, toggle_boolean){ }
	_0x1BBAC99C0BC53656(p0_number, p1_number){ }
	_0x756AE6E962168A04(p0_number, p1_number){ }
	_0x9D30687C57BAA0BB(p0_number){ }
	_0x86B4B6212CB8B627(p0_number, p1_number){ }
	_0x41290B40FA63E6DA(p0_number){ }
	setVehicleParachuteModel(vehicle_number, modelHash_number){ }
	setVehicleParachuteTextureVariatiion(vehicle_number, textureVariation_number){ }
	_0x0419B167EE128F33(p0_number, p1_number){ }
	_0xF3B0E0AED097A3F5(p0_number, p1_number){ }
	_0xD3E51C0AB8C26EEE(p0_number, p1_number){ }
	getAllVehicles(vehsStruct_number){ }
	_0x72BECCF4B829522E(p0_number, p1_number){ }
	_0x66E3AAFACE2D1EB8(p0_number, p1_number, p2_number){ }
	_0x1312DDD8385AEE4E(p0_number, p1_number){ }
	_0xEDBC8405B3895CC9(p0_number, p1_number){ }
	_0x26E13D440E7F6064(vehicle_number, value_number){ }
	_0x2FA2494B47FDD009(p0_number, p1_number){ }
	setVehicleRocketBoostPercentage(vehicle_number, percentage_number){ }
	_0x544996C0081ABDEB(p0_number, p1_number){ }
	_0x78CEEE41F49F421F(p0_number, p1_number){ }
	_0xAF60E6A2936F982A(p0_number, p1_number){ }
	_0x430A7631A84C9BE7(p0_number){ }
	_0x75627043C6AA90AD(p0_number){ }
	_0x8235F1BEAD557629(p0_number, p1_number){ }
	_0x9640E30A7F395E4B(p0_number, p1_number, p2_number, p3_number, p4_number){ }
	_0x0BBB9A7A8FFE931B(p0_number, p1_number, p2_number){ }
	_0x94A68DA412C4007D(p0_number, p1_number){ }
	setVehicleBombCount(vehicle_number, bombCount_number){ }
	getVehicleBombCount(vehicle_number){ }
	setVehicleCountermeasureCount(vehicle_number, counterMeasureCount_number){ }
	getVehicleCountermeasureCount(vehicle_number){ }
	_0x0A3F820A9A9A9AC5(p0_number, p1_number, p2_number, p3_number){ }
	_0x51F30DB60626A20E(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number){ }
	_0x97841634EF7DF1D6(p0_number, p1_number){ }
	setVehicleHoverTransformRatio(vehicle_number, ratio_number){ }
	setVehicleHoverTransformPercentage(vehicle_number, percentage_number){ }
	_0xF1211889DF15A763(p0_number, p1_number){ }
	setVehicleHoverTransformActive(vehicle_number, toggle_boolean){ }
	_0x3A9128352EAC9E85(p0_number){ }
	_0x8DC9675797123522(p0_number){ }
	_0xB251E0B33E58B424(p0_number, p1_number, p2_number){ }
	_0xAEF12960FA943792(p0_number){ }
	_0xAA653AE61924B0A0(p0_number, p1_number){ }
	_0xC60060EB0D8AC7B1(p0_number, p1_number, p2_number){ }
	setSpecialflightWingRatio(vehicle_number, ratio_number){ }
	_0xE615BB7A7752C76A(p0_number, p1_number){ }
	_0x887FA38787DE8C72(p0_number){ }
	setUnkFloat0x104ForSubmarineVehicleTask(vehicle_number, value_number){ }
	setUnkBool0x102ForSubmarineVehicleTask(vehicle_number, value_boolean){ }
	_0x36DE109527A2C0C4(toggle_boolean){ }
	_0x82E0AC411E41A5B4(toggle_boolean){ }
	_0x99A05839C46CE316(toggle_boolean){ }
	getIsVehicleShuntBoostActive(vehicle_number){ }
	_0xE8718FAF591FD224(vehicle_number){ }
	getLastRammedVehicle(vehicle_number){ }
	setDisableVehicleUnk(toggle_boolean){ }
	setVehicleNitroEnabled(vehicle_number, toggle_boolean){ }
	_0x2970EAA18FD5E42F(vehicle_number, toggle_boolean){ }
	setDisableVehicleUnk2(toggle_boolean){ }
	_0x5BBCF35BF6E456F7(toggle_boolean){ }
	getDoesVehicleHaveTombstone(vehicle_number){ }
	hideVehicleTombstone(vehicle_number, toggle_boolean){ }
	getIsVehicleEmpDisabled(vehicle_number){ }
	_0x8F0D5BA1C2CC91D7(toggle_boolean){ }
	getWaterHeight(x_number, y_number, z_number, height_number){ }
	getWaterHeightNoWaves(x_number, y_number, z_number, height_number){ }
	testProbeAgainstWater(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number, result_setAsUndefined){ }
	testProbeAgainstAllWater(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number){ }
	testVerticalProbeAgainstAllWater(x_number, y_number, z_number, p3_number, height_number){ }
	modifyWater(x_number, y_number, radius_number, height_number){ }
	addCurrentRise(x_number, y_number, z_number, radius_number, unk_number){ }
	removeCurrentRise(p0_number){ }
	setDeepOceanScaler(intensity_number){ }
	getDeepOceanScaler(){ }
	_0x547237AA71AB44DE(p0_number){ }
	resetDeepOceanScaler(){ }
	enableLaserSightRendering(toggle_boolean){ }
	getWeaponComponentTypeModel(componentHash_number){ }
	getWeapontypeModel(weaponHash_number){ }
	getWeapontypeSlot(weaponHash_number){ }
	getWeapontypeGroup(weaponHash_number){ }
	getWeaponComponentVariantExtraComponentCount(componentHash_number){ }
	getWeaponComponentVariantExtraComponentModel(componentHash_number, extraComponentIndex_number){ }
	setCurrentPedWeapon(ped_number, weaponHash_number, equipNow_boolean){ }
	getCurrentPedWeapon(ped_number, weaponHash_number, p2_boolean){ }
	getCurrentPedWeaponEntityIndex(ped_number){ }
	getBestPedWeapon(ped_number, p1_boolean){ }
	setCurrentPedVehicleWeapon(ped_number, weaponHash_number){ }
	getCurrentPedVehicleWeapon(ped_number, weaponHash_number){ }
	isPedArmed(ped_number, p1_number){ }
	isWeaponValid(weaponHash_number){ }
	hasPedGotWeapon(ped_number, weaponHash_number, p2_boolean){ }
	isPedWeaponReadyToShoot(ped_number){ }
	getPedWeapontypeInSlot(ped_number, weaponSlot_number){ }
	getAmmoInPedWeapon(ped_number, weaponhash_number){ }
	addAmmoToPed(ped_number, weaponHash_number, ammo_number){ }
	setPedAmmo(ped_number, weaponHash_number, ammo_number, p3_boolean){ }
	setPedInfiniteAmmo(ped_number, toggle_boolean, weaponHash_number){ }
	setPedInfiniteAmmoClip(ped_number, toggle_boolean){ }
	giveWeaponToPed(ped_number, weaponHash_number, ammoCount_number, isHidden_boolean, equipNow_boolean){ }
	giveDelayedWeaponToPed(ped_number, weaponHash_number, ammoCount_number, equipNow_boolean){ }
	removeAllPedWeapons(ped_number, p1_boolean){ }
	removeWeaponFromPed(ped_number, weaponHash_number){ }
	hidePedWeaponForScriptedCutscene(ped_number, toggle_boolean){ }
	setPedCurrentWeaponVisible(ped_number, visible_boolean, deselectWeapon_boolean, p3_boolean, p4_boolean){ }
	setPedDropsWeaponsWhenDead(ped_number, toggle_boolean){ }
	hasPedBeenDamagedByWeapon(ped_number, weaponHash_number, weaponType_number){ }
	clearPedLastWeaponDamage(ped_number){ }
	hasEntityBeenDamagedByWeapon(entity_number, weaponHash_number, weaponType_number){ }
	clearEntityLastWeaponDamage(entity_number){ }
	setPedDropsWeapon(ped_number){ }
	setPedDropsInventoryWeapon(ped_number, weaponHash_number, xOffset_number, yOffset_number, zOffset_number, ammoCount_number){ }
	getMaxAmmoInClip(ped_number, weaponHash_number, p2_boolean){ }
	getAmmoInClip(ped_number, weaponHash_number, ammo_number){ }
	setAmmoInClip(ped_number, weaponHash_number, ammo_number){ }
	getMaxAmmo(ped_number, weaponHash_number, ammo_number){ }
	getMaxAmmo2(ped_number, weaponHash_number, ammo_number){ }
	addPedAmmo(ped_number, weaponHash_number, ammo_number){ }
	setPedAmmoByType(ped_number, ammoType_number, ammo_number){ }
	getPedAmmoByType(ped_number, ammoType_number){ }
	setPedAmmoToDrop(ped_number, p1_number){ }
	_0xE620FD3512A04F18(p0_number){ }
	getPedAmmoTypeFromWeapon(ped_number, weaponHash_number){ }
	getPedAmmoTypeFromWeapon2(ped_number, weaponHash_number){ }
	getPedLastWeaponImpactCoord(ped_number, coords_setAsUndefined){ }
	setPedGadget(ped_number, gadgetHash_number, p2_boolean){ }
	getIsPedGadgetEquipped(ped_number, gadgetHash_number){ }
	getSelectedPedWeapon(ped_number){ }
	explodeProjectiles(ped_number, weaponHash_number, p2_boolean){ }
	removeAllProjectilesOfType(weaponHash_number, p1_boolean){ }
	getLockonDistanceOfCurrentPedWeapon(ped_number){ }
	getMaxRangeOfCurrentPedWeapon(ped_number){ }
	hasVehicleGotProjectileAttached(driver_number, vehicle_number, weaponHash_number, p3_number){ }
	giveWeaponComponentToPed(ped_number, weaponHash_number, componentHash_number){ }
	removeWeaponComponentFromPed(ped_number, weaponHash_number, componentHash_number){ }
	hasPedGotWeaponComponent(ped_number, weaponHash_number, componentHash_number){ }
	isPedWeaponComponentActive(ped_number, weaponHash_number, componentHash_number){ }
	pedSkipNextReloading(ped_number){ }
	makePedReload(ped_number){ }
	requestWeaponAsset(weaponHash_number, p1_number, p2_number){ }
	hasWeaponAssetLoaded(weaponHash_number){ }
	removeWeaponAsset(weaponHash_number){ }
	createWeaponObject(weaponHash_number, ammoCount_number, x_number, y_number, z_number, showWorldModel_boolean, heading_number, p7_number, p8_number, p9_number){ }
	giveWeaponComponentToWeaponObject(weaponObject_number, addonHash_number){ }
	removeWeaponComponentFromWeaponObject(p0_number, p1_number){ }
	hasWeaponGotWeaponComponent(weapon_number, addonHash_number){ }
	giveWeaponObjectToPed(weaponObject_number, ped_number){ }
	doesWeaponTakeWeaponComponent(weaponHash_number, componentHash_number){ }
	getWeaponObjectFromPed(ped_number, p1_boolean){ }
	giveLoadoutToPed(ped_number, loadoutHash_number){ }
	setPedWeaponTintIndex(ped_number, weaponHash_number, tintIndex_number){ }
	getPedWeaponTintIndex(ped_number, weaponHash_number){ }
	setWeaponObjectTintIndex(weapon_number, tintIndex_number){ }
	getWeaponObjectTintIndex(weapon_number){ }
	getWeaponTintCount(weaponHash_number){ }
	setPedWeaponLiveryColor(ped_number, weaponHash_number, camoComponentHash_number, colorIndex_number){ }
	getPedWeaponLiveryColor(ped_number, weaponHash_number, camoComponentHash_number){ }
	setWeaponObjectLiveryColor(weaponObject_number, camoComponentHash_number, colorIndex_number){ }
	getWeaponObjectLiveryColor(weaponObject_number, camoComponentHash_number){ }
	_0xA2C9AC24B4061285(ped_number, weaponHash_number){ }
	_0x977CA98939E82E4B(weaponObject_number, p1_number){ }
	getWeaponHudStats(weaponHash_number, outData_number){ }
	getWeaponComponentHudStats(componentHash_number, outData_number){ }
	getWeaponDamage(weaponHash_number, componentHash_number){ }
	getWeaponClipSize(weaponHash_number){ }
	_0x065D2AACAD8CF7A4(p0_number){ }
	setPedChanceOfFiringBlanks(ped_number, xBias_number, yBias_number){ }
	setPedShootOrdnanceWeapon(ped_number, p1_number){ }
	requestWeaponHighDetailModel(weaponObject_number){ }
	setWeaponDamageModifier(weaponHash_number, damageAmount_number){ }
	isPedCurrentWeaponSilenced(ped_number){ }
	isFlashLightOn(ped_number){ }
	setFlashLightFadeDistance(distance_number){ }
	setWeaponAnimationOverride(ped_number, animStyle_number){ }
	getWeaponDamageType(weaponHash_number){ }
	_0xE4DCEC7FD5B739A5(ped_number){ }
	canUseWeaponOnParachute(weaponHash_number){ }
	createAirDefenseSphere(p0_number, p1_number, p2_number, radius_number, p4_number, p5_number, p6_number, weaponHash_number){ }
	createAirDefenseArea(p0_number, p1_number, p2_number, p3_number, p4_number, p5_number, p6_number, p7_number, p8_number, p9_number, weaponHash_number){ }
	removeAirDefenseZone(zoneId_number){ }
	removeAllAirDefenseZones(){ }
	setPlayerAirDefenseZoneFlag(player_number, zoneId_number, enable_boolean){ }
	isAirDefenseZoneInsideSphere(x_number, y_number, z_number, radius_number, zoneId_number){ }
	fireAirDefenseWeapon(zoneId_number, x_number, y_number, z_number){ }
	doesAirDefenseZoneExist(zoneId_number){ }
	setCanPedEquipWeapon(ped_number, weaponHash_number, toggle_boolean){ }
	setCanPedEquipAllWeapons(ped_number, toggle_boolean){ }
	getZoneAtCoords(x_number, y_number, z_number){ }
	getZoneFromNameId(zoneName_string){ }
	getZonePopschedule(zoneId_number){ }
	getNameOfZone(x_number, y_number, z_number){ }
	setZoneEnabled(zoneId_number, toggle_boolean){ }
	getZoneScumminess(zoneId_number){ }
	overridePopscheduleVehicleModel(scheduleId_number, vehicleHash_number){ }
	clearPopscheduleOverrideVehicleModel(scheduleId_number){ }
	getHashOfMapAreaAtCoords(x_number, y_number, z_number){ }
}
*/

/*
	This thing is ugly; but it works well.
	You paste your native class above or below.
	You remove all typescript types and make all the properties; functions.
	Then you just run this; and it spits out a 'data.json' with your newly updated
	files.
*/

class natives {
  constructor() {}
  wait(ms_number) {}
  startNewScript(scriptName_string, stackSize_number) {}
  startNewScriptWithArgs(
    scriptName_string,
    args_number,
    argCount_number,
    stackSize_number
  ) {}
  startNewScriptWithNameHash(scriptHash_number, stackSize_number) {}
  startNewScriptWithNameHashAndArgs(
    scriptHash_number,
    args_number,
    argCount_number,
    stackSize_number
  ) {}
  timera() {}
  timerb() {}
  settimera(value_number) {}
  settimerb(value_number) {}
  timestep() {}
  sin(value_number) {}
  cos(value_number) {}
  sqrt(value_number) {}
  pow(base_number, exponent_number) {}
  log10(value_number) {}
  vmag(x_number, y_number, z_number) {}
  vmag2(x_number, y_number, z_number) {}
  vdist(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number) {}
  vdist2(x1_number, y1_number, z1_number, x2_number, y2_number, z2_number) {}
  shiftLeft(value_number, bitShift_number) {}
  shiftRight(value_number, bitShift_number) {}
  floor(value_number) {}
  ceil(value_number) {}
  round(value_number) {}
  toFloat(value_number) {}
  setThreadPriority(priority_number) {}
  //Category: App
  appDataValid() {}
  appGetInt(property_string) {}
  appGetFloat(property_string) {}
  appGetString(property_string) {}
  //Category: Audio
  playPedRingtone(ringtoneName_string, ped_number, p2_boolean) {}
  isPedRingtonePlaying(ped_number) {}
  stopPedRingtone(ped_number) {}
  isMobilePhoneCallOngoing() {}
  _0xC8B1B2425604CDD0() {}
  createNewScriptedConversation() {}
  addLineToConversation(
    index_number,
    p1_string,
    p2_string,
    p3_number,
    p4_number,
    p5_boolean,
    p6_boolean,
    p7_boolean,
    p8_boolean,
    p9_number,
    p10_boolean,
    p11_boolean,
    p12_boolean
  ) {}
  addPedToConversation(index_number, ped_number, p2_string) {}
  _0x33E3C6C6F2F0B506(p0_number, p1_number, p2_number, p3_number) {}
  _0x892B6AB8F33606F5(p0_number, entity_number) {}
  setMicrophonePosition(
    p0_boolean,
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    x3_number,
    y3_number,
    z3_number
  ) {}
  _0x0B568201DD99F0EB(p0_boolean) {}
  _0x61631F5DF50D1C34(p0_boolean) {}
  startScriptPhoneConversation(p0_boolean, p1_boolean) {}
  preloadScriptPhoneConversation(p0_boolean, p1_boolean) {}
  startScriptConversation(p0_boolean, p1_boolean, p2_boolean, p3_boolean) {}
  preloadScriptConversation(p0_boolean, p1_boolean, p2_boolean, p3_boolean) {}
  startPreloadedConversation() {}
  getIsPreloadedConversationReady() {}
  isScriptedConversationOngoing() {}
  isScriptedConversationLoaded() {}
  getCurrentScriptedConversationLine() {}
  pauseScriptedConversation(p0_boolean) {}
  restartScriptedConversation() {}
  stopScriptedConversation(p0_boolean) {}
  skipToNextScriptedConversationLine() {}
  interruptConversation(p0_number, p1_number, p2_number) {}
  interruptConversationAndPause(p0_number, p1_string, p2_string) {}
  _0xAA19F5572C38B564(p0_number) {}
  _0xB542DE8C3D1CB210(p0_boolean) {}
  registerScriptWithAudio(p0_number) {}
  unregisterScriptWithAudio() {}
  requestMissionAudioBank(p0_string, p1_boolean, p2_number) {}
  requestAmbientAudioBank(p0_string, p1_boolean, p2_number) {}
  requestScriptAudioBank(p0_string, p1_boolean, p2_number) {}
  _0x40763EA7B9B783E7(p0_number, p1_number, p2_number) {}
  hintAmbientAudioBank(p0_number, p1_number, p2_number) {}
  hintScriptAudioBank(p0_number, p1_number, p2_number) {}
  releaseMissionAudioBank() {}
  releaseAmbientAudioBank() {}
  releaseNamedScriptAudioBank(audioBank_string) {}
  releaseScriptAudioBank() {}
  _0x19AF7ED9B9D23058() {}
  _0x9AC92EED5E4793AB() {}
  _0x11579D940949C49E(p0_number) {}
  getSoundId() {}
  releaseSoundId(soundId_number) {}
  playSound(
    soundId_number,
    audioName_string,
    audioRef_string,
    p3_boolean,
    p4_number,
    p5_boolean
  ) {}
  playSoundFrontend(
    soundId_number,
    audioName_string,
    audioRef_string,
    p3_boolean
  ) {}
  playDeferredSoundFrontend(soundName_string, soundsetName_string) {}
  playSoundFromEntity(
    soundId_number,
    audioName_string,
    entity_number,
    audioRef_string,
    isNetwork_boolean,
    p5_number
  ) {}
  _0x5B9853296731E88D(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  playSoundFromCoord(
    soundId_number,
    audioName_string,
    x_number,
    y_number,
    z_number,
    audioRef_string,
    isNetwork_boolean,
    range_number,
    p8_boolean
  ) {}
  _0x7EC3C679D0E7E46B(p0_number, p1_number, p2_number, p3_number) {}
  stopSound(soundId_number) {}
  getNetworkIdFromSoundId(soundId_number) {}
  getSoundIdFromNetworkId(netId_number) {}
  setVariableOnSound(soundId_number, p1_number, p2_number) {}
  setVariableOnStream(p0_string, p1_number) {}
  overrideUnderwaterStream(p0_number, p1_boolean) {}
  setVariableOnUnderWaterStream(variableName_string, value_number) {}
  hasSoundFinished(soundId_number) {}
  playAmbientSpeech1(
    ped_number,
    speechName_string,
    speechParam_string,
    p3_number
  ) {}
  playAmbientSpeech2(
    ped_number,
    speechName_string,
    speechParam_string,
    p3_number
  ) {}
  playAmbientSpeechWithVoice(
    p0_number,
    speechName_string,
    voiceName_string,
    speechParam_string,
    p4_boolean
  ) {}
  playAmbientSpeechAtCoords(
    p0_string,
    p1_string,
    p2_number,
    p3_number,
    p4_number,
    p5_string
  ) {}
  overrideTrevorRage(p0_string) {}
  resetTrevorRage() {}
  setPlayerAngry(ped_number, toggle_boolean) {}
  playPain(ped_number, painID_number, p1_number, p3_number) {}
  releaseWeaponAudio() {}
  activateAudioSlowmoMode(p0_string) {}
  deactivateAudioSlowmoMode(p0_string) {}
  setAmbientVoiceName(ped_number, name_string) {}
  setAmbientVoiceNameHash(ped_number, hash_number) {}
  getAmbientVoiceNameHash(ped_number) {}
  setPedScream(ped_number) {}
  _0x1B7ABE26CBCBF8C7(ped_number, p1_number, p2_number) {}
  setPedVoiceGroup(ped_number, voiceGroupHash_number) {}
  _0xA5342D390CDA41D6(ped_number, p1_boolean) {}
  stopCurrentPlayingSpeech(ped_number) {}
  stopCurrentPlayingAmbientSpeech(ped_number) {}
  isAmbientSpeechPlaying(ped_number) {}
  isScriptedSpeechPlaying(p0_number) {}
  isAnySpeechPlaying(ped_number) {}
  canPedSpeak(ped_number, speechName_string, unk_boolean) {}
  isPedInCurrentConversation(ped_number) {}
  setPedIsDrunk(ped_number, toggle_boolean) {}
  playAnimalVocalization(pedHandle_number, p1_number, p2_number) {}
  isAnimalVocalizationPlaying(pedHandle_number) {}
  setAnimalMood(animal_number, mood_number) {}
  isMobilePhoneRadioActive() {}
  setMobilePhoneRadioState(state_boolean) {}
  getPlayerRadioStationIndex() {}
  getPlayerRadioStationName() {}
  getRadioStationName(radioStation_number) {}
  getPlayerRadioStationGenre() {}
  isRadioRetuning() {}
  isRadioFadedOut() {}
  _0xFF266D1D0EB1195D() {}
  _0xDD6BCF9E94425DF9() {}
  setRadioToStationName(stationName_string) {}
  setVehRadioStation(vehicle_number, radioStation_string) {}
  _0x0BE4BE946463F917(vehicle_number) {}
  _0xC1805D05E6D4FE10(vehicle_number) {}
  setEmitterRadioStation(emitterName_string, radioStation_string) {}
  setStaticEmitterEnabled(emitterName_string, toggle_boolean) {}
  linkStaticEmitterToEntity(emitterName_string, entity_number) {}
  setRadioToStationIndex(radioStation_number) {}
  setFrontendRadioActive(active_boolean) {}
  unlockMissionNewsStory(newsStory_number) {}
  isMissionNewsStoryUnlocked(newsStory_number) {}
  getAudibleMusicTrackTextId() {}
  playEndCreditsMusic(play_boolean) {}
  skipRadioForward() {}
  freezeRadioStation(radioStation_string) {}
  unfreezeRadioStation(radioStation_string) {}
  setRadioAutoUnfreeze(toggle_boolean) {}
  setInitialPlayerStation(radioStation_string) {}
  setUserRadioControlEnabled(toggle_boolean) {}
  setRadioTrack(radioStation_string, radioTrack_string) {}
  setRadioTrackMix(radioStationName_string, mixName_string, p2_number) {}
  setVehicleRadioLoud(vehicle_number, toggle_boolean) {}
  isVehicleRadioLoud(vehicle_number) {}
  setMobileRadioEnabledDuringGameplay(toggle_boolean) {}
  doesPlayerVehHaveRadio() {}
  isPlayerVehRadioEnable() {}
  setVehicleRadioEnabled(vehicle_number, toggle_boolean) {}
  _0xDA07819E452FFE8F(p0_number) {}
  setCustomRadioTrackList(
    radioStation_string,
    trackListName_string,
    p2_boolean
  ) {}
  clearCustomRadioTrackList(radioStation_string) {}
  getNumUnlockedRadioStations() {}
  findRadioStationIndex(station_number) {}
  setRadioStationMusicOnly(radioStation_string, toggle_boolean) {}
  setRadioFrontendFadeTime(p0_number) {}
  unlockRadioStationTrackList(radioStation_string, trackListName_string) {}
  updateLsur(enableMixes_boolean) {}
  lockRadioStation(radioStationName_string, toggle_boolean) {}
  _0xC64A06D939F826F5(p0_number, p1_number, p2_number) {}
  _0x3E65CDE5215832C1(radioStationName_string) {}
  _0x34D66BC058019CE0(radioStationName_string) {}
  _0xF3365489E0DD50F9(vehicle_number, toggle_boolean) {}
  setAmbientZoneState(zoneName_string, p1_boolean, p2_boolean) {}
  clearAmbientZoneState(zoneName_string, p1_boolean) {}
  setAmbientZoneListState(p0_number, p1_boolean, p2_boolean) {}
  clearAmbientZoneListState(p0_number, p1_boolean) {}
  setAmbientZoneStatePersistent(ambientZone_string, p1_boolean, p2_boolean) {}
  setAmbientZoneListStatePersistent(
    ambientZone_string,
    p1_boolean,
    p2_boolean
  ) {}
  isAmbientZoneEnabled(ambientZone_string) {}
  _0x5D2BFAAB8D956E0E() {}
  setCutsceneAudioOverride(name_string) {}
  setVariableOnCutsceneAudio(variableName_string, value_number) {}
  playPoliceReport(name_string, p1_number) {}
  cancelCurrentPoliceReport() {}
  blipSiren(vehicle_number) {}
  overrideVehHorn(vehicle_number, mute_boolean, p2_number) {}
  isHornActive(vehicle_number) {}
  setAggressiveHorns(toggle_boolean) {}
  _0x02E93C796ABD3A97(p0_boolean) {}
  _0x58BB377BEC7CD5F4(p0_boolean, p1_boolean) {}
  _0x9BD7BD55E4533183(p0_number, p1_number, p2_number) {}
  isStreamPlaying() {}
  getStreamPlayTime() {}
  loadStream(streamName_string, soundSet_string) {}
  loadStreamWithStartOffset(
    streamName_string,
    startOffset_number,
    soundSet_string
  ) {}
  playStreamFromPed(ped_number) {}
  playStreamFromVehicle(vehicle_number) {}
  playStreamFromObject(object_number) {}
  playStreamFrontend() {}
  playStreamFromPosition(x_number, y_number, z_number) {}
  stopStream() {}
  stopPedSpeaking(ped_number, shaking_boolean) {}
  _0xF8AD2EED7C47E8FE(ped_number, p1_boolean, p2_boolean) {}
  disablePedPainAudio(ped_number, toggle_boolean) {}
  isAmbientSpeechDisabled(ped_number) {}
  _0xA8A7D434AFB4B97B(p0_string, p1_number) {}
  _0x2ACABED337622DF2(p0_string) {}
  setSirenWithNoDriver(vehicle_number, toggle_boolean) {}
  _0x66C3FB05206041BA(p0_number) {}
  soundVehicleHornThisFrame(vehicle_number) {}
  setHornEnabled(vehicle_number, toggle_boolean) {}
  setAudioVehiclePriority(vehicle_number, p1_number) {}
  _0x9D3AF56E94C9AE98(vehicle_number, p1_number) {}
  useSirenAsHorn(vehicle_number, toggle_boolean) {}
  forceVehicleEngineAudio(vehicle_number, audioName_string) {}
  _0xCA4CEA6AE0000A7E(p0_number) {}
  _0xF1F8157B8C3F171C(vehicle_number, p1_string, p2_string) {}
  _0xD2DCCD8E16E20997(p0_number) {}
  _0x5DB8010EE71FDEF2(vehicle_number) {}
  setVehicleAudioEngineDamageFactor(vehicle_number, damageFactor_number) {}
  _0x01BB4D577D38BD9E(vehicle_number, p1_number) {}
  _0x1C073274E065C6D2(vehicle_number, toggle_boolean) {}
  enableVehicleExhaustPops(vehicle_number, toggle_boolean) {}
  setVehicleBoostActive(vehicle_number, toggle_boolean) {}
  _0x6FDDAD856E36988A(vehicle_number, toggle_boolean) {}
  setScriptUpdateDoorAudio(doorHash_number, toggle_boolean) {}
  playVehicleDoorOpenSound(vehicle_number, doorIndex_number) {}
  playVehicleDoorCloseSound(vehicle_number, doorIndex_number) {}
  enableStallWarningSounds(vehicle_number, toggle_boolean) {}
  isGameInControlOfMusic() {}
  setGpsActive(active_boolean) {}
  playMissionCompleteAudio(audioName_string) {}
  isMissionCompletePlaying() {}
  isMissionCompleteReadyForUi() {}
  blockDeathJingle(toggle_boolean) {}
  startAudioScene(scene_string) {}
  stopAudioScene(scene_string) {}
  stopAudioScenes() {}
  isAudioSceneActive(scene_string) {}
  setAudioSceneVariable(scene_string, variable_string, value_number) {}
  _0xA5F377B175A699C5(p0_number) {}
  addEntityToAudioMixGroup(entity_number, groupName_string, p2_number) {}
  removeEntityFromAudioMixGroup(entity_number, p1_number) {}
  audioIsScriptedMusicPlaying() {}
  _0x2DD39BF3E2F9C47F() {}
  prepareMusicEvent(eventName_string) {}
  cancelMusicEvent(eventName_string) {}
  triggerMusicEvent(eventName_string) {}
  isMusicOneshotPlaying() {}
  getMusicPlaytime() {}
  _0x159B7318403A1CD8(p0_number) {}
  recordBrokenGlass(x_number, y_number, z_number, radius_number) {}
  clearAllBrokenGlass() {}
  _0x70B8EC8FC108A634(p0_boolean, p1_number) {}
  _0x149AEE66F0CB3A99(p0_number, p1_number) {}
  _0x8BF907833BE275DE(p0_number, p1_number) {}
  _0x062D5EAD4DA2FA6A() {}
  prepareAlarm(alarmName_string) {}
  startAlarm(alarmName_string, p2_boolean) {}
  stopAlarm(alarmName_string, toggle_boolean) {}
  stopAllAlarms(stop_boolean) {}
  isAlarmPlaying(alarmName_string) {}
  getVehicleDefaultHorn(vehicle_number) {}
  getVehicleDefaultHornIgnoreMods(vehicle_number) {}
  resetPedAudioFlags(ped_number) {}
  _0x0653B735BFBDFE87(ped_number, toggle_boolean) {}
  _0x29DA3CA8D8B2692D(ped_number, toggle_boolean) {}
  overridePlayerGroundMaterial(hash_number, toggle_boolean) {}
  _0xBF4DC1784BE94DFA(ped_number, p1_boolean, hash_number) {}
  overrideMicrophoneSettings(hash_number, toggle_boolean) {}
  freezeMicrophone() {}
  distantCopCarSirens(value_boolean) {}
  _0x43FA0DFC5DF87815(vehicle_number, p1_boolean) {}
  _0xB81CF134AEB56FFB() {}
  setAudioFlag(flagName_string, toggle_boolean) {}
  prepareSynchronizedAudioEvent(p0_string, p1_number) {}
  prepareSynchronizedAudioEventForScene(p0_number, p1_number) {}
  playSynchronizedAudioEvent(p0_number) {}
  stopSynchronizedAudioEvent(p0_number) {}
  _0xC8EDE9BDBCCBA6D4(p0_number, p1_number, p2_number, p3_number) {}
  setSynchronizedAudioEventPositionThisFrame(p0_string, p1_number) {}
  setAudioSpecialEffectMode(mode_number) {}
  setPortalSettingsOverride(p0_string, p1_string) {}
  removePortalSettingsOverride(p0_string) {}
  _0xE4E6DD5566D28C82() {}
  _0x3A48AB4445D499BE() {}
  setPedTalk(ped_number) {}
  _0x0150B6FF25A9E2E5() {}
  _0xBEF34B1D9624D5DD(p0_boolean) {}
  stopCutsceneAudio() {}
  hasMultiplayerAudioDataLoaded() {}
  hasMultiplayerAudioDataUnloaded() {}
  getVehicleDefaultHornVariation(vehicle_number) {}
  setVehicleHornVariation(vehicle_number, value_number) {}
  //Category: Brain
  addScriptToRandomPed(name_string, model_number, p2_number, p3_number) {}
  registerObjectScriptBrain(
    scriptName_string,
    modelHash_number,
    p2_number,
    activationRange_number,
    p4_number,
    p5_number
  ) {}
  isObjectWithinBrainActivationRange(object_number) {}
  registerWorldPointScriptBrain(
    scriptName_string,
    activationRange_number,
    p2_number
  ) {}
  isWorldPointWithinBrainActivationRange() {}
  enableScriptBrainSet(brainSet_number) {}
  disableScriptBrainSet(brainSet_number) {}
  _0x0B40ED49D7D6FF84() {}
  _0x4D953DF78EBF8158() {}
  _0x6D6840CEE8845831(action_string) {}
  _0x6E91B04E08773030(action_string) {}
  //Category: Cam
  renderScriptCams(
    render_boolean,
    ease_boolean,
    easeTime_number,
    p3_boolean,
    p4_boolean,
    p5_number
  ) {}
  renderFirstPersonCam(render_boolean, p1_number, p2_number, p3_number) {}
  createCam(camName_string, p1_boolean) {}
  createCamWithParams(
    camName_string,
    posX_number,
    posY_number,
    posZ_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    fov_number,
    p8_boolean,
    p9_number
  ) {}
  createCamera(camHash_number, p1_boolean) {}
  createCameraWithParams(
    camHash_number,
    posX_number,
    posY_number,
    posZ_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    fov_number,
    p8_boolean,
    p9_number
  ) {}
  destroyCam(cam_number, thisScriptCheck_boolean) {}
  destroyAllCams(thisScriptCheck_boolean) {}
  doesCamExist(cam_number) {}
  setCamActive(cam_number, active_boolean) {}
  isCamActive(cam_number) {}
  isCamRendering(cam_number) {}
  getRenderingCam() {}
  getCamCoord(cam_number) {}
  getCamRot(cam_number, rotationOrder_number) {}
  getCamFov(cam_number) {}
  getCamNearClip(cam_number) {}
  getCamFarClip(cam_number) {}
  getCamFarDof(cam_number) {}
  setCamParams(
    cam_number,
    posX_number,
    posY_number,
    posZ_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    fieldOfView_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number
  ) {}
  setCamCoord(cam_number, posX_number, posY_number, posZ_number) {}
  setCamRot(
    cam_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    rotationOrder_number
  ) {}
  setCamFov(cam_number, fieldOfView_number) {}
  setCamNearClip(cam_number, nearClip_number) {}
  setCamFarClip(cam_number, farClip_number) {}
  setCamMotionBlurStrength(cam_number, strength_number) {}
  setCamNearDof(cam_number, nearDOF_number) {}
  setCamFarDof(cam_number, farDOF_number) {}
  setCamDofStrength(cam_number, dofStrength_number) {}
  setCamDofPlanes(cam_number, p1_number, p2_number, p3_number, p4_number) {}
  setCamUseShallowDofMode(cam_number, toggle_boolean) {}
  setUseHiDof() {}
  _0xF55E4046F6F831DC(p0_number, p1_number) {}
  _0xE111A7C0D200CBC5(p0_number, p1_number) {}
  setCamDofFnumberOfLens(camera_number, p1_number) {}
  setCamDofFocalLengthMultiplier(p0_number, p1_number) {}
  setCamDofFocusDistanceBias(camera_number, p1_number) {}
  setCamDofMaxNearInFocusDistance(camera_number, p1_number) {}
  setCamDofMaxNearInFocusDistanceBlendLevel(camera_number, p1_number) {}
  attachCamToEntity(
    cam_number,
    entity_number,
    xOffset_number,
    yOffset_number,
    zOffset_number,
    isRelative_boolean
  ) {}
  attachCamToPedBone(
    cam_number,
    ped_number,
    boneIndex_number,
    x_number,
    y_number,
    z_number,
    heading_boolean
  ) {}
  attachCamToPedBone2(
    cam_number,
    ped_number,
    boneIndex_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_boolean
  ) {}
  attachCamToVehicleBone(
    cam_number,
    vehicle_number,
    boneIndex_number,
    p3_boolean,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_boolean
  ) {}
  detachCam(cam_number) {}
  setCamInheritRollVehicle(cam_number, p1_boolean) {}
  pointCamAtCoord(cam_number, x_number, y_number, z_number) {}
  pointCamAtEntity(
    cam_number,
    entity_number,
    p2_number,
    p3_number,
    p4_number,
    p5_boolean
  ) {}
  pointCamAtPedBone(
    cam_number,
    ped_number,
    boneIndex_number,
    x_number,
    y_number,
    z_number,
    p6_boolean
  ) {}
  stopCamPointing(cam_number) {}
  setCamAffectsAiming(cam_number, toggle_boolean) {}
  _0x661B5C8654ADD825(cam_number, p1_boolean) {}
  _0xA2767257A320FC82(p0_number, p1_boolean) {}
  _0x271017B9BA825366(p0_number, p1_boolean) {}
  setCamDebugName(camera_number, name_string) {}
  addCamSplineNode(
    camera_number,
    x_number,
    y_number,
    z_number,
    xRot_number,
    yRot_number,
    zRot_number,
    length_number,
    p8_number,
    p9_number
  ) {}
  addCamSplineNodeUsingCameraFrame(
    cam_number,
    cam2_number,
    p2_number,
    p3_number
  ) {}
  addCamSplineNodeUsingCamera(cam_number, cam2_number, p2_number, p3_number) {}
  addCamSplineNodeUsingGameplayFrame(cam_number, p1_number, p2_number) {}
  setCamSplinePhase(cam_number, p1_number) {}
  getCamSplinePhase(cam_number) {}
  getCamSplineNodePhase(cam_number) {}
  setCamSplineDuration(cam_number, timeDuration_number) {}
  setCamSplineSmoothingStyle(cam_number, smoothingStyle_number) {}
  getCamSplineNodeIndex(cam_number) {}
  setCamSplineNodeEase(cam_number, p1_number, p2_number, p3_number) {}
  setCamSplineNodeVelocityScale(cam_number, p1_number, scale_number) {}
  overrideCamSplineVelocity(cam_number, p1_number, p2_number, p3_number) {}
  overrideCamSplineMotionBlur(cam_number, p1_number, p2_number, p3_number) {}
  setCamSplineNodeExtraFlags(cam_number, p1_number, flags_number) {}
  isCamSplinePaused(p0_number) {}
  setCamActiveWithInterp(
    camTo_number,
    camFrom_number,
    duration_number,
    easeLocation_number,
    easeRotation_number
  ) {}
  isCamInterpolating(cam_number) {}
  shakeCam(cam_number, type_string, amplitude_number) {}
  animatedShakeCam(
    cam_number,
    p1_string,
    p2_string,
    p3_string,
    amplitude_number
  ) {}
  isCamShaking(cam_number) {}
  setCamShakeAmplitude(cam_number, amplitude_number) {}
  stopCamShaking(cam_number, p1_boolean) {}
  shakeScriptGlobal(p0_string, p1_number) {}
  animatedShakeScriptGlobal(p0_string, p1_string, p2_string, p3_number) {}
  isScriptGlobalShaking() {}
  stopScriptGlobalShaking(p0_boolean) {}
  playCamAnim(
    cam_number,
    animName_string,
    animDictionary_string,
    x_number,
    y_number,
    z_number,
    xRot_number,
    yRot_number,
    zRot_number,
    p9_boolean,
    p10_number
  ) {}
  isCamPlayingAnim(cam_number, animName_string, animDictionary_string) {}
  setCamAnimCurrentPhase(cam_number, phase_number) {}
  getCamAnimCurrentPhase(cam_number) {}
  playSynchronizedCamAnim(
    p0_number,
    p1_number,
    animName_string,
    animDictionary_string
  ) {}
  setFlyCamHorizontalResponse(cam_number, p1_number, p2_number, p3_number) {}
  setFlyCamVerticalSpeedMultiplier(
    cam_number,
    p1_number,
    p2_number,
    p3_number
  ) {}
  setFlyCamMaxHeight(cam_number, height_number) {}
  setFlyCamCoordAndConstrain(cam_number, x_number, y_number, z_number) {}
  _0xC8B5C4A79CC18B94(cam_number) {}
  _0x5C48A1D6E3B33179(cam_number) {}
  isScreenFadedOut() {}
  isScreenFadedIn() {}
  isScreenFadingOut() {}
  isScreenFadingIn() {}
  doScreenFadeIn(duration_number) {}
  doScreenFadeOut(duration_number) {}
  setWidescreenBorders(p0_boolean, p1_number) {}
  _0x4879E4FE39074CDF() {}
  getGameplayCamCoord() {}
  getGameplayCamRot(rotationOrder_number) {}
  getGameplayCamFov() {}
  _0x487A82C650EB7799(p0_number) {}
  _0x0225778816FDC28C(p0_number) {}
  getGameplayCamRelativeHeading() {}
  setGameplayCamRelativeHeading(heading_number) {}
  getGameplayCamRelativePitch() {}
  setGameplayCamRelativePitch(x_number, Value2_number) {}
  setGameplayCamRelativeRotation(p0_number, p1_number, p2_number) {}
  _0x28B022A17B068A3A(p0_number, p1_number) {}
  setGameplayCamRawYaw(yaw_number, p1_number) {}
  setGameplayCamRawPitch(pitch_number) {}
  _0x469F2ECDEC046337(p0_boolean) {}
  shakeGameplayCam(shakeName_string, intensity_number) {}
  isGameplayCamShaking() {}
  setGameplayCamShakeAmplitude(amplitude_number) {}
  stopGameplayCamShaking(p0_boolean) {}
  _0x8BBACBF51DA047A8(p0_number) {}
  isGameplayCamRendering() {}
  _0x3044240D2E0FA842() {}
  _0x705A276EBFF3133D() {}
  _0xDB90C6CCA48940F1(p0_boolean) {}
  enableCrosshairThisFrame() {}
  isGameplayCamLookingBehind() {}
  _0x2AED6301F67007D5(entity_number) {}
  _0x49482F9FCD825AAA(entity_number) {}
  _0xFD3151CD37EA2245(entity_number) {}
  _0xB1381B97F70C7B30() {}
  _0xDD79DF9F4D26E1C9() {}
  isSphereVisible(x_number, y_number, z_number, radius_number) {}
  isFollowPedCamActive() {}
  setFollowPedCamThisUpdate(camName_string, p1_number) {}
  _0x271401846BD26E92(p0_boolean, p1_boolean) {}
  _0xC8391C309684595A() {}
  clampGameplayCamYaw(minimum_number, maximum_number) {}
  clampGameplayCamPitch(minimum_number, maximum_number) {}
  animateGameplayCamZoom(p0_number, distance_number) {}
  _0xE9EA16D6E54CDCA4(p0_number, p1_number) {}
  disableFirstPersonCamThisFrame() {}
  _0x59424BD75174C9B1() {}
  _0x9F97DA93681F87EA() {}
  getFollowPedCamZoomLevel() {}
  getFollowPedCamViewMode() {}
  setFollowPedCamViewMode(viewMode_number) {}
  isFollowVehicleCamActive() {}
  _0x91EF6EE6419E5B97(p0_boolean) {}
  _0x9DFE13ECDC1EC196(p0_boolean, p1_boolean) {}
  _0x79C0E43EB9B944E2(hash_number) {}
  getFollowVehicleCamZoomLevel() {}
  setFollowVehicleCamZoomLevel(zoomLevel_number) {}
  getFollowVehicleCamViewMode() {}
  setFollowVehicleCamViewMode(viewMode_number) {}
  _0xEE778F8C7E1142E2(p0_number) {}
  _0x2A2173E46DAECD12(p0_number, p1_number) {}
  _0x19CAFA3C87F7C2FF() {}
  useStuntCameraThisFrame() {}
  _0x425A920FDB9A0DDA(camName_string) {}
  _0x0AA27680A0BD43FA() {}
  _0x5C90CAB09951A12F(p0_number) {}
  isAimCamActive() {}
  isAimCamThirdPersonActive() {}
  isFirstPersonAimCamActive() {}
  disableAimCamThisUpdate() {}
  getFirstPersonAimCamZoomFactor() {}
  setFirstPersonAimCamZoomFactor(p0_number) {}
  _0xCED08CBE8EBB97C7(p0_number, p1_number) {}
  _0x2F7F2B26DD3F18EE(p0_number, p1_number) {}
  setFirstPersonCamPitchRange(p0_number, p1_number) {}
  setFirstPersonCamNearClip(p0_number) {}
  setThirdPersonAimCamNearClip(p0_number) {}
  _0x4008EDF7D6E48175(p0_boolean) {}
  _0x380B4968D1E09E55() {}
  getFinalRenderedCamCoord() {}
  getFinalRenderedCamRot(rotationOrder_number) {}
  getFinalRenderedInWhenFriendlyRot(p0_number, p1_number) {}
  getFinalRenderedCamFov() {}
  getFinalRenderedInWhenFriendlyFov(p0_number) {}
  getFinalRenderedCamNearClip() {}
  getFinalRenderedCamFarClip() {}
  getFinalRenderedCamNearDof() {}
  getFinalRenderedCamFarDof() {}
  getFinalRenderedCamMotionBlurStrength() {}
  setGameplayCoordHint(
    x_number,
    y_number,
    z_number,
    duration_number,
    blendOutDuration_number,
    blendInDuration_number,
    unk_number
  ) {}
  setGameplayPedHint(
    p0_number,
    x1_number,
    y1_number,
    z1_number,
    p4_boolean,
    p5_number,
    p6_number,
    p7_number
  ) {}
  setGameplayVehicleHint(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_boolean,
    p5_number,
    p6_number,
    p7_number
  ) {}
  setGameplayObjectHint(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_boolean,
    p5_number,
    p6_number,
    p7_number
  ) {}
  setGameplayEntityHint(
    entity_number,
    xOffset_number,
    yOffset_number,
    zOffset_number,
    p4_boolean,
    p5_number,
    p6_number,
    p7_number,
    p8_number
  ) {}
  isGameplayHintActive() {}
  stopGameplayHint(p0_boolean) {}
  _0xCCD078C2665D2973(p0_boolean) {}
  _0x247ACBC4ABBC9D1C(p0_boolean) {}
  _0xBF72910D0F26F025() {}
  setGameplayHintFov(FOV_number) {}
  setGameplayHintAnimOffsetz(p0_number) {}
  setGameplayHintAngle(p0_number) {}
  setGameplayHintAnimOffsetx(p0_number) {}
  setGameplayHintAnimOffsety(p0_number) {}
  setGameplayHintAnimCloseup(p0_boolean) {}
  setCinematicButtonActive(p0_boolean) {}
  isCinematicCamRendering() {}
  shakeCinematicCam(p0_string, p1_number) {}
  isCinematicCamShaking() {}
  setCinematicCamShakeAmplitude(p0_number) {}
  stopCinematicCamShaking(p0_boolean) {}
  disableVehicleFirstPersonCamThisFrame() {}
  _0x62ECFCFDEE7885D6() {}
  _0x9E4CFFF989258472() {}
  invalidateIdleCam() {}
  _0xCA9D2AA3E326D720() {}
  isInVehicleCamDisabled() {}
  createCinematicShot(p0_number, p1_number, p2_number, entity_number) {}
  isCinematicShotActive(p0_number) {}
  stopCinematicShot(p0_number) {}
  _0xA41BCD7213805AAC(p0_boolean) {}
  _0xDC9DA9E8789F5246() {}
  setCinematicModeActive(p0_boolean) {}
  _0x1F2300CB7FA7B7F6() {}
  _0x17FCA7199A530203() {}
  _0xD7360051C885628B() {}
  _0xF5F1E89A970B7796() {}
  _0x7B8A361C1813FBEF() {}
  stopCutsceneCamShaking() {}
  _0x324C5AA411DA7737(p0_number) {}
  _0x12DED8CA53D47EA5(p0_number) {}
  getFocusPedOnScreen(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number
  ) {}
  _0x5A43C76F7FC7BA5F() {}
  setCamEffect(p0_number) {}
  _0x5C41E6BABC9E2112(p0_number) {}
  setGameplayCamVehicleCamera(vehicleName_string) {}
  setGameplayCamVehicleCameraName(p0_number) {}
  _0xEAF0FA793D05C592() {}
  _0x62374889A4D59F72() {}
  replayFreeCamGetMaxRange() {}
  //Category: Clock
  setClockTime(hour_number, minute_number, second_number) {}
  pauseClock(toggle_boolean) {}
  advanceClockTimeTo(hour_number, minute_number, second_number) {}
  addToClockTime(hours_number, minutes_number, seconds_number) {}
  getClockHours() {}
  getClockMinutes() {}
  getClockSeconds() {}
  setClockDate(day_number, month_number, year_number) {}
  getClockDayOfWeek() {}
  getClockDayOfMonth() {}
  getClockMonth() {}
  getClockYear() {}
  getMillisecondsPerGameMinute() {}
  getPosixTime(
    year_number,
    month_number,
    day_number,
    hour_number,
    minute_number,
    second_number
  ) {}
  getUtcTime(
    year_number,
    month_number,
    day_number,
    hour_number,
    minute_number,
    second_number
  ) {}
  getLocalTime(
    year_number,
    month_number,
    day_number,
    hour_number,
    minute_number,
    second_number
  ) {}
  //Category: Cutscene
  requestCutscene(cutsceneName_string, flags_number) {}
  requestCutsceneWithPlaybackList(
    cutsceneName_string,
    playbackFlags_number,
    flags_number
  ) {}
  removeCutscene() {}
  hasCutsceneLoaded() {}
  hasThisCutsceneLoaded(cutsceneName_string) {}
  _0x8D9DF6ECA8768583(threadId_number) {}
  canRequestAssetsForCutsceneEntity() {}
  isCutscenePlaybackFlagSet(flag_number) {}
  setCutsceneEntityStreamingFlags(
    cutsceneEntName_string,
    p1_number,
    p2_number
  ) {}
  requestCutFile(cutsceneName_string) {}
  hasCutFileLoaded(cutsceneName_string) {}
  removeCutFile(cutsceneName_string) {}
  getCutFileNumSections(cutsceneName_string) {}
  startCutscene(flags_number) {}
  startCutsceneAtCoords(x_number, y_number, z_number, flags_number) {}
  stopCutscene(p0_boolean) {}
  stopCutsceneImmediately() {}
  setCutsceneOrigin(x_number, y_number, z_number, p3_number, p4_number) {}
  _0x011883F41211432A(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    p6_number
  ) {}
  getCutsceneTime() {}
  getCutsceneTotalDuration() {}
  _0x971D7B15BCDBEF99() {}
  wasCutsceneSkipped() {}
  hasCutsceneFinished() {}
  isCutsceneActive() {}
  isCutscenePlaying() {}
  getCutsceneSectionPlaying() {}
  getEntityIndexOfCutsceneEntity(cutsceneEntName_string, modelHash_number) {}
  _0x583DF8E3D4AFBD98() {}
  _0x4CEBC1ED31E8925E(cutsceneName_string) {}
  _0x4FCD976DA686580C(p0_number) {}
  registerEntityForCutscene(
    cutscenePed_number,
    cutsceneEntName_string,
    p2_number,
    modelHash_number,
    p4_number
  ) {}
  getEntityIndexOfRegisteredEntity(cutsceneEntName_string, modelHash_number) {}
  _0x7F96F23FA9B73327(modelHash_number) {}
  setCutsceneTriggerArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  canSetEnterStateForRegisteredEntity(
    cutsceneEntName_string,
    modelHash_number
  ) {}
  canSetExitStateForRegisteredEntity(
    cutsceneEntName_string,
    modelHash_number
  ) {}
  canSetExitStateForCamera(p0_boolean) {}
  _0xC61B86C9F61EB404(toggle_boolean) {}
  setCutsceneFadeValues(p0_boolean, p1_boolean, p2_boolean, p3_boolean) {}
  _0x20746F7B1032A3C7(p0_boolean, p1_boolean, p2_boolean, p3_boolean) {}
  _0x06EE9048FD080382(p0_boolean) {}
  _0xA0FE76168A189DDB() {}
  _0x2F137B508DE238F2(p0_boolean) {}
  _0xE36A98D8AB3D3C66(p0_boolean) {}
  _0x5EDEF0CF8C1DAB3C() {}
  _0x41FAA8FB2ECE8720(p0_boolean) {}
  registerSynchronisedScriptSpeech() {}
  setCutscenePedComponentVariation(
    cutsceneEntName_string,
    p1_number,
    p2_number,
    p3_number,
    modelHash_number
  ) {}
  setCutscenePedComponentVariationFromPed(
    cutsceneEntName_string,
    ped_number,
    modelHash_number
  ) {}
  doesCutsceneEntityExist(cutsceneEntName_string, modelHash_number) {}
  setCutscenePedPropVariation(
    cutsceneEntName_string,
    p1_number,
    p2_number,
    p3_number,
    modelHash_number
  ) {}
  _0x708BDD8CD795B043() {}
  //Category: Datafile
  datafileWatchRequestId(id_number) {}
  datafileClearWatchList() {}
  datafileIsValidRequestId(index_number) {}
  datafileHasLoadedFileData(p0_number) {}
  datafileHasValidFileData(p0_number) {}
  datafileSelectActiveFile(p0_number) {}
  datafileDeleteRequestedFile(p0_number) {}
  ugcCreateContent(
    data_number,
    dataCount_number,
    contentName_string,
    description_string,
    tagsCsv_string,
    contentTypeName_string,
    publish_boolean
  ) {}
  ugcCreateMission(
    contentName_string,
    description_string,
    tagsCsv_string,
    contentTypeName_string,
    publish_boolean
  ) {}
  ugcUpdateContent(
    contentId_string,
    data_number,
    dataCount_number,
    contentName_string,
    description_string,
    tagsCsv_string,
    contentTypeName_string
  ) {}
  ugcUpdateMission(
    contentId_string,
    contentName_string,
    description_string,
    tagsCsv_string,
    contentTypeName_string
  ) {}
  ugcSetPlayerData(contentId_string, rating_number, contentTypeName_string) {}
  datafileSelectUgcData(p0_number) {}
  datafileSelectUgcStats(p0_number, p1_boolean) {}
  datafileSelectUgcPlayerData(p0_number) {}
  datafileSelectCreatorStats(p0_number) {}
  datafileLoadOfflineUgc(filename_string) {}
  datafileCreate() {}
  datafileDelete() {}
  datafileStoreMissionHeader() {}
  datafileFlushMissionHeader() {}
  datafileGetFileDict() {}
  datafileStartSaveToCloud(filename_string) {}
  datafileUpdateSaveToCloud(p0_boolean) {}
  datafileIsSavePending() {}
  objectValueAddBoolean(objectData_number, key_string, value_boolean) {}
  objectValueAddInteger(objectData_number, key_string, value_number) {}
  objectValueAddFloat(objectData_number, key_string, value_number) {}
  objectValueAddString(objectData_number, key_string, value_string) {}
  objectValueAddVector3(
    objectData_number,
    key_string,
    valueX_number,
    valueY_number,
    valueZ_number
  ) {}
  objectValueAddObject(objectData_number, key_string) {}
  objectValueAddArray(objectData_number, key_string) {}
  objectValueGetBoolean(objectData_number, key_string) {}
  objectValueGetInteger(objectData_number, key_string) {}
  objectValueGetFloat(objectData_number, key_string) {}
  objectValueGetString(objectData_number, key_string) {}
  objectValueGetVector3(objectData_number, key_string) {}
  objectValueGetObject(objectData_number, key_string) {}
  objectValueGetArray(objectData_number, key_string) {}
  objectValueGetType(objectData_number, key_string) {}
  arrayValueAddBoolean(arrayData_number, value_boolean) {}
  arrayValueAddInteger(arrayData_number, value_number) {}
  arrayValueAddFloat(arrayData_number, value_number) {}
  arrayValueAddString(arrayData_number, value_string) {}
  arrayValueAddVector3(
    arrayData_number,
    valueX_number,
    valueY_number,
    valueZ_number
  ) {}
  arrayValueAddObject(arrayData_number) {}
  arrayValueGetBoolean(arrayData_number, arrayIndex_number) {}
  arrayValueGetInteger(arrayData_number, arrayIndex_number) {}
  arrayValueGetFloat(arrayData_number, arrayIndex_number) {}
  arrayValueGetString(arrayData_number, arrayIndex_number) {}
  arrayValueGetVector3(arrayData_number, arrayIndex_number) {}
  arrayValueGetObject(arrayData_number, arrayIndex_number) {}
  arrayValueGetSize(arrayData_number) {}
  arrayValueGetType(arrayData_number, arrayIndex_number) {}
  //Category: Decorator
  decorSetTime(entity_number, propertyName_string, timestamp_number) {}
  decorSetBool(entity_number, propertyName_string, value_boolean) {}
  decorSetFloat(entity_number, propertyName_string, value_number) {}
  decorSetInt(entity_number, propertyName_string, value_number) {}
  decorGetBool(entity_number, propertyName_string) {}
  decorGetFloat(entity_number, propertyName_string) {}
  decorGetInt(entity_number, propertyName_string) {}
  decorExistOn(entity_number, propertyName_string) {}
  decorRemove(entity_number, propertyName_string) {}
  decorRegister(propertyName_string, type_number) {}
  decorIsRegisteredAsType(propertyName_string, type_number) {}
  decorRegisterLock() {}
  //Category: Dlc
  _0x241FCA5B1AA14F75() {}
  isDlcPresent(dlcHash_number) {}
  _0xF2E07819EF1A5289() {}
  _0x9489659372A81585() {}
  _0xA213B11DFF526300() {}
  getExtraContentPackHasBeenInstalled() {}
  getIsLoadingScreenActive() {}
  _0xC4637A6D03C24CC3() {}
  hasCloudRequestsFinished(p0_boolean, unused_number) {}
  onEnterSp() {}
  onEnterMp() {}
  //Category: Entity
  doesEntityExist(entity_number) {}
  doesEntityBelongToThisScript(entity_number, p1_boolean) {}
  doesEntityHaveDrawable(entity_number) {}
  doesEntityHavePhysics(entity_number) {}
  hasEntityAnimFinished(
    entity_number,
    animDict_string,
    animName_string,
    p3_number
  ) {}
  hasEntityBeenDamagedByAnyObject(entity_number) {}
  hasEntityBeenDamagedByAnyPed(entity_number) {}
  hasEntityBeenDamagedByAnyVehicle(entity_number) {}
  hasEntityBeenDamagedByEntity(entity1_number, entity2_number, p2_boolean) {}
  hasEntityClearLosToEntity(entity1_number, entity2_number, traceType_number) {}
  hasEntityClearLosToEntityInFront(entity1_number, entity2_number) {}
  hasEntityCollidedWithAnything(entity_number) {}
  getLastMaterialHitByEntity(entity_number) {}
  getCollisionNormalOfLastHitForEntity(entity_number) {}
  forceEntityAiAndAnimationUpdate(entity_number) {}
  getEntityAnimCurrentTime(entity_number, animDict_string, animName_string) {}
  getEntityAnimTotalTime(entity_number, animDict_string, animName_string) {}
  getAnimDuration(animDict_string, animName_string) {}
  getEntityAttachedTo(entity_number) {}
  getEntityCoords(entity_number, alive_boolean) {}
  getEntityForwardVector(entity_number) {}
  getEntityForwardX(entity_number) {}
  getEntityForwardY(entity_number) {}
  getEntityHeading(entity_number) {}
  getEntityPhysicsHeading(entity_number) {}
  getEntityHealth(entity_number) {}
  getEntityMaxHealth(entity_number) {}
  setEntityMaxHealth(entity_number, value_number) {}
  getEntityHeight(
    entity_number,
    X_number,
    Y_number,
    Z_number,
    atTop_boolean,
    inWorldCoords_boolean
  ) {}
  getEntityHeightAboveGround(entity_number) {}
  getEntityMatrix(
    entity_number,
    rightVector_vector3Ptr,
    forwardVector_vector3Ptr,
    upVector_vector3Ptr,
    position_vector3Ptr
  ) {}
  getEntityModel(entity_number) {}
  getOffsetFromEntityGivenWorldCoords(
    entity_number,
    posX_number,
    posY_number,
    posZ_number
  ) {}
  getOffsetFromEntityInWorldCoords(
    entity_number,
    offsetX_number,
    offsetY_number,
    offsetZ_number
  ) {}
  getEntityPitch(entity_number) {}
  getEntityQuaternion(entity_number, x_number, y_number, z_number, w_number) {}
  getEntityRoll(entity_number) {}
  getEntityRotation(entity_number, rotationOrder_number) {}
  getEntityRotationVelocity(entity_number) {}
  getEntityScript(entity_number, script_number) {}
  getEntitySpeed(entity_number) {}
  getEntitySpeedVector(entity_number, relative_boolean) {}
  getEntityUprightValue(entity_number) {}
  getEntityVelocity(entity_number) {}
  getObjectIndexFromEntityIndex(entity_number) {}
  getPedIndexFromEntityIndex(entity_number) {}
  getVehicleIndexFromEntityIndex(entity_number) {}
  getWorldPositionOfEntityBone(entity_number, boneIndex_number) {}
  getNearestPlayerToEntity(entity_number) {}
  getNearestPlayerToEntityOnTeam(entity_number, team_number) {}
  getEntityType(entity_number) {}
  getEntityPopulationType(entity_number) {}
  isAnEntity(handle_number) {}
  isEntityAPed(entity_number) {}
  isEntityAMissionEntity(entity_number) {}
  isEntityAVehicle(entity_number) {}
  isEntityAnObject(entity_number) {}
  isEntityAtCoord(
    entity_number,
    xPos_number,
    yPos_number,
    zPos_number,
    xSize_number,
    ySize_number,
    zSize_number,
    p7_boolean,
    p8_boolean,
    p9_number
  ) {}
  isEntityAtEntity(
    entity1_number,
    entity2_number,
    xSize_number,
    ySize_number,
    zSize_number,
    p5_boolean,
    p6_boolean,
    p7_number
  ) {}
  isEntityAttached(entity_number) {}
  isEntityAttachedToAnyObject(entity_number) {}
  isEntityAttachedToAnyPed(entity_number) {}
  isEntityAttachedToAnyVehicle(entity_number) {}
  isEntityAttachedToEntity(from_number, to_number) {}
  isEntityDead(entity_number, p1_boolean) {}
  isEntityInAir(entity_number) {}
  isEntityInAngledArea(
    entity_number,
    originX_number,
    originY_number,
    originZ_number,
    edgeX_number,
    edgeY_number,
    edgeZ_number,
    angle_number,
    p8_boolean,
    p9_boolean,
    p10_number
  ) {}
  isEntityInArea(
    entity_number,
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    p7_boolean,
    p8_boolean,
    p9_number
  ) {}
  isEntityInZone(entity_number, zone_string) {}
  isEntityInWater(entity_number) {}
  getEntitySubmergedLevel(entity_number) {}
  _0x694E00132F2823ED(entity_number, toggle_boolean) {}
  isEntityOnScreen(entity_number) {}
  isEntityPlayingAnim(
    entity_number,
    animDict_string,
    animName_string,
    taskFlag_number
  ) {}
  isEntityStatic(entity_number) {}
  isEntityTouchingEntity(entity_number, targetEntity_number) {}
  isEntityTouchingModel(entity_number, modelHash_number) {}
  isEntityUpright(entity_number, angle_number) {}
  isEntityUpsidedown(entity_number) {}
  isEntityVisible(entity_number) {}
  isEntityVisibleToScript(entity_number) {}
  isEntityOccluded(entity_number) {}
  wouldEntityBeOccluded(
    entityModelHash_number,
    x_number,
    y_number,
    z_number,
    p4_boolean
  ) {}
  isEntityWaitingForWorldCollision(entity_number) {}
  applyForceToEntityCenterOfMass(
    entity_number,
    forceType_number,
    x_number,
    y_number,
    z_number,
    p5_boolean,
    isDirectionRel_boolean,
    isForceRel_boolean,
    p8_boolean
  ) {}
  applyForceToEntity(
    entity_number,
    forceFlags_number,
    x_number,
    y_number,
    z_number,
    offX_number,
    offY_number,
    offZ_number,
    boneIndex_number,
    isDirectionRel_boolean,
    ignoreUpVec_boolean,
    isForceRel_boolean,
    p12_boolean,
    p13_boolean
  ) {}
  attachEntityToEntity(
    entity1_number,
    entity2_number,
    boneIndex_number,
    xPos_number,
    yPos_number,
    zPos_number,
    xRot_number,
    yRot_number,
    zRot_number,
    p9_boolean,
    useSoftPinning_boolean,
    collision_boolean,
    isPed_boolean,
    vertexIndex_number,
    fixedRot_boolean
  ) {}
  attachEntityBoneToEntityBone(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  attachEntityBoneToEntityBonePhysically(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  attachEntityToEntityPhysically(
    entity1_number,
    entity2_number,
    boneIndex1_number,
    boneIndex2_number,
    xPos1_number,
    yPos1_number,
    zPos1_number,
    xPos2_number,
    yPos2_number,
    zPos2_number,
    xRot_number,
    yRot_number,
    zRot_number,
    breakForce_number,
    fixedRot_boolean,
    p15_boolean,
    collision_boolean,
    p17_boolean,
    p18_number
  ) {}
  processEntityAttachments(entity_number) {}
  getEntityBoneIndexByName(entity_number, boneName_string) {}
  clearEntityLastDamageEntity(entity_number) {}
  deleteEntity(entity_number) {}
  detachEntity(entity_number, p1_boolean, collision_boolean) {}
  freezeEntityPosition(entity_number, toggle_boolean) {}
  setEntitySomething(entity_number, toggle_boolean) {}
  playEntityAnim(
    entity_number,
    animName_string,
    animDict_string,
    p3_number,
    loop_boolean,
    stayInAnim_boolean,
    p6_boolean,
    delta_number,
    bitset_number
  ) {}
  playSynchronizedEntityAnim(
    entity_number,
    syncedScene_number,
    animation_string,
    propName_string,
    p4_number,
    p5_number,
    p6_number,
    p7_number
  ) {}
  playSynchronizedMapEntityAnim(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number
  ) {}
  stopSynchronizedMapEntityAnim(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  stopEntityAnim(
    entity_number,
    animation_string,
    animGroup_string,
    p3_number
  ) {}
  stopSynchronizedEntityAnim(entity_number, p1_number, p2_boolean) {}
  hasAnimEventFired(entity_number, actionHash_number) {}
  findAnimEventPhase(
    animDictionary_string,
    animName_string,
    p2_string,
    p3_number,
    p4_number
  ) {}
  setEntityAnimCurrentTime(
    entity_number,
    animDictionary_string,
    animName_string,
    time_number
  ) {}
  setEntityAnimSpeed(
    entity_number,
    animDictionary_string,
    animName_string,
    speedMultiplier_number
  ) {}
  setEntityAsMissionEntity(entity_number, p1_boolean, p2_boolean) {}
  setEntityAsNoLongerNeeded(entity_number) {}
  setPedAsNoLongerNeeded(ped_number) {}
  setVehicleAsNoLongerNeeded(vehicle_number) {}
  setObjectAsNoLongerNeeded(object_number) {}
  setEntityCanBeDamaged(entity_number, toggle_boolean) {}
  getEntityCanBeDamaged(entity_number) {}
  setEntityCanBeDamagedByRelationshipGroup(
    entity_number,
    bCanBeDamaged_boolean,
    relGroup_number
  ) {}
  _0x352E2B5CF420BF3B(p0_number, p1_number) {}
  setEntityCanBeTargetedWithoutLos(entity_number, toggle_boolean) {}
  setEntityCollision(entity_number, toggle_boolean, keepPhysics_boolean) {}
  getEntityCollisionDisabled(entity_number) {}
  setEntityCompletelyDisableCollision(entity_number, p1_boolean, p2_boolean) {}
  setEntityCoords(
    entity_number,
    xPos_number,
    yPos_number,
    zPos_number,
    xAxis_boolean,
    yAxis_boolean,
    zAxis_boolean,
    clearArea_boolean
  ) {}
  setEntityCoords2(
    entity_number,
    xPos_number,
    yPos_number,
    zPos_number,
    xAxis_boolean,
    yAxis_boolean,
    zAxis_boolean,
    clearArea_boolean
  ) {}
  setEntityCoordsNoOffset(
    entity_number,
    xPos_number,
    yPos_number,
    zPos_number,
    xAxis_boolean,
    yAxis_boolean,
    zAxis_boolean
  ) {}
  setEntityDynamic(entity_number, toggle_boolean) {}
  setEntityHeading(entity_number, heading_number) {}
  setEntityHealth(entity_number, health_number, p2_number) {}
  setEntityInvincible(entity_number, toggle_boolean) {}
  setEntityIsTargetPriority(entity_number, p1_boolean, p2_number) {}
  setEntityLights(entity_number, toggle_boolean) {}
  setEntityLoadCollisionFlag(entity_number, toggle_boolean, p2_number) {}
  hasCollisionLoadedAroundEntity(entity_number) {}
  setEntityMaxSpeed(entity_number, speed_number) {}
  setEntityOnlyDamagedByPlayer(entity_number, toggle_boolean) {}
  setEntityOnlyDamagedByRelationshipGroup(
    entity_number,
    p1_boolean,
    p2_number
  ) {}
  setEntityProofs(
    entity_number,
    bulletProof_boolean,
    fireProof_boolean,
    explosionProof_boolean,
    collisionProof_boolean,
    meleeProof_boolean,
    p6_boolean,
    p7_boolean,
    drownProof_boolean
  ) {}
  getEntityProofs(
    entity_number,
    bulletProof_boolean,
    fireProof_boolean,
    explosionProof_boolean,
    collisionProof_boolean,
    meleeProof_boolean,
    p6_boolean,
    p7_boolean,
    drownProof_boolean
  ) {}
  setEntityQuaternion(entity_number, x_number, y_number, z_number, w_number) {}
  setEntityRecordsCollisions(entity_number, toggle_boolean) {}
  setEntityRotation(
    entity_number,
    pitch_number,
    roll_number,
    yaw_number,
    rotationOrder_number,
    p5_boolean
  ) {}
  setEntityVisible(entity_number, toggle_boolean, unk_boolean) {}
  _0xC34BC448DA29F5E9(entity_number, toggle_boolean) {}
  _0xE66377CDDADA4810(entity_number, p1_boolean) {}
  setEntityVelocity(entity_number, x_number, y_number, z_number) {}
  setEntityHasGravity(entity_number, toggle_boolean) {}
  setEntityLodDist(entity_number, value_number) {}
  getEntityLodDist(entity_number) {}
  setEntityAlpha(entity_number, alphaLevel_number, skin_boolean) {}
  getEntityAlpha(entity_number) {}
  resetEntityAlpha(entity_number) {}
  _0x490861B88F4FD846(p0_number) {}
  _0xCEA7C8E1B48FF68C(p0_number, p1_number) {}
  _0x5C3B791D580E0BC2(entity_number, p1_number) {}
  setEntityAlwaysPrerender(entity_number, toggle_boolean) {}
  setEntityRenderScorched(entity_number, toggle_boolean) {}
  setEntityTrafficlightOverride(entity_number, state_number) {}
  _0x78E8E3A640178255(entity_number) {}
  createModelSwap(
    x_number,
    y_number,
    z_number,
    radius_number,
    originalModel_number,
    newModel_number,
    p6_boolean
  ) {}
  removeModelSwap(
    x_number,
    y_number,
    z_number,
    radius_number,
    originalModel_number,
    newModel_number,
    p6_boolean
  ) {}
  createModelHide(
    x_number,
    y_number,
    z_number,
    radius_number,
    model_number,
    p5_boolean
  ) {}
  createModelHideExcludingScriptObjects(
    x_number,
    y_number,
    z_number,
    radius_number,
    model_number,
    p5_boolean
  ) {}
  removeModelHide(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  createForcedObject(
    x_number,
    y_number,
    z_number,
    p3_number,
    modelHash_number,
    p5_boolean
  ) {}
  removeForcedObject(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  setEntityNoCollisionEntity(
    entity1_number,
    entity2_number,
    thisFrameOnly_boolean
  ) {}
  setEntityMotionBlur(entity_number, toggle_boolean) {}
  setCanAutoVaultOnEntity(entity_number, toggle_boolean) {}
  setCanClimbOnEntity(entity_number, toggle_boolean) {}
  _0xDC6F8601FAF2E893(entity_number, toggle_boolean) {}
  _0x2C2E3DC128F44309(entity_number, p1_boolean) {}
  _0x1A092BB0C3808B96(entity_number, p1_boolean) {}
  _0xCE6294A232D03786(p0_number, p1_number) {}
  _0x46F8696933A63C9B(p0_number, p1_number) {}
  _0xBD8D32550E5CEBFE(entity_number, boneIndex_number) {}
  _0xB328DCC3A3AA401B(p0_number) {}
  enableEntityUnk(entity_number) {}
  _0xB17BC6453F6CF5AC(p0_number, p1_number) {}
  _0x68B562E124CC0AEF(p0_number, p1_number) {}
  _0x36F32DE87082343E(p0_number, p1_number) {}
  getEntityPickup(entity_number, modelHash_number) {}
  _0xD7B80E7C3BEFC396(p0_number, p1_number) {}
  //Category: Event
  setDecisionMaker(ped_number, name_number) {}
  clearDecisionMakerEventResponse(name_number, type_number) {}
  blockDecisionMakerEvent(name_number, type_number) {}
  unblockDecisionMakerEvent(name_number, type_number) {}
  addShockingEventAtPosition(
    type_number,
    x_number,
    y_number,
    z_number,
    duration_number
  ) {}
  addShockingEventForEntity(type_number, entity_number, duration_number) {}
  isShockingEventInSphere(
    type_number,
    x_number,
    y_number,
    z_number,
    radius_number
  ) {}
  removeShockingEvent(event_number) {}
  removeAllShockingEvents(p0_boolean) {}
  removeShockingEventSpawnBlockingAreas() {}
  suppressShockingEventsNextFrame() {}
  suppressShockingEventTypeNextFrame(type_number) {}
  suppressAgitationEventsNextFrame() {}
  //Category: Files
  getNumDecorations(character_number) {}
  getTattooCollectionData(
    character_number,
    index_number,
    outComponent_memoryBuffer
  ) {}
  initShopPedComponent(outComponent_memoryBuffer) {}
  initShopPedProp(outProp_memoryBuffer) {}
  _0x50F457823CE6EB5F(p0_number, p1_number, p2_number, p3_number) {}
  getNumPropsFromOutfit(
    character_number,
    p1_number,
    p2_number,
    p3_boolean,
    p4_number,
    componentId_number
  ) {}
  getShopPedQueryComponent(componentId_number, outComponent_memoryBuffer) {}
  getShopPedComponent(componentHash_number, outComponent_memoryBuffer) {}
  getShopPedQueryProp(p0_number, p1_memoryBuffer) {}
  getShopPedProp(componentHash_number, outProp_memoryBuffer) {}
  getHashNameForComponent(
    entity_number,
    componentId_number,
    drawableVariant_number,
    textureVariant_number
  ) {}
  getHashNameForProp(
    entity_number,
    componentId_number,
    propIndex_number,
    propTextureIndex_number
  ) {}
  getItemVariantsCount(componentHash_number) {}
  getShopPedApparelVariantPropCount(propHash_number) {}
  getVariantComponent(
    componentHash_number,
    componentId_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  getVariantProp(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  getShopPedApparelForcedComponentCount(componentHash_number) {}
  getShopPedApparelForcedPropCount(p0_number) {}
  getForcedComponent(
    componentHash_number,
    componentId_number,
    nameHash_number,
    enumValue_number,
    componentType_number
  ) {}
  getForcedProp(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  isTagRestricted(
    componentHash_number,
    drawableSlotHash_number,
    componentId_number
  ) {}
  _0xF3FBE2D50A6A8C28(character_number, p1_boolean) {}
  getShopPedQueryOutfit(p0_number, outfit_memoryBuffer) {}
  getShopPedOutfit(p0_number, p1_memoryBuffer) {}
  getShopPedOutfitLocate(p0_number) {}
  getShopPedOutfitPropVariant(outfit_number, slot_number, item_number) {}
  getShopPedOutfitComponentVariant(outfit_number, slot_number, item_number) {}
  getNumDlcVehicles() {}
  getDlcVehicleModel(dlcVehicleIndex_number) {}
  getDlcVehicleData(dlcVehicleIndex_number, outData_memoryBuffer) {}
  getDlcVehicleFlags(dlcVehicleIndex_number) {}
  getNumDlcWeapons() {}
  getDlcWeaponData(dlcWeaponIndex_number, outData_memoryBuffer) {}
  getNumDlcWeaponComponents(dlcWeaponIndex_number) {}
  getDlcWeaponComponentData(
    dlcWeaponIndex_number,
    dlcWeapCompIndex_number,
    ComponentDataPtr_number
  ) {}
  isContentItemLocked(itemHash_number) {}
  isDlcVehicleMod(hash_number) {}
  getDlcVehicleModLockHash(hash_number) {}
  loadContentChangeSetGroup(hash_number) {}
  unloadContentChangeSetGroup(hash_number) {}
  //Category: Fire
  startScriptFire(
    X_number,
    Y_number,
    Z_number,
    maxChildren_number,
    isGasFire_boolean
  ) {}
  removeScriptFire(fireHandle_number) {}
  startEntityFire(entity_number) {}
  stopEntityFire(entity_number) {}
  isEntityOnFire(entity_number) {}
  getNumberOfFiresInRange(x_number, y_number, z_number, radius_number) {}
  setFireSpreadRate(p0_number) {}
  stopFireInRange(x_number, y_number, z_number, radius_number) {}
  getClosestFirePos(outPosition_vector3Ptr, x_number, y_number, z_number) {}
  addExplosion(
    x_number,
    y_number,
    z_number,
    explosionType_number,
    damageScale_number,
    isAudible_boolean,
    isInvisible_boolean,
    cameraShake_number,
    noDamage_boolean
  ) {}
  addOwnedExplosion(
    ped_number,
    x_number,
    y_number,
    z_number,
    explosionType_number,
    damageScale_number,
    isAudible_boolean,
    isInvisible_boolean,
    cameraShake_number
  ) {}
  addExplosionWithUserVfx(
    x_number,
    y_number,
    z_number,
    explosionType_number,
    explosionFx_number,
    damageScale_number,
    isAudible_boolean,
    isInvisible_boolean,
    cameraShake_number
  ) {}
  isExplosionInArea(
    explosionType_number,
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number
  ) {}
  isExplosionActiveInArea(
    explosionType_number,
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number
  ) {}
  isExplosionInSphere(
    explosionType_number,
    x_number,
    y_number,
    z_number,
    radius_number
  ) {}
  getEntityInsideExplosionSphere(
    explosionType_number,
    x_number,
    y_number,
    z_number,
    radius_number
  ) {}
  isExplosionInAngledArea(
    explosionType_number,
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    angle_number
  ) {}
  getEntityInsideExplosionArea(
    explosionType_number,
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    radius_number
  ) {}
  //Category: Graphics
  setDebugLinesAndSpheresDrawingActive(enabled_boolean) {}
  drawDebugLine(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number
  ) {}
  drawDebugLineWithTwoColours(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    r1_number,
    g1_number,
    b1_number,
    r2_number,
    g2_number,
    b2_number,
    alpha1_number,
    alpha2_number
  ) {}
  drawDebugSphere(
    x_number,
    y_number,
    z_number,
    radius_number,
    red_number,
    green_number,
    blue_number,
    alpha_number
  ) {}
  drawDebugBox(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number
  ) {}
  drawDebugCross(
    x_number,
    y_number,
    z_number,
    size_number,
    red_number,
    green_number,
    blue_number,
    alpha_number
  ) {}
  drawDebugText(
    text_string,
    x_number,
    y_number,
    z_number,
    red_number,
    green_number,
    blue_number,
    alpha_number
  ) {}
  drawDebugText2d(
    text_string,
    x_number,
    y_number,
    z_number,
    red_number,
    green_number,
    blue_number,
    alpha_number
  ) {}
  drawLine(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    red_number,
    green_number,
    blue_number,
    alpha_number
  ) {}
  drawPoly(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    x3_number,
    y3_number,
    z3_number,
    red_number,
    green_number,
    blue_number,
    alpha_number
  ) {}
  _0x29280002282F1928(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number,
    p12_number,
    p13_number,
    p14_number,
    p15_number,
    p16_number,
    p17_number,
    p18_number,
    p19_number,
    p20_number,
    p21_number,
    p22_number,
    p23_number
  ) {}
  _0x736D7AA1B750856B(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number,
    p12_number,
    p13_number,
    p14_number,
    p15_number,
    p16_number,
    p17_number,
    p18_number,
    p19_number,
    p20_number,
    p21_number,
    p22_number,
    p23_number,
    p24_number,
    p25_number,
    p26_number,
    p27_number,
    p28_number,
    p29_number,
    p30_number,
    p31_number
  ) {}
  drawBox(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    red_number,
    green_number,
    blue_number,
    alpha_number
  ) {}
  setBackfaceculling(toggle_boolean) {}
  _0xC5C8F970D4EDFF71(p0_number) {}
  _0x1DD2139A9A20DCE8() {}
  _0x90A78ECAA4E78453() {}
  _0x0A46AF8A78DC5E0A() {}
  _0x4862437A486F91B0(p0_number, p1_number, p2_number, p3_number) {}
  _0x1670F8D05056F257(p0_number) {}
  _0x7FA5D82B8F58EC06() {}
  _0x5B0316762AFD4A64() {}
  _0x346EF3ECAAAB149E() {}
  beginTakeHighQualityPhoto() {}
  getStatusOfTakeHighQualityPhoto() {}
  _0xD801CC02177FA3F1() {}
  _0x1BBC135A4D25EDDE(p0_boolean) {}
  _0xF3F776ADA161E47D(p0_number, p1_number) {}
  saveHighQualityPhoto(unused_number) {}
  getStatusOfSaveHighQualityPhoto() {}
  _0x759650634F07B6B4(p0_number) {}
  _0xCB82A0BF0E3E3265(p0_number) {}
  _0x6A12D88881435DCA() {}
  _0x1072F115DAB0717E(p0_boolean, p1_boolean) {}
  getMaximumNumberOfPhotos() {}
  getMaximumNumberOfCloudPhotos() {}
  getCurrentNumberOfPhotos() {}
  _0x2A893980E96B659A(p0_number) {}
  _0xF5BED327CEA362B1(p0_number) {}
  _0x4AF92ACD3141D96C() {}
  _0xE791DF1F73ED2C8B(p0_number) {}
  _0xEC72C258667BE5EA(p0_number) {}
  returnTwo(p0_number) {}
  drawLightWithRangeAndShadow(
    x_number,
    y_number,
    z_number,
    r_number,
    g_number,
    b_number,
    range_number,
    intensity_number,
    shadow_number
  ) {}
  drawLightWithRange(
    posX_number,
    posY_number,
    posZ_number,
    colorR_number,
    colorG_number,
    colorB_number,
    range_number,
    intensity_number
  ) {}
  drawSpotLight(
    posX_number,
    posY_number,
    posZ_number,
    dirX_number,
    dirY_number,
    dirZ_number,
    colorR_number,
    colorG_number,
    colorB_number,
    distance_number,
    brightness_number,
    hardness_number,
    radius_number,
    falloff_number
  ) {}
  drawSpotLightWithShadow(
    posX_number,
    posY_number,
    posZ_number,
    dirX_number,
    dirY_number,
    dirZ_number,
    colorR_number,
    colorG_number,
    colorB_number,
    distance_number,
    brightness_number,
    roundness_number,
    radius_number,
    falloff_number,
    shadowId_number
  ) {}
  fadeUpPedLight(p0_number) {}
  updateLightsOnEntity(entity_number) {}
  _0x9641588DAB93B4B5(p0_number) {}
  _0x393BD2275CEB7793() {}
  drawMarker(
    type_number,
    posX_number,
    posY_number,
    posZ_number,
    dirX_number,
    dirY_number,
    dirZ_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    scaleX_number,
    scaleY_number,
    scaleZ_number,
    red_number,
    green_number,
    blue_number,
    alpha_number,
    bobUpAndDown_boolean,
    faceCamera_boolean,
    p19_number,
    rotate_boolean,
    textureDict_string,
    textureName_string,
    drawOnEnts_boolean
  ) {}
  drawMarker2(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number,
    p12_number,
    p13_number,
    p14_number,
    p15_number,
    p16_number,
    p17_number,
    p18_number,
    p19_number,
    p20_number,
    p21_number,
    p22_number,
    p23_number,
    p24_number,
    p25_number
  ) {}
  _0x799017F9E3B10112(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number
  ) {}
  createCheckpoint(
    type_number,
    posX1_number,
    posY1_number,
    posZ1_number,
    posX2_number,
    posY2_number,
    posZ2_number,
    radius_number,
    red_number,
    green_number,
    blue_number,
    alpha_number,
    reserved_number
  ) {}
  setCheckpointScale(checkpoint_number, p0_number) {}
  _0x44621483FF966526(p0_number, p1_number) {}
  setCheckpointCylinderHeight(
    checkpoint_number,
    nearHeight_number,
    farHeight_number,
    radius_number
  ) {}
  setCheckpointRgba(
    checkpoint_number,
    red_number,
    green_number,
    blue_number,
    alpha_number
  ) {}
  setCheckpointIconRgba(
    checkpoint_number,
    red_number,
    green_number,
    blue_number,
    alpha_number
  ) {}
  _0xF51D36185993515D(
    checkpoint_number,
    posX_number,
    posY_number,
    posZ_number,
    unkX_number,
    unkY_number,
    unkZ_number
  ) {}
  _0xFCF6788FC4860CD4(checkpoint_number) {}
  _0x615D3925E87A3B26(checkpoint_number) {}
  _0xDB1EA9411C8911EC(p0_number) {}
  _0x3C788E7F6438754D(p0_number, p1_number, p2_number, p3_number) {}
  deleteCheckpoint(checkpoint_number) {}
  _0x22A249A53034450A(p0_boolean) {}
  _0xDC459CFA0CCE245B(toggle_boolean) {}
  requestStreamedTextureDict(textureDict_string, p1_boolean) {}
  hasStreamedTextureDictLoaded(textureDict_string) {}
  setStreamedTextureDictAsNoLongerNeeded(textureDict_string) {}
  drawRect(
    x_number,
    y_number,
    width_number,
    height_number,
    r_number,
    g_number,
    b_number,
    a_number,
    p8_boolean
  ) {}
  setScriptGfxDrawBehindPausemenu(toggle_boolean) {}
  setScriptGfxDrawOrder(drawOrder_number) {}
  setScriptGfxAlign(x_number, y_number) {}
  resetScriptGfxAlign() {}
  setScriptGfxAlignParams(x_number, y_number, p2_number, p3_number) {}
  getScriptGfxPosition(p0_number, p1_number, p2_number, p3_number) {}
  getSafeZoneSize() {}
  drawSprite(
    textureDict_string,
    textureName_string,
    screenX_number,
    screenY_number,
    width_number,
    height_number,
    heading_number,
    red_number,
    green_number,
    blue_number,
    alpha_number,
    p11_boolean
  ) {}
  _0x2D3B147AFAD49DE0(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number
  ) {}
  drawInteractiveSprite(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number
  ) {}
  addEntityIcon(entity_number, icon_string) {}
  setEntityIconVisibility(entity_number, toggle_boolean) {}
  setEntityIconColor(
    entity_number,
    red_number,
    green_number,
    blue_number,
    alpha_number
  ) {}
  setDrawOrigin(x_number, y_number, z_number, p3_number) {}
  clearDrawOrigin() {}
  setBinkMovieRequested(name_string) {}
  playBinkMovie(binkMovie_number) {}
  stopBinkMovie(binkMovie_number) {}
  releaseBinkMovie(binkMovie_number) {}
  drawBinkMovie(
    binkMovie_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    r_number,
    g_number,
    b_number,
    a_number
  ) {}
  setBinkMovieProgress(binkMovie_number, progress_number) {}
  getBinkMovieProgress(binkMovie_number) {}
  setBinkMovieUnk(binkMovie_number, value_number) {}
  attachTvAudioToEntity(entity_number) {}
  setTvAudioFrontend(toggle_boolean) {}
  _0x6805D58CAA427B72(p0_number, p1_number) {}
  loadMovieMeshSet(movieMeshSetName_string) {}
  releaseMovieMeshSet(movieMeshSet_number) {}
  _0x9B6E70C5CEEF4EEB(p0_number) {}
  getScreenResolution(x_number, y_number) {}
  getActiveScreenResolution(x_number, y_number) {}
  getAspectRatio(b_boolean) {}
  _0xB2EBE8CBC58B90E9() {}
  getIsWidescreen() {}
  getIsHidef() {}
  _0xEFABC7722293DA7C() {}
  setNightvision(toggle_boolean) {}
  getRequestingnightvision() {}
  getUsingnightvision() {}
  _0xEF398BEEE4EF45F9(p0_boolean) {}
  _0x814AF7DCAACC597B(p0_number) {}
  _0x43FA7CBE20DAB219(p0_number) {}
  setNoiseoveride(toggle_boolean) {}
  setNoisinessoveride(value_number) {}
  getScreenCoordFromWorldCoord(
    worldX_number,
    worldY_number,
    worldZ_number,
    screenX_number,
    screenY_number
  ) {}
  getTextureResolution(textureDict_string, textureName_string) {}
  _0x95EB5E34F821BABE(p0_number, p1_number, p2_number) {}
  _0xE2892E7E55D7073A(p0_number) {}
  setFlash(
    p0_number,
    p1_number,
    fadeIn_number,
    duration_number,
    fadeOut_number
  ) {}
  disableOcclusionThisFrame() {}
  setArtificialLightsState(state_boolean) {}
  _0xC35A6D07C93802B2() {}
  createTrackedPoint() {}
  setTrackedPointInfo(
    point_number,
    x_number,
    y_number,
    z_number,
    radius_number
  ) {}
  isTrackedPointVisible(point_number) {}
  destroyTrackedPoint(point_number) {}
  _0xBE197EAA669238F4(p0_number, p1_number, p2_number, p3_number) {}
  _0x61F95E5BB3E0A8C6(p0_number) {}
  _0xAE51BC858F32BA66(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  _0x649C97D52332341A(p0_number) {}
  _0x2C42340F916C5930(p0_number) {}
  _0x14FC5833464340A8() {}
  _0x0218BA067D249DEA() {}
  _0x1612C45F9E3E0D44() {}
  _0x5DEBD9C4DC995692() {}
  _0xAAE9BE70EC7C69AB(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number
  ) {}
  grassLodShrinkScriptAreas(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  grassLodResetScriptAreas() {}
  _0x03FC694AE06C5A20() {}
  _0xD2936CAB8B58FCBD(
    p0_number,
    p1_boolean,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_boolean,
    p7_number
  ) {}
  _0x5F0F3F56635809EF(p0_number) {}
  _0x5E9DAF5A20F15908(p0_number) {}
  _0x36F6626459D91457(p0_number) {}
  _0x259BA6D4E6F808F1(p0_number) {}
  setFarShadowsSuppressed(toggle_boolean) {}
  _0x25FC3E33A31AD0C9(p0_boolean) {}
  cascadeshadowsSetType(type_string) {}
  cascadeshadowsResetType() {}
  _0x6DDBF9DFFC4AC080(p0_boolean) {}
  _0xD39D13C9FEBF0511(p0_boolean) {}
  _0x02AC28F3A01FA04A(p0_number) {}
  _0x0AE73D8DF3A762B2(p0_boolean) {}
  _0xCA465D9CC0D231BA(p0_number) {}
  golfTrailSetEnabled(toggle_boolean) {}
  golfTrailSetPath(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_boolean
  ) {}
  golfTrailSetRadius(p0_number, p1_number, p2_number) {}
  golfTrailSetColour(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number
  ) {}
  golfTrailSetTessellation(p0_number, p1_number) {}
  _0xC0416B061F2B7E5E(p0_boolean) {}
  golfTrailSetFixedControlPoint(
    type_number,
    xPos_number,
    yPos_number,
    zPos_number,
    p4_number,
    red_number,
    green_number,
    blue_number,
    alpha_number
  ) {}
  golfTrailSetShaderParams(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  golfTrailSetFacing(p0_boolean) {}
  _0xA4819F5E23E2FFAD() {}
  _0xA4664972A9B8F8BA(p0_number) {}
  setSeethrough(toggle_boolean) {}
  getUsingseethrough() {}
  seethroughReset() {}
  seethroughSetFadeStartDistance(distance_number) {}
  seethroughSetFadeEndDistance(distance_number) {}
  seethroughGetMaxThickness() {}
  seethroughSetMaxThickness(thickness_number) {}
  seethroughSetNoiseAmountMin(amount_number) {}
  seethroughSetNoiseAmountMax(amount_number) {}
  seethroughSetHiLightIntensity(intensity_number) {}
  seethroughSetHiLightNoise(noise_number) {}
  seethroughSetHeatscale(index_number, heatScale_number) {}
  seethroughSetColorNear(red_number, green_number, blue_number) {}
  _0xB3C641F3630BF6DA(p0_number) {}
  _0xE59343E9E96529E7() {}
  _0x6A51F78772175A51(toggle_boolean) {}
  _0xE63D7C6EECECB66B(toggle_boolean) {}
  _0xE3E2C1B4C59DBC77(unk_number) {}
  triggerScreenblurFadeIn(transitionTime_number) {}
  triggerScreenblurFadeOut(transitionTime_number) {}
  _0xDE81239437E8C5A8() {}
  getScreenblurFadeCurrentTime() {}
  isScreenblurFadeRunning() {}
  togglePausedRenderphases(toggle_boolean) {}
  getTogglePausedRenderphasesStatus() {}
  resetPausedRenderphases() {}
  _0x851CD923176EBA7C() {}
  setHidofEnvBlurParams(
    p0_boolean,
    p1_boolean,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  _0xB569F41F3E7E83A4(p0_number) {}
  _0x7AC24EAB6D74118D(p0_boolean) {}
  _0xBCEDB009461DA156() {}
  _0x27FEB5254759CDE3(textureDict_string, p1_boolean) {}
  startParticleFxNonLoopedAtCoord(
    effectName_string,
    xPos_number,
    yPos_number,
    zPos_number,
    xRot_number,
    yRot_number,
    zRot_number,
    scale_number,
    xAxis_boolean,
    yAxis_boolean,
    zAxis_boolean
  ) {}
  startNetworkedParticleFxNonLoopedAtCoord(
    effectName_string,
    xPos_number,
    yPos_number,
    zPos_number,
    xRot_number,
    yRot_number,
    zRot_number,
    scale_number,
    xAxis_boolean,
    yAxis_boolean,
    zAxis_boolean,
    p11_boolean
  ) {}
  startParticleFxNonLoopedOnPedBone(
    effectName_string,
    ped_number,
    offsetX_number,
    offsetY_number,
    offsetZ_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    boneIndex_number,
    scale_number,
    axisX_boolean,
    axisY_boolean,
    axisZ_boolean
  ) {}
  startNetworkedParticleFxNonLoopedOnPedBone(
    effectName_string,
    ped_number,
    offsetX_number,
    offsetY_number,
    offsetZ_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    boneIndex_number,
    scale_number,
    axisX_boolean,
    axisY_boolean,
    axisZ_boolean
  ) {}
  startParticleFxNonLoopedOnEntity(
    effectName_string,
    entity_number,
    offsetX_number,
    offsetY_number,
    offsetZ_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    scale_number,
    axisX_boolean,
    axisY_boolean,
    axisZ_boolean
  ) {}
  startNetworkedParticleFxNonLoopedOnEntity(
    effectName_string,
    entity_number,
    offsetX_number,
    offsetY_number,
    offsetZ_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    scale_number,
    axisX_boolean,
    axisY_boolean,
    axisZ_boolean
  ) {}
  setParticleFxNonLoopedColour(r_number, g_number, b_number) {}
  setParticleFxNonLoopedAlpha(alpha_number) {}
  _0x8CDE909A0370BB3A(toggle_boolean) {}
  startParticleFxLoopedAtCoord(
    effectName_string,
    x_number,
    y_number,
    z_number,
    xRot_number,
    yRot_number,
    zRot_number,
    scale_number,
    xAxis_boolean,
    yAxis_boolean,
    zAxis_boolean,
    p11_boolean
  ) {}
  startParticleFxLoopedOnPedBone(
    effectName_string,
    ped_number,
    xOffset_number,
    yOffset_number,
    zOffset_number,
    xRot_number,
    yRot_number,
    zRot_number,
    boneIndex_number,
    scale_number,
    xAxis_boolean,
    yAxis_boolean,
    zAxis_boolean
  ) {}
  startParticleFxLoopedOnEntity(
    effectName_string,
    entity_number,
    xOffset_number,
    yOffset_number,
    zOffset_number,
    xRot_number,
    yRot_number,
    zRot_number,
    scale_number,
    xAxis_boolean,
    yAxis_boolean,
    zAxis_boolean
  ) {}
  startParticleFxLoopedOnEntityBone(
    effectName_string,
    entity_number,
    xOffset_number,
    yOffset_number,
    zOffset_number,
    xRot_number,
    yRot_number,
    zRot_number,
    boneIndex_number,
    scale_number,
    xAxis_boolean,
    yAxis_boolean,
    zAxis_boolean
  ) {}
  startNetworkedParticleFxLoopedOnEntity(
    effectName_string,
    entity_number,
    xOffset_number,
    yOffset_number,
    zOffset_number,
    xRot_number,
    yRot_number,
    zRot_number,
    scale_number,
    xAxis_boolean,
    yAxis_boolean,
    zAxis_boolean,
    p12_number,
    p13_number,
    p14_number,
    p15_number
  ) {}
  startNetworkedParticleFxLoopedOnEntityBone(
    effectName_string,
    entity_number,
    xOffset_number,
    yOffset_number,
    zOffset_number,
    xRot_number,
    yRot_number,
    zRot_number,
    boneIndex_number,
    scale_number,
    xAxis_boolean,
    yAxis_boolean,
    zAxis_boolean,
    p13_number,
    p14_number,
    p15_number,
    p16_number
  ) {}
  stopParticleFxLooped(ptfxHandle_number, p1_boolean) {}
  removeParticleFx(ptfxHandle_number, p1_boolean) {}
  removeParticleFxFromEntity(entity_number) {}
  removeParticleFxInRange(X_number, Y_number, Z_number, radius_number) {}
  _0xBA0127DA25FD54C9(p0_number, p1_number) {}
  doesParticleFxLoopedExist(ptfxHandle_number) {}
  setParticleFxLoopedOffsets(
    ptfxHandle_number,
    x_number,
    y_number,
    z_number,
    rotX_number,
    rotY_number,
    rotZ_number
  ) {}
  setParticleFxLoopedEvolution(
    ptfxHandle_number,
    propertyName_string,
    amount_number,
    noNetwork_boolean
  ) {}
  setParticleFxLoopedColour(
    ptfxHandle_number,
    r_number,
    g_number,
    b_number,
    p4_boolean
  ) {}
  setParticleFxLoopedAlpha(ptfxHandle_number, alpha_number) {}
  setParticleFxLoopedScale(ptfxHandle_number, scale_number) {}
  setParticleFxLoopedFarClipDist(ptfxHandle_number, range_number) {}
  setParticleFxCamInsideVehicle(p0_boolean) {}
  setParticleFxCamInsideNonplayerVehicle(vehicle_number, p1_boolean) {}
  setParticleFxShootoutBoat(p0_number) {}
  _0x2A251AA48B2B46DB() {}
  _0x908311265D42A820(p0_number) {}
  _0x5F6DF3D92271E8A1(toggle_boolean) {}
  _0x2B40A97646381508(p0_number) {}
  enableClownBloodVfx(toggle_boolean) {}
  enableAlienBloodVfx(toggle_boolean) {}
  _0x27E32866E9A5C416(p0_number) {}
  _0xBB90E12CAC1DAB25(p0_number) {}
  _0xCA4AE345A153D573(p0_boolean) {}
  _0x54E22EA2C1956A8D(p0_number) {}
  _0x949F397A288B28B3(p0_number) {}
  _0xBA3D194057C79A7B(p0_string) {}
  _0x5DBF05DB5926D089(p0_number) {}
  _0x9B079E5221D984D3(p0_boolean) {}
  useParticleFxAsset(name_string) {}
  setParticleFxOverride(oldAsset_string, newAsset_string) {}
  resetParticleFxOverride(name_string) {}
  _0xA46B73FAA3460AE1(p0_boolean) {}
  _0xF78B803082D4386F(p0_number) {}
  washDecalsInRange(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  washDecalsFromVehicle(vehicle_number, p1_number) {}
  fadeDecalsInRange(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  removeDecalsInRange(x_number, y_number, z_number, range_number) {}
  removeDecalsFromObject(obj_number) {}
  removeDecalsFromObjectFacing(obj_number, x_number, y_number, z_number) {}
  removeDecalsFromVehicle(vehicle_number) {}
  addDecal(
    decalType_number,
    posX_number,
    posY_number,
    posZ_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    width_number,
    height_number,
    rCoef_number,
    gCoef_number,
    bCoef_number,
    opacity_number,
    timeout_number,
    p17_boolean,
    p18_boolean,
    p19_boolean
  ) {}
  addPetrolDecal(
    x_number,
    y_number,
    z_number,
    groundLvl_number,
    width_number,
    transparency_number
  ) {}
  startPetrolTrailDecals(p0_number) {}
  addPetrolTrailDecalInfo(x_number, y_number, z_number, p3_number) {}
  endPetrolTrailDecals() {}
  removeDecal(decal_number) {}
  isDecalAlive(decal_number) {}
  getDecalWashLevel(decal_number) {}
  _0xD9454B5752C857DC() {}
  _0x27CFB1B1E078CB2D() {}
  _0x4B5CFC83122DF602() {}
  getIsPetrolDecalInRange(
    xCoord_number,
    yCoord_number,
    zCoord_number,
    radius_number
  ) {}
  overrideDecalTexture(
    decalType_number,
    textureDict_string,
    textureName_string
  ) {}
  undoDecalTextureOverride(decalType_number) {}
  moveVehicleDecals(p0_number, p1_number) {}
  addVehicleCrewEmblem(
    vehicle_number,
    ped_number,
    boneIndex_number,
    x1_number,
    x2_number,
    x3_number,
    y1_number,
    y2_number,
    y3_number,
    z1_number,
    z2_number,
    z3_number,
    scale_number,
    p13_number,
    alpha_number
  ) {}
  _0x82ACC484FFA3B05F(p0_number) {}
  removeVehicleCrewEmblem(vehicle_number, p1_number) {}
  getVehicleCrewEmblemRequestState(vehicle_number, p1_number) {}
  doesVehicleHaveCrewEmblem(vehicle_number, p1_number) {}
  _0x0E4299C549F0D1F1(toggle_boolean) {}
  _0x02369D5C8A51FDCF(toggle_boolean) {}
  _0x46D1A61A21F566FC(p0_number) {}
  overrideInteriorSmokeName(name_string) {}
  overrideInteriorSmokeLevel(level_number) {}
  overrideInteriorSmokeEnd() {}
  _0xA44FF770DFBC5DAE() {}
  disableVehicleDistantlights(toggle_boolean) {}
  _0x03300B57FCAC6DDB(p0_boolean) {}
  _0x98EDF76A7271E4F2() {}
  setForcePedFootstepsTracks(toggle_boolean) {}
  setForceVehicleTrails(toggle_boolean) {}
  disableScriptAmbientEffects(p0_number) {}
  presetInteriorAmbientCache(timecycleModifierName_string) {}
  setTimecycleModifier(modifierName_string) {}
  setTimecycleModifierStrength(strength_number) {}
  setTransitionTimecycleModifier(modifierName_string, transition_number) {}
  _0x1CBA05AE7BD7EE05(p0_number) {}
  clearTimecycleModifier() {}
  getTimecycleModifierIndex() {}
  getTimecycleTransitionModifierIndex() {}
  _0x98D18905BF723B99() {}
  pushTimecycleModifier() {}
  popTimecycleModifier() {}
  setCurrentPlayerTcmodifier(modifierName_string) {}
  setPlayerTcmodifierTransition(value_number) {}
  setNextPlayerTcmodifier(modifierName_string) {}
  addTcmodifierOverride(modifierName1_string, modifierName2_string) {}
  _0x15E33297C3E8DC60(p0_string) {}
  setExtraTimecycleModifier(modifierName_string) {}
  clearExtraTimecycleModifier() {}
  getExtraTimecycleModifierIndex() {}
  setExtraTimecycleModifierStrength(strength_number) {}
  resetExtraTimecycleModifierStrength() {}
  requestScaleformMovie(scaleformName_string) {}
  requestScaleformMovieInstance(scaleformName_string) {}
  requestScaleformMovieInteractive(scaleformName_string) {}
  hasScaleformMovieLoaded(scaleformHandle_number) {}
  _0x2FCB133CA50A49EB(p0_number) {}
  _0x86255B1FC929E33E(p0_number) {}
  hasScaleformMovieFilenameLoaded(scaleformName_string) {}
  hasScaleformContainerMovieLoadedIntoParent(scaleformHandle_number) {}
  setScaleformMovieAsNoLongerNeeded(scaleformHandle_number) {}
  setScaleformMovieToUseSystemTime(scaleform_number, toggle_boolean) {}
  _0x32F34FF7F617643B(p0_number, p1_number) {}
  _0xE6A9F00D4240B519(p0_number, p1_number) {}
  drawScaleformMovie(
    scaleformHandle_number,
    x_number,
    y_number,
    width_number,
    height_number,
    red_number,
    green_number,
    blue_number,
    alpha_number,
    unk_number
  ) {}
  drawScaleformMovieFullscreen(
    scaleform_number,
    red_number,
    green_number,
    blue_number,
    alpha_number,
    unk_number
  ) {}
  drawScaleformMovieFullscreenMasked(
    scaleform1_number,
    scaleform2_number,
    red_number,
    green_number,
    blue_number,
    alpha_number
  ) {}
  drawScaleformMovie3d(
    scaleform_number,
    posX_number,
    posY_number,
    posZ_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    p7_number,
    p8_number,
    p9_number,
    scaleX_number,
    scaleY_number,
    scaleZ_number,
    p13_number
  ) {}
  drawScaleformMovie3dSolid(
    scaleform_number,
    posX_number,
    posY_number,
    posZ_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    p7_number,
    p8_number,
    p9_number,
    scaleX_number,
    scaleY_number,
    scaleZ_number,
    p13_number
  ) {}
  callScaleformMovieMethod(scaleform_number, method_string) {}
  callScaleformMovieMethodWithNumber(
    scaleform_number,
    methodName_string,
    param1_number,
    param2_number,
    param3_number,
    param4_number,
    param5_number
  ) {}
  callScaleformMovieMethodWithString(
    scaleform_number,
    methodName_string,
    param1_string,
    param2_string,
    param3_string,
    param4_string,
    param5_string
  ) {}
  callScaleformMovieMethodWithNumberAndString(
    scaleform_number,
    methodName_string,
    floatParam1_number,
    floatParam2_number,
    floatParam3_number,
    floatParam4_number,
    floatParam5_number,
    stringParam1_string,
    stringParam2_string,
    stringParam3_string,
    stringParam4_string,
    stringParam5_string
  ) {}
  beginScaleformScriptHudMovieMethod(hudComponent_number, methodName_string) {}
  beginScaleformMovieMethod(scaleform_number, methodName_string) {}
  beginScaleformMovieMethodOnFrontend(methodName_string) {}
  beginScaleformMovieMethodOnFrontendHeader(methodName_string) {}
  endScaleformMovieMethod() {}
  endScaleformMovieMethodReturnValue() {}
  isScaleformMovieMethodReturnValueReady(returnValueData_number) {}
  getScaleformMovieMethodReturnValueInt(returnValueData_number) {}
  getScaleformMovieMethodReturnValueBool(returnValueData_number) {}
  getScaleformMovieMethodReturnValueString(returnValueData_number) {}
  scaleformMovieMethodAddParamInt(value_number) {}
  scaleformMovieMethodAddParamFloat(value_number) {}
  scaleformMovieMethodAddParamBool(value_boolean) {}
  beginTextCommandScaleformString(componentType_string) {}
  endTextCommandScaleformString() {}
  endTextCommandScaleformString2() {}
  scaleformMovieMethodAddParamTextureNameString2(string_string) {}
  scaleformMovieMethodAddParamTextureNameString(string_string) {}
  scaleformMovieMethodAddParamPlayerNameString(string_string) {}
  _0x5E657EF1099EDD65(p0_number) {}
  scaleformMovieMethodAddParamLatestBriefString(value_number) {}
  requestScaleformScriptHudMovie(hudComponent_number) {}
  hasScaleformScriptHudMovieLoaded(hudComponent_number) {}
  removeScaleformScriptHudMovie(hudComponent_number) {}
  _0xD1C7CB175E012964(scaleformHandle_number) {}
  setTvChannel(channel_number) {}
  getTvChannel() {}
  setTvVolume(volume_number) {}
  getTvVolume() {}
  drawTvChannel(
    xPos_number,
    yPos_number,
    xScale_number,
    yScale_number,
    rotation_number,
    red_number,
    green_number,
    blue_number,
    alpha_number
  ) {}
  setTvChannelPlaylist(
    tvChannel_number,
    playlistName_string,
    restart_boolean
  ) {}
  setTvChannelPlaylistAtHour(
    tvChannel_number,
    playlistName_string,
    hour_number
  ) {}
  clearTvChannelPlaylist(tvChannel_number) {}
  isPlaylistUnk(tvChannel_number, p1_number) {}
  isTvPlaylistItemPlaying(videoCliphash_number) {}
  enableMovieKeyframeWait(toggle_boolean) {}
  _0xD1C55B110E4DF534(p0_number) {}
  _0x30432A0118736E00() {}
  enableMovieSubtitles(toggle_boolean) {}
  ui3dsceneIsAvailable() {}
  ui3dscenePushPreset(presetName_string) {}
  _0x98C4FE6EC34154CA(
    presetName_string,
    ped_number,
    p2_number,
    posX_number,
    posY_number,
    posZ_number
  ) {}
  _0x7A42B2E236E71415() {}
  _0x108BE26959A9D9BB(toggle_boolean) {}
  terraingridActivate(toggle_boolean) {}
  terraingridSetParams(
    x_number,
    y_number,
    z_number,
    p3_number,
    rotation_number,
    p5_number,
    width_number,
    height_number,
    p8_number,
    scale_number,
    glowIntensity_number,
    normalHeight_number,
    heightDiff_number
  ) {}
  terraingridSetColours(
    lowR_number,
    lowG_number,
    lowB_number,
    lowAlpha_number,
    r_number,
    g_number,
    b_number,
    alpha_number,
    highR_number,
    highG_number,
    highB_number,
    highAlpha_number
  ) {}
  animpostfxPlay(effectName_string, duration_number, looped_boolean) {}
  animpostfxStop(effectName_string) {}
  animpostfxGetUnk(effectName_string) {}
  animpostfxIsRunning(effectName_string) {}
  animpostfxStopAll() {}
  animpostfxStopAndDoUnk(effectName_string) {}
  //Category: Hud
  beginTextCommandBusyspinnerOn(string_string) {}
  endTextCommandBusyspinnerOn(busySpinnerType_number) {}
  busyspinnerOff() {}
  preloadBusyspinner() {}
  busyspinnerIsOn() {}
  busyspinnerIsDisplaying() {}
  _0x9245E81072704B8A(p0_boolean) {}
  setMouseCursorActiveThisFrame() {}
  setMouseCursorSprite(spriteId_number) {}
  _0x98215325A695E78A(p0_boolean) {}
  _0x3D9ACB1EB139E702() {}
  _0x632B2940C67F4EA9(
    scaleformHandle_number,
    p1_number,
    p2_number,
    p3_number
  ) {}
  thefeedOnlyShowTooltips(toggle_boolean) {}
  thefeedSetScriptedMenuHeight(pos_number) {}
  thefeedDisable() {}
  thefeedHideThisFrame() {}
  _0x15CFA549788D35EF() {}
  thefeedFlushQueue() {}
  thefeedRemoveItem(notificationId_number) {}
  thefeedForceRenderOn() {}
  thefeedForceRenderOff() {}
  thefeedPause() {}
  thefeedResume() {}
  thefeedIsPaused() {}
  thefeedSpsExtendWidescreenOn() {}
  thefeedSpsExtendWidescreenOff() {}
  thefeedGetFirstVisibleDeleteRemaining() {}
  thefeedCommentTeleportPoolOn() {}
  thefeedCommentTeleportPoolOff() {}
  thefeedSetNextPostBackgroundColor(hudColorIndex_number) {}
  thefeedSetAnimpostfxColor(
    red_number,
    green_number,
    blue_number,
    alpha_number
  ) {}
  thefeedSetAnimpostfxCount(count_number) {}
  thefeedSetAnimpostfxSound(toggle_boolean) {}
  thefeedResetAllParameters() {}
  thefeedFreezeNextPost() {}
  thefeedClearFrozenPost() {}
  thefeedSetFlushAnimpostfx(p0_boolean) {}
  thefeedAddTxdRef(p0_number, p1_number, p2_number, p3_number) {}
  beginTextCommandThefeedPost(text_string) {}
  endTextCommandThefeedPostStats(
    txdName_string,
    textureName_string,
    flash_boolean,
    iconType_number,
    p4_boolean,
    sender_string,
    subject_string
  ) {}
  endTextCommandThefeedPostMessagetext(
    picName1_string,
    picName2_string,
    flash_boolean,
    iconType_number,
    sender_string,
    subject_string
  ) {}
  endTextCommandThefeedPostMessagetextGxtEntry(
    picName1_string,
    picName2_string,
    flash_boolean,
    iconType_number,
    sender_string,
    subject_string
  ) {}
  endTextCommandThefeedPostMessagetextTu(
    picName1_string,
    picName2_string,
    flash_boolean,
    iconType_number,
    sender_string,
    subject_string,
    duration_number
  ) {}
  endTextCommandThefeedPostMessagetextWithCrewTag(
    picName1_string,
    picName2_string,
    flash_boolean,
    iconType_number,
    sender_string,
    subject_string,
    duration_number,
    clanTag_string
  ) {}
  endTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon(
    picName1_string,
    picName2_string,
    flash_boolean,
    iconType1_number,
    sender_string,
    subject_string,
    duration_number,
    clanTag_string,
    iconType2_number,
    p9_number
  ) {}
  endTextCommandThefeedPostTicker(blink_boolean, p1_boolean) {}
  endTextCommandThefeedPostTickerForced(blink_boolean, p1_boolean) {}
  endTextCommandThefeedPostTickerWithTokens(blink_boolean, p1_boolean) {}
  endTextCommandThefeedPostAward(
    p0_string,
    p1_string,
    p2_number,
    p3_number,
    p4_string
  ) {}
  endTextCommandThefeedPostCrewtag(
    p0_boolean,
    p1_boolean,
    p2_number,
    p3_number,
    isLeader_boolean,
    unk0_boolean,
    clanDesc_number,
    R_number,
    G_number,
    B_number
  ) {}
  endTextCommandThefeedPostCrewtagWithGameName(
    p0_boolean,
    p1_boolean,
    p2_number,
    p3_number,
    isLeader_boolean,
    unk0_boolean,
    clanDesc_number,
    playerName_string,
    R_number,
    G_number,
    B_number
  ) {}
  endTextCommandThefeedPostUnlock(p0_number, p1_number, p2_number) {}
  endTextCommandThefeedPostUnlockTu(
    p0_number,
    p1_number,
    p2_number,
    p3_number
  ) {}
  endTextCommandThefeedPostUnlockTuWithColor(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  endTextCommandThefeedPostMpticker(blink_boolean, p1_boolean) {}
  endTextCommandThefeedPostCrewRankup(
    p0_string,
    p1_string,
    p2_string,
    p3_boolean,
    p4_boolean
  ) {}
  endTextCommandThefeedPostVersusTu(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number
  ) {}
  endTextCommandThefeedPostReplayIcon(type_number, image_number, text_string) {}
  endTextCommandThefeedPostReplayInput(
    type_number,
    button_string,
    text_string
  ) {}
  beginTextCommandPrint(GxtEntry_string) {}
  endTextCommandPrint(duration_number, drawImmediately_boolean) {}
  beginTextCommandIsMessageDisplayed(text_string) {}
  endTextCommandIsMessageDisplayed() {}
  beginTextCommandDisplayText(text_string) {}
  endTextCommandDisplayText(x_number, y_number, p2_number) {}
  beginTextCommandGetWidth(text_string) {}
  endTextCommandGetWidth(p0_boolean) {}
  beginTextCommandLineCount(entry_string) {}
  endTextCommandLineCount(x_number, y_number) {}
  beginTextCommandDisplayHelp(inputType_string) {}
  endTextCommandDisplayHelp(
    p0_number,
    loop_boolean,
    beep_boolean,
    shape_number
  ) {}
  beginTextCommandIsThisHelpMessageBeingDisplayed(labelName_string) {}
  endTextCommandIsThisHelpMessageBeingDisplayed(p0_number) {}
  beginTextCommandSetBlipName(gxtentry_string) {}
  endTextCommandSetBlipName(blip_number) {}
  beginTextCommandObjective(p0_string) {}
  endTextCommandObjective(p0_boolean) {}
  beginTextCommandClearPrint(text_string) {}
  endTextCommandClearPrint() {}
  beginTextCommandOverrideButtonText(gxtEntry_string) {}
  endTextCommandOverrideButtonText(p0_number) {}
  addTextComponentInteger(value_number) {}
  addTextComponentFloat(value_number, decimalPlaces_number) {}
  addTextComponentSubstringTextLabel(labelName_string) {}
  addTextComponentSubstringTextLabelHashKey(gxtEntryHash_number) {}
  addTextComponentSubstringBlipName(blip_number) {}
  addTextComponentSubstringPlayerName(text_string) {}
  addTextComponentSubstringTime(timestamp_number, flags_number) {}
  addTextComponentFormattedInteger(value_number, commaSeparated_boolean) {}
  addTextComponentSubstringPhoneNumber(p0_string, p1_number) {}
  addTextComponentSubstringWebsite(website_string) {}
  addTextComponentSubstringUnk(p0_string) {}
  setColourOfNextTextComponent(hudColor_number) {}
  getTextSubstring(text_string, position_number, length_number) {}
  getTextSubstringSafe(
    text_string,
    position_number,
    length_number,
    maxLength_number
  ) {}
  getTextSubstringSlice(
    text_string,
    startPosition_number,
    endPosition_number
  ) {}
  getLabelText(labelName_string) {}
  clearPrints() {}
  clearBrief() {}
  clearAllHelpMessages() {}
  clearThisPrint(p0_string) {}
  clearSmallPrints() {}
  doesTextBlockExist(gxt_string) {}
  requestAdditionalText(gxt_string, slot_number) {}
  requestAdditionalTextForDlc(gxt_string, slot_number) {}
  hasAdditionalTextLoaded(slot_number) {}
  clearAdditionalText(p0_number, p1_boolean) {}
  isStreamingAdditionalText(p0_number) {}
  hasThisAdditionalTextLoaded(gxt_string, slot_number) {}
  isMessageBeingDisplayed() {}
  doesTextLabelExist(gxt_string) {}
  _0x98C3CF913D895111(string_string, length_number) {}
  getLengthOfStringWithThisTextLabel(gxt_string) {}
  getLengthOfLiteralString(string_string) {}
  getLengthOfLiteralStringInBytes(string_string) {}
  getStreetNameFromHashKey(hash_number) {}
  isHudPreferenceSwitchedOn() {}
  isRadarPreferenceSwitchedOn() {}
  isSubtitlePreferenceSwitchedOn() {}
  displayHud(toggle_boolean) {}
  _0x7669F9E39DC17063() {}
  displayHudWhenPausedThisFrame() {}
  displayRadar(toggle_boolean) {}
  _0xCD74233600C4EA6B(toggle_boolean) {}
  _0xC2D2AD9EAAE265B8() {}
  isHudHidden() {}
  isRadarHidden() {}
  isMinimapRendering() {}
  _0x0C698D8F099174C7(p0_number) {}
  _0xE4C3B169876D33D7(p0_number) {}
  _0xEB81A3DADD503187() {}
  setBlipRoute(blip_number, enabled_boolean) {}
  clearAllBlipRoutes() {}
  setBlipRouteColour(blip_number, colour_number) {}
  _0x2790F4B17D098E26(toggle_boolean) {}
  _0x6CDD58146A436083(p0_number) {}
  _0xD1942374085C8469(p0_number) {}
  addNextMessageToPreviousBriefs(p0_boolean) {}
  _0x57D760D55F54E071(p0_number) {}
  setRadarZoomPrecise(zoom_number) {}
  setRadarZoom(zoomLevel_number) {}
  setRadarZoomToBlip(blip_number, zoom_number) {}
  setRadarZoomToDistance(zoom_number) {}
  _0xD2049635DEB9C375() {}
  getHudColour(hudColorIndex_number, r_number, g_number, b_number, a_number) {}
  setScriptVariableHudColour(r_number, g_number, b_number, a_number) {}
  setScriptVariable2HudColour(r_number, g_number, b_number, a_number) {}
  replaceHudColour(hudColorIndex_number, hudColorIndex2_number) {}
  replaceHudColourWithRgba(
    hudColorIndex_number,
    r_number,
    g_number,
    b_number,
    a_number
  ) {}
  setAbilityBarVisibilityInMultiplayer(visible_boolean) {}
  flashAbilityBar(millisecondsToFlash_number) {}
  setAbilityBarValue(p0_number, p1_number) {}
  flashWantedDisplay(p0_boolean) {}
  _0xBA8D65C1C65702E5(toggle_boolean) {}
  getTextScaleHeight(size_number, font_number) {}
  setTextScale(scale_number, size_number) {}
  setTextColour(red_number, green_number, blue_number, alpha_number) {}
  setTextCentre(align_boolean) {}
  setTextRightJustify(toggle_boolean) {}
  setTextJustification(justifyType_number) {}
  setTextWrap(start_number, end_number) {}
  setTextLeading(p0_number) {}
  setTextProportional(p0_boolean) {}
  setTextFont(fontType_number) {}
  setTextDropShadow() {}
  setTextDropshadow(distance_number, r_number, g_number, b_number, a_number) {}
  setTextOutline() {}
  setTextEdge(p0_number, r_number, g_number, b_number, a_number) {}
  setTextRenderId(renderId_number) {}
  getDefaultScriptRendertargetRenderId() {}
  registerNamedRendertarget(name_string, p1_boolean) {}
  isNamedRendertargetRegistered(name_string) {}
  releaseNamedRendertarget(name_string) {}
  linkNamedRendertarget(modelHash_number) {}
  getNamedRendertargetRenderId(name_string) {}
  isNamedRendertargetLinked(modelHash_number) {}
  clearHelp(toggle_boolean) {}
  isHelpMessageOnScreen() {}
  _0x214CD562A939246A() {}
  isHelpMessageBeingDisplayed() {}
  isHelpMessageFadingOut() {}
  setHelpMessageTextStyle(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  getLevelBlipSprite() {}
  getWaypointBlipSprite() {}
  getNumberOfActiveBlips() {}
  getNextBlipInfoId(blipSprite_number) {}
  getFirstBlipInfoId(blipSprite_number) {}
  _0xD484BF71050CA1EE(p0_number) {}
  getBlipInfoIdCoord(blip_number) {}
  getBlipInfoIdDisplay(blip_number) {}
  getBlipInfoIdType(blip_number) {}
  getBlipInfoIdEntityIndex(blip_number) {}
  getBlipInfoIdPickupIndex(blip_number) {}
  getBlipFromEntity(entity_number) {}
  addBlipForRadius(posX_number, posY_number, posZ_number, radius_number) {}
  addBlipForArea(x_number, y_number, z_number, scaleX_number, scaleY_number) {}
  addBlipForEntity(entity_number) {}
  addBlipForPickup(pickup_number) {}
  addBlipForCoord(x_number, y_number, z_number) {}
  triggerSonarBlip(
    posX_number,
    posY_number,
    posZ_number,
    radius_number,
    p4_number
  ) {}
  allowSonarBlips(toggle_boolean) {}
  setBlipCoords(blip_number, posX_number, posY_number, posZ_number) {}
  getBlipCoords(blip_number) {}
  setBlipSprite(blip_number, spriteId_number) {}
  getBlipSprite(blip_number) {}
  _0x9FCB3CBFB3EAD69A(p0_number, p1_number) {}
  _0xB7B873520C84C118() {}
  setBlipNameFromTextFile(blip_number, gxtEntry_string) {}
  setBlipNameToPlayerName(blip_number, player_number) {}
  setBlipAlpha(blip_number, alpha_number) {}
  getBlipAlpha(blip_number) {}
  setBlipFade(blip_number, opacity_number, duration_number) {}
  _0x2C173AE2BDB9385E(blip_number) {}
  setBlipRotation(blip_number, rotation_number) {}
  setBlipSquaredRotation(p0_number, p1_number) {}
  setBlipFlashTimer(blip_number, duration_number) {}
  setBlipFlashInterval(blip_number, p1_number) {}
  setBlipColour(blip_number, color_number) {}
  setBlipSecondaryColour(blip_number, r_number, g_number, b_number) {}
  getBlipColour(blip_number) {}
  getBlipHudColour(blip_number) {}
  isBlipShortRange(blip_number) {}
  isBlipOnMinimap(blip_number) {}
  doesBlipHaveGpsRoute(blip_number) {}
  setBlipHiddenOnLegend(blip_number, toggle_boolean) {}
  setBlipHighDetail(blip_number, toggle_boolean) {}
  setBlipAsMissionCreatorBlip(blip_number, toggle_boolean) {}
  isMissionCreatorBlip(blip_number) {}
  getNewSelectedMissionCreatorBlip() {}
  isHoveringOverMissionCreatorBlip() {}
  _0xF1A6C18B35BCADE6(p0_boolean) {}
  _0x2916A928514C9827() {}
  _0xB552929B85FC27EC(p0_number, p1_number) {}
  setBlipFlashes(blip_number, toggle_boolean) {}
  setBlipFlashesAlternate(blip_number, toggle_boolean) {}
  isBlipFlashing(blip_number) {}
  setBlipAsShortRange(blip_number, toggle_boolean) {}
  setBlipScale(blip_number, scale_number) {}
  _0xCD6524439909C979(blip_number, p1_number, p2_number) {}
  setBlipPriority(blip_number, priority_number) {}
  setBlipDisplay(blip_number, displayId_number) {}
  setBlipCategory(blip_number, index_number) {}
  removeBlip(blip_number) {}
  setBlipAsFriendly(blip_number, toggle_boolean) {}
  pulseBlip(blip_number) {}
  showNumberOnBlip(blip_number, number_number) {}
  hideNumberOnBlip(blip_number) {}
  showHeightOnBlip(blip_number, toggle_boolean) {}
  showTickOnBlip(blip_number, toggle_boolean) {}
  showHeadingIndicatorOnBlip(blip_number, toggle_boolean) {}
  showOutlineIndicatorOnBlip(blip_number, toggle_boolean) {}
  showFriendIndicatorOnBlip(blip_number, toggle_boolean) {}
  showCrewIndicatorOnBlip(blip_number, toggle_boolean) {}
  setBlipDisplayIndicatorOnBlip(blip_number, toggle_boolean) {}
  _0x4B5B620C9B59ED34(p0_number, p1_number) {}
  _0x2C9F302398E13141(p0_number, p1_number) {}
  setBlipShrink(blip_number, toggle_boolean) {}
  setRadiusBlipEdge(p0_number, p1_boolean) {}
  doesBlipExist(blip_number) {}
  setWaypointOff() {}
  deleteWaypoint() {}
  refreshWaypoint() {}
  isWaypointActive() {}
  setNewWaypoint(x_number, y_number) {}
  setBlipBright(blip_number, toggle_boolean) {}
  setBlipShowCone(blip_number, toggle_boolean) {}
  _0xC594B315EDF2D4AF(ped_number) {}
  _0xF83D0FEBE75E62C9(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number
  ) {}
  _0x35A3CD97B2C0A6D2(p0_number) {}
  _0x8410C5E0CD847B9D() {}
  setMinimapComponent(p0_number, p1_boolean, p2_number) {}
  showSigninUi() {}
  getMainPlayerBlipId() {}
  _0x41350B4FC28E3941(p0_boolean) {}
  hideLoadingOnFadeThisFrame() {}
  setRadarAsInteriorThisFrame(
    interior_number,
    x_number,
    y_number,
    z_number,
    zoom_number
  ) {}
  _0x504DFE62A1692296(toggle_boolean) {}
  setRadarAsExteriorThisFrame() {}
  setPlayerBlipPositionThisFrame(x_number, y_number) {}
  _0xA17784FCA9548D15(p0_number, p1_number, p2_number) {}
  isMinimapInInterior() {}
  hideMinimapExteriorMapThisFrame() {}
  hideMinimapInteriorMapThisFrame() {}
  dontTiltMinimapThisFrame() {}
  _0x55F5A5F07134DE60() {}
  setWidescreenFormat(p0_number) {}
  displayAreaName(toggle_boolean) {}
  displayCash(toggle_boolean) {}
  _0x170F541E1CADD1DE(p0_boolean) {}
  setPlayerCashChange(cash_number, bank_number) {}
  displayAmmoThisFrame(display_boolean) {}
  displaySniperScopeThisFrame() {}
  hideHudAndRadarThisFrame() {}
  _0xE67C6DFD386EA5E7(p0_boolean) {}
  setMultiplayerWalletCash() {}
  removeMultiplayerWalletCash() {}
  setMultiplayerBankCash() {}
  removeMultiplayerBankCash() {}
  setMultiplayerHudCash(p0_number, p1_number) {}
  removeMultiplayerHudCash() {}
  hideHelpTextThisFrame() {}
  _0x801879A9B4F4B2FB() {}
  displayHelpTextThisFrame(message_string, p1_boolean) {}
  hudForceWeaponWheel(show_boolean) {}
  _0x488043841BBE156F() {}
  blockWeaponWheelThisFrame() {}
  hudWeaponWheelGetSelectedHash() {}
  hudWeaponWheelSetSlotHash(weaponHash_number) {}
  hudWeaponWheelGetSlotHash(p0_number) {}
  hudWeaponWheelIgnoreControlInput(p0_boolean) {}
  setGpsFlags(p0_number, p1_number) {}
  clearGpsFlags() {}
  setRaceTrackRender(toggle_boolean) {}
  clearGpsRaceTrack() {}
  startGpsCustomRoute(hudColor_number, p1_boolean, p2_boolean) {}
  addPointToGpsCustomRoute(x_number, y_number, z_number) {}
  setGpsCustomRouteRender(p0_boolean, p1_number, p2_number) {}
  clearGpsCustomRoute() {}
  startGpsMultiRoute(hudColor_number, p1_boolean, p2_boolean) {}
  addPointToGpsMultiRoute(x_number, y_number, z_number) {}
  setGpsMultiRouteRender(toggle_boolean) {}
  clearGpsMultiRoute() {}
  clearGpsPlayerWaypoint() {}
  setGpsFlashes(toggle_boolean) {}
  _0x7B21E0BB01E8224A(p0_number) {}
  flashMinimapDisplay() {}
  flashMinimapDisplayWithColor(p0_number) {}
  toggleStealthRadar(toggle_boolean) {}
  setMinimapInSpectatorMode(toggle_boolean, ped_number) {}
  setMissionName(p0_boolean, name_string) {}
  setMissionName2(p0_boolean, name_string) {}
  _0x817B86108EB94E51(
    p0_boolean,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number
  ) {}
  setMinimapBlockWaypoint(toggle_boolean) {}
  setMinimapInPrologue(toggle_boolean) {}
  setMinimapHideFow(toggle_boolean) {}
  getMinimapRevealPercentage() {}
  getMinimapAreaIsRevealed(x_number, y_number, radius_number) {}
  _0x62E849B7EB28E770(p0_boolean) {}
  _0x0923DBF87DFF735E(x_number, y_number, z_number) {}
  setMinimapGolfCourse(hole_number) {}
  setMinimapGolfCourseOff() {}
  lockMinimapAngle(angle_number) {}
  unlockMinimapAngle() {}
  lockMinimapPosition(x_number, y_number) {}
  unlockMinimapPosition() {}
  setMinimapAltitudeIndicatorLevel(altitude_number, p1_boolean, p2_number) {}
  setHealthHudDisplayValues(p0_number, p1_number, p2_boolean) {}
  setMaxHealthHudDisplay(p0_number) {}
  setMaxArmourHudDisplay(p0_number) {}
  setBigmapActive(toggleBigMap_boolean, showFullMap_boolean) {}
  isHudComponentActive(id_number) {}
  isScriptedHudComponentActive(id_number) {}
  hideScriptedHudComponentThisFrame(id_number) {}
  showScriptedHudComponentThisFrame(id_number) {}
  isScriptedHudComponentHiddenThisFrame(id_number) {}
  hideHudComponentThisFrame(id_number) {}
  showHudComponentThisFrame(id_number) {}
  hideAreaAndVehicleNameThisFrame() {}
  resetReticuleValues() {}
  resetHudComponentValues(id_number) {}
  setHudComponentPosition(id_number, x_number, y_number) {}
  getHudComponentPosition(id_number) {}
  clearReminderMessage() {}
  getScreenCoordFromWorldCoord2(
    worldX_number,
    worldY_number,
    worldZ_number,
    screenX_number,
    screenY_number
  ) {}
  openReportugcMenu() {}
  forceCloseReportugcMenu() {}
  isReportugcMenuOpen() {}
  isFloatingHelpTextOnScreen(p0_number) {}
  setFloatingHelpTextScreenPosition(p0_number, x_number, y_number) {}
  setFloatingHelpTextWorldPosition(p0_number, x_number, y_number, z_number) {}
  setFloatingHelpTextToEntity(p0_number, entity_number, p2_number, p3_number) {}
  setFloatingHelpTextStyle(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  clearFloatingHelp(p0_number, p1_boolean) {}
  createMpGamerTagWithCrewColor(
    player_number,
    username_string,
    pointedClanTag_boolean,
    isRockstarClan_boolean,
    clanTag_string,
    p5_number,
    r_number,
    g_number,
    b_number
  ) {}
  isMpGamerTagMovieActive() {}
  createFakeMpGamerTag(
    ped_number,
    username_string,
    pointedClanTag_boolean,
    isRockstarClan_boolean,
    clanTag_string,
    p5_number
  ) {}
  removeMpGamerTag(gamerTagId_number) {}
  isMpGamerTagActive(gamerTagId_number) {}
  isMpGamerTagFree(gamerTagId_number) {}
  setMpGamerTagVisibility(
    gamerTagId_number,
    component_number,
    toggle_boolean,
    p3_number
  ) {}
  _0xEE76FF7E6A0166B0(gamerTagId_number, p1_boolean) {}
  setMpGamerTagIcons(gamerTagId_number, p1_boolean) {}
  setMpGamerHealthBarDisplay(p0_number, p1_number) {}
  setMpGamerHealthBarMax(p0_number, p1_number, p2_number) {}
  setMpGamerTagColour(gamerTagId_number, flag_number, color_number) {}
  setMpGamerTagHealthBarColour(headDisplayId_number, color_number) {}
  setMpGamerTagAlpha(gamerTagId_number, component_number, alpha_number) {}
  setMpGamerTagWantedLevel(gamerTagId_number, wantedlvl_number) {}
  setMpGamerTagUnk(gamerTagId_number, p1_number) {}
  setMpGamerTagName(gamerTagId_number, string_string) {}
  isValidMpGamerTagMovie(gamerTagId_number) {}
  setMpGamerTagBigText(gamerTagId_number, string_string) {}
  getCurrentWebpageId() {}
  getCurrentWebsiteId() {}
  _0xE3B05614DCE1D014(p0_number) {}
  _0xB99C4E4D9499DF29(p0_number) {}
  isWarningMessageActive2() {}
  setWarningMessage(
    titleMsg_string,
    flags_number,
    promptMsg_string,
    p3_boolean,
    p4_number,
    p5_string,
    p6_string,
    showBg_boolean,
    p8_number
  ) {}
  setWarningMessageWithHeader(
    titleMsg_string,
    p1_string,
    flags_number,
    promptMsg_string,
    p4_boolean,
    p5_number,
    p6_number,
    p7_number,
    showBg_boolean,
    p9_number
  ) {}
  setWarningMessageWithHeaderAndSubstringFlags(
    entryHeader_string,
    entryLine1_string,
    instructionalKey_number,
    entryLine2_string,
    p4_boolean,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_boolean,
    p10_number
  ) {}
  setWarningMessageWithHeaderUnk(
    entryHeader_string,
    entryLine1_string,
    flags_number,
    entryLine2_string,
    p4_boolean,
    p5_number,
    p6_number,
    p7_number,
    showBg_boolean,
    p9_number,
    p10_number
  ) {}
  setWarningMessage4(
    p0_string,
    p1_string,
    p2_number,
    p3_number,
    p4_string,
    p5_boolean,
    p6_number,
    p7_number,
    p8_string,
    p9_string,
    p10_boolean,
    p11_number
  ) {}
  getWarningMessageTitleHash() {}
  setWarningMessageListRow(
    index_number,
    name_string,
    cash_number,
    rp_number,
    lvl_number,
    colour_number
  ) {}
  _0xDAF87174BE7454FF(p0_number) {}
  removeWarningMessageListItems() {}
  isWarningMessageActive() {}
  clearDynamicPauseMenuErrorMessage() {}
  raceGalleryFullscreen(toggle_boolean) {}
  raceGalleryNextBlipSprite(p0_number) {}
  raceGalleryAddBlip(p0_number, p1_number, p2_number) {}
  clearRaceGalleryBlips() {}
  forceSonarBlipsThisFrame() {}
  _0x3F0CF9CB7E589B88() {}
  _0x82CEDC33687E1F50(p0_boolean) {}
  _0x211C4EF450086857() {}
  _0xBF4F34A85CA2970C() {}
  activateFrontendMenu(
    menuhash_number,
    togglePause_boolean,
    component_number
  ) {}
  restartFrontendMenu(menuHash_number, p1_number) {}
  getCurrentFrontendMenuVersion() {}
  setPauseMenuActive(toggle_boolean) {}
  disableFrontendThisFrame() {}
  suppressFrontendRenderingThisFrame() {}
  allowPauseMenuWhenDeadThisFrame() {}
  setFrontendActive(active_boolean) {}
  isPauseMenuActive() {}
  _0x2F057596F2BD0061() {}
  getPauseMenuState() {}
  _0x5BFF36D6ED83E0AE() {}
  isPauseMenuRestarting() {}
  logDebugInfo(p0_string) {}
  _0x77F16B447824DA6C(p0_number) {}
  _0xCDCA26E80FAECB8F() {}
  _0x2DE6C5E2E996F178(p0_number) {}
  pauseMenuActivateContext(contextHash_number) {}
  pauseMenuDeactivateContext(contextHash_number) {}
  pauseMenuIsContextActive(contextHash_number) {}
  _0x2A25ADC48F87841F() {}
  _0xDE03620F8703A9DF() {}
  _0x359AF31A4B52F5ED() {}
  _0x13C4B962653A5280() {}
  _0xC8E1071177A23BE5(p0_number, p1_number, p2_number) {}
  _0x4895BDEA16E7C080(p0_number) {}
  _0xC78E239AC5B2DDB9(p0_boolean, p1_number, p2_number) {}
  _0xF06EBB91A81E09E3(p0_boolean) {}
  isFrontendReadyForControl() {}
  _0xEC9264727EEC0F28() {}
  _0x14621BB1DF14E2B2() {}
  _0x66E7CB63C97B7D20() {}
  _0x593FEAE1F73392D4() {}
  _0x4E3CD0EF8A489541() {}
  _0xF284AC67940C6812() {}
  _0x2E22FEFA0100275E() {}
  _0x0CF54F20DE43879C(p0_number) {}
  _0x36C1451A88A09630(p0_number, p1_number) {}
  _0x7E17BE53E1AAABAF(p0_number, p1_number, p2_number) {}
  _0xA238192F33110615(p0_number, p1_number, p2_number) {}
  _0xEF4CED81CEBEDC6D(p0_number, p1_number) {}
  _0xCA6B2F7CE32AB653(p0_number, p1_number, p2_number) {}
  _0x90A6526CF0381030(p0_number, p1_number, p2_number, p3_number) {}
  _0x24A49BEAF468DC90(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  _0x5FBD7095FE7AE57F(p0_number, p1_number) {}
  _0x8F08017F9D7C47BD(p0_number, p1_number, p2_number) {}
  _0x052991E59076E4E4(p0_number, p1_number) {}
  clearPedInPauseMenu() {}
  givePedToPauseMenu(ped_number, p1_number) {}
  setPauseMenuPedLighting(p0_boolean) {}
  setPauseMenuPedSleepState(state_boolean) {}
  openOnlinePoliciesMenu() {}
  _0xF13FE2A80C05C561() {}
  isOnlinePoliciesMenuActive() {}
  openSocialClubMenu() {}
  closeSocialClubMenu() {}
  setSocialClubTour(name_string) {}
  isSocialClubActive() {}
  _0x1185A8087587322C(p0_boolean) {}
  forceCloseTextInputBox() {}
  _0x577599CCED639CA2(p0_number) {}
  overrideMultiplayerChatPrefix(p0_number) {}
  isMultiplayerChatActive() {}
  closeMultiplayerChat() {}
  _0x7C226D5346D4D10A(p0_number) {}
  overrideMultiplayerChatColour(p0_number, p1_number) {}
  setTextChatUnk(p0_boolean) {}
  flagPlayerContextInTournament(toggle_boolean) {}
  setPedHasAiBlip(ped_number, hasCone_boolean) {}
  setPedHasAiBlipWithColor(ped_number, hasCone_boolean, color_number) {}
  doesPedHaveAiBlip(ped_number) {}
  setPedAiBlipGangId(ped_number, gangId_number) {}
  setPedAiBlipHasCone(ped_number, toggle_boolean) {}
  setPedAiBlipForcedOn(ped_number, toggle_boolean) {}
  setPedAiBlipNoticeRange(ped_number, range_number) {}
  setPedAiBlipSprite(ped_number, spriteId_number) {}
  getAiBlip2(ped_number) {}
  getAiBlip(ped_number) {}
  hasDirectorModeBeenTriggered() {}
  setDirectorModeClearTriggeredFlag() {}
  setPlayerIsInDirectorMode(toggle_boolean) {}
  _0x04655F9D075D0AE5(toggle_boolean) {}
  //Category: Interior
  getInteriorHeading(interior_number) {}
  getInteriorInfo(interior_number, position_vector3Ptr, nameHash_number) {}
  getInteriorGroupId(interior_number) {}
  getOffsetFromInteriorInWorldCoords(
    interior_number,
    x_number,
    y_number,
    z_number
  ) {}
  isInteriorScene() {}
  isValidInterior(interior_number) {}
  clearRoomForEntity(entity_number) {}
  forceRoomForEntity(entity_number, interior_number, roomHashKey_number) {}
  getRoomKeyFromEntity(entity_number) {}
  getKeyForEntityInRoom(entity_number) {}
  getInteriorFromEntity(entity_number) {}
  _0x82EBB79E258FA2B7(entity_number, interior_number) {}
  _0x38C1CB1CB119A016(p0_number, p1_number) {}
  forceRoomForGameViewport(interiorID_number, roomHashKey_number) {}
  _0xAF348AFCB575A441(roomName_string) {}
  _0x405DC2AEF6AF95B9(roomHashKey_number) {}
  getRoomKeyForGameViewport() {}
  clearRoomForGameViewport() {}
  _0xE7D267EC6CA966C3() {}
  getInteriorAtCoords(x_number, y_number, z_number) {}
  addPickupToInteriorRoomByName(pickup_number, roomName_string) {}
  pinInteriorInMemory(interior_number) {}
  unpinInterior(interior_number) {}
  isInteriorReady(interior_number) {}
  _0x4C2330E61D3DEB56(interior_number) {}
  getInteriorAtCoordsWithType(
    x_number,
    y_number,
    z_number,
    interiorType_string
  ) {}
  getInteriorAtCoordsWithTypehash(
    x_number,
    y_number,
    z_number,
    typeHash_number
  ) {}
  _0x483ACA1176CA93F1() {}
  areCoordsCollidingWithExterior(x_number, y_number, z_number) {}
  getInteriorFromCollision(x_number, y_number, z_number) {}
  _0x7ECDF98587E92DEC(p0_number) {}
  activateInteriorEntitySet(interior_number, entitySetName_string) {}
  deactivateInteriorEntitySet(interior_number, entitySetName_string) {}
  isInteriorEntitySetActive(interior_number, entitySetName_string) {}
  setInteriorEntitySetColor(
    interior_number,
    entitySetName_string,
    color_number
  ) {}
  refreshInterior(interior_number) {}
  enableExteriorCullModelThisFrame(mapObjectHash_number) {}
  enableScriptCullModelThisFrame(p0_number) {}
  disableInterior(interior_number, toggle_boolean) {}
  isInteriorDisabled(interior_number) {}
  capInterior(interior_number, toggle_boolean) {}
  isInteriorCapped(interior_number) {}
  _0x9E6542F0CE8E70A3(toggle_boolean) {}
  _0x7241CCB7D020DB69(entity_number, toggle_boolean) {}
  //Category: Itemset
  createItemset(p0_boolean) {}
  destroyItemset(p0_number) {}
  isItemsetValid(p0_number) {}
  addToItemset(p0_number, p1_number) {}
  removeFromItemset(p0_number, p1_number) {}
  getItemsetSize(x_number) {}
  getIndexedItemInItemset(p0_number, p1_number) {}
  isInItemset(p0_number, p1_number) {}
  cleanItemset(p0_number) {}
  //Category: Loadingscreen
  _0xF2CA003F167E21D2() {}
  loadingscreenGetLoadFreemode() {}
  loadingscreenSetLoadFreemode(toggle_boolean) {}
  loadingscreenGetLoadFreemodeWithEventName() {}
  loadingscreenSetLoadFreemodeWithEventName(toggle_boolean) {}
  loadingscreenIsLoadingFreemode() {}
  loadingscreenSetIsLoadingFreemode(toggle_boolean) {}
  _0xFA1E0E893D915215(toggle_boolean) {}
  //Category: Localization
  localizationGetSystemLanguage() {}
  getCurrentLanguage() {}
  localizationGetUserLanguage() {}
  //Category: Misc
  getAllocatedStackSize() {}
  getNumberOfFreeStacksOfThisSize(stackSize_number) {}
  setRandomSeed(seed_number) {}
  setTimeScale(timeScale_number) {}
  setMissionFlag(toggle_boolean) {}
  getMissionFlag() {}
  setRandomEventFlag(toggle_boolean) {}
  getRandomEventFlag() {}
  getGlobalCharBuffer() {}
  _0x4DCDF92BF64236CD(p0_string, p1_string) {}
  _0x31125FD509D9043F(p0_string) {}
  _0xEBD3205A207939ED(p0_string) {}
  _0x97E7E2C04245115B(p0_number) {}
  _0xEB078CA2B5E82ADD(p0_string, p1_string) {}
  _0x703CC7F60CBB2B57(p0_string) {}
  _0x8951EB9C6906D3C8() {}
  _0xBA4B8D83BDC75551(p0_string) {}
  hasResumedFromSuspend() {}
  _0x65D2EBB47E1CEC21(toggle_boolean) {}
  _0x6F2135B6129620C1(toggle_boolean) {}
  _0x8D74E26F54B4E5C3(p0_string) {}
  getBaseElementMetadata(p0_number, p1_number, p2_number, p3_boolean) {}
  getPrevWeatherTypeHashName() {}
  getNextWeatherTypeHashName() {}
  isPrevWeatherType(weatherType_string) {}
  isNextWeatherType(weatherType_string) {}
  setWeatherTypePersist(weatherType_string) {}
  setWeatherTypeNowPersist(weatherType_string) {}
  setWeatherTypeNow(weatherType_string) {}
  setWeatherTypeOvertimePersist(weatherType_string, time_number) {}
  setRandomWeatherType() {}
  clearWeatherTypePersist() {}
  _0x0CF97F497FE7D048(p0_number) {}
  getWeatherTypeTransition(
    weatherType1_number,
    weatherType2_number,
    percentWeather2_number
  ) {}
  setWeatherTypeTransition(
    weatherType1_number,
    weatherType2_number,
    percentWeather2_number
  ) {}
  setOverrideWeather(weatherType_string) {}
  clearOverrideWeather() {}
  _0xB8F87EAD7533B176(p0_number) {}
  _0xC3EAD29AB273ECE8(p0_number) {}
  _0xA7A1127490312C36(p0_number) {}
  _0x31727907B2C43C55(p0_number) {}
  _0x405591EC8FD9096D(p0_number) {}
  _0xF751B16FB32ABC1D(p0_number) {}
  _0xB3E6360DDE733E82(p0_number) {}
  _0x7C9C0B1EEB1F9072(p0_number) {}
  _0x6216B116083A7CB4(p0_number) {}
  _0x9F5E6BB6B34540DA(p0_number) {}
  _0xB9854DFDE0D833D6(p0_number) {}
  _0xC54A08C85AE4D410(p0_number) {}
  _0xA8434F1DFF41D6E7(p0_number) {}
  _0xC3C221ADDDE31A11(p0_number) {}
  setWind(speed_number) {}
  setWindSpeed(speed_number) {}
  getWindSpeed() {}
  setWindDirection(direction_number) {}
  getWindDirection() {}
  setRainFxIntensity(intensity_number) {}
  getRainLevel() {}
  getSnowLevel() {}
  forceLightningFlash() {}
  _0x02DEAAC8F8EA7FE7(p0_string) {}
  preloadCloudHat(name_string) {}
  loadCloudHat(name_string, transitionTime_number) {}
  unloadCloudHat(name_string, p1_number) {}
  clearCloudHat() {}
  setCloudHatOpacity(opacity_number) {}
  getCloudHatOpacity() {}
  getGameTimer() {}
  getFrameTime() {}
  getBenchmarkTime() {}
  getFrameCount() {}
  getRandomFloatInRange(startRange_number, endRange_number) {}
  getRandomIntInRange(startRange_number, endRange_number) {}
  getRandomIntInRange2(startRange_number, endRange_number) {}
  getGroundZFor3dCoord(
    x_number,
    y_number,
    z_number,
    groundZ_number,
    unk_boolean,
    p5_boolean
  ) {}
  getGroundZAndNormalFor3dCoord(
    x_number,
    y_number,
    z_number,
    groundZ_number,
    normal_vector3Ptr
  ) {}
  getGroundZFor3dCoord2(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  asin(p0_number) {}
  acos(p0_number) {}
  tan(p0_number) {}
  atan(p0_number) {}
  atan2(p0_number, p1_number) {}
  getDistanceBetweenCoords(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    useZ_boolean
  ) {}
  getAngleBetween2dVectors(x1_number, y1_number, x2_number, y2_number) {}
  getHeadingFromVector2d(dx_number, dy_number) {}
  _0x7F8F6405F4777AF6(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_boolean
  ) {}
  _0x21C235BC64831E5A(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_boolean
  ) {}
  _0xF56DFB7B61BE7276(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number,
    p12_number
  ) {}
  setBit(address_number, offset_number) {}
  clearBit(address_number, offset_number) {}
  getHashKey(string_string) {}
  slerpNearQuaternion(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number,
    p12_number
  ) {}
  isAreaOccupied(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_boolean,
    p7_boolean,
    p8_boolean,
    p9_boolean,
    p10_boolean,
    p11_number,
    p12_boolean
  ) {}
  isPositionOccupied(
    x_number,
    y_number,
    z_number,
    range_number,
    p4_boolean,
    p5_boolean,
    p6_boolean,
    p7_boolean,
    p8_boolean,
    p9_number,
    p10_boolean
  ) {}
  isPointObscuredByAMissionEntity(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  clearArea(
    X_number,
    Y_number,
    Z_number,
    radius_number,
    p4_boolean,
    ignoreCopCars_boolean,
    ignoreObjects_boolean,
    p7_boolean
  ) {}
  clearAreaOfEverything(
    x_number,
    y_number,
    z_number,
    radius_number,
    p4_boolean,
    p5_boolean,
    p6_boolean,
    p7_boolean
  ) {}
  clearAreaOfVehicles(
    x_number,
    y_number,
    z_number,
    radius_number,
    p4_boolean,
    p5_boolean,
    p6_boolean,
    p7_boolean,
    p8_boolean,
    p9_boolean
  ) {}
  clearAngledAreaOfVehicles(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_boolean,
    p8_boolean,
    p9_boolean,
    p10_boolean,
    p11_boolean,
    p12_number
  ) {}
  clearAreaOfObjects(
    x_number,
    y_number,
    z_number,
    radius_number,
    flags_number
  ) {}
  clearAreaOfPeds(x_number, y_number, z_number, radius_number, flags_number) {}
  clearAreaOfCops(x_number, y_number, z_number, radius_number, flags_number) {}
  clearAreaOfProjectiles(
    x_number,
    y_number,
    z_number,
    radius_number,
    flags_number
  ) {}
  _0x7EC6F9A478A6A512() {}
  setSaveMenuActive(ignoreVehicle_boolean) {}
  _0x397BAA01068BAA96() {}
  setCreditsActive(toggle_boolean) {}
  _0xB51B9AB9EF81868C(toggle_boolean) {}
  haveCreditsReachedEnd() {}
  terminateAllScriptsWithThisName(scriptName_string) {}
  networkSetScriptIsSafeForNetworkGame() {}
  addHospitalRestart(x_number, y_number, z_number, p3_number, p4_number) {}
  disableHospitalRestart(hospitalIndex_number, toggle_boolean) {}
  addPoliceRestart(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  disablePoliceRestart(policeIndex_number, toggle_boolean) {}
  setRestartCustomPosition(x_number, y_number, z_number, heading_number) {}
  clearRestartCustomPosition() {}
  pauseDeathArrestRestart(toggle_boolean) {}
  ignoreNextRestart(toggle_boolean) {}
  setFadeOutAfterDeath(toggle_boolean) {}
  setFadeOutAfterArrest(toggle_boolean) {}
  setFadeInAfterDeathArrest(toggle_boolean) {}
  setFadeInAfterLoad(toggle_boolean) {}
  registerSaveHouse(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  setSaveHouse(p0_number, p1_boolean, p2_boolean) {}
  overrideSaveHouse(
    p0_boolean,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_boolean,
    p6_number,
    p7_number
  ) {}
  _0xA4A0065E39C9F25C(
    p0_vector3Ptr,
    p1_number,
    fadeInAfterLoad_boolean,
    p3_boolean
  ) {}
  doAutoSave() {}
  getIsAutoSaveOff() {}
  isAutoSaveInProgress() {}
  _0x2107A3773771186D() {}
  _0x06462A961E94B67C() {}
  beginReplayStats(p0_number, p1_number) {}
  addReplayStatValue(value_number) {}
  endReplayStats() {}
  _0xD642319C54AADEB6() {}
  _0x5B1F2E327B6B6FE1() {}
  getReplayStatMissionType() {}
  getReplayStatCount() {}
  getReplayStatAtIndex(index_number) {}
  clearReplayStats() {}
  _0x72DE52178C291CB5() {}
  _0x44A0BDC559B35F6E() {}
  _0xEB2104E905C6F2E9() {}
  _0x2B5E102E4A42F2BF() {}
  isMemoryCardInUse() {}
  shootSingleBulletBetweenCoords(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    damage_number,
    p7_boolean,
    weaponHash_number,
    ownerPed_number,
    isAudible_boolean,
    isInvisible_boolean,
    speed_number
  ) {}
  shootSingleBulletBetweenCoordsIgnoreEntity(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    damage_number,
    p7_boolean,
    weaponHash_number,
    ownerPed_number,
    isAudible_boolean,
    isInvisible_boolean,
    speed_number,
    entity_number,
    p14_number
  ) {}
  shootSingleBulletBetweenCoordsIgnoreEntityNew(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    damage_number,
    p7_boolean,
    weaponHash_number,
    ownerPed_number,
    isAudible_boolean,
    isInvisible_boolean,
    speed_number,
    entity_number,
    p14_boolean,
    p15_boolean,
    p16_boolean,
    p17_boolean,
    p18_number,
    p19_number
  ) {}
  getModelDimensions(
    modelHash_number,
    minimum_vector3Ptr,
    maximum_vector3Ptr
  ) {}
  setFakeWantedLevel(fakeWantedLevel_number) {}
  getFakeWantedLevel() {}
  isBitSet(address_number, offset_number) {}
  usingMissionCreator(toggle_boolean) {}
  allowMissionCreatorWarp(toggle_boolean) {}
  setMinigameInProgress(toggle_boolean) {}
  isMinigameInProgress() {}
  isThisAMinigameScript() {}
  isSniperInverted() {}
  shouldUseMetricMeasurements() {}
  getProfileSetting(profileSetting_number) {}
  areStringsEqual(string1_string, string2_string) {}
  compareStrings(
    str1_string,
    str2_string,
    matchCase_boolean,
    maxLength_number
  ) {}
  absi(value_number) {}
  absf(value_number) {}
  isSniperBulletInArea(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number
  ) {}
  isProjectileInArea(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    ownedByPlayer_boolean
  ) {}
  isProjectileTypeInArea(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    type_number,
    p7_boolean
  ) {}
  isProjectileTypeInAngledArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_boolean
  ) {}
  isProjectileTypeInRadius(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_boolean
  ) {}
  getIsProjectileTypeInArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number
  ) {}
  getProjectileNearPedCoords(
    ped_number,
    weaponHash_number,
    radius_number,
    entity_number,
    p4_boolean
  ) {}
  getProjectileNearPed(
    ped_number,
    weaponhash_number,
    p2_number,
    p3_number,
    p4_number,
    p5_boolean
  ) {}
  isBulletInAngledArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_boolean
  ) {}
  isBulletInArea(p0_number, p1_number, p2_number, p3_number, p4_boolean) {}
  isBulletInBox(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_boolean
  ) {}
  hasBulletImpactedInArea(
    x_number,
    y_number,
    z_number,
    p3_number,
    p4_boolean,
    p5_boolean
  ) {}
  hasBulletImpactedInBox(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_boolean,
    p7_boolean
  ) {}
  isOrbisVersion() {}
  isDurangoVersion() {}
  isXbox360Version() {}
  isPs3Version() {}
  isPcVersion() {}
  isAussieVersion() {}
  isStringNull(string_string) {}
  isStringNullOrEmpty(string_string) {}
  stringToInt(string_string, outInteger_number) {}
  setBitsInRange(
    unkVar_number,
    rangeStart_number,
    rangeEnd_number,
    p3_number
  ) {}
  getBitsInRange(unkVar_number, rangeStart_number, rangeEnd_number) {}
  addStuntJump(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number,
    p12_number,
    p13_number,
    p14_number,
    p15_number,
    p16_number,
    p17_number
  ) {}
  addStuntJumpAngled(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number,
    p12_number,
    p13_number,
    p14_number,
    p15_number,
    p16_number,
    p17_number,
    p18_number,
    p19_number
  ) {}
  _0xFB80AB299D2EE1BD(toggle_boolean) {}
  deleteStuntJump(p0_number) {}
  enableStuntJumpSet(p0_number) {}
  disableStuntJumpSet(p0_number) {}
  setStuntJumpsCanTrigger(toggle_boolean) {}
  isStuntJumpInProgress() {}
  isStuntJumpMessageShowing() {}
  getNumSuccessfulStuntJumps() {}
  getTotalSuccessfulStuntJumps() {}
  cancelStuntJump() {}
  setGamePaused(toggle_boolean) {}
  setThisScriptCanBePaused(toggle_boolean) {}
  setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle_boolean) {}
  hasButtonCombinationJustBeenEntered(hash_number, amount_number) {}
  hasCheatStringJustBeenEntered(hash_number) {}
  setInstancePriorityMode(p0_number) {}
  setInstancePriorityHint(flag_number) {}
  isFrontendFading() {}
  populateNow() {}
  getIndexOfCurrentLevel() {}
  setGravityLevel(level_number) {}
  startSaveData(p0_number, p1_number, p2_boolean) {}
  stopSaveData() {}
  _0xA09F896CE912481F(p0_boolean) {}
  registerIntToSave(p0_number, name_string) {}
  registerInt64ToSave(p0_number, name_string) {}
  registerEnumToSave(p0_number, name_string) {}
  registerFloatToSave(p0_number, name_string) {}
  registerBoolToSave(p0_number, name_string) {}
  registerTextLabelToSave(p0_number, name_string) {}
  registerTextLabelToSave2(p0_number, name_string) {}
  _0x48F069265A0E4BEC(p0_number, name_string) {}
  _0x8269816F6CFD40F8(p0_number, name_string) {}
  _0xFAA457EF263E8763(p0_number, name_string) {}
  startSaveStructWithSize(p0_number, size_number, structName_string) {}
  stopSaveStruct() {}
  startSaveArrayWithSize(p0_number, size_number, arrayName_string) {}
  stopSaveArray() {}
  copyMemory(dst_number, src_number, size_number) {}
  enableDispatchService(dispatchService_number, toggle_boolean) {}
  blockDispatchServiceResourceCreation(
    dispatchService_number,
    toggle_boolean
  ) {}
  getNumDispatchedUnitsForPlayer(dispatchService_number) {}
  createIncident(
    dispatchService_number,
    x_number,
    y_number,
    z_number,
    numUnits_number,
    radius_number,
    outIncidentID_number,
    p7_number,
    p8_number
  ) {}
  createIncidentWithEntity(
    dispatchService_number,
    ped_number,
    numUnits_number,
    radius_number,
    outIncidentID_number,
    p5_number,
    p6_number
  ) {}
  deleteIncident(incidentId_number) {}
  isIncidentValid(incidentId_number) {}
  setIncidentRequestedUnits(
    incidentId_number,
    dispatchService_number,
    numUnits_number
  ) {}
  setIncidentUnk(incidentId_number, p1_number) {}
  findSpawnPointInDirection(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    distance_number,
    spawnPoint_vector3Ptr
  ) {}
  addPopMultiplierArea(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    p6_number,
    p7_number,
    p8_boolean,
    p9_boolean
  ) {}
  doesPopMultiplierAreaExist(id_number) {}
  removePopMultiplierArea(id_number, p1_boolean) {}
  isPopMultiplierAreaUnk(id_number) {}
  addPopMultiplierSphere(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_boolean,
    p7_boolean
  ) {}
  doesPopMultiplierSphereExist(id_number) {}
  removePopMultiplierSphere(id_number, p1_boolean) {}
  enableTennisMode(ped_number, toggle_boolean, p2_boolean) {}
  isTennisMode(ped_number) {}
  playTennisSwingAnim(
    ped_number,
    animDict_string,
    animName_string,
    p3_number,
    p4_number,
    p5_boolean
  ) {}
  getTennisSwingAnimComplete(ped_number) {}
  _0x19BFED045C647C49(ped_number) {}
  _0xE95B0C7D5BA3B96B(ped_number) {}
  playTennisDiveAnim(
    ped_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_boolean
  ) {}
  _0x54F157E0336A3822(ped_number, p1_string, p2_number) {}
  setDispatchSpawnLocation(x_number, y_number, z_number) {}
  resetDispatchIdealSpawnDistance() {}
  setDispatchIdealSpawnDistance(p0_number) {}
  resetDispatchTimeBetweenSpawnAttempts(p0_number) {}
  setDispatchTimeBetweenSpawnAttempts(p0_number, p1_number) {}
  setDispatchTimeBetweenSpawnAttemptsMultiplier(p0_number, p1_number) {}
  addDispatchSpawnBlockingAngledArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  addDispatchSpawnBlockingArea(p0_number, p1_number, p2_number, p3_number) {}
  removeDispatchSpawnBlockingArea(p0_number) {}
  resetDispatchSpawnBlockingAreas() {}
  _0xD9F692D349249528() {}
  _0xE532EC1A63231B4F(p0_number, p1_number) {}
  addTacticalAnalysisPoint(p0_number, p1_number, p2_number) {}
  clearTacticalAnalysisPoints() {}
  _0x2587A48BC88DFADF(p0_boolean) {}
  displayOnscreenKeyboardWithLongerInitialString(
    p0_number,
    windowTitle_string,
    p2_number,
    defaultText_string,
    defaultConcat1_string,
    defaultConcat2_string,
    defaultConcat3_string,
    defaultConcat4_string,
    defaultConcat5_string,
    defaultConcat6_string,
    defaultConcat7_string,
    maxInputLength_number
  ) {}
  displayOnscreenKeyboard(
    p0_number,
    windowTitle_string,
    p2_string,
    defaultText_string,
    defaultConcat1_string,
    defaultConcat2_string,
    defaultConcat3_string,
    maxInputLength_number
  ) {}
  updateOnscreenKeyboard() {}
  getOnscreenKeyboardResult() {}
  cancelOnscreenKeyboard() {}
  _0x3ED1438C1F5C6612(p0_number) {}
  removeStealthKill(hash_number, p1_boolean) {}
  _0x1EAE0A6E978894A2(p0_number, p1_boolean) {}
  setExplosiveAmmoThisFrame(player_number) {}
  setFireAmmoThisFrame(player_number) {}
  setExplosiveMeleeThisFrame(player_number) {}
  setSuperJumpThisFrame(player_number) {}
  _0x438822C279B73B93(p0_number) {}
  _0xA1183BCFEE0F93D1(p0_number) {}
  _0x6FDDF453C0C756EC() {}
  _0xFB00CA71DA386228() {}
  areProfileSettingsValid() {}
  _0xE3D969D2785FFB5E() {}
  resetLocalplayerState() {}
  _0x0A60017F841A54F2(p0_number, p1_number, p2_number, p3_number) {}
  _0x1FF6BF9A63E5757F() {}
  _0x1BB299305C3E8C13(p0_number, p1_number, p2_number, p3_number) {}
  _0x8EF5573A1F801A5C(p0_number, p1_number, p2_number) {}
  startBenchmarkRecording() {}
  stopBenchmarkRecording() {}
  resetBenchmarkRecording() {}
  saveBenchmarkRecording() {}
  uiIsSingleplayerPauseMenuActive() {}
  landingMenuIsActive() {}
  isCommandLineBenchmarkValueSet() {}
  getBenchmarkIterationsFromCommandLine() {}
  getBenchmarkPassFromCommandLine() {}
  restartGame() {}
  forceSocialClubUpdate() {}
  hasAsyncInstallFinished() {}
  cleanupAsyncInstall() {}
  isInPowerSavingMode() {}
  getPowerSavingModeDuration() {}
  setPlayerIsInAnimalForm(toggle_boolean) {}
  getIsPlayerInAnimalForm() {}
  setPlayerRockstarEditorDisabled(toggle_boolean) {}
  _0x23227DF0B2115469() {}
  _0xD10282B6E3751BA0() {}
  _0x693478ACBD7F18E7() {}
  //Category: Mobile
  createMobilePhone(phoneType_number) {}
  destroyMobilePhone() {}
  setMobilePhoneScale(scale_number) {}
  setMobilePhoneRotation(rotX_number, rotY_number, rotZ_number, p3_number) {}
  getMobilePhoneRotation(rotation_vector3Ptr, p1_number) {}
  setMobilePhonePosition(posX_number, posY_number, posZ_number) {}
  getMobilePhonePosition(position_vector3Ptr) {}
  scriptIsMovingMobilePhoneOffscreen(toggle_boolean) {}
  canPhoneBeSeenOnScreen() {}
  setMobilePhoneUnk(toggle_boolean) {}
  cellCamMoveFinger(direction_number) {}
  cellCamSetLean(toggle_boolean) {}
  cellCamActivate(p0_boolean, p1_boolean) {}
  cellCamDisableThisFrame(toggle_boolean) {}
  _0xA2CCBE62CD4C91A4(toggle_number) {}
  _0x1B0B4AEED5B9B41C(p0_number) {}
  _0x53F4892D18EC90A4(p0_number) {}
  _0x3117D84EFA60F77B(p0_number) {}
  _0x15E69E2802C24B8D(p0_number) {}
  _0xAC2890471901861C(p0_number) {}
  _0xD6ADE981781FCA09(p0_number) {}
  _0xF1E22DC13F5EEBAD(p0_number) {}
  _0x466DA42C89865553(p0_number) {}
  cellCamIsCharVisibleNoFaceCheck(entity_number) {}
  getMobilePhoneRenderId(renderId_number) {}
  //Category: Money
  networkInitializeCash(wallet_number, bank_number) {}
  networkDeleteCharacter(characterSlot_number, p1_boolean, p2_boolean) {}
  networkManualDeleteCharacter(characterSlot_number) {}
  networkGetIsHighEarner() {}
  networkClearCharacterWallet(characterSlot_number) {}
  networkGivePlayerJobshareCash(amount_number, networkHandle_number) {}
  networkReceivePlayerJobshareCash(value_number, networkHandle_number) {}
  networkCanShareJobCash() {}
  networkRefundCash(index_number, context_string, reason_string, unk_boolean) {}
  networkDeductCash(
    amount_number,
    p1_string,
    p2_string,
    p3_boolean,
    p4_boolean,
    p5_boolean
  ) {}
  networkMoneyCanBet(amount_number, p1_boolean, p2_boolean) {}
  networkCanBet(amount_number) {}
  networkCanBuyLotteryTicket(cost_number) {}
  networkCasinoCanUseGamblingType(hash_number) {}
  networkCasinoCanPurchaseChipsWithPvc() {}
  networkCasinoCanGamble(p0_number) {}
  networkCasinoCanPurchaseChipsWithPvc2() {}
  networkCasinoPurchaseChips(p0_number, p1_number) {}
  networkCasinoSellChips(p0_number, p1_number) {}
  _0xCD0F5B5D932AE473() {}
  canPayGoon(p0_number, p1_number, amount_number, p3_number) {}
  networkEarnFromCashingOut(amount_number) {}
  networkEarnFromPickup(amount_number) {}
  networkEarnFromGangPickup(amount_number) {}
  networkEarnFromAssassinateTargetKilled(amount_number) {}
  networkEarnFromArmourTruck(amount_number) {}
  networkEarnFromCrateDrop(amount_number) {}
  networkEarnFromBetting(amount_number, p1_string) {}
  networkEarnFromJob(amount_number, p1_string) {}
  networkEarnFromJobX2(amount_number, p1_string) {}
  networkEarnFromPremiumJob(amount_number, p1_string) {}
  networkEarnFromBendJob(amount_number, heistHash_string) {}
  networkEarnFromChallengeWin(p0_number, p1_number, p2_boolean) {}
  networkEarnFromBounty(
    amount_number,
    networkHandle_number,
    p2_number,
    p3_number
  ) {}
  networkEarnFromImportExport(amount_number, modelHash_number) {}
  networkEarnFromHoldups(amount_number) {}
  networkEarnFromProperty(amount_number, propertyName_number) {}
  networkEarnFromAiTargetKill(p0_number, p1_number) {}
  networkEarnFromNotBadsport(amount_number) {}
  networkEarnFromRockstar(amount_number) {}
  networkEarnFromVehicle(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number
  ) {}
  networkEarnFromPersonalVehicle(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number
  ) {}
  networkEarnFromDailyObjectives(p0_number, p1_string, p2_number) {}
  networkEarnFromAmbientJob(p0_number, p1_string, p2_number) {}
  _0xD20D79671A598594(p0_number, p1_number, p2_number) {}
  networkEarnFromJobBonus(p0_number, p1_number, p2_number) {}
  _0x9D4FDBB035229669(p0_number, p1_number, p2_number) {}
  _0x11B0A20C493F7E36(p0_number, p1_number, p2_number) {}
  _0xCDA1C62BE2777802(p0_number, p1_number, p2_number) {}
  _0x08B0CA7A6AB3AC32(p0_number, p1_number, p2_number) {}
  _0x0CB1BE0633C024A8(p0_number, p1_number, p2_number, p3_number) {}
  networkEarnFromWarehouse(amount_number, id_number) {}
  networkEarnFromContraband(amount_number, p1_number) {}
  _0x84C0116D012E8FC2(p0_number) {}
  _0x6B7E4FB50D5F3D65(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  _0x31BA138F6304FB9F(p0_number, p1_number) {}
  _0x55A1E095DB052FA5(p0_number, p1_number) {}
  networkEarnFromBusinessProduct(
    amount_number,
    p1_number,
    p2_number,
    p3_number
  ) {}
  networkEarnFromVehicleExport(amount_number, p1_number, p2_number) {}
  networkEarnFromSmuggling(amount_number, p1_number, p2_number, p3_number) {}
  _0xF6B170F9A02E9E87(p0_number) {}
  _0x42FCE14F50F27291(p0_number) {}
  _0xA75EAC69F59E96E7(p0_number) {}
  _0xC5156361F26E2212(p0_number) {}
  _0x0B39CF0D53F1C883(p0_number, p1_number, p2_number) {}
  _0x1FDA0AA679C9919B(p0_number) {}
  _0xFFFBA1B1F7C0B6F4(p0_number) {}
  networkCanSpendMoney(
    p0_number,
    p1_boolean,
    p2_boolean,
    p3_boolean,
    p4_number,
    p5_number
  ) {}
  networkCanSpendMoney2(
    p0_number,
    p1_boolean,
    p2_boolean,
    p3_boolean,
    p4_number,
    p5_number,
    p6_number
  ) {}
  networkBuyItem(
    amount_number,
    item_number,
    p2_number,
    p3_number,
    p4_boolean,
    item_name_string,
    p6_number,
    p7_number,
    p8_number,
    p9_boolean
  ) {}
  networkSpentTaxi(amount_number, p1_boolean, p2_boolean) {}
  networkPayEmployeeWage(p0_number, p1_boolean, p2_boolean) {}
  networkPayUtilityBill(amount_number, p1_boolean, p2_boolean) {}
  networkPayMatchEntryFee(
    amount_number,
    matchId_string,
    p2_boolean,
    p3_boolean
  ) {}
  networkSpentBetting(
    amount_number,
    p1_number,
    matchId_string,
    p3_boolean,
    p4_boolean
  ) {}
  networkSpentWager(p0_number, p1_number, amount_number) {}
  networkSpentInStripclub(p0_number, p1_boolean, p2_number, p3_boolean) {}
  networkBuyHealthcare(cost_number, p1_boolean, p2_boolean) {}
  networkBuyAirstrike(cost_number, p1_boolean, p2_boolean) {}
  networkBuyBackupGang(p0_number, p1_number, p2_boolean, p3_boolean) {}
  networkBuyHeliStrike(cost_number, p1_boolean, p2_boolean) {}
  networkSpentAmmoDrop(p0_number, p1_boolean, p2_boolean) {}
  networkBuyBounty(amount_number, victim_number, p2_boolean, p3_boolean) {}
  networkBuyProperty(
    cost_number,
    propertyName_number,
    p2_boolean,
    p3_boolean
  ) {}
  networkBuySmokes(p0_number, p1_boolean, p2_boolean) {}
  networkSpentHeliPickup(p0_number, p1_boolean, p2_boolean) {}
  networkSpentBoatPickup(p0_number, p1_boolean, p2_boolean) {}
  networkSpentBullShark(p0_number, p1_boolean, p2_boolean) {}
  networkSpentCashDrop(amount_number, p1_boolean, p2_boolean) {}
  networkSpentHireMugger(p0_number, p1_boolean, p2_boolean) {}
  networkSpentRobbedByMugger(amount_number, p1_boolean, p2_boolean) {}
  networkSpentHireMercenary(p0_number, p1_boolean, p2_boolean) {}
  networkSpentBuyWantedlevel(p0_number, p1_number, p2_boolean, p3_boolean) {}
  networkSpentBuyOfftheradar(p0_number, p1_boolean, p2_boolean) {}
  networkSpentBuyRevealPlayers(p0_number, p1_boolean, p2_boolean) {}
  networkSpentCarwash(
    p0_number,
    p1_number,
    p2_number,
    p3_boolean,
    p4_boolean
  ) {}
  networkSpentCinema(p0_number, p1_number, p2_boolean, p3_boolean) {}
  networkSpentTelescope(p0_number, p1_boolean, p2_boolean) {}
  networkSpentHoldups(p0_number, p1_boolean, p2_boolean) {}
  networkSpentBuyPassiveMode(p0_number, p1_boolean, p2_boolean) {}
  networkSpentBankInterest(p0_number, p1_boolean, p2_boolean) {}
  networkSpentProstitutes(p0_number, p1_boolean, p2_boolean) {}
  networkSpentArrestBail(p0_number, p1_boolean, p2_boolean) {}
  networkSpentPayVehicleInsurancePremium(
    amount_number,
    vehicleModel_number,
    networkHandle_number,
    notBankrupt_boolean,
    hasTheMoney_boolean
  ) {}
  networkSpentCallPlayer(p0_number, p1_number, p2_boolean, p3_boolean) {}
  networkSpentBounty(p0_number, p1_boolean, p2_boolean) {}
  networkSpentFromRockstar(p0_number, p1_boolean, p2_boolean) {}
  _0x9B5016A6433A68C5() {}
  processCashGift(p0_number, p1_number, p2_string) {}
  networkSpentPlayerHealthcare(p0_number, p1_number, p2_boolean, p3_boolean) {}
  networkSpentNoCops(p0_number, p1_boolean, p2_boolean) {}
  networkSpentRequestJob(p0_number, p1_boolean, p2_boolean) {}
  networkSpentRequestHeist(p0_number, p1_boolean, p2_boolean) {}
  networkBuyLotteryTicket(p0_number, p1_number, p2_boolean, p3_boolean) {}
  networkBuyFairgroundRide(amount_number, p1_number, p2_boolean, p3_boolean) {}
  _0x7C4FCCD2E4DEB394() {}
  networkSpentJobSkip(amount_number, matchId_string, p2_boolean, p3_boolean) {}
  networkSpentBoss(amount_number, p1_boolean, p2_boolean) {}
  networkSpentPayGoon(p0_number, p1_number, amount_number) {}
  _0xDBC966A01C02BCA7(p0_number, p1_number, p2_number) {}
  networkSpentMoveYacht(amount_number, p1_boolean, p2_boolean) {}
  _0xFC4EE00A7B3BFB76(p0_number, p1_number, p2_number) {}
  networkBuyContraband(
    p0_number,
    p1_number,
    p2_number,
    p3_boolean,
    p4_boolean
  ) {}
  networkSpentVipUtilityCharges(p0_number, p1_number, p2_number) {}
  _0x112209CE0290C03A(p0_number, p1_number, p2_number, p3_number) {}
  _0xED5FD7AF10F5E262(p0_number, p1_number, p2_number, p3_number) {}
  _0x0D30EB83668E63C5(p0_number, p1_number, p2_number, p3_number) {}
  _0xB49ECA122467D05F(p0_number, p1_number, p2_number, p3_number) {}
  _0xE23ADC6FCB1F29AE(p0_number, p1_number, p2_number) {}
  _0x0FE8E1FCD2B86B33(p0_number, p1_number, p2_number, p3_number) {}
  _0x69EF772B192614C1(p0_number, p1_number, p2_number, p3_number) {}
  _0x8E243837643D9583(p0_number, p1_number, p2_number, p3_number) {}
  _0xBD0EFB25CCA8F97A(p0_number, p1_number, p2_number, p3_number) {}
  _0xA95F667A755725DA(p0_number, p1_number, p2_number, p3_number) {}
  networkSpentPurchaseWarehouse(
    amount_number,
    data_number,
    p2_boolean,
    p3_boolean
  ) {}
  _0x4128464231E3CA0B(p0_number, p1_number, p2_number, p3_number) {}
  _0x2FAB6614CE22E196(p0_number, p1_number, p2_number, p3_number) {}
  _0x05F04155A226FBBF(p0_number, p1_number, p2_number, p3_number) {}
  _0xE8B0B270B6E7C76E(p0_number, p1_number, p2_number, p3_number) {}
  _0x5BCDE0F640C773D2(p0_number, p1_number, p2_number, p3_number) {}
  _0x998E18CEB44487FC(p0_number, p1_number, p2_number, p3_number) {}
  _0xFA07759E6FDDD7CF(p0_number, p1_number, p2_number, p3_number) {}
  _0x6FD97159FE3C971A(p0_number, p1_number, p2_number, p3_number) {}
  _0x675D19C6067CAE08(p0_number, p1_number, p2_number, p3_number) {}
  _0xA51B086B0B2C0F7A(p0_number, p1_number, p2_number, p3_number) {}
  _0xD7CCCBA28C4ECAF0(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  _0x0035BB914316F1E3(p0_number, p1_number, p2_number, p3_number) {}
  _0x5F456788B05FAEAC(p0_number, p1_number, p2_number) {}
  _0xA75CCF58A60A5FD1(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number
  ) {}
  _0xB4C2EC463672474E(p0_number, p1_number, p2_number, p3_number) {}
  _0x2AFC2D19B50797F2(p0_number, p1_number, p2_number, p3_number) {}
  networkSpentImportExportRepair(p0_number, p1_number, p2_number) {}
  networkSpentPurchaseHangar(p0_number, p1_number, p2_number, p3_number) {}
  networkSpentUpgradeHangar(p0_number, p1_number, p2_number, p3_number) {}
  networkSpentHangarUtilityCharges(amount_number, p1_boolean, p2_boolean) {}
  networkSpentHangarStaffCharges(amount_number, p1_boolean, p2_boolean) {}
  networkSpentBuyTruck(p0_number, p1_number, p2_number, p3_number) {}
  networkSpentUpgradeTruck(p0_number, p1_number, p2_number, p3_number) {}
  networkSpentBuyBunker(p0_number, p1_number, p2_number, p3_number) {}
  networkSpentUpgradeBunker(p0_number, p1_number, p2_number, p3_number) {}
  networkEarnFromSellBunker(amount_number, bunkerHash_number) {}
  networkSpentBallisticEquipment(amount_number, p1_boolean, p2_boolean) {}
  networkEarnFromRdrBonus(amount_number, p1_number) {}
  networkEarnFromWagePayment(amount_number) {}
  networkEarnFromWagePaymentBonus(amount_number) {}
  networkSpentBuyBase(p0_number, p1_number, p2_number, p3_number) {}
  networkSpentUpgradeBase(p0_number, p1_number, p2_number, p3_number) {}
  networkSpentBuyTiltrotor(p0_number, p1_number, p2_number, p3_number) {}
  networkSpentUpgradeTiltrotor(p0_number, p1_number, p2_number, p3_number) {}
  networkSpentEmployAssassins(p0_number, p1_number, p2_number, p3_number) {}
  networkSpentGangopsCannon(p0_number, p1_number, p2_number, p3_number) {}
  networkSpentGangopsStartMission(p0_number, p1_number, p2_number, p3_number) {}
  networkEarnFromSellBase(amount_number, baseNameHash_number) {}
  networkEarnFromTargetRefund(amount_number, p1_number) {}
  networkEarnFromGangopsWages(amount_number, p1_number) {}
  networkEarnFromGangopsWagesBonus(amount_number, p1_number) {}
  networkEarnFromDarChallenge(amount_number, p1_number) {}
  networkEarnFromDoomsdayFinaleBonus(amount_number, vehicleHash_number) {}
  networkEarnFromGangopsAwards(amount_number, unk_string, p2_number) {}
  networkEarnFromGangopsElite(amount_number, unk_string, actIndex_number) {}
  networkRivalDeliveryCompleted(earnedMoney_number) {}
  networkSpentGangopsStartStrand(
    type_number,
    amount_number,
    p2_boolean,
    p3_boolean
  ) {}
  networkSpentGangopsTripSkip(amount_number, p1_boolean, p2_boolean) {}
  networkEarnFromGangopsJobsPrepParticipation(amount_number) {}
  networkEarnFromGangopsJobsSetup(amount_number, unk_string) {}
  networkEarnFromGangopsJobsFinale(amount_number, unk_string) {}
  _0x2A7CEC72C3443BCC(p0_number, p1_number, p2_number) {}
  _0xE0F82D68C7039158(p0_number) {}
  _0xB4DEAE67F35E2ACD(p0_number) {}
  networkEarnFromBbEventBonus(amount_number) {}
  _0x2A93C46AAB1EACC9(p0_number, p1_number, p2_number, p3_number) {}
  _0x226C284C830D0CA8(p0_number, p1_number, p2_number, p3_number) {}
  networkEarnFromHackerTruckMission(
    p0_number,
    amount_number,
    p2_number,
    p3_number
  ) {}
  _0xED76D195E6E3BF7F(p0_number, p1_number, p2_number, p3_number) {}
  _0x1DC9B749E7AE282B(p0_number, p1_number, p2_number, p3_number) {}
  _0xC6E74CF8C884C880(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  _0x65482BFD0923C8A1(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  networkSpentRdrhatchetBonus(amount_number, p1_boolean, p2_boolean) {}
  networkSpentNightclubEntryFee(
    player_number,
    amount_number,
    p1_number,
    p2_boolean,
    p3_boolean
  ) {}
  networkSpentNightclubBarDrink(
    amount_number,
    p1_number,
    p2_boolean,
    p3_boolean
  ) {}
  networkSpentBountyHunterMission(amount_number, p1_boolean, p2_boolean) {}
  networkSpentRehireDj(amount_number, p1_number, p2_boolean, p3_boolean) {}
  networkSpentArenaJoinSpectator(
    amount_number,
    p1_number,
    p2_boolean,
    p3_boolean
  ) {}
  networkEarnFromArenaSkillLevelProgression(amount_number, p1_number) {}
  networkEarnFromArenaCareerProgression(amount_number, p1_number) {}
  networkSpentMakeItRain(amount_number, p1_boolean, p2_boolean) {}
  networkSpentBuyArena(amount_number, p1_boolean, p2_boolean, p3_string) {}
  networkSpentUpgradeArena(amount_number, p1_boolean, p2_boolean, p3_string) {}
  networkSpentArenaSpectatorBox(
    amount_number,
    p1_number,
    p2_boolean,
    p3_boolean
  ) {}
  networkSpentSpinTheWheelPayment(amount_number, p1_number, p2_boolean) {}
  networkEarnFromSpinTheWheelCash(amount_number) {}
  networkSpentArenaPremium(amount_number, p1_boolean, p2_boolean) {}
  networkEarnFromArenaWar(amount_number, p1_number, p2_number, p3_number) {}
  networkEarnFromAssassinateTargetKilled2(amount_number) {}
  networkEarnFromBbEventCargo(amount_number) {}
  networkEarnFromRcTimeTrial(amount_number) {}
  networkEarnFromDailyObjectiveEvent(amount_number) {}
  networkSpentCasinoMembership(
    amount_number,
    p1_boolean,
    p2_boolean,
    p3_number
  ) {}
  networkSpentBuyCasino(amount_number, p1_boolean, p2_boolean, data_number) {}
  networkSpentUpgradeCasino(
    amount_number,
    p1_boolean,
    p2_boolean,
    data_number
  ) {}
  networkSpentCasinoGeneric(
    amount_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  networkEarnFromTimeTrialWin(amount_number) {}
  networkEarnFromCollectionItem(amount_number) {}
  networkEarnFromCollectablesActionFigures(amount_number) {}
  networkEarnFromCompleteCollection(amount_number) {}
  networkEarnFromSellingVehicle(amount_number) {}
  networkEarnFromCasinoMissionReward(amount_number) {}
  networkEarnFromCasinoStoryMissionReward(amount_number) {}
  networkEarnFromCasinoMissionParticipation(amount_number) {}
  networkEarnFromCasinoAward(amount_number, hash_number) {}
  networkGetVcBankBalance() {}
  networkGetVcWalletBalance(characterSlot_number) {}
  networkGetVcBalance() {}
  networkGetEvcBalance() {}
  networkGetPvcBalance() {}
  networkGetStringWalletBalance(characterSlot_number) {}
  networkGetStringBankBalance() {}
  networkGetStringBankWalletBalance() {}
  networkGetVcWalletBalanceIsNotLessThan(amount_number, characterSlot_number) {}
  networkGetVcBankBalanceIsNotLessThan(amount_number) {}
  networkGetVcBankWalletBalanceIsNotLessThan(
    amount_number,
    characterSlot_number
  ) {}
  networkGetPvcTransferBalance() {}
  _0x08E8EEADFD0DC4A0(amount_number) {}
  networkCanReceivePlayerCash(p0_number, p1_number, p2_number, p3_number) {}
  networkGetRemainingVcDailyTransfers2() {}
  withdrawVc(amount_number) {}
  depositVc(amount_number) {}
  _0xE154B48B68EF72BC(p0_number) {}
  _0x6FCF8DDEA146C45B(p0_number) {}
  //Category: Netshopping
  netGameserverUseServerTransactions() {}
  netGameserverCatalogItemExists(name_string) {}
  netGameserverCatalogItemExistsHash(hash_number) {}
  netGameserverGetPrice(itemHash_number, categoryHash_number, p2_boolean) {}
  netGameserverCatalogIsReady() {}
  netGameserverIsCatalogValid() {}
  _0x85F6C9ABA1DE2BCF() {}
  _0x357B152EF96C30B6() {}
  netGameserverGetCatalogState(state_number) {}
  _0xE3E5A7C64CA2C6ED() {}
  _0x0395CB47B022E62C(p0_number) {}
  netGameserverStartSession(charSlot_number) {}
  _0x72EB7BA9B69BF6AB() {}
  _0x170910093218C8B9(p0_number) {}
  _0xC13C38E47EA5DF31(p0_number) {}
  netGameserverIsSessionValid(charSlot_number) {}
  _0x74A0FD0688F1EE45(p0_number) {}
  netGameserverSessionApplyReceivedData(charSlot_number) {}
  netGameserverIsSessionRefreshPending() {}
  netGameserverGetBalance(inventory_boolean, playerbalance_boolean) {}
  _0x613F125BA3BD2EB9() {}
  netGameserverGetTransactionManagerData(p0_number, p1_boolean) {}
  netGameserverBasketStart(
    transactionId_number,
    categoryHash_number,
    actionHash_number,
    flags_number
  ) {}
  netGameserverBasketDelete() {}
  netGameserverBasketEnd() {}
  netGameserverBasketAddItem(itemData_number, quantity_number) {}
  netGameserverBasketIsFull() {}
  netGameserverBasketApplyServerData(p0_number, p1_number) {}
  netGameserverCheckoutStart(transactionId_number) {}
  _0xC830417D630A50F9(transactionId_number) {}
  _0x79EDAC677CA62F81(transactionId_number) {}
  netGameserverBeginService(
    transactionId_number,
    categoryHash_number,
    itemHash_number,
    actionTypeHash_number,
    value_number,
    flags_number
  ) {}
  netGameserverEndService(transactionId_number) {}
  netGameserverDeleteCharacterSlot(
    slot_number,
    transfer_boolean,
    reason_number
  ) {}
  netGameserverDeleteCharacterSlotGetStatus() {}
  netGameserverDeleteSetTelemetryNonceSeed() {}
  netGameserverTransferBankToWallet(charSlot_number, amount_number) {}
  netGameserverTransferWalletToBank(charSlot_number, amount_number) {}
  netGameserverTransferCashGetStatus() {}
  netGameserverTransferCashGetStatus2() {}
  netGameserverTransferCashSetTelemetryNonceSeed() {}
  netGameserverSetTelemetryNonceSeed(p0_number) {}
  //Category: Network
  getOnlineVersion() {}
  networkIsSignedIn() {}
  networkIsSignedOnline() {}
  _0xBD545D44CCE70597() {}
  _0xEBCAB9E5048434F4() {}
  _0x74FB3E29E6D10FA9() {}
  _0x7808619F31FF22DB() {}
  _0xA0FA4EC6A05DA44E() {}
  networkHaveJustUploadLater() {}
  _0x8D11E61A4ABF49CC() {}
  networkIsCloudAvailable() {}
  networkHasSocialClubAccount() {}
  _0xBA9775570DB788CF() {}
  networkIsHost() {}
  networkHaveOnlinePrivileges() {}
  networkHasAgeRestrictedProfile() {}
  networkHaveUserContentPrivileges(p0_number) {}
  _0xAEEF48CDF5B6CE7C(p0_number, p1_number) {}
  _0x78321BEA235FD8CD(p0_number, p1_boolean) {}
  _0x595F028698072DD9(p0_number, p1_number, p2_boolean) {}
  _0x83F28CE49FBBFFBA(p0_number, p1_number, p2_boolean) {}
  _0x07EAB372C8841D99(p0_number, p1_number, p2_number) {}
  _0x906CA41A4B74ECA4() {}
  _0x023ACAB2DC9DC4A4() {}
  _0x76BF03FADBF154F5() {}
  networkGetAgeGroup() {}
  _0x0CF6CC51AA18F0F8(p0_number, p1_number, p2_number) {}
  _0x64E5C4CC82847B73() {}
  _0x1F7BC3539F9E0224() {}
  networkHaveOnlinePrivilege2() {}
  _0xA8ACB6459542A8C8() {}
  _0x83FE8D7229593017() {}
  _0x53C10C8BD774F2C9() {}
  networkCanBail() {}
  networkBail(p0_number, p1_number, p2_number) {}
  _0x283B6062A2C01E9B() {}
  _0x8B4FFC790CA131EF(p0_number, p1_number, p2_number, p3_number) {}
  networkTransitionTrack(
    hash_number,
    p1_number,
    p2_number,
    state_number,
    p4_number
  ) {}
  _0x04918A41BC9B8157(p0_number, p1_number, p2_number) {}
  networkCanAccessMultiplayer(loadingState_number) {}
  networkIsMultiplayerDisabled() {}
  networkCanEnterMultiplayer() {}
  networkSessionEnter(
    p0_number,
    p1_number,
    p2_number,
    maxPlayers_number,
    p4_number,
    p5_number
  ) {}
  networkSessionFriendMatchmaking(
    p0_number,
    p1_number,
    maxPlayers_number,
    p3_boolean
  ) {}
  networkSessionCrewMatchmaking(
    p0_number,
    p1_number,
    p2_number,
    maxPlayers_number,
    p4_boolean
  ) {}
  networkSessionActivityQuickmatch(
    p0_number,
    p1_number,
    p2_number,
    p3_number
  ) {}
  networkSessionHost(p0_number, maxPlayers_number, p2_boolean) {}
  networkSessionHostClosed(p0_number, maxPlayers_number) {}
  networkSessionHostFriendsOnly(p0_number, maxPlayers_number) {}
  networkSessionIsClosedFriends() {}
  networkSessionIsClosedCrew() {}
  networkSessionIsSolo() {}
  networkSessionIsPrivate() {}
  networkSessionEnd(p0_boolean, p1_boolean) {}
  networkSessionKickPlayer(player_number) {}
  networkSessionGetKickVote(player_number) {}
  _0x041C7F2A6C9894E6(p0_number, p1_number, p2_number) {}
  _0x59DF79317F85A7E0() {}
  _0xFFE1E5B792D92B34() {}
  networkSessionSetMatchmakingGroup(matchmakingGroup_number) {}
  networkSessionSetMatchmakingGroupMax(playerType_number, playerCount_number) {}
  networkSessionGetMatchmakingGroupFree(p0_number) {}
  _0xCAE55F48D3D7875C(p0_number) {}
  _0xF49ABC20D8552257(p0_number) {}
  _0x4811BBAC21C5FCD5(p0_number) {}
  _0x5539C3EBF104A53A(p0_boolean) {}
  _0x702BC4D605522539(p0_number) {}
  networkSessionSetMatchmakingPropertyId(p0_boolean) {}
  networkSessionSetMatchmakingMentalState(p0_number) {}
  _0x5ECD378EE64450AB(p0_number) {}
  _0x59D421683D31835A(p0_number) {}
  _0x1153FA02A659051C() {}
  networkSessionHosted(p0_boolean) {}
  networkAddFollowers(p0_number, p1_number) {}
  networkClearFollowers() {}
  networkGetGlobalMultiplayerClock(
    hours_number,
    minutes_number,
    seconds_number
  ) {}
  _0x600F8CB31C7AAB6E(p0_number) {}
  networkGetTargetingMode() {}
  _0xE532D6811B3A4D2A(p0_number) {}
  networkFindMatchedGamers(p0_number, p1_number, p2_number, p3_number) {}
  networkIsFindingGamers() {}
  _0xF9B83B77929D8863() {}
  networkGetNumFoundGamers() {}
  networkGetFoundGamer(p0_number, p1_number) {}
  networkClearFoundGamers() {}
  networkGetGamerStatus(p0_number) {}
  _0x2CC848A861D01493() {}
  _0x94A8394D150B013A() {}
  _0x5AE17C6B0134B7F1() {}
  networkGetGamerStatusResult(p0_number, p1_number) {}
  networkClearGetGamerStatus() {}
  networkSessionJoinInvite() {}
  networkSessionCancelInvite() {}
  networkSessionForceCancelInvite() {}
  networkHasPendingInvite() {}
  _0xC42DD763159F3461() {}
  networkAcceptInvite() {}
  networkSessionWasInvited() {}
  networkSessionGetInviter(networkHandle_number) {}
  _0xD313DE83394AF134() {}
  _0xBDB6F89C729CF388() {}
  networkSuppressInvite(toggle_boolean) {}
  networkBlockInvites(toggle_boolean) {}
  networkBlockInvites2(toggle_boolean) {}
  _0xF814FEC6A19FD6E0() {}
  networkBlockKickedPlayers(p0_boolean) {}
  _0x7AC752103856FB20(p0_boolean) {}
  networkIsOfflineInvitePending() {}
  _0x140E6A44870A11CE() {}
  networkSessionHostSinglePlayer(p0_number) {}
  networkSessionLeaveSinglePlayer() {}
  networkIsGameInProgress() {}
  networkIsSessionActive() {}
  networkIsInSession() {}
  networkIsSessionStarted() {}
  networkIsSessionBusy() {}
  networkCanSessionEnd() {}
  networkSessionMarkVisible(toggle_boolean) {}
  networkSessionIsVisible() {}
  networkSessionBlockJoinRequests(toggle_boolean) {}
  networkSessionChangeSlots(p0_number, p1_boolean) {}
  networkSessionGetPrivateSlots() {}
  networkSessionVoiceHost() {}
  networkSessionVoiceLeave() {}
  networkSessionVoiceConnectToPlayer(p0_number) {}
  networkSetKeepFocuspoint(p0_boolean, p1_number) {}
  _0x5B8ED3DB018927B1(p0_number) {}
  networkSessionIsInVoiceSession() {}
  _0xB5D3453C98456528() {}
  networkSessionIsVoiceSessionBusy() {}
  networkSendTextMessage(message_string, networkHandle_number) {}
  networkSetActivitySpectator(toggle_boolean) {}
  networkIsActivitySpectator() {}
  _0x0E4F77F7B9D74D84(p0_number) {}
  networkSetActivitySpectatorMax(maxSpectators_number) {}
  networkGetActivityPlayerNum(p0_boolean) {}
  networkIsActivitySpectatorFromHandle(networkHandle_number) {}
  networkHostTransition(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number
  ) {}
  networkDoTransitionQuickmatch(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  networkDoTransitionQuickmatchAsync(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  networkDoTransitionQuickmatchWithGroup(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number
  ) {}
  networkJoinGroupActivity() {}
  _0x1888694923EF4591() {}
  _0xB13E88E655E5A3BC() {}
  networkIsTransitionClosedFriends() {}
  networkIsTransitionClosedCrew() {}
  networkIsTransitionSolo() {}
  networkIsTransitionPrivate() {}
  _0x617F49C2668E6155() {}
  _0x261E97AD7BCF3D40(p0_boolean) {}
  _0x39917E1B4CB0F911(p0_boolean) {}
  _0x2CE9D95E4051AECD(p0_number) {}
  networkSetTransitionCreatorHandle(p0_number) {}
  networkClearTransitionCreatorHandle() {}
  networkInviteGamersToTransition(p0_number, p1_number) {}
  networkSetGamerInvitedToTransition(networkHandle_number) {}
  networkLeaveTransition() {}
  networkLaunchTransition() {}
  _0xA2E9C1AB8A92E8CD(toggle_boolean) {}
  networkBailTransition(p0_number, p1_number, p2_number) {}
  networkDoTransitionToGame(p0_boolean, maxPlayers_number) {}
  networkDoTransitionToNewGame(p0_boolean, maxPlayers_number, p2_boolean) {}
  networkDoTransitionToFreemode(
    p0_number,
    p1_number,
    p2_boolean,
    players_number,
    p4_boolean
  ) {}
  networkDoTransitionToNewFreemode(
    p0_number,
    p1_number,
    players_number,
    p3_boolean,
    p4_boolean,
    p5_boolean
  ) {}
  networkIsTransitionToGame() {}
  networkGetTransitionMembers(data_number, dataCount_number) {}
  networkApplyTransitionParameter(p0_number, p1_number) {}
  networkApplyTransitionParameterString(p0_number, string_string, p2_boolean) {}
  networkSendTransitionGamerInstruction(
    networkHandle_number,
    p1_string,
    p2_number,
    p3_number,
    p4_boolean
  ) {}
  networkMarkTransitionGamerAsFullyJoined(p0_number) {}
  networkIsTransitionHost() {}
  networkIsTransitionHostFromHandle(networkHandle_number) {}
  networkGetTransitionHost(networkHandle_number) {}
  networkIsInTransition() {}
  networkIsTransitionStarted() {}
  networkIsTransitionBusy() {}
  networkIsTransitionMatchmaking() {}
  _0xC571D0E77D8BBC29() {}
  _0x1398582B7F72B3ED(p0_number) {}
  _0x1F8E00FB18239600(p0_number) {}
  _0xF6F4383B7C92F11A(p0_number) {}
  networkOpenTransitionMatchmaking() {}
  networkCloseTransitionMatchmaking() {}
  networkIsTransitionOpenToMatchmaking() {}
  networkSetTransitionVisibilityLock(p0_boolean, p1_boolean) {}
  networkIsTransitionVisibilityLocked() {}
  networkSetTransitionActivityId(p0_number) {}
  networkChangeTransitionSlots(p0_number, p1_number) {}
  _0x973D76AA760A6CB6(p0_boolean) {}
  networkHasPlayerStartedTransition(player_number) {}
  networkAreTransitionDetailsValid(p0_number) {}
  networkJoinTransition(player_number) {}
  networkHasInvitedGamerToTransition(p0_number) {}
  _0x3F9990BF5F22759C(p0_number) {}
  networkIsActivitySession() {}
  _0x4A9FDE3A5A6D0437(toggle_boolean) {}
  networkSendPresenceInvite(
    networkHandle_number,
    p1_number,
    p2_number,
    p3_number
  ) {}
  networkSendPresenceTransitionInvite(
    p0_number,
    p1_number,
    p2_number,
    p3_number
  ) {}
  _0x1171A97A3D3981B6(p0_number, p1_number, p2_number, p3_number) {}
  _0x742B58F723233ED9(p0_number) {}
  networkGetNumPresenceInvites() {}
  networkAcceptPresenceInvite(p0_number) {}
  networkRemovePresenceInvite(p0_number) {}
  networkGetPresenceInviteId(p0_number) {}
  networkGetPresenceInviteInviter(p0_number) {}
  networkGetPresenceInviteHandle(p0_number, p1_number) {}
  networkGetPresenceInviteSessionId(p0_number) {}
  networkGetPresenceInviteContentId(p0_number) {}
  _0xD39B3FFF8FFDD5BF(p0_number) {}
  _0x728C4CC7920CD102(p0_number) {}
  networkGetPresenceInviteFromAdmin(p0_number) {}
  _0x8806CEBFABD3CE05(p0_number) {}
  networkHasFollowInvite() {}
  networkActionFollowInvite() {}
  networkClearFollowInvite() {}
  _0xEBF8284D8CADEB53() {}
  networkRemoveTransitionInvite(p0_number) {}
  networkRemoveAllTransitionInvite() {}
  _0xF083835B70BA9BFE() {}
  networkInviteGamers(p0_number, p1_number, p2_number, p3_number) {}
  networkHasInvitedGamer(p0_number) {}
  _0x71DC455F5CD1C2B1(networkHandle_number) {}
  _0x3855FB5EB2C5E8B2(p0_number) {}
  networkGetCurrentlySelectedGamerHandleFromInviteMenu(p0_number) {}
  networkSetCurrentlySelectedGamerHandleFromInviteMenu(p0_number) {}
  networkSetInviteOnCallForInviteMenu(p0_number) {}
  networkCheckDataManagerSucceededForHandle(p0_number, p1_number) {}
  _0x4AD490AE1536933B(p0_number, p1_number) {}
  _0x0D77A82DC2D0DA59(p0_number, p1_number) {}
  filloutPmPlayerList(networkHandle_number, p1_number, p2_number) {}
  filloutPmPlayerListWithNames(p0_number, p1_number, p2_number, p3_number) {}
  _0xE26CCFF8094D8C74(p0_number) {}
  networkSetCurrentDataManagerHandle(p0_number) {}
  networkIsInPlatformParty() {}
  networkGetPlatformPartyUnk() {}
  networkGetPlatformPartyMembers(data_number, dataSize_number) {}
  networkIsInPlatformPartyChat() {}
  networkIsChattingInPlatformParty(networkHandle_number) {}
  _0x2BF66D2E7414F686() {}
  _0x14922ED3E38761F0() {}
  _0x6CE50E47F5543D0C() {}
  _0xFA2888E3833C8E96() {}
  _0x25D990F8E0E3F13C() {}
  _0xF1B84178F8674195(p0_number) {}
  networkGetRandomInt() {}
  networkGetRandomIntRanged(rangeStart_number, rangeEnd_number) {}
  networkPlayerIsCheater() {}
  networkPlayerGetCheaterReason() {}
  networkPlayerIsBadsport() {}
  triggerScriptCrcCheckOnPlayer(player_number, p1_number, scriptHash_number) {}
  _0xA12D3A5A3753CC23() {}
  _0xF287F506767CC8A9() {}
  remoteCheatDetected(player_number, a_number, b_number) {}
  badSportPlayerLeftDetected(
    networkHandle_number,
    event_number,
    amountReceived_number
  ) {}
  networkApplyPedScarData(ped_number, p1_number) {}
  networkSetThisScriptIsNetworkScript(
    lobbySize_number,
    p1_boolean,
    playerId_number
  ) {}
  networkIsThisScriptMarked(p0_number, p1_boolean, p2_number) {}
  networkGetThisScriptIsNetworkScript() {}
  networkGetMaxNumParticipants() {}
  networkGetNumParticipants() {}
  networkGetScriptStatus() {}
  networkRegisterHostBroadcastVariables(vars_number, numVars_number) {}
  networkRegisterPlayerBroadcastVariables(vars_number, numVars_number) {}
  networkFinishBroadcastingData() {}
  _0x5D10B3795F3FC886() {}
  networkGetPlayerIndex(player_number) {}
  networkGetParticipantIndex(index_number) {}
  networkGetPlayerIndexFromPed(ped_number) {}
  networkGetNumConnectedPlayers() {}
  networkIsPlayerConnected(player_number) {}
  networkGetTotalNumPlayers() {}
  networkIsParticipantActive(p0_number) {}
  networkIsPlayerActive(player_number) {}
  networkIsPlayerAParticipant(player_number) {}
  networkIsHostOfThisScript() {}
  networkGetHostOfThisScript() {}
  networkGetHostOfScript(scriptName_string, p1_number, p2_number) {}
  networkSetMissionFinished() {}
  networkIsScriptActive(
    scriptName_string,
    player_number,
    p2_boolean,
    p3_number
  ) {}
  _0x560B423D73015E77(p0_number) {}
  networkGetNumScriptParticipants(p0_number, p1_number, p2_number) {}
  _0x638A3A81733086DB() {}
  networkIsPlayerAParticipantOnScript(p0_number, p1_number, p2_number) {}
  _0x2302C0264EA58D31() {}
  _0x741A3D8380319A81() {}
  participantId() {}
  participantIdToInt() {}
  _0x2DA41ED6E1FCD7A5(p0_number, p1_number) {}
  networkGetDestroyerOfNetworkId(netId_number, weaponHash_number) {}
  _0xC434133D9BA52777(p0_number, p1_number) {}
  _0x83660B734994124D(p0_number, p1_number, p2_number) {}
  networkGetDestroyerOfEntity(p0_number, p1_number, weaponHash_number) {}
  networkGetEntityKillerOfPlayer(player_number, weaponHash_number) {}
  networkResurrectLocalPlayer(
    x_number,
    y_number,
    z_number,
    heading_number,
    unk_boolean,
    changetime_boolean,
    p6_number
  ) {}
  networkSetLocalPlayerInvincibleTime(time_number) {}
  networkIsLocalPlayerInvincible() {}
  networkDisableInvincibleFlashing(player_number, toggle_boolean) {}
  networkSetLocalPlayerSyncLookAt(toggle_boolean) {}
  _0xB07D3185E11657A5(entity_number) {}
  networkGetNetworkIdFromEntity(entity_number) {}
  networkGetEntityFromNetworkId(netId_number) {}
  networkGetEntityIsNetworked(entity_number) {}
  networkGetEntityIsLocal(entity_number) {}
  networkRegisterEntityAsNetworked(entity_number) {}
  networkUnregisterNetworkedEntity(entity_number) {}
  networkDoesNetworkIdExist(netID_number) {}
  networkDoesEntityExistWithNetworkId(entity_number) {}
  networkRequestControlOfNetworkId(netId_number) {}
  networkHasControlOfNetworkId(netId_number) {}
  _0x7242F8B741CE1086(netId_number) {}
  networkRequestControlOfEntity(entity_number) {}
  networkRequestControlOfDoor(doorID_number) {}
  networkHasControlOfEntity(entity_number) {}
  networkHasControlOfPickup(pickup_number) {}
  networkHasControlOfDoor(doorHash_number) {}
  networkIsDoorNetworked(doorHash_number) {}
  vehToNet(vehicle_number) {}
  pedToNet(ped_number) {}
  objToNet(object_number) {}
  netToVeh(netHandle_number) {}
  netToPed(netHandle_number) {}
  netToObj(netHandle_number) {}
  netToEnt(netHandle_number) {}
  networkGetLocalHandle(networkHandle_number, bufferSize_number) {}
  networkHandleFromUserId(
    userId_string,
    networkHandle_number,
    bufferSize_number
  ) {}
  networkHandleFromMemberId(
    memberId_string,
    networkHandle_number,
    bufferSize_number
  ) {}
  networkHandleFromPlayer(
    player_number,
    networkHandle_number,
    bufferSize_number
  ) {}
  networkHashFromPlayerHandle(player_number) {}
  networkHashFromGamerHandle(networkHandle_number) {}
  networkHandleFromFriend(
    friendIndex_number,
    networkHandle_number,
    bufferSize_number
  ) {}
  networkGamertagFromHandleStart(networkHandle_number) {}
  networkGamertagFromHandlePending() {}
  networkGamertagFromHandleSucceeded() {}
  networkGetGamertagFromHandle(networkHandle_number) {}
  _0xD66C9E72B3CC4982(p0_number, p1_number) {}
  _0x58CC181719256197(p0_number, p1_number, p2_number) {}
  networkAreHandlesTheSame(netHandle1_number, netHandle2_number) {}
  networkIsHandleValid(networkHandle_number, bufferSize_number) {}
  networkGetPlayerFromGamerHandle(networkHandle_number) {}
  networkMemberIdFromGamerHandle(networkHandle_number) {}
  networkIsGamerInMySession(networkHandle_number) {}
  networkShowProfileUi(networkHandle_number) {}
  networkPlayerGetName(player_number) {}
  networkPlayerGetUserid(player_number, userID_number) {}
  networkPlayerIsRockstarDev(player_number) {}
  networkPlayerIndexIsCheater(player_number) {}
  networkGetEntityNetScriptId(entity_number) {}
  _0x37D5F739FD494675(p0_number) {}
  networkIsInactiveProfile(p0_number) {}
  networkGetMaxFriends() {}
  networkGetFriendCount() {}
  networkGetFriendName(friendIndex_number) {}
  networkGetFriendNameFromIndex(friendIndex_number) {}
  networkIsFriendOnline(name_string) {}
  networkIsFriendHandleOnline(networkHandle_number) {}
  networkIsFriendInSameTitle(friendName_string) {}
  networkIsFriendInMultiplayer(friendName_string) {}
  networkIsFriend(networkHandle_number) {}
  networkIsPendingFriend(p0_number) {}
  networkIsAddingFriend() {}
  networkAddFriend(networkHandle_number, message_string) {}
  networkIsFriendIndexOnline(friendIndex_number) {}
  networkSetPlayerIsPassive(toggle_boolean) {}
  networkGetPlayerOwnsWaypoint(player_number) {}
  networkCanSetWaypoint() {}
  _0x4C2A9FDC22377075() {}
  _0xB309EBEA797E001F(p0_number) {}
  _0x26F07DD83A5F7F98() {}
  networkHasHeadset() {}
  _0x7D395EA61622E116(p0_boolean) {}
  networkIsLocalTalking() {}
  networkGamerHasHeadset(networkHandle_number) {}
  networkIsGamerTalking(networkHandle_number) {}
  networkCanCommunicateWithGamer2(networkHandle_number) {}
  networkCanCommunicateWithGamer(networkHandle_number) {}
  networkIsGamerMutedByMe(networkHandle_number) {}
  networkAmIMutedByGamer(networkHandle_number) {}
  networkIsGamerBlockedByMe(networkHandle_number) {}
  networkAmIBlockedByGamer(networkHandle_number) {}
  networkCanViewGamerUserContent(networkHandle_number) {}
  networkHasViewGamerUserContentResult(networkHandle_number) {}
  networkCanPlayMultiplayerWithGamer(networkHandle_number) {}
  networkCanGamerPlayMultiplayerWithMe(networkHandle_number) {}
  networkIsPlayerTalking(player_number) {}
  networkPlayerHasHeadset(player_number) {}
  networkIsPlayerMutedByMe(player_number) {}
  networkAmIMutedByPlayer(player_number) {}
  networkIsPlayerBlockedByMe(player_number) {}
  networkAmIBlockedByPlayer(player_number) {}
  networkGetPlayerLoudness(player_number) {}
  networkSetTalkerProximity(value_number) {}
  networkGetTalkerProximity() {}
  networkSetVoiceActive(toggle_boolean) {}
  _0xCFEB46DCD7D8D5EB(p0_boolean) {}
  networkOverrideTransitionChat(p0_boolean) {}
  networkSetTeamOnlyChat(toggle_boolean) {}
  _0x265559DA40B3F327(p0_number) {}
  _0x4348BFDA56023A2F(p0_number, p1_number) {}
  networkOverrideTeamRestrictions(team_number, toggle_boolean) {}
  networkSetOverrideSpectatorMode(toggle_boolean) {}
  _0x3C5C1E2C2FF814B1(toggle_boolean) {}
  _0x9D7AFCBF21C51712(toggle_boolean) {}
  networkSetNoSpectatorChat(toggle_boolean) {}
  _0x6A5D89D7769A40D8(toggle_boolean) {}
  networkOverrideChatRestrictions(player_number, toggle_boolean) {}
  networkOverrideSendRestrictions(player_number, toggle_boolean) {}
  networkOverrideSendRestrictionsAll(toggle_boolean) {}
  networkOverrideReceiveRestrictions(player_number, toggle_boolean) {}
  networkOverrideReceiveRestrictionsAll(toggle_boolean) {}
  networkSetVoiceChannel(channel_number) {}
  networkClearVoiceChannel() {}
  networkApplyVoiceProximityOverride(x_number, y_number, z_number) {}
  networkClearVoiceProximityOverride() {}
  _0x5E3AA4CA2B6FB0EE(p0_number) {}
  _0xCA575C391FEA25CC(p0_number) {}
  _0xADB57E5B663CCA8B(p0_number, p1_number, p2_number) {}
  _0x8EF52ACAECC51D9C(toggle_boolean) {}
  networkIsTextChatActive() {}
  shutdownAndLaunchSinglePlayerGame() {}
  shutdownAndLoadMostRecentSave() {}
  networkSetFriendlyFireOption(toggle_boolean) {}
  networkSetRichPresence(p0_number, p1_number, p2_number, p3_number) {}
  networkSetRichPresenceString(p0_number, string_string) {}
  networkGetTimeoutTime() {}
  networkRespawnCoords(
    player_number,
    x_number,
    y_number,
    z_number,
    p4_boolean,
    p5_boolean
  ) {}
  _0xBF22E0F32968E967(player_number, p1_boolean) {}
  removeAllStickyBombsFromEntity(entity_number, ped_number) {}
  _0x2E4C123D1C8A710E(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  networkClanServiceIsValid() {}
  networkClanPlayerIsActive(networkHandle_number) {}
  networkClanPlayerGetDesc(
    clanDesc_number,
    bufferSize_number,
    networkHandle_number
  ) {}
  networkClanIsRockstarClan(clanDesc_number, bufferSize_number) {}
  networkClanGetUiFormattedTag(
    clanDesc_number,
    bufferSize_number,
    formattedTag_string
  ) {}
  networkClanGetLocalMembershipsCount() {}
  networkClanGetMembershipDesc(memberDesc_number, p1_number) {}
  networkClanDownloadMembership(networkHandle_number) {}
  networkClanDownloadMembershipPending(p0_number) {}
  networkIsClanMembershipFinishedDownloading() {}
  networkClanRemoteMembershipsAreInCache(p0_number) {}
  networkClanGetMembershipCount(p0_number) {}
  networkClanGetMembershipValid(p0_number, p1_number) {}
  networkClanGetMembership(p0_number, clanMembership_number, p2_number) {}
  networkClanJoin(clanDesc_number) {}
  networkClanAnimation(animDict_string, animName_string) {}
  _0x2B51EDBEFC301339(p0_number, p1_string) {}
  _0xC32EA7A2F6CA7557() {}
  networkClanGetEmblemTxdName(netHandle_number, txdName_string) {}
  networkClanRequestEmblem(p0_number) {}
  networkClanIsEmblemReady(p0_number, p1_number) {}
  networkClanReleaseEmblem(p0_number) {}
  networkGetPrimaryClanDataClear() {}
  networkGetPrimaryClanDataCancel() {}
  networkGetPrimaryClanDataStart(p0_number, p1_number) {}
  networkGetPrimaryClanDataPending() {}
  networkGetPrimaryClanDataSuccess() {}
  networkGetPrimaryClanDataNew(p0_number, p1_number) {}
  setNetworkIdCanMigrate(netId_number, toggle_boolean) {}
  setNetworkIdExistsOnAllMachines(netId_number, toggle_boolean) {}
  setNetworkIdSyncToPlayer(netId_number, player_number, toggle_boolean) {}
  networkSetEntityCanBlend(entity_number, toggle_boolean) {}
  _0x0379DAF89BA09AA5(p0_number, p1_number) {}
  networkSetEntityInvisibleToNetwork(entity_number, toggle_boolean) {}
  setNetworkIdVisibleInCutscene(netId_number, p1_boolean, p2_boolean) {}
  _0x32EBD154CB6B8B99(p0_number, p1_number, p2_number) {}
  _0x6540EDC4F45DA089(player_number) {}
  setNetworkCutsceneEntities(toggle_boolean) {}
  _0x3FA36981311FA4FF(netId_number, state_boolean) {}
  isNetworkIdOwnedByParticipant(netId_number) {}
  setLocalPlayerVisibleInCutscene(p0_boolean, p1_boolean) {}
  setLocalPlayerInvisibleLocally(p0_boolean) {}
  setLocalPlayerVisibleLocally(p0_boolean) {}
  setPlayerInvisibleLocally(player_number, toggle_boolean) {}
  setPlayerVisibleLocally(player_number, toggle_boolean) {}
  fadeOutLocalPlayer(p0_boolean) {}
  networkFadeOutEntity(entity_number, normal_boolean, slow_boolean) {}
  networkFadeInEntity(entity_number, state_boolean, p2_number) {}
  networkIsPlayerFading(player_number) {}
  networkIsEntityFading(entity_number) {}
  isPlayerInCutscene(player_number) {}
  setEntityVisibleInCutscene(p0_number, p1_boolean, p2_boolean) {}
  setEntityLocallyInvisible(entity_number) {}
  setEntityLocallyVisible(entity_number) {}
  isDamageTrackerActiveOnNetworkId(netID_number) {}
  activateDamageTrackerOnNetworkId(netID_number, toggle_boolean) {}
  isDamageTrackerActiveOnPlayer(player_number) {}
  activateDamageTrackerOnPlayer(player_number, toggle_boolean) {}
  isSphereVisibleToAnotherMachine(p0_number, p1_number, p2_number, p3_number) {}
  isSphereVisibleToPlayer(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  reserveNetworkMissionObjects(amount_number) {}
  reserveNetworkMissionPeds(amount_number) {}
  reserveNetworkMissionVehicles(amount_number) {}
  reserveNetworkLocalObjects(p0_number) {}
  reserveNetworkLocalPeds(p0_number) {}
  reserveNetworkLocalVehicles(p0_number) {}
  canRegisterMissionObjects(amount_number) {}
  canRegisterMissionPeds(amount_number) {}
  canRegisterMissionVehicles(amount_number) {}
  canRegisterMissionPickups(amount_number) {}
  _0xE16AA70CE9BEEDC3(p0_number) {}
  canRegisterMissionEntities(
    ped_amt_number,
    vehicle_amt_number,
    object_amt_number,
    pickup_amt_number
  ) {}
  getNumReservedMissionObjects(p0_boolean, p1_number) {}
  getNumReservedMissionPeds(p0_boolean, p1_number) {}
  getNumReservedMissionVehicles(p0_boolean, p1_number) {}
  getNumCreatedMissionObjects(p0_boolean) {}
  getNumCreatedMissionPeds(p0_boolean) {}
  getNumCreatedMissionVehicles(p0_boolean) {}
  _0xE42D626EEC94E5D9(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  getMaxNumNetworkObjects() {}
  getMaxNumNetworkPeds() {}
  getMaxNumNetworkVehicles() {}
  getMaxNumNetworkPickups() {}
  _0xBA7F0B77D80A4EB7(p0_number, p1_number) {}
  getNetworkTime() {}
  getNetworkTimeAccurate() {}
  hasNetworkTimeStarted() {}
  getTimeOffset(timeA_number, timeB_number) {}
  isTimeLessThan(timeA_number, timeB_number) {}
  isTimeMoreThan(timeA_number, timeB_number) {}
  isTimeEqualTo(timeA_number, timeB_number) {}
  getTimeDifference(timeA_number, timeB_number) {}
  getTimeAsString(time_number) {}
  _0xF12E6CD06C73D69E() {}
  getCloudTimeAsInt() {}
  getDateAndTimeFromUnixEpoch(unixEpoch_number, timeStructure_number) {}
  networkSetInSpectatorMode(toggle_boolean, playerPed_number) {}
  networkSetInSpectatorModeExtended(
    toggle_boolean,
    playerPed_number,
    p2_boolean
  ) {}
  networkSetInFreeCamMode(toggle_boolean) {}
  _0x5C707A667DF8B9FA(toggle_boolean, player_number) {}
  networkIsInSpectatorMode() {}
  networkSetInMpCutscene(p0_boolean, p1_boolean) {}
  networkIsInMpCutscene() {}
  networkIsPlayerInMpCutscene(player_number) {}
  _0xFAC18E7356BD3210() {}
  setNetworkVehicleRespotTimer(
    netId_number,
    time_number,
    p2_number,
    p3_number
  ) {}
  setNetworkVehicleAsGhost(vehicle_number, toggle_boolean) {}
  _0xA2A707979FE754DC(p0_number, p1_number) {}
  _0x838DA0936A24ED4D(p0_number, p1_number) {}
  usePlayerColourInsteadOfTeamColour(toggle_boolean, p1_boolean) {}
  _0x21D04D7BC538C146(entity_number) {}
  _0x13F1FCB111B820B0(p0_boolean) {}
  _0xA7C511FA1C5BDA38(p0_number, p1_number) {}
  _0x658500AE6D723A7E(p0_number) {}
  _0x17330EBF2F2124A8() {}
  _0x4BA166079D658ED4(p0_number, p1_number) {}
  _0xD7B6C73CAD419BCF(p0_boolean) {}
  _0x7EF7649B64D7FF10(entity_number) {}
  _0x77758139EC9B66C7(p0_boolean) {}
  networkCreateSynchronisedScene(
    x_number,
    y_number,
    z_number,
    xRot_number,
    yRot_number,
    zRot_number,
    p6_number,
    p7_boolean,
    p8_boolean,
    p9_number,
    p10_number,
    p11_number
  ) {}
  networkAddPedToSynchronisedScene(
    ped_number,
    netScene_number,
    animDict_string,
    animnName_string,
    speed_number,
    speedMultiplier_number,
    duration_number,
    flag_number,
    playbackRate_number,
    p9_number
  ) {}
  _0xA5EAFE473E45C442(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number
  ) {}
  networkAddEntityToSynchronisedScene(
    entity_number,
    netScene_number,
    animDict_string,
    animName_string,
    speed_number,
    speedMulitiplier_number,
    flag_number
  ) {}
  _0x45F35C0EDC33B03B(
    netScene_number,
    modelHash_number,
    x_number,
    y_number,
    z_number,
    p5_number,
    p6_string,
    p7_number,
    p8_number,
    flags_number
  ) {}
  networkForceLocalUseOfSyncedSceneCamera(
    netScene_number,
    animDict_string,
    animName_string
  ) {}
  networkAttachSynchronisedSceneToEntity(
    netScene_number,
    entity_number,
    bone_number
  ) {}
  networkStartSynchronisedScene(netScene_number) {}
  networkStopSynchronisedScene(netScene_number) {}
  networkConvertSynchronisedSceneToSynchronizedScene(netScene_number) {}
  _0xC9B43A33D09CADA7(p0_number) {}
  _0x144DA052257AE7D8(p0_number) {}
  _0xFB1F9381E80FA13F(p0_number, p1_number) {}
  networkStartRespawnSearchForPlayer(
    player_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    flags_number
  ) {}
  networkStartRespawnSearchInAngledAreaForPlayer(
    player_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    flags_number
  ) {}
  networkQueryRespawnResults(p0_number) {}
  networkCancelRespawnSearch() {}
  networkGetRespawnResult(
    randomInt_number,
    coordinates_vector3Ptr,
    heading_number
  ) {}
  networkGetRespawnResultFlags(p0_number) {}
  networkStartSoloTutorialSession() {}
  _0xFB680D403909DC70(p0_number, p1_number) {}
  networkEndTutorialSession() {}
  networkIsInTutorialSession() {}
  _0xB37E4E6A2388CA7B() {}
  networkIsTutorialSessionChangePending() {}
  networkGetPlayerTutorialSessionInstance(player_number) {}
  networkIsPlayerEqualToIndex(player_number, index_number) {}
  networkConcealPlayer(player_number, toggle_boolean, p2_boolean) {}
  networkIsPlayerConcealed(player_number) {}
  networkConcealEntity(entity_number, toggle_boolean) {}
  networkIsEntityConcealed(entity_number) {}
  networkOverrideClockTime(Hours_number, Minutes_number, Seconds_number) {}
  networkClearClockTimeOverride() {}
  networkIsClockTimeOverridden() {}
  networkAddEntityArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  networkAddEntityAngledArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  networkAddEntityDisplayedBoundaries(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  _0x2B1C623823DB0D9D(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  networkRemoveEntityArea(p0_number) {}
  networkEntityAreaDoesExist(p0_number) {}
  _0x4DF7CFFF471A7FB1(p0_number) {}
  networkEntityAreaIsOccupied(p0_number) {}
  networkSetNetworkIdDynamic(netID_number, toggle_boolean) {}
  _0xA6FCECCF4721D679(p0_number) {}
  _0x95BAF97C82464629(p0_number, p1_number) {}
  networkRequestCloudBackgroundScripts() {}
  networkIsCloudBackgroundScriptsRequestPending() {}
  networkRequestCloudTunables() {}
  networkIsTunableCloudRequestPending() {}
  networkGetTunableCloudCrc() {}
  networkDoesTunableExist(tunableContext_string, tunableName_string) {}
  networkAccessTunableInt(
    tunableContext_string,
    tunableName_string,
    value_number
  ) {}
  networkAccessTunableFloat(
    tunableContext_string,
    tunableName_string,
    value_number
  ) {}
  networkAccessTunableBool(tunableContext_string, tunableName_string) {}
  networkDoesTunableExistHash(tunableContext_number, tunableName_number) {}
  networkAllocateTunablesRegistrationDataMap() {}
  networkAccessTunableIntHash(
    tunableContext_number,
    tunableName_number,
    value_number
  ) {}
  networkRegisterTunableIntHash(
    contextHash_number,
    nameHash_number,
    value_number
  ) {}
  networkAccessTunableFloatHash(
    tunableContext_number,
    tunableName_number,
    value_number
  ) {}
  networkRegisterTunableFloatHash(
    contextHash_number,
    nameHash_number,
    value_number
  ) {}
  networkAccessTunableBoolHash(tunableContext_number, tunableName_number) {}
  networkRegisterTunableBoolHash(
    contextHash_number,
    nameHash_number,
    value_boolean
  ) {}
  networkTryAccessTunableBoolHash(
    tunableContext_number,
    tunableName_number,
    defaultValue_boolean
  ) {}
  networkGetContentModifierListId(contentHash_number) {}
  _0x7DB53B37A2F211A0() {}
  networkResetBodyTracker() {}
  networkGetNumBodyTrackers() {}
  _0x2E0BF682CC778D49(p0_number) {}
  _0x0EDE326D47CD0F3E(ped_number, player_number) {}
  networkSetVehicleWheelsDestructible(p0_number, p1_number) {}
  _0x38B7C51AB1EDC7D8(entity_number, toggle_boolean) {}
  networkExplodeVehicle(
    vehicle_number,
    isAudible_boolean,
    isInvisible_boolean,
    p3_boolean
  ) {}
  _0x2A5E0621DD815A9A(p0_number, p1_number, p2_number, p3_number) {}
  _0xCD71A4ECAB22709E(entity_number) {}
  networkOverrideCoordsAndHeading(
    ped_number,
    x_number,
    y_number,
    z_number,
    heading_number
  ) {}
  _0xE6717E652B8C8D8A(p0_number, p1_number) {}
  networkDisableProximityMigration(netID_number) {}
  networkSetPropertyId(id_number) {}
  networkClearPropertyId() {}
  _0x367EF5E2F439B4C6(p0_number) {}
  _0x94538037EE44F5CF(p0_boolean) {}
  networkCacheLocalPlayerHeadBlendData() {}
  networkHasCachedPlayerHeadBlendData(player_number) {}
  networkApplyCachedPlayerHeadBlendData(ped_number, player_number) {}
  getNumCommerceItems() {}
  isCommerceDataValid() {}
  _0xB606E6CC59664972(p0_number) {}
  _0x1D4DC17C38FEAFF0() {}
  getCommerceItemId(index_number) {}
  getCommerceItemName(index_number) {}
  getCommerceProductPrice(index_number) {}
  getCommerceItemNumCats(index_number) {}
  getCommerceItemCat(index_number, index2_number) {}
  _0x58C21165F6545892(p0_string, p1_string, p2_number) {}
  isCommerceStoreOpen() {}
  setStoreEnabled(toggle_boolean) {}
  requestCommerceItemImage(index_number) {}
  releaseAllCommerceItemImages() {}
  _0x722F5D28B61C5EA8(p0_number) {}
  isStoreAvailableToUser() {}
  _0x265635150FB0D82E() {}
  _0x444C4525ECE0A4B9() {}
  _0x59328EB08C5CEB2B() {}
  _0xFAE628F1E9ADB239(p0_number, p1_number, p2_number) {}
  _0x754615490A029508() {}
  _0x155467ACA0F55705() {}
  cloudDeleteMemberFile(p0_string) {}
  cloudHasRequestCompleted(p0_number) {}
  _0x3A3D5568AF297CD5(p0_number) {}
  cloudCheckAvailability() {}
  _0xC7ABAC5DE675EE3B() {}
  cloudGetAvailabilityCheckResult() {}
  _0x8B0C2964BA471961() {}
  _0x88B588B41FF7868E() {}
  _0x67FC09BC554A75E5() {}
  _0x966DD84FB6A46017() {}
  ugcCopyContent(p0_number, p1_number) {}
  _0x9FEDF86898F100E9() {}
  ugcHasCreateFinished() {}
  _0x24E4E51FC16305F9() {}
  ugcGetCreateResult() {}
  ugcGetCreateContentId() {}
  ugcClearCreateResult() {}
  ugcQueryMyContent(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  _0x692D58DF40657E8C(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_boolean
  ) {}
  ugcQueryByContentId(
    contentId_string,
    latestVersion_boolean,
    contentTypeName_string
  ) {}
  ugcQueryByContentIds(
    data_number,
    count_number,
    latestVersion_boolean,
    contentTypeName_string
  ) {}
  ugcQueryRecentlyCreatedContent(
    offset_number,
    count_number,
    contentTypeName_string,
    p3_number
  ) {}
  ugcGetBookmarkedContent(p0_number, p1_number, p2_number, p3_number) {}
  ugcGetMyContent(p0_number, p1_number, p2_number, p3_number) {}
  ugcGetFriendContent(p0_number, p1_number, p2_number, p3_number) {}
  ugcGetCrewContent(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  ugcGetGetByCategory(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  setBalanceAddMachine(contentId_string, contentTypeName_string) {}
  setBalanceAddMachines(
    data_number,
    dataCount_number,
    contentTypeName_string
  ) {}
  _0xA7862BC5ED1DFD7E(p0_number, p1_number, p2_number, p3_number) {}
  _0x97A770BEEF227E2B(p0_number, p1_number, p2_number, p3_number) {}
  _0x5324A0E3E4CE3570(p0_number, p1_number, p2_number, p3_number) {}
  ugcCancelQuery() {}
  ugcIsGetting() {}
  ugcHasGetFinished() {}
  _0x941E5306BCD7C2C7() {}
  _0xC87E740D9F3872CC() {}
  ugcGetQueryResult() {}
  ugcGetContentNum() {}
  ugcGetContentTotal() {}
  ugcGetContentHash() {}
  ugcClearQueryResults() {}
  ugcGetContentUserId(p0_number) {}
  _0x584770794D758C18(p0_number, p1_number) {}
  _0x8C8D2739BA44AF0F(p0_number) {}
  ugcGetContentUserName(p0_number) {}
  _0xAEAB987727C5A8A4(p0_number) {}
  getContentCategory(p0_number) {}
  ugcGetContentId(p0_number) {}
  ugcGetRootContentId(p0_number) {}
  ugcGetContentName(p0_number) {}
  ugcGetContentDescriptionHash(p0_number) {}
  ugcGetContentPath(p0_number, p1_number) {}
  ugcGetContentUpdatedDate(p0_number, p1_number) {}
  ugcGetContentFileVersion(p0_number, p1_number) {}
  _0x1D610EB0FEA716D9(p0_number) {}
  _0x7FCC39C46C3C03BD(p0_number) {}
  ugcGetContentLanguage(p0_number) {}
  ugcGetContentIsPublished(p0_number) {}
  ugcGetContentIsVerified(p0_number) {}
  ugcGetContentRating(p0_number, p1_number) {}
  ugcGetContentRatingCount(p0_number, p1_number) {}
  ugcGetContentRatingPositiveCount(p0_number, p1_number) {}
  ugcGetContentRatingNegativeCount(p0_number, p1_number) {}
  ugcGetContentHasPlayerRecord(p0_number) {}
  ugcGetContentHasPlayerBookmarked(p0_number) {}
  ugcRequestContentDataFromIndex(p0_number, p1_number) {}
  ugcRequestContentDataFromParams(
    contentTypeName_string,
    contentId_string,
    p2_number,
    p3_number,
    p4_number
  ) {}
  ugcRequestCachedDescription(p0_number) {}
  _0x2D5DC831176D0114(p0_number) {}
  _0xEBFA8D50ADDC54C4(p0_number) {}
  _0x162C23CA83ED0A62(p0_number) {}
  ugcGetCachedDescription(p0_number, p1_number) {}
  _0x5A34CD9C3C5BEC44(p0_number) {}
  _0x68103E2247887242() {}
  ugcPublish(contentId_string, baseContentId_string, contentTypeName_string) {}
  ugcSetBookmarked(
    contentId_string,
    bookmarked_boolean,
    contentTypeName_string
  ) {}
  ugcSetDeleted(p0_number, p1_boolean, p2_number) {}
  _0x45E816772E93A9DB() {}
  ugcHasModifyFinished() {}
  _0x793FF272D5B365F4() {}
  ugcGetModifyResult() {}
  ugcClearModifyResult() {}
  _0xB746D20B17F2A229(p0_number, p1_number) {}
  _0x63B406D7884BFA95() {}
  _0x4D02279C83BE69FE() {}
  ugcGetCreatorNum() {}
  ugcPoliciesMakePrivate(p0_number) {}
  ugcClearOfflineQuery() {}
  _0xF98DDE0A8ED09323(p0_boolean) {}
  _0xFD75DABC0957BF33(p0_boolean) {}
  ugcIsLanguageSupported(p0_number) {}
  facebookSetHeistComplete(
    heistName_string,
    cashEarned_number,
    xpEarned_number
  ) {}
  facebookSetCreateCharacterComplete() {}
  facebookSetMilestoneComplete(milestoneId_number) {}
  facebookIsSendingData() {}
  facebookDoUnkCheck() {}
  facebookIsAvailable() {}
  textureDownloadRequest(
    PlayerHandle_number,
    FilePath_string,
    Name_string,
    p3_boolean
  ) {}
  _0x0B203B4AFDE53A4F(p0_number, p1_number, p2_boolean) {}
  ugcTextureDownloadRequest(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_boolean
  ) {}
  textureDownloadRelease(p0_number) {}
  textureDownloadHasFailed(p0_number) {}
  textureDownloadGetName(p0_number) {}
  getStatusOfTextureDownload(p0_number) {}
  _0x60EDD13EB3AC1FF3() {}
  networkShouldShowConnectivityTroubleshooting() {}
  networkIsCableConnected() {}
  networkGetRosPrivilege9() {}
  networkGetRosPrivilege10() {}
  networkHasPlayerBeenBanned() {}
  networkHaveSocialClubPrivilege() {}
  networkGetRosPrivilege3() {}
  networkGetRosPrivilege4() {}
  networkHasRosPrivilege(index_number) {}
  networkHasRosPrivilegeEndDate(
    privilege_number,
    type_number,
    endData_number
  ) {}
  networkGetRosPrivilege24() {}
  networkGetRosPrivilege25() {}
  _0x36391F397731595D(p0_number) {}
  _0xDEB2B99A1AF1A2A6(p0_number) {}
  _0x9465E683B12D3F6B() {}
  _0xCA59CCAE5D01E4CE() {}
  networkHasGameBeenAltered() {}
  networkUpdatePlayerScars() {}
  _0xC505036A35AFD01B(toggle_boolean) {}
  _0x267C78C60E806B9A(p0_number, p1_boolean) {}
  _0x6BFF5F84102DF80A(player_number) {}
  _0x5C497525F803486B() {}
  _0x6FB7BB3607D27FA2() {}
  _0x45A83257ED02D9BC() {}
  _0x16D3D49902F697BB(player_number) {}
  _0xD414BE129BB81B32(player_number) {}
  _0x0E3A041ED6AC2B45(player_number) {}
  _0x350C23949E43686C(player_number) {}
  networkGetNumUnackedForPlayer(player_number) {}
  _0x3765C3A3E8192E10(player_number) {}
  networkGetOldestResendCountForPlayer(player_number) {}
  networkReportMyself() {}
  _0x64D779659BC37B19(entity_number) {}
  networkGetPlayerCoords(player_number) {}
  _0x33DE49EDF4DDE77A(entity_number) {}
  _0xAA5FAFCD2C5F5E47(entity_number) {}
  _0xAEDF1BC1C133D6E3() {}
  _0x2555CF7DA5473794() {}
  _0x6FD992C4A1C1B986() {}
  _0xDB663CC9FF3407A9(player_number) {}
  //Category: Object
  createObject(
    modelHash_number,
    x_number,
    y_number,
    z_number,
    isNetwork_boolean,
    thisScriptCheck_boolean,
    dynamic_boolean
  ) {}
  createObjectNoOffset(
    modelHash_number,
    x_number,
    y_number,
    z_number,
    isNetwork_boolean,
    thisScriptCheck_boolean,
    dynamic_boolean
  ) {}
  deleteObject(object_number) {}
  placeObjectOnGroundProperly(object_number) {}
  placeObjectOnGroundProperly2(object_number) {}
  _0xAFE24E4D29249E4A(object_number, p1_number, p2_number, p3_boolean) {}
  slideObject(
    object_number,
    toX_number,
    toY_number,
    toZ_number,
    speedX_number,
    speedY_number,
    speedZ_number,
    collision_boolean
  ) {}
  setObjectTargettable(object_number, targettable_boolean) {}
  setObjectSomething(object_number, p1_boolean) {}
  getClosestObjectOfType(
    x_number,
    y_number,
    z_number,
    radius_number,
    modelHash_number,
    isMission_boolean,
    p6_boolean,
    p7_boolean
  ) {}
  hasObjectBeenBroken(object_number, p1_number) {}
  hasClosestObjectOfTypeBeenBroken(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    modelHash_number,
    p5_number
  ) {}
  hasClosestObjectOfTypeBeenCompletelyDestroyed(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    modelHash_number,
    p5_boolean
  ) {}
  _0x2542269291C6AC84(p0_number) {}
  getObjectOffsetFromCoords(
    xPos_number,
    yPos_number,
    zPos_number,
    heading_number,
    xOffset_number,
    yOffset_number,
    zOffset_number
  ) {}
  getCoordsAndRotationOfClosestObjectOfType(
    object_number,
    radius_number,
    modelHash_number,
    x_number,
    y_number,
    z_number,
    p6_vector3Ptr,
    p7_number
  ) {}
  setStateOfClosestDoorOfType(
    type_number,
    x_number,
    y_number,
    z_number,
    locked_boolean,
    heading_number,
    p6_boolean
  ) {}
  getStateOfClosestDoorOfType(
    type_number,
    x_number,
    y_number,
    z_number,
    locked_boolean,
    heading_number
  ) {}
  doorControl(
    doorHash_number,
    x_number,
    y_number,
    z_number,
    locked_boolean,
    xRotMult_number,
    yRotMult_number,
    zRotMult_number
  ) {}
  addDoorToSystem(
    doorHash_number,
    modelHash_number,
    x_number,
    y_number,
    z_number,
    p5_boolean,
    p6_boolean,
    p7_boolean
  ) {}
  removeDoorFromSystem(doorHash_number) {}
  doorSystemSetDoorState(
    doorHash_number,
    limit_number,
    p2_boolean,
    p3_boolean
  ) {}
  doorSystemGetDoorState(doorHash_number) {}
  doorSystemGetDoorPendingState(doorHash_number) {}
  doorSystemSetAutomaticRate(
    doorHash_number,
    p1_number,
    p2_boolean,
    p3_boolean
  ) {}
  doorSystemSetAutomaticDistance(
    doorHash_number,
    heading_number,
    p2_boolean,
    p3_boolean
  ) {}
  doorSystemSetOpenRatio(
    doorHash_number,
    ajar_number,
    p2_boolean,
    p3_boolean
  ) {}
  doorSystemGetOpenRatio(doorHash_number) {}
  doorSystemSetSpringRemoved(
    doorHash_number,
    p1_boolean,
    p2_boolean,
    p3_boolean
  ) {}
  doorSystemSetHoldOpen(doorHash_number, toggle_boolean) {}
  _0xA85A21582451E951(doorHash_number, p1_boolean) {}
  isDoorRegisteredWithSystem(doorHash_number) {}
  isDoorClosed(doorHash_number) {}
  _0xC7F29CA00F46350E(p0_boolean) {}
  _0x701FDA1E82076BA4() {}
  doorSystemGetIsPhysicsLoaded(p0_number) {}
  doorSystemFindExistingDoor(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    height_number
  ) {}
  isGarageEmpty(garageHash_number, p1_boolean, p2_number) {}
  isPlayerEntirelyInsideGarage(
    garageHash_number,
    player_number,
    p2_number,
    p3_number
  ) {}
  isPlayerPartiallyInsideGarage(garageHash_number, player_number, p2_number) {}
  areEntitiesEntirelyInsideGarage(
    garageHash_number,
    p1_boolean,
    p2_boolean,
    p3_boolean,
    p4_number
  ) {}
  isAnyEntityEntirelyInsideGarage(
    garageHash_number,
    p1_boolean,
    p2_boolean,
    p3_boolean,
    p4_number
  ) {}
  isObjectEntirelyInsideGarage(
    garageHash_number,
    entity_number,
    p2_number,
    p3_number
  ) {}
  isObjectPartiallyInsideGarage(garageHash_number, entity_number, p2_number) {}
  clearGarageArea(garageHash_number, isNetwork_boolean) {}
  _0x190428512B240692(
    garageHash_number,
    vehicles_boolean,
    peds_boolean,
    objects_boolean,
    isNetwork_boolean
  ) {}
  _0x659F9D71F52843F8(p0_number, p1_number) {}
  enableSavingInGarage(garageHash_number, toggle_boolean) {}
  _0x66A49D021870FE88() {}
  doesObjectOfTypeExistAtCoords(
    x_number,
    y_number,
    z_number,
    radius_number,
    hash_number,
    p5_boolean
  ) {}
  isPointInAngledArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_boolean,
    p11_boolean
  ) {}
  setObjectCanClimbOn(object_number, toggle_boolean) {}
  setObjectPhysicsParams(
    object_number,
    weight_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    gravity_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    buoyancy_number
  ) {}
  getObjectFragmentDamageHealth(p0_number, p1_boolean) {}
  setActivateObjectPhysicsAsSoonAsItIsUnfrozen(object_number, toggle_boolean) {}
  isAnyObjectNearPoint(
    x_number,
    y_number,
    z_number,
    range_number,
    p4_boolean
  ) {}
  isObjectNearPoint(
    objectHash_number,
    x_number,
    y_number,
    z_number,
    range_number
  ) {}
  removeObjectHighDetailModel(object_number) {}
  _0xE7E4C198B0185900(p0_number, p1_number, p2_boolean) {}
  _0xE05F6AEEFEB0BB02(p0_number, p1_number, p2_number) {}
  _0xF9C1681347C8BD15(object_number) {}
  trackObjectVisibility(object_number) {}
  isObjectVisible(object_number) {}
  _0xC6033D32241F6FB5(object_number, toggle_boolean) {}
  _0xEB6F1A9B5510A5D2(p0_number, p1_boolean) {}
  setUnkGlobalBoolRelatedToDamage(value_boolean) {}
  setCreateWeaponObjectLightSource(p0_number, p1_boolean) {}
  getRayfireMapObject(
    x_number,
    y_number,
    z_number,
    radius_number,
    name_string
  ) {}
  setStateOfRayfireMapObject(object_number, state_number) {}
  getStateOfRayfireMapObject(object_number) {}
  doesRayfireMapObjectExist(object_number) {}
  getRayfireMapObjectAnimPhase(object_number) {}
  createPickup(
    pickupHash_number,
    posX_number,
    posY_number,
    posZ_number,
    p4_number,
    value_number,
    p6_boolean,
    modelHash_number
  ) {}
  createPickupRotate(
    pickupHash_number,
    posX_number,
    posY_number,
    posZ_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    flag_number,
    amount_number,
    p9_number,
    p10_boolean,
    modelHash_number
  ) {}
  _0x394CD08E31313C28() {}
  _0x826D1EE4D1CAFC78(p0_number, p1_number) {}
  createAmbientPickup(
    pickupHash_number,
    posX_number,
    posY_number,
    posZ_number,
    flags_number,
    value_number,
    modelHash_number,
    p7_boolean,
    p8_boolean
  ) {}
  _0x1E3F1B1B891A2AAA(p0_number, p1_number) {}
  createPortablePickup(
    pickupHash_number,
    x_number,
    y_number,
    z_number,
    placeOnGround_boolean,
    modelHash_number
  ) {}
  createPortablePickup2(
    pickupHash_number,
    x_number,
    y_number,
    z_number,
    placeOnGround_boolean,
    modelHash_number
  ) {}
  attachPortablePickupToPed(pickupObject_number, ped_number) {}
  detachPortablePickupFromPed(pickupObject_number) {}
  hidePickup(pickupObject_number, toggle_boolean) {}
  _0x0BF3B3BD47D79C08(modelHash_number, p1_number) {}
  _0x78857FC65CADB909(p0_boolean) {}
  getSafePickupCoords(x_number, y_number, z_number, p3_number, p4_number) {}
  _0xD4A7A435B3710D05(x_number, y_number, z_number, radius_number) {}
  _0xB7C6D80FB371659A() {}
  getPickupCoords(pickup_number) {}
  _0x8DCA505A5C196F05(p0_number, p1_number) {}
  removeAllPickupsOfType(pickupHash_number) {}
  hasPickupBeenCollected(pickup_number) {}
  removePickup(pickup_number) {}
  createMoneyPickups(
    x_number,
    y_number,
    z_number,
    value_number,
    amount_number,
    model_number
  ) {}
  doesPickupExist(pickup_number) {}
  doesPickupObjectExist(pickupObject_number) {}
  getPickupObject(pickup_number) {}
  _0xFC481C641EBBD27D(p0_number) {}
  _0x0378C08504160D0D(p0_number) {}
  doesPickupOfTypeExistInArea(
    pickupHash_number,
    x_number,
    y_number,
    z_number,
    radius_number
  ) {}
  setPickupRegenerationTime(pickup_number, duration_number) {}
  _0x758A5C1B3B1E1990(p0_number) {}
  _0x616093EC6B139DD9(player_number, pickupHash_number, toggle_boolean) {}
  setLocalPlayerCanUsePickupsWithThisModel(modelHash_number, toggle_boolean) {}
  _0xFDC07C58E8AAB715(pickupHash_number) {}
  setTeamPickupObject(object_number, p1_number, p2_boolean) {}
  _0x92AEFB5F6E294023(object_number, p1_boolean, p2_boolean) {}
  _0x0596843B34B95CE5(p0_number, p1_number) {}
  _0xA08FE5E49BDC39DD(p0_number, p1_number, p2_boolean) {}
  _0x62454A641B41F3C5(p0_number) {}
  _0x39A5FB7EAF150840(p0_number, p1_number) {}
  _0xDB41D07A45A6D4B7(p0_number) {}
  setPickupGenerationRangeMultiplier(multiplier_number) {}
  getPickupGenerationRangeMultiplier() {}
  _0x31F924B53EADDF65(p0_boolean) {}
  _0x1C1B69FAE509BA97(p0_number, p1_number) {}
  _0x858EC9FD25DE04AA(p0_number, p1_number) {}
  _0x3ED2B83AB2E82799(p0_number, p1_number) {}
  _0x8881C98A31117998(p0_number, p1_number) {}
  _0x8CFF648FBD7330F1(p0_number) {}
  _0x46F3ADD1E2D5BAF2(p0_number, p1_number) {}
  _0x641F272B52E2F0F8(p0_number, p1_number) {}
  _0x4C134B4DF76025D0(p0_number, p1_number) {}
  _0xAA059C615DE9DD03(p0_number, p1_number) {}
  _0xF92099527DB8E2A7(p0_number, p1_number) {}
  _0xA2C1F5E92AFE49ED() {}
  _0x762DB2D380B48D04(p0_number) {}
  highlightPlacementCoords(x_number, y_number, z_number, colorIndex_number) {}
  _0x7813E8B8C4AE4799(pickup_number) {}
  _0xBFFE53AE7E67FCDC(p0_number, p1_number) {}
  _0xD05A3241B9A86F19(p0_number, p1_number) {}
  _0xB2D0BDE54F0E8E5A(object_number, toggle_boolean) {}
  getWeaponTypeFromPickupType(pickupHash_number) {}
  _0xD6429A016084F1A5(p0_number) {}
  isPickupWeaponObjectValid(object_number) {}
  getObjectTextureVariation(object_number) {}
  setObjectTextureVariation(object_number, textureVariation_number) {}
  _0xF12E33034D887F66(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  setObjectLightColor(
    object_number,
    p1_boolean,
    r_number,
    g_number,
    b_number
  ) {}
  setObjectColour(
    object_number,
    toggle_boolean,
    red_number,
    green_number,
    blue_number
  ) {}
  _0x3B2FD68DB5F8331C(object_number, toggle_boolean) {}
  setObjectStuntPropSpeedup(p0_number, p1_number) {}
  setObjectStuntPropDuration(p0_number, p1_number) {}
  getPickupHash(pickupHash_number) {}
  setForceObjectThisFrame(x_number, y_number, z_number, p3_number) {}
  markObjectForDeletion(object_number) {}
  _0x8CAAB2BD3EA58BD4(p0_number) {}
  _0x63ECF581BC70E363(p0_number, p1_number) {}
  setEnableArenaPropPhysics(p0_number, p1_number, p2_number) {}
  setEnableArenaPropPhysicsOnPed(p0_number, p1_number, p2_number, p3_number) {}
  _0x734E1714D077DA9A(p0_number, p1_number) {}
  _0x1A6CBB06E2D0D79D(p0_number, p1_number) {}
  getIsArenaPropPhysicsDisabled(p0_number, p1_number) {}
  _0x3BD770D281982DB5(p0_number, p1_number) {}
  _0x1C57C94A6446492A(p0_number, p1_number) {}
  _0xB5B7742424BD4445(p0_number, p1_number) {}
  //Category: Pad
  isControlEnabled(padIndex_number, control_number) {}
  isControlPressed(padIndex_number, control_number) {}
  isControlReleased(padIndex_number, control_number) {}
  isControlJustPressed(padIndex_number, control_number) {}
  isControlJustReleased(padIndex_number, control_number) {}
  getControlValue(padIndex_number, control_number) {}
  getControlNormal(padIndex_number, control_number) {}
  _0x5B73C77D9EB66E24(p0_boolean) {}
  getControlUnboundNormal(padIndex_number, control_number) {}
  setControlNormal(padIndex_number, control_number, amount_number) {}
  isDisabledControlPressed(padIndex_number, control_number) {}
  isDisabledControlReleased(padIndex_number, control_number) {}
  isDisabledControlJustPressed(padIndex_number, control_number) {}
  isDisabledControlJustReleased(padIndex_number, control_number) {}
  getDisabledControlNormal(padIndex_number, control_number) {}
  getDisabledControlUnboundNormal(padIndex_number, control_number) {}
  _0xD7D22F5592AED8BA(p0_number) {}
  isInputDisabled(padIndex_number) {}
  isInputJustDisabled(padIndex_number) {}
  setCursorLocation(x_number, y_number) {}
  _0x23F09EADC01449D6(padIndex_number) {}
  _0x6CD79468A1E595C6(padIndex_number) {}
  getControlInstructionalButton(padIndex_number, control_number, p2_boolean) {}
  getControlGroupInstructionalButton(
    padIndex_number,
    controlGroup_number,
    p2_boolean
  ) {}
  setControlGroupColor(
    padIndex_number,
    red_number,
    green_number,
    blue_number
  ) {}
  _0xCB0360EFEFB2580D(padIndex_number) {}
  setPadShake(padIndex_number, duration_number, frequency_number) {}
  _0x14D29BB12D47F68C(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  stopPadShake(padIndex_number) {}
  _0xF239400E16C23E08(p0_number, p1_number) {}
  _0xA0CEFCEA390AAB9B(p0_number) {}
  isLookInverted() {}
  _0xE1615EC03B3BB4FD() {}
  getLocalPlayerAimState() {}
  getLocalPlayerAimState2() {}
  _0x25AAA32BDC98F2A3() {}
  getIsUsingAlternateDriveby() {}
  getAllowMovementWhileZoomed() {}
  setPlayerpadShakesWhenControllerDisabled(toggle_boolean) {}
  setInputExclusive(padIndex_number, control_number) {}
  disableControlAction(padIndex_number, control_number, disable_boolean) {}
  enableControlAction(padIndex_number, control_number, enable_boolean) {}
  disableAllControlActions(padIndex_number) {}
  enableAllControlActions(padIndex_number) {}
  switchToInputMappingScheme(name_string) {}
  switchToInputMappingScheme2(name_string) {}
  resetInputMappingScheme() {}
  disableInputGroup(padIndex_number) {}
  //Category: Pathfind
  setRoadsInArea(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    unknown1_boolean,
    unknown2_boolean
  ) {}
  setRoadsInAngledArea(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    angle_number,
    unknown1_boolean,
    unknown2_boolean,
    unknown3_boolean
  ) {}
  setPedPathsInArea(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    unknown_boolean,
    p7_number
  ) {}
  getSafeCoordForPed(
    x_number,
    y_number,
    z_number,
    onGround_boolean,
    outPosition_vector3Ptr,
    flags_number
  ) {}
  getClosestVehicleNode(
    x_number,
    y_number,
    z_number,
    outPosition_vector3Ptr,
    nodeType_number,
    p5_number,
    p6_number
  ) {}
  getClosestMajorVehicleNode(
    x_number,
    y_number,
    z_number,
    outPosition_vector3Ptr,
    unknown1_number,
    unknown2_number
  ) {}
  getClosestVehicleNodeWithHeading(
    x_number,
    y_number,
    z_number,
    outPosition_vector3Ptr,
    outHeading_number,
    nodeType_number,
    p6_number,
    p7_number
  ) {}
  getNthClosestVehicleNode(
    x_number,
    y_number,
    z_number,
    nthClosest_number,
    outPosition_vector3Ptr,
    unknown1_number,
    unknown2_number,
    unknown3_number
  ) {}
  getNthClosestVehicleNodeId(
    x_number,
    y_number,
    z_number,
    nth_number,
    nodetype_number,
    p5_number,
    p6_number
  ) {}
  getNthClosestVehicleNodeWithHeading(
    x_number,
    y_number,
    z_number,
    nthClosest_number,
    outPosition_vector3Ptr,
    heading_number,
    unknown1_number,
    unknown2_number,
    unknown3_number,
    unknown4_number
  ) {}
  getNthClosestVehicleNodeIdWithHeading(
    x_number,
    y_number,
    z_number,
    nthClosest_number,
    outPosition_vector3Ptr,
    outHeading_number,
    p6_number,
    p7_number,
    p8_number
  ) {}
  getNthClosestVehicleNodeFavourDirection(
    x_number,
    y_number,
    z_number,
    desiredX_number,
    desiredY_number,
    desiredZ_number,
    nthClosest_number,
    outPosition_vector3Ptr,
    outHeading_number,
    nodetype_number,
    p10_number,
    p11_number
  ) {}
  getVehicleNodeProperties(
    x_number,
    y_number,
    z_number,
    density_number,
    flags_number
  ) {}
  isVehicleNodeIdValid(vehicleNodeId_number) {}
  getVehicleNodePosition(nodeId_number, outPosition_vector3Ptr) {}
  getVehicleNodeIsGpsAllowed(nodeID_number) {}
  getVehicleNodeIsSwitchedOff(nodeID_number) {}
  getClosestRoad(
    x_number,
    y_number,
    z_number,
    p3_number,
    p4_number,
    p5_vector3Ptr,
    p6_vector3Ptr,
    p7_number,
    p8_number,
    p9_number,
    p10_boolean
  ) {}
  _0x228E5C6AD4D74BFD(toggle_boolean) {}
  arePathNodesLoadedInArea(x1_number, y1_number, x2_number, y2_number) {}
  _0x07FB139B592FA687(p0_number, p1_number, p2_number, p3_number) {}
  setRoadsBackToOriginal(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  setRoadsBackToOriginalInAngledArea(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    p6_number,
    p7_number
  ) {}
  setAmbientPedRangeMultiplierThisFrame(multiplier_number) {}
  _0xAA76052DDA9BFC3E(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  setPedPathsBackToOriginal(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  getRandomVehicleNode(
    x_number,
    y_number,
    z_number,
    radius_number,
    p4_boolean,
    p5_boolean,
    p6_boolean,
    outPosition_vector3Ptr,
    nodeId_number
  ) {}
  getStreetNameAtCoord(
    x_number,
    y_number,
    z_number,
    streetName_number,
    crossingRoad_number
  ) {}
  generateDirectionsToCoord(
    x_number,
    y_number,
    z_number,
    p3_boolean,
    direction_number,
    p5_number,
    distToNxJunction_number
  ) {}
  setIgnoreNoGpsFlag(toggle_boolean) {}
  setIgnoreSecondaryRouteNodes(toggle_boolean) {}
  setGpsDisabledZone(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z3_number
  ) {}
  getGpsBlipRouteLength() {}
  _0xF3162836C28F9DA5(p0_number, p1_number, p2_number, p3_number) {}
  getGpsBlipRouteFound() {}
  getRoadSidePointWithHeading(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  getPointOnRoadSide(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  isPointOnRoad(x_number, y_number, z_number, vehicle_number) {}
  getNextGpsDisabledZoneIndex() {}
  setGpsDisabledZoneAtIndex(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    index_number
  ) {}
  clearGpsDisabledZoneAtIndex(index_number) {}
  addNavmeshRequiredRegion(x_number, y_number, radius_number) {}
  removeNavmeshRequiredRegions() {}
  isNavmeshRequiredRegionOwnedByAnyThread() {}
  disableNavmeshInArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  areAllNavmeshRegionsLoaded() {}
  isNavmeshLoadedInArea(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number
  ) {}
  _0x01708E8DD3FF8C65(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  addNavmeshBlockingObject(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_boolean,
    p8_number
  ) {}
  updateNavmeshBlockingObject(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number
  ) {}
  removeNavmeshBlockingObject(p0_number) {}
  doesNavmeshBlockingObjectExist(p0_number) {}
  getHeightmapTopZForPosition(p0_number, p1_number) {}
  getHeightmapTopZForArea(p0_number, p1_number, p2_number, p3_number) {}
  getHeightmapBottomZForPosition(left_number, right_number) {}
  getHeightmapBottomZForArea(p0_number, p1_number, p2_number, p3_number) {}
  calculateTravelDistanceBetweenPoints(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number
  ) {}
  //Category: Ped
  createPed(
    pedType_number,
    modelHash_number,
    x_number,
    y_number,
    z_number,
    heading_number,
    isNetwork_boolean,
    thisScriptCheck_boolean
  ) {}
  deletePed(ped_number) {}
  clonePed(
    ped_number,
    heading_number,
    isNetwork_boolean,
    thisScriptCheck_boolean
  ) {}
  clonePedEx(
    ped_number,
    heading_number,
    isNetwork_boolean,
    thisScriptCheck_boolean,
    p4_number
  ) {}
  clonePedToTarget(ped_number, targetPed_number) {}
  clonePedToTargetEx(ped_number, targetPed_number, p2_number) {}
  isPedInVehicle(ped_number, vehicle_number, atGetIn_boolean) {}
  isPedInModel(ped_number, modelHash_number) {}
  isPedInAnyVehicle(ped_number, atGetIn_boolean) {}
  isCopPedInArea3d(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number
  ) {}
  isPedInjured(ped_number) {}
  isPedHurt(ped_number) {}
  isPedFatallyInjured(ped_number) {}
  isPedDeadOrDying(ped_number, p1_boolean) {}
  isConversationPedDead(ped_number) {}
  isPedAimingFromCover(ped_number) {}
  isPedReloading(ped_number) {}
  isPedAPlayer(ped_number) {}
  createPedInsideVehicle(
    vehicle_number,
    pedType_number,
    modelHash_number,
    seat_number,
    isNetwork_boolean,
    thisScriptCheck_boolean
  ) {}
  setPedDesiredHeading(ped_number, heading_number) {}
  freezePedCameraRotation(ped_number) {}
  isPedFacingPed(ped_number, otherPed_number, angle_number) {}
  isPedInMeleeCombat(ped_number) {}
  isPedStopped(ped_number) {}
  isPedShootingInArea(
    ped_number,
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    p7_boolean,
    p8_boolean
  ) {}
  isAnyPedShootingInArea(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    p6_boolean,
    p7_boolean
  ) {}
  isPedShooting(ped_number) {}
  setPedAccuracy(ped_number, accuracy_number) {}
  getPedAccuracy(ped_number) {}
  _0x87DDEB611B329A9C(multiplier_number) {}
  isPedModel(ped_number, modelHash_number) {}
  explodePedHead(ped_number, weaponHash_number) {}
  removePedElegantly(ped_number) {}
  addArmourToPed(ped_number, amount_number) {}
  setPedArmour(ped_number, amount_number) {}
  setPedIntoVehicle(ped_number, vehicle_number, seatIndex_number) {}
  setPedAllowVehiclesOverride(ped_number, toggle_boolean) {}
  canCreateRandomPed(unk_boolean) {}
  createRandomPed(posX_number, posY_number, posZ_number) {}
  createRandomPedAsDriver(vehicle_number, returnHandle_boolean) {}
  canCreateRandomDriver() {}
  canCreateRandomBikeRider() {}
  setPedMoveAnimsBlendOut(ped_number) {}
  setPedCanBeDraggedOut(ped_number, toggle_boolean) {}
  _0xF2BEBCDFAFDAA19E(toggle_boolean) {}
  isPedMale(ped_number) {}
  isPedHuman(ped_number) {}
  getVehiclePedIsIn(ped_number, lastVehicle_boolean) {}
  resetPedLastVehicle(ped_number) {}
  setPedDensityMultiplierThisFrame(multiplier_number) {}
  setScenarioPedDensityMultiplierThisFrame(p0_number, p1_number) {}
  _0x5A7F62FDA59759BD() {}
  setScriptedConversionCoordThisFrame(x_number, y_number, z_number) {}
  setPedNonCreationArea(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number
  ) {}
  clearPedNonCreationArea() {}
  _0x4759CC730F947C81() {}
  isPedOnMount(ped_number) {}
  getMount(ped_number) {}
  isPedOnVehicle(ped_number) {}
  isPedOnSpecificVehicle(ped_number, vehicle_number) {}
  setPedMoney(ped_number, amount_number) {}
  getPedMoney(ped_number) {}
  _0xFF4803BC019852D9(p0_number, p1_number) {}
  _0x6B0E6172C9A4D902(p0_boolean) {}
  _0x9911F4A24485F653(p0_boolean) {}
  setPedSuffersCriticalHits(ped_number, toggle_boolean) {}
  _0xAFC976FD0580C7B3(ped_number, toggle_boolean) {}
  isPedSittingInVehicle(ped_number, vehicle_number) {}
  isPedSittingInAnyVehicle(ped_number) {}
  isPedOnFoot(ped_number) {}
  isPedOnAnyBike(ped_number) {}
  isPedPlantingBomb(ped_number) {}
  getDeadPedPickupCoords(ped_number, p1_number, p2_number) {}
  isPedInAnyBoat(ped_number) {}
  isPedInAnySub(ped_number) {}
  isPedInAnyHeli(ped_number) {}
  isPedInAnyPlane(ped_number) {}
  isPedInFlyingVehicle(ped_number) {}
  setPedDiesInWater(ped_number, toggle_boolean) {}
  setPedDiesInSinkingVehicle(ped_number, toggle_boolean) {}
  getPedArmour(ped_number) {}
  setPedStayInVehicleWhenJacked(ped_number, toggle_boolean) {}
  setPedCanBeShotInVehicle(ped_number, toggle_boolean) {}
  getPedLastDamageBone(ped_number, outBone_number) {}
  clearPedLastDamageBone(ped_number) {}
  setAiWeaponDamageModifier(value_number) {}
  resetAiWeaponDamageModifier() {}
  setAiMeleeWeaponDamageModifier(modifier_number) {}
  resetAiMeleeWeaponDamageModifier() {}
  _0x2F3C3D9F50681DE4(p0_number, p1_boolean) {}
  setPedCanBeTargetted(ped_number, toggle_boolean) {}
  setPedCanBeTargettedByTeam(ped_number, team_number, toggle_boolean) {}
  setPedCanBeTargettedByPlayer(ped_number, player_number, toggle_boolean) {}
  _0x061CB768363D6424(ped_number, toggle_boolean) {}
  _0xFD325494792302D7(ped_number, toggle_boolean) {}
  isPedInAnyPoliceVehicle(ped_number) {}
  forcePedToOpenParachute(ped_number) {}
  isPedInParachuteFreeFall(ped_number) {}
  isPedFalling(ped_number) {}
  isPedJumping(ped_number) {}
  _0x412F1364FA066CFB(p0_number) {}
  _0x451D05012CCEC234(p0_number) {}
  isPedClimbing(ped_number) {}
  isPedVaulting(ped_number) {}
  isPedDiving(ped_number) {}
  isPedJumpingOutOfVehicle(ped_number) {}
  isPedOpeningADoor(ped_number) {}
  getPedParachuteState(ped_number) {}
  getPedParachuteLandingType(ped_number) {}
  setPedParachuteTintIndex(ped_number, tintIndex_number) {}
  getPedParachuteTintIndex(ped_number, outTintIndex_number) {}
  setPedReserveParachuteTintIndex(ped_number, p1_number) {}
  createParachuteObject(ped_number, p1_boolean, p2_boolean) {}
  setPedDucking(ped_number, toggle_boolean) {}
  isPedDucking(ped_number) {}
  isPedInAnyTaxi(ped_number) {}
  setPedIdRange(ped_number, value_number) {}
  setPedHighlyPerceptive(ped_number, toggle_boolean) {}
  _0x2F074C904D85129E(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  _0xEC4B4B3B9908052A(ped_number, unk_number) {}
  _0x733C87D4CE22BEA2(p0_number) {}
  setPedSeeingRange(ped_number, value_number) {}
  setPedHearingRange(ped_number, value_number) {}
  setPedVisualFieldMinAngle(ped_number, value_number) {}
  setPedVisualFieldMaxAngle(ped_number, value_number) {}
  setPedVisualFieldMinElevationAngle(ped_number, angle_number) {}
  setPedVisualFieldMaxElevationAngle(ped_number, angle_number) {}
  setPedVisualFieldPeripheralRange(ped_number, range_number) {}
  setPedVisualFieldCenterAngle(ped_number, angle_number) {}
  getPedVisualFieldCenterAngle(ped_number) {}
  setPedStealthMovement(ped_number, p1_boolean, action_string) {}
  getPedStealthMovement(ped_number) {}
  createGroup(unused_number) {}
  setPedAsGroupLeader(ped_number, groupId_number) {}
  setPedAsGroupMember(ped_number, groupId_number) {}
  setPedCanTeleportToGroupLeader(
    pedHandle_number,
    groupHandle_number,
    toggle_boolean
  ) {}
  removeGroup(groupId_number) {}
  removePedFromGroup(ped_number) {}
  isPedGroupMember(ped_number, groupId_number) {}
  isPedHangingOnToVehicle(ped_number) {}
  setGroupSeparationRange(groupHandle_number, separationRange_number) {}
  setPedMinGroundTimeForStungun(ped_number, ms_number) {}
  isPedProne(ped_number) {}
  isPedInCombat(ped_number, target_number) {}
  canPedInCombatSeeTarget(ped_number, target_number) {}
  isPedDoingDriveby(ped_number) {}
  isPedJacking(ped_number) {}
  isPedBeingJacked(ped_number) {}
  isPedBeingStunned(ped_number, p1_number) {}
  getPedsJacker(ped_number) {}
  getJackTarget(ped_number) {}
  isPedFleeing(ped_number) {}
  isPedInCover(ped_number, exceptUseWeapon_boolean) {}
  isPedInCoverFacingLeft(ped_number) {}
  isPedInHighCover(ped_number) {}
  isPedGoingIntoCover(ped_number) {}
  setPedPinnedDown(ped_number, pinned_boolean, i_number) {}
  getSeatPedIsTryingToEnter(ped_number) {}
  getVehiclePedIsTryingToEnter(ped_number) {}
  getPedSourceOfDeath(ped_number) {}
  getPedCauseOfDeath(ped_number) {}
  getPedTimeOfDeath(ped_number) {}
  _0x5407B7288D0478B7(p0_number) {}
  _0x336B3D200AB007CB(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  setPedRelationshipGroupDefaultHash(ped_number, hash_number) {}
  setPedRelationshipGroupHash(ped_number, hash_number) {}
  setRelationshipBetweenGroups(
    relationship_number,
    group1_number,
    group2_number
  ) {}
  clearRelationshipBetweenGroups(
    relationship_number,
    group1_number,
    group2_number
  ) {}
  addRelationshipGroup(name_string, groupHash_number) {}
  removeRelationshipGroup(groupHash_number) {}
  doesRelationshipGroupExist(p0_number) {}
  getRelationshipBetweenPeds(ped1_number, ped2_number) {}
  getPedRelationshipGroupDefaultHash(ped_number) {}
  getPedRelationshipGroupHash(ped_number) {}
  getRelationshipBetweenGroups(group1_number, group2_number) {}
  _0x5615E0C5EB2BC6E2(p0_number, p1_number) {}
  _0xAD27D957598E49E9(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  setPedCanBeTargetedWithoutLos(ped_number, toggle_boolean) {}
  setPedToInformRespectedFriends(
    ped_number,
    radius_number,
    maxFriends_number
  ) {}
  isPedRespondingToEvent(ped_number, event_number) {}
  setPedFiringPattern(ped_number, patternHash_number) {}
  setPedShootRate(ped_number, shootRate_number) {}
  setCombatFloat(ped_number, combatType_number, p2_number) {}
  getCombatFloat(ped_number, p1_number) {}
  getGroupSize(groupID_number, unknown_number, sizeInMembers_number) {}
  doesGroupExist(groupId_number) {}
  getPedGroupIndex(ped_number) {}
  isPedInGroup(ped_number) {}
  getPlayerPedIsFollowing(ped_number) {}
  setGroupFormation(groupId_number, formationType_number) {}
  setGroupFormationSpacing(groupId_number, p1_number, p2_number, p3_number) {}
  resetGroupFormationDefaultSpacing(groupHandle_number) {}
  getVehiclePedIsUsing(ped_number) {}
  getVehiclePedIsEntering(ped_number) {}
  setPedGravity(ped_number, toggle_boolean) {}
  applyDamageToPed(ped_number, damageAmount_number, p2_boolean, p3_number) {}
  getTimeOfLastPedWeaponDamage(ped_number, weaponHash_number) {}
  setPedAllowedToDuck(ped_number, toggle_boolean) {}
  setPedNeverLeavesGroup(ped_number, toggle_boolean) {}
  getPedType(ped_number) {}
  setPedAsCop(ped_number, toggle_boolean) {}
  setPedMaxHealth(ped_number, value_number) {}
  getPedMaxHealth(ped_number) {}
  setPedMaxTimeInWater(ped_number, value_number) {}
  setPedMaxTimeUnderwater(ped_number, value_number) {}
  _0x2735233A786B1BEF(ped_number, p1_number) {}
  setPedVehicleForcedSeatUsage(
    ped_number,
    vehicle_number,
    seatIndex_number,
    flags_number
  ) {}
  clearAllPedVehicleForcedSeatUsage(ped_number) {}
  _0xB282749D5E028163(p0_number, p1_number) {}
  setPedCanBeKnockedOffVehicle(ped_number, state_number) {}
  canKnockPedOffVehicle(ped_number) {}
  knockPedOffVehicle(ped_number) {}
  setPedCoordsNoGang(ped_number, posX_number, posY_number, posZ_number) {}
  getPedAsGroupMember(groupID_number, memberNumber_number) {}
  getPedAsGroupLeader(groupID_number) {}
  setPedKeepTask(ped_number, toggle_boolean) {}
  _0x49E50BDB8BA4DAB2(ped_number, toggle_boolean) {}
  isPedSwimming(ped_number) {}
  isPedSwimmingUnderWater(ped_number) {}
  setPedCoordsKeepVehicle(ped_number, posX_number, posY_number, posZ_number) {}
  setPedDiesInVehicle(ped_number, toggle_boolean) {}
  setCreateRandomCops(toggle_boolean) {}
  setCreateRandomCopsNotOnScenarios(toggle_boolean) {}
  setCreateRandomCopsOnScenarios(toggle_boolean) {}
  canCreateRandomCops() {}
  setPedAsEnemy(ped_number, toggle_boolean) {}
  setPedCanSmashGlass(ped_number, p1_boolean, p2_boolean) {}
  isPedInAnyTrain(ped_number) {}
  isPedGettingIntoAVehicle(ped_number) {}
  isPedTryingToEnterALockedVehicle(ped_number) {}
  setEnableHandcuffs(ped_number, toggle_boolean) {}
  setEnableBoundAnkles(ped_number, toggle_boolean) {}
  setEnableScuba(ped_number, toggle_boolean) {}
  setCanAttackFriendly(ped_number, toggle_boolean, p2_boolean) {}
  getPedAlertness(ped_number) {}
  setPedAlertness(ped_number, value_number) {}
  setPedGetOutUpsideDownVehicle(ped_number, toggle_boolean) {}
  setPedMovementClipset(ped_number, clipSet_string, p2_number) {}
  resetPedMovementClipset(ped_number, p1_number) {}
  setPedStrafeClipset(ped_number, clipSet_string) {}
  resetPedStrafeClipset(ped_number) {}
  setPedWeaponMovementClipset(ped_number, clipSet_string) {}
  resetPedWeaponMovementClipset(ped_number) {}
  setPedDriveByClipsetOverride(ped_number, clipset_string) {}
  clearPedDriveByClipsetOverride(ped_number) {}
  setPedCoverClipsetOverride(ped_number, p1_string) {}
  clearPedCoverClipsetOverride(ped_number) {}
  _0x80054D7FCC70EEC6(ped_number) {}
  setPedInVehicleContext(ped_number, context_number) {}
  resetPedInVehicleContext(ped_number) {}
  isScriptedScenarioPedUsingConditionalAnim(
    ped_number,
    animDict_string,
    anim_string
  ) {}
  setPedAlternateWalkAnim(
    ped_number,
    animDict_string,
    animName_string,
    p3_number,
    p4_boolean
  ) {}
  clearPedAlternateWalkAnim(ped_number, p1_number) {}
  setPedAlternateMovementAnim(
    ped_number,
    stance_number,
    animDictionary_string,
    animationName_string,
    p4_number,
    p5_boolean
  ) {}
  clearPedAlternateMovementAnim(ped_number, stance_number, p2_number) {}
  setPedGestureGroup(ped_number, animGroupGesture_string) {}
  getAnimInitialOffsetPosition(
    animDict_string,
    animName_string,
    x_number,
    y_number,
    z_number,
    xRot_number,
    yRot_number,
    zRot_number,
    p8_number,
    p9_number
  ) {}
  getAnimInitialOffsetRotation(
    animDict_string,
    animName_string,
    x_number,
    y_number,
    z_number,
    xRot_number,
    yRot_number,
    zRot_number,
    p8_number,
    p9_number
  ) {}
  getPedDrawableVariation(ped_number, componentId_number) {}
  getNumberOfPedDrawableVariations(ped_number, componentId_number) {}
  getPedTextureVariation(ped_number, componentId_number) {}
  getNumberOfPedTextureVariations(
    ped_number,
    componentId_number,
    drawableId_number
  ) {}
  getNumberOfPedPropDrawableVariations(ped_number, propId_number) {}
  getNumberOfPedPropTextureVariations(
    ped_number,
    propId_number,
    drawableId_number
  ) {}
  getPedPaletteVariation(ped_number, componentId_number) {}
  _0x9E30E91FB03A2CAF(p0_number, p1_number) {}
  _0x1E77FA7A62EE6C4C(p0_number) {}
  _0xF033419D1B81FAE8(p0_number) {}
  isPedComponentVariationValid(
    ped_number,
    componentId_number,
    drawableId_number,
    textureId_number
  ) {}
  setPedComponentVariation(
    ped_number,
    componentId_number,
    drawableId_number,
    textureId_number,
    paletteId_number
  ) {}
  setPedRandomComponentVariation(ped_number, p1_number) {}
  setPedRandomProps(ped_number) {}
  setPedDefaultComponentVariation(ped_number) {}
  setPedBlendFromParents(
    ped_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  setPedHeadBlendData(
    ped_number,
    shapeFirstID_number,
    shapeSecondID_number,
    shapeThirdID_number,
    skinFirstID_number,
    skinSecondID_number,
    skinThirdID_number,
    shapeMix_number,
    skinMix_number,
    thirdMix_number,
    isParent_boolean
  ) {}
  getPedHeadBlendData(ped_number, headBlendData_memoryBuffer) {}
  updatePedHeadBlendData(
    ped_number,
    shapeMix_number,
    skinMix_number,
    thirdMix_number
  ) {}
  setPedEyeColor(ped_number, index_number) {}
  _0x76BBA2CEE66D47E9(p0_number) {}
  setPedHeadOverlay(
    ped_number,
    overlayID_number,
    index_number,
    opacity_number
  ) {}
  getPedHeadOverlayValue(ped_number, overlayID_number) {}
  getPedHeadOverlayNum(overlayID_number) {}
  setPedHeadOverlayColor(
    ped_number,
    overlayID_number,
    colorType_number,
    colorID_number,
    secondColorID_number
  ) {}
  setPedHairColor(ped_number, colorID_number, highlightColorID_number) {}
  getNumHairColors() {}
  getNumMakeupColors() {}
  getPedHairRgbColor(p0_number, r_number, g_number, b_number) {}
  getPedMakeupRgbColor(p0_number, r_number, g_number, b_number) {}
  isPedHairColorValid2(p0_number) {}
  _0xEA9960D07DADCF10(p0_number) {}
  isPedLipstickColorValid2(p0_number) {}
  isPedBlushColorValid2(p0_number) {}
  isPedHairColorValid(colorID_number) {}
  _0xAAA6A3698A69E048(p0_number) {}
  isPedLipstickColorValid(colorID_number) {}
  isPedBlushColorValid(colorID_number) {}
  _0x09E7ECA981D9B210(p0_number) {}
  _0xC56FBF2F228E1DAC(modelHash_number, p1_number, p2_number) {}
  setPedFaceFeature(ped_number, index_number, scale_number) {}
  hasPedHeadBlendFinished(ped_number) {}
  _0x4668D80430D6C299(ped_number) {}
  setHeadBlendPaletteColor(
    ped_number,
    r_number,
    g_number,
    b_number,
    p4_number
  ) {}
  disableHeadBlendPaletteColor(ped_number) {}
  getPedHeadBlendFirstIndex(type_number) {}
  getNumParentPedsOfType(type_number) {}
  setPedPreloadVariationData(
    ped_number,
    slot_number,
    drawableId_number,
    textureId_number
  ) {}
  hasPedPreloadVariationDataFinished(ped_number) {}
  releasePedPreloadVariationData(ped_number) {}
  setPedPreloadPropData(
    ped_number,
    componentId_number,
    drawableId_number,
    TextureId_number
  ) {}
  hasPedPreloadPropDataFinished(ped_number) {}
  releasePedPreloadPropData(ped_number) {}
  getPedPropIndex(ped_number, componentId_number) {}
  setPedPropIndex(
    ped_number,
    componentId_number,
    drawableId_number,
    TextureId_number,
    attach_boolean
  ) {}
  knockOffPedProp(ped_number, p1_boolean, p2_boolean, p3_boolean, p4_boolean) {}
  clearPedProp(ped_number, propId_number) {}
  clearAllPedProps(ped_number) {}
  dropAmbientProp(ped_number) {}
  getPedPropTextureIndex(ped_number, componentId_number) {}
  clearPedParachutePackVariation(p0_number) {}
  _0x36C6984C3ED0C911(p0_number) {}
  clearPedScubaGearVariation(ped_number) {}
  _0xFEC9A3B1820F3331(p0_number) {}
  setBlockingOfNonTemporaryEvents(ped_number, toggle_boolean) {}
  setPedBoundsOrientation(
    ped_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  registerTarget(ped_number, target_number) {}
  registerHatedTargetsAroundPed(ped_number, radius_number) {}
  getRandomPedAtCoord(
    x_number,
    y_number,
    z_number,
    xRadius_number,
    yRadius_number,
    zRadius_number,
    pedType_number
  ) {}
  getClosestPed(
    x_number,
    y_number,
    z_number,
    radius_number,
    p4_boolean,
    p5_boolean,
    outPed_number,
    p7_boolean,
    p8_boolean,
    pedType_number
  ) {}
  setScenarioPedsToBeReturnedByNextCommand(value_boolean) {}
  _0x03EA03AF85A85CB7(
    ped_number,
    p1_boolean,
    p2_boolean,
    p3_boolean,
    p4_boolean,
    p5_boolean,
    p6_boolean,
    p7_boolean,
    p8_number
  ) {}
  setDriverRacingModifier(driver_number, modifier_number) {}
  setDriverAbility(driver_number, ability_number) {}
  setDriverAggressiveness(driver_number, aggressiveness_number) {}
  canPedRagdoll(ped_number) {}
  setPedToRagdoll(
    ped_number,
    time1_number,
    time2_number,
    ragdollType_number,
    p4_boolean,
    p5_boolean,
    p6_boolean
  ) {}
  setPedToRagdollWithFall(
    ped_number,
    time_number,
    p2_number,
    ragdollType_number,
    x_number,
    y_number,
    z_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number,
    p12_number,
    p13_number
  ) {}
  setPedRagdollOnCollision(ped_number, toggle_boolean) {}
  isPedRagdoll(ped_number) {}
  isPedRunningRagdollTask(ped_number) {}
  setPedRagdollForceFall(ped_number) {}
  resetPedRagdollTimer(ped_number) {}
  setPedCanRagdoll(ped_number, toggle_boolean) {}
  isPedRunningMeleeTask(ped_number) {}
  isPedRunningMobilePhoneTask(ped_number) {}
  _0xA3F3564A5B3646C0(ped_number) {}
  setRagdollBlockingFlags(ped_number, flags_number) {}
  clearRagdollBlockingFlags(ped_number, flags_number) {}
  setPedAngledDefensiveArea(
    ped_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_boolean,
    p9_boolean
  ) {}
  setPedSphereDefensiveArea(
    ped_number,
    x_number,
    y_number,
    z_number,
    radius_number,
    p5_boolean,
    p6_boolean
  ) {}
  setPedDefensiveSphereAttachedToPed(
    ped_number,
    target_number,
    xOffset_number,
    yOffset_number,
    zOffset_number,
    radius_number,
    p6_boolean
  ) {}
  setPedDefensiveSphereAttachedToVehicle(
    ped_number,
    target_number,
    xOffset_number,
    yOffset_number,
    zOffset_number,
    radius_number,
    p6_boolean
  ) {}
  setPedDefensiveAreaAttachedToPed(
    ped_number,
    attachPed_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_boolean,
    p10_boolean
  ) {}
  setPedDefensiveAreaDirection(
    ped_number,
    p1_number,
    p2_number,
    p3_number,
    p4_boolean
  ) {}
  removePedDefensiveArea(ped_number, toggle_boolean) {}
  getPedDefensiveAreaPosition(ped_number, p1_boolean) {}
  isPedDefensiveAreaActive(ped_number, p1_boolean) {}
  setPedPreferredCoverSet(ped_number, itemSet_number) {}
  removePedPreferredCoverSet(ped_number) {}
  reviveInjuredPed(ped_number) {}
  resurrectPed(ped_number) {}
  setPedNameDebug(ped_number, name_string) {}
  getPedExtractedDisplacement(ped_number, worldSpace_boolean) {}
  setPedDiesWhenInjured(ped_number, toggle_boolean) {}
  setPedEnableWeaponBlocking(ped_number, toggle_boolean) {}
  _0xF9ACF4A08098EA25(ped_number, p1_boolean) {}
  resetPedVisibleDamage(ped_number) {}
  applyPedBloodDamageByZone(
    ped_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  applyPedBlood(
    ped_number,
    boneIndex_number,
    xRot_number,
    yRot_number,
    zRot_number,
    woundType_string
  ) {}
  applyPedBloodByZone(ped_number, p1_number, p2_number, p3_number, p4_number) {}
  applyPedBloodSpecific(
    ped_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number
  ) {}
  applyPedDamageDecal(
    ped_number,
    damageZone_number,
    xOffset_number,
    yOffset_number,
    heading_number,
    scale_number,
    alpha_number,
    variation_number,
    fadeIn_boolean,
    decalName_string
  ) {}
  applyPedDamagePack(
    ped_number,
    damagePack_string,
    damage_number,
    mult_number
  ) {}
  clearPedBloodDamage(ped_number) {}
  clearPedBloodDamageByZone(ped_number, p1_number) {}
  hidePedBloodDamageByZone(ped_number, p1_number, p2_boolean) {}
  clearPedDamageDecalByZone(ped_number, p1_number, p2_string) {}
  getPedDecorationsState(ped_number) {}
  _0x2B694AFCF64E6994(ped_number, p1_boolean) {}
  clearPedWetness(ped_number) {}
  setPedWetnessHeight(ped_number, height_number) {}
  setPedWetnessEnabledThisFrame(ped_number) {}
  clearPedEnvDirt(ped_number) {}
  setPedSweat(ped_number, sweat_number) {}
  addPedDecorationFromHashes(ped_number, collection_number, overlay_number) {}
  addPedDecorationFromHashesInCorona(
    ped_number,
    collection_number,
    overlay_number
  ) {}
  getPedDecorationZoneFromHashes(collection_number, overlay_number) {}
  clearPedDecorations(ped_number) {}
  clearPedDecorationsLeaveScars(ped_number) {}
  wasPedSkeletonUpdated(ped_number) {}
  getPedBoneCoords(
    ped_number,
    boneId_number,
    offsetX_number,
    offsetY_number,
    offsetZ_number
  ) {}
  createNmMessage(startImmediately_boolean, messageId_number) {}
  givePedNmMessage(ped_number) {}
  addScenarioBlockingArea(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    p6_boolean,
    p7_boolean,
    p8_boolean,
    p9_boolean
  ) {}
  removeScenarioBlockingAreas() {}
  removeScenarioBlockingArea(p0_number, p1_boolean) {}
  setScenarioPedsSpawnInSphereArea(
    x_number,
    y_number,
    z_number,
    range_number,
    p4_number
  ) {}
  doesScenarioBlockingAreaExist(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number
  ) {}
  isPedUsingScenario(ped_number, scenario_string) {}
  isPedUsingAnyScenario(ped_number) {}
  setPedPanicExitScenario(p0_number, p1_number, p2_number, p3_number) {}
  _0x9A77DFD295E29B09(p0_number, p1_boolean) {}
  _0x25361A96E0F7E419(p0_number, p1_number, p2_number, p3_number) {}
  _0xEC6935EBE0847B90(p0_number, p1_number, p2_number, p3_number) {}
  _0xA3A9299C4F2ADB98(p0_number) {}
  _0xF1C03A5352243A30(p0_number) {}
  _0xEEED8FAFEC331A70(p0_number, p1_number, p2_number, p3_number) {}
  _0x425AECF167663F48(ped_number, p1_boolean) {}
  _0x5B6010B3CBC29095(p0_number, p1_boolean) {}
  _0xCEDA60A74219D064(p0_number, p1_boolean) {}
  playFacialAnim(ped_number, animName_string, animDict_string) {}
  _0x5687C7F05B39E401(ped_number, animDict_string) {}
  setFacialIdleAnimOverride(ped_number, animName_string, animDict_string) {}
  clearFacialIdleAnimOverride(ped_number) {}
  setPedCanPlayGestureAnims(ped_number, toggle_boolean) {}
  setPedCanPlayVisemeAnims(ped_number, toggle_boolean, p2_boolean) {}
  setPedCanPlayInjuredAnims(ped_number, p1_boolean) {}
  setPedCanPlayAmbientAnims(ped_number, toggle_boolean) {}
  setPedCanPlayAmbientBaseAnims(ped_number, toggle_boolean) {}
  _0xC2EE020F5FB4DB53(ped_number) {}
  setPedCanArmIk(ped_number, toggle_boolean) {}
  setPedCanHeadIk(ped_number, toggle_boolean) {}
  setPedCanLegIk(ped_number, toggle_boolean) {}
  setPedCanTorsoIk(ped_number, toggle_boolean) {}
  setPedCanTorsoReactIk(ped_number, p1_boolean) {}
  _0x6647C5F6F5792496(ped_number, p1_boolean) {}
  setPedCanUseAutoConversationLookat(ped_number, toggle_boolean) {}
  isPedHeadtrackingPed(ped1_number, ped2_number) {}
  isPedHeadtrackingEntity(ped_number, entity_number) {}
  setPedPrimaryLookat(ped_number, lookAt_number) {}
  setPedClothPackageIndex(p0_number, p1_number) {}
  setPedClothProne(p0_number, p1_number) {}
  _0xA660FAF550EB37E5(p0_number, p1_boolean) {}
  setPedConfigFlag(ped_number, flagId_number, value_boolean) {}
  setPedResetFlag(ped_number, flagId_number, doReset_boolean) {}
  getPedConfigFlag(ped_number, flagId_number, p2_boolean) {}
  getPedResetFlag(ped_number, flagId_number) {}
  setPedGroupMemberPassengerIndex(ped_number, index_number) {}
  setPedCanEvasiveDive(ped_number, toggle_boolean) {}
  isPedEvasiveDiving(ped_number, evadingEntity_number) {}
  setPedShootsAtCoord(
    ped_number,
    x_number,
    y_number,
    z_number,
    toggle_boolean
  ) {}
  setPedModelIsSuppressed(ped_number, toggle_boolean) {}
  stopAnyPedModelBeingSuppressed() {}
  setPedCanBeTargetedWhenInjured(ped_number, toggle_boolean) {}
  setPedGeneratesDeadBodyEvents(ped_number, toggle_boolean) {}
  blockPedDeadBodyShockingEvents(ped_number, p1_boolean) {}
  _0x3E9679C1DFCF422C(p0_number, p1_number) {}
  setPedCanRagdollFromPlayerImpact(ped_number, toggle_boolean) {}
  givePedHelmet(
    ped_number,
    cannotRemove_boolean,
    helmetFlag_number,
    textureIndex_number
  ) {}
  removePedHelmet(ped_number, instantly_boolean) {}
  _0x14590DDBEDB1EC85(ped_number) {}
  setPedHelmet(ped_number, canWearHelmet_boolean) {}
  setPedHelmetFlag(ped_number, helmetFlag_number) {}
  setPedHelmetPropIndex(ped_number, propIndex_number, p2_boolean) {}
  setPedHelmetUnk(ped_number, p1_boolean, p2_number, p3_number) {}
  isPedHelmetUnk(ped_number) {}
  setPedHelmetTextureIndex(ped_number, textureIndex_number) {}
  isPedWearingHelmet(ped_number) {}
  _0x687C0B594907D2E8(ped_number) {}
  _0x451294E859ECC018(p0_number) {}
  _0x9D728C1E12BF5518(p0_number) {}
  _0xF2385935BFFD4D92(p0_number) {}
  setPedToLoadCover(ped_number, toggle_boolean) {}
  setPedCanCowerInCover(ped_number, toggle_boolean) {}
  setPedCanPeekInCover(ped_number, toggle_boolean) {}
  setPedPlaysHeadOnHornAnimWhenDiesInVehicle(ped_number, toggle_boolean) {}
  setPedLegIkMode(ped_number, mode_number) {}
  setPedMotionBlur(ped_number, toggle_boolean) {}
  setPedCanSwitchWeapon(ped_number, toggle_boolean) {}
  setPedDiesInstantlyInWater(ped_number, toggle_boolean) {}
  _0x1A330D297AAC6BC1(ped_number, p1_number) {}
  stopPedWeaponFiringWhenDropped(ped_number) {}
  setScriptedAnimSeatOffset(ped_number, p1_number) {}
  setPedCombatMovement(ped_number, combatMovement_number) {}
  getPedCombatMovement(ped_number) {}
  setPedCombatAbility(ped_number, p1_number) {}
  setPedCombatRange(ped_number, p1_number) {}
  getPedCombatRange(ped_number) {}
  setPedCombatAttributes(ped_number, attributeIndex_number, enabled_boolean) {}
  setPedTargetLossResponse(ped_number, responseType_number) {}
  isPedPerformingMeleeAction(ped_number) {}
  isPedPerformingStealthKill(ped_number) {}
  isPedPerformingDependentComboLimit(ped_number) {}
  isPedBeingStealthKilled(ped_number) {}
  getMeleeTargetForPed(ped_number) {}
  wasPedKilledByStealth(ped_number) {}
  wasPedKilledByTakedown(ped_number) {}
  wasPedKnockedOut(ped_number) {}
  setPedFleeAttributes(ped_number, attributeFlags_number, enable_boolean) {}
  setPedCowerHash(ped_number, p1_string) {}
  _0x2016C603D6B8987C(ped_number, toggle_boolean) {}
  setPedSteersAroundPeds(ped_number, toggle_boolean) {}
  setPedSteersAroundObjects(ped_number, toggle_boolean) {}
  setPedSteersAroundVehicles(ped_number, toggle_boolean) {}
  _0xA9B61A329BFDCBEA(p0_number, p1_boolean) {}
  setPedIncreasedAvoidanceRadius(ped_number) {}
  setPedBlocksPathingWhenDead(ped_number, toggle_boolean) {}
  _0xA52D5247A4227E14(p0_number) {}
  isAnyPedNearPoint(x_number, y_number, z_number, radius_number) {}
  _0x2208438012482A1A(ped_number, p1_boolean, p2_boolean) {}
  isPedHeadingTowardsPosition(
    ped_number,
    x_number,
    y_number,
    z_number,
    p4_number
  ) {}
  requestPedVisibilityTracking(ped_number) {}
  requestPedVehicleVisibilityTracking(ped_number, p1_boolean) {}
  _0xCD018C591F94CB43(ped_number, p1_boolean) {}
  _0x75BA1CB3B7D40CAF(ped_number, p1_boolean) {}
  isTrackedPedVisible(ped_number) {}
  _0x511F1A683387C7E2(ped_number) {}
  isPedTracked(ped_number) {}
  hasPedReceivedEvent(ped_number, eventId_number) {}
  canPedSeeHatedPed(ped1_number, ped2_number) {}
  _0x9C6A6C19B6C0C496(ped_number, p1_number) {}
  _0x2DFC81C9B9608549(ped_number, p1_number) {}
  getPedBoneIndex(ped_number, boneId_number) {}
  getPedRagdollBoneIndex(ped_number, bone_number) {}
  setPedEnveffScale(ped_number, value_number) {}
  getPedEnveffScale(ped_number) {}
  setEnablePedEnveffScale(ped_number, toggle_boolean) {}
  _0x110F526AB784111F(ped_number, p1_number) {}
  setPedEnveffColorModulator(ped_number, p1_number, p2_number, p3_number) {}
  setPedReflectionIntensity(ped_number, intensity_number) {}
  getPedReflectionIntensity(ped_number) {}
  isPedShaderEffectValid(ped_number) {}
  _0xE906EC930F5FE7C8(p0_number, p1_number) {}
  _0x1216E0BFA72CC703(p0_number, p1_number) {}
  _0x2B5AA717A181FB4C(p0_number, p1_boolean) {}
  _0xB8B52E498014F5B0(ped_number) {}
  createSynchronizedScene(
    x_number,
    y_number,
    z_number,
    roll_number,
    pitch_number,
    yaw_number,
    p6_number
  ) {}
  createSynchronizedScene2(
    x_number,
    y_number,
    z_number,
    radius_number,
    object_number
  ) {}
  isSynchronizedSceneRunning(sceneId_number) {}
  setSynchronizedSceneOrigin(
    sceneID_number,
    x_number,
    y_number,
    z_number,
    roll_number,
    pitch_number,
    yaw_number,
    p7_boolean
  ) {}
  setSynchronizedScenePhase(sceneID_number, phase_number) {}
  getSynchronizedScenePhase(sceneID_number) {}
  setSynchronizedSceneRate(sceneID_number, rate_number) {}
  getSynchronizedSceneRate(sceneID_number) {}
  setSynchronizedSceneLooped(sceneID_number, toggle_boolean) {}
  isSynchronizedSceneLooped(sceneID_number) {}
  setSynchronizedSceneOcclusionPortal(sceneID_number, p1_boolean) {}
  _0x7F2F4F13AC5257EF(p0_number) {}
  attachSynchronizedSceneToEntity(
    sceneID_number,
    entity_number,
    boneIndex_number
  ) {}
  detachSynchronizedScene(sceneID_number) {}
  disposeSynchronizedScene(scene_number) {}
  forcePedMotionState(
    ped_number,
    motionStateHash_number,
    p2_boolean,
    p3_number,
    p4_boolean
  ) {}
  _0xF60165E1D2C5370B(ped_number, p1_number, p2_number) {}
  setPedMaxMoveBlendRatio(ped_number, value_number) {}
  setPedMinMoveBlendRatio(ped_number, value_number) {}
  setPedMoveRateOverride(ped_number, value_number) {}
  _0x0B3E35AC043707D9(p0_number, p1_number) {}
  _0x46B05BCAE43856B0(ped_number, flag_number) {}
  getPedNearbyVehicles(ped_number, sizeAndVehs_number) {}
  getPedNearbyPeds(ped_number, sizeAndPeds_number, ignore_number) {}
  hasStreamedPedAssetsLoaded(ped_number) {}
  isPedUsingActionMode(ped_number) {}
  setPedUsingActionMode(ped_number, p1_boolean, p2_number, action_string) {}
  setMovementModeOverride(ped_number, name_string) {}
  setPedCapsule(ped_number, value_number) {}
  registerPedheadshot(ped_number) {}
  registerPedheadshot3(ped_number) {}
  registerPedheadshotTransparent(ped_number) {}
  unregisterPedheadshot(id_number) {}
  isPedheadshotValid(id_number) {}
  isPedheadshotReady(id_number) {}
  getPedheadshotTxdString(id_number) {}
  requestPedheadshotImgUpload(id_number) {}
  releasePedheadshotImgUpload(id_number) {}
  isPedheadshotImgUploadAvailable() {}
  hasPedheadshotImgUploadFailed() {}
  hasPedheadshotImgUploadSucceeded() {}
  setPedHeatscaleOverride(ped_number, heatScale_number) {}
  disablePedHeatscaleOverride(p0_number) {}
  _0x2DF9038C90AD5264(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    interiorFlags_number,
    scale_number,
    duration_number
  ) {}
  _0xB2AFF10216DEFA2F(
    x_number,
    y_number,
    z_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    interiorFlags_number,
    scale_number,
    duration_number
  ) {}
  _0xFEE4A5459472A9F8() {}
  _0x3C67506996001F5E() {}
  _0xA586FBEB32A53DBB() {}
  _0xF445DE8DA80A1792() {}
  _0xA635C11B8C44AFC2() {}
  _0x280C7E3AC7F56E90(p0_number, p1_number, p2_number, p3_number) {}
  _0xB782F8238512BAD5(p0_number, p1_number) {}
  setIkTarget(
    ped_number,
    ikIndex_number,
    entityLookAt_number,
    boneLookAt_number,
    offsetX_number,
    offsetY_number,
    offsetZ_number,
    p7_number,
    blendInDuration_number,
    blendOutDuration_number
  ) {}
  _0xED3C76ADFA6D07C4(ped_number) {}
  requestActionModeAsset(asset_string) {}
  hasActionModeAssetLoaded(asset_string) {}
  removeActionModeAsset(asset_string) {}
  requestStealthModeAsset(asset_string) {}
  hasStealthModeAssetLoaded(asset_string) {}
  removeStealthModeAsset(asset_string) {}
  setPedLodMultiplier(ped_number, multiplier_number) {}
  _0xE861D0B05C7662B8(ped_number, p1_boolean, p2_number) {}
  setForceFootstepUpdate(ped_number, toggle_boolean) {}
  setForceStepType(ped_number, p1_boolean, type_number, p3_number) {}
  isAnyHostilePedNearPoint(
    ped_number,
    x_number,
    y_number,
    z_number,
    radius_number
  ) {}
  _0x820E9892A77E97CD(p0_number, p1_number) {}
  _0x06087579E7AA85A9(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  setPopControlSphereThisFrame(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  _0xD33DAA36272177C4(ped_number) {}
  _0x711794453CFD692B(p0_number, p1_number) {}
  _0x83A169EABCDB10A2(p0_number, p1_number) {}
  _0x288DF530C92DAD6F(p0_number, p1_number) {}
  _0x3795688A307E1EB6(Ped_number) {}
  _0x0F62619393661D6E(p0_number, p1_number, p2_number) {}
  _0xDFE68C4B787E1BFB(p0_number) {}
  setEnableScubaGearLight(ped_number, toggle_boolean) {}
  isScubaGearLightEnabled(ped_number) {}
  _0x637822DC2AFEEBF8(p0_number) {}
  _0xFAB944D4D481ACCB(ped_number, toggle_boolean) {}
  //Category: Physics
  addRope(
    x_number,
    y_number,
    z_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    length_number,
    ropeType_number,
    maxLength_number,
    minLength_number,
    p10_number,
    p11_boolean,
    p12_boolean,
    rigid_boolean,
    p14_number,
    breakWhenShot_boolean,
    unkPtr_number
  ) {}
  deleteRope(ropeId_number) {}
  deleteChildRope(ropeId_number) {}
  doesRopeExist(ropeId_number) {}
  ropeDrawShadowEnabled(ropeId_number, toggle_boolean) {}
  loadRopeData(ropeId_number, rope_preset_string) {}
  pinRopeVertex(ropeId_number, vertex_number, x_number, y_number, z_number) {}
  unpinRopeVertex(ropeId_number, vertex_number) {}
  getRopeVertexCount(ropeId_number) {}
  attachEntitiesToRope(
    ropeId_number,
    ent1_number,
    ent2_number,
    ent1_x_number,
    ent1_y_number,
    ent1_z_number,
    ent2_x_number,
    ent2_y_number,
    ent2_z_number,
    length_number,
    p10_boolean,
    p11_boolean,
    p12_number,
    p13_number
  ) {}
  attachRopeToEntity(
    ropeId_number,
    entity_number,
    x_number,
    y_number,
    z_number,
    p5_boolean
  ) {}
  detachRopeFromEntity(ropeId_number, entity_number) {}
  ropeSetUpdatePinverts(ropeId_number) {}
  ropeSetUpdateOrder(ropeId_number, p1_number) {}
  _0x36CCB9BE67B970FD(ropeId_number, p1_boolean) {}
  _0x84DE3B5FB3E666F0(ropeId_number) {}
  getRopeLastVertexCoord(ropeId_number) {}
  getRopeVertexCoord(ropeId_number, vertex_number) {}
  startRopeWinding(ropeId_number) {}
  stopRopeWinding(ropeId_number) {}
  startRopeUnwindingFront(ropeId_number) {}
  stopRopeUnwindingFront(ropeId_number) {}
  ropeConvertToSimple(ropeId_number) {}
  ropeLoadTextures() {}
  ropeAreTexturesLoaded() {}
  ropeUnloadTextures() {}
  doesRopeBelongToThisScript(ropeId_number) {}
  _0xBC0CE682D4D05650(
    ropeId_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number,
    p12_number,
    p13_number
  ) {}
  _0xB1B6216CA2E7B55E(p0_number, p1_boolean, p2_boolean) {}
  _0xB743F735C03D7810(ropeId_number, p1_number) {}
  ropeGetDistanceBetweenEnds(ropeId_number) {}
  ropeForceLength(ropeId_number, length_number) {}
  ropeResetLength(ropeId_number, length_number) {}
  applyImpulseToCloth(
    posX_number,
    posY_number,
    posZ_number,
    vecX_number,
    vecY_number,
    vecZ_number,
    impulse_number
  ) {}
  setDamping(entity_number, vertex_number, value_number) {}
  activatePhysics(entity_number) {}
  setCgoffset(entity_number, x_number, y_number, z_number) {}
  getCgoffset(entity_number) {}
  setCgAtBoundcenter(entity_number) {}
  breakEntityGlass(
    entity_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_boolean
  ) {}
  getHasObjectFragInst(object_number) {}
  setDisableBreaking(object_number, toggle_boolean) {}
  _0xCC6E963682533882(object_number) {}
  setDisableFragDamage(object_number, toggle_boolean) {}
  setEntityProofUnk(entity_number, toggle_boolean) {}
  _0x9EBD751E5787BAF2(p0_boolean) {}
  _0xAA6A6098851C396F(p0_boolean) {}
  //Category: Player
  getPlayerPed(player_number) {}
  getPlayerPedScriptIndex(player_number) {}
  setPlayerModel(player_number, model_number) {}
  changePlayerPed(player_number, ped_number, p2_boolean, resetDamage_boolean) {}
  getPlayerRgbColour(player_number, r_number, g_number, b_number) {}
  getNumberOfPlayers() {}
  getPlayerTeam(player_number) {}
  setPlayerTeam(player_number, team_number) {}
  getNumberOfPlayersInTeam(team_number) {}
  getPlayerName(player_number) {}
  getWantedLevelRadius(player_number) {}
  getPlayerWantedCentrePosition(player_number) {}
  setPlayerWantedCentrePosition(
    player_number,
    position_vector3Ptr,
    p2_boolean,
    p3_boolean
  ) {}
  getWantedLevelThreshold(wantedLevel_number) {}
  setPlayerWantedLevel(
    player_number,
    wantedLevel_number,
    disableNoMission_boolean
  ) {}
  setPlayerWantedLevelNoDrop(player_number, wantedLevel_number, p2_boolean) {}
  setPlayerWantedLevelNow(player_number, p1_boolean) {}
  arePlayerFlashingStarsAboutToDrop(player_number) {}
  arePlayerStarsGreyedOut(player_number) {}
  _0x7E07C78925D5FD96(p0_number) {}
  setDispatchCopsForPlayer(player_number, toggle_boolean) {}
  isPlayerWantedLevelGreater(player_number, wantedLevel_number) {}
  clearPlayerWantedLevel(player_number) {}
  isPlayerDead(player_number) {}
  isPlayerPressingHorn(player_number) {}
  setPlayerControl(player_number, bHasControl_boolean, flags_number) {}
  getPlayerWantedLevel(player_number) {}
  setMaxWantedLevel(maxWantedLevel_number) {}
  setPoliceRadarBlips(toggle_boolean) {}
  setPoliceIgnorePlayer(player_number, toggle_boolean) {}
  isPlayerPlaying(player_number) {}
  setEveryoneIgnorePlayer(player_number, toggle_boolean) {}
  setAllRandomPedsFlee(player_number, toggle_boolean) {}
  setAllRandomPedsFleeThisFrame(player_number) {}
  _0xDE45D1A1EF45EE61(player_number, toggle_boolean) {}
  _0xC3376F42B1FACCC6(player_number) {}
  _0xFAC75988A7D078D3(player_number) {}
  setIgnoreLowPriorityShockingEvents(player_number, toggle_boolean) {}
  setWantedLevelMultiplier(multiplier_number) {}
  setWantedLevelDifficulty(player_number, difficulty_number) {}
  resetWantedLevelDifficulty(player_number) {}
  startFiringAmnesty(duration_number) {}
  reportCrime(player_number, crimeType_number, wantedLvlThresh_number) {}
  switchCrimeType(player_number, p1_number) {}
  _0xBC9490CA15AEA8FB(player_number) {}
  _0x4669B3ED80F24B4E(player_number) {}
  _0x2F41A3BAE005E5FA(p0_number, p1_number) {}
  _0xAD73CE5A09E42D12(player_number) {}
  _0x36F1B38855F2A8DF(player_number) {}
  _0xDC64D2C53493ED12(player_number) {}
  _0xB45EFF719D8427A6(p0_number) {}
  _0x0032A6DBA562C518() {}
  canPlayerStartMission(player_number) {}
  isPlayerReadyForCutscene(player_number) {}
  isPlayerTargettingEntity(player_number, entity_number) {}
  getPlayerTargetEntity(player_number, entity_number) {}
  isPlayerFreeAiming(player_number) {}
  isPlayerFreeAimingAtEntity(player_number, entity_number) {}
  getEntityPlayerIsFreeAimingAt(player_number, entity_number) {}
  setPlayerLockonRangeOverride(player_number, range_number) {}
  setPlayerCanDoDriveBy(player_number, toggle_boolean) {}
  setPlayerCanBeHassledByGangs(player_number, toggle_boolean) {}
  setPlayerCanUseCover(player_number, toggle_boolean) {}
  getMaxWantedLevel() {}
  isPlayerTargettingAnything(player_number) {}
  setPlayerSprint(player_number, toggle_boolean) {}
  resetPlayerStamina(player_number) {}
  restorePlayerStamina(player_number, p1_number) {}
  getPlayerSprintStaminaRemaining(player_number) {}
  getPlayerSprintTimeRemaining(player_number) {}
  getPlayerUnderwaterTimeRemaining(player_number) {}
  _0xA0D3E4F7AAFB7E78(p0_number, p1_number) {}
  getPlayerGroup(player_number) {}
  getPlayerMaxArmour(player_number) {}
  isPlayerControlOn(player_number) {}
  isPlayerCamControlDisabled() {}
  isPlayerScriptControlOn(player_number) {}
  isPlayerClimbing(player_number) {}
  isPlayerBeingArrested(player_number, atArresting_boolean) {}
  resetPlayerArrestState(player_number) {}
  getPlayersLastVehicle() {}
  getPlayerIndex() {}
  intToPlayerindex(value_number) {}
  intToParticipantindex(value_number) {}
  getTimeSincePlayerHitVehicle(player_number) {}
  getTimeSincePlayerHitPed(player_number) {}
  getTimeSincePlayerDroveOnPavement(player_number) {}
  getTimeSincePlayerDroveAgainstTraffic(player_number) {}
  isPlayerFreeForAmbientTask(player_number) {}
  playerId() {}
  playerPedId() {}
  networkPlayerIdToInt() {}
  hasForceCleanupOccurred(cleanupFlags_number) {}
  forceCleanup(cleanupFlags_number) {}
  forceCleanupForAllThreadsWithThisName(name_string, cleanupFlags_number) {}
  forceCleanupForThreadWithThisId(id_number, cleanupFlags_number) {}
  getCauseOfMostRecentForceCleanup() {}
  setPlayerMayOnlyEnterThisVehicle(player_number, vehicle_number) {}
  setPlayerMayNotEnterAnyVehicle(player_number) {}
  giveAchievementToPlayer(achievement_number) {}
  setAchievementProgress(achievement_number, progress_number) {}
  getAchievementProgress(achievement_number) {}
  hasAchievementBeenPassed(achievement_number) {}
  isPlayerOnline() {}
  isPlayerLoggingInNp() {}
  displaySystemSigninUi(unk_boolean) {}
  isSystemUiBeingDisplayed() {}
  setPlayerInvincible(player_number, toggle_boolean) {}
  getPlayerInvincible(player_number) {}
  setPlayerInvincibleKeepRagdollEnabled(player_number, toggle_boolean) {}
  _0xCAC57395B151135F(player_number, p1_boolean) {}
  removePlayerHelmet(player_number, p2_boolean) {}
  givePlayerRagdollControl(player_number, toggle_boolean) {}
  setPlayerLockon(player_number, toggle_boolean) {}
  setPlayerTargetingMode(targetMode_number) {}
  setPlayerTargetLevel(targetLevel_number) {}
  _0xB9CF1F793A9F1BF1() {}
  _0xCB645E85E97EA48B() {}
  clearPlayerHasDamagedAtLeastOnePed(player_number) {}
  hasPlayerDamagedAtLeastOnePed(player_number) {}
  clearPlayerHasDamagedAtLeastOneNonAnimalPed(player_number) {}
  hasPlayerDamagedAtLeastOneNonAnimalPed(player_number) {}
  setAirDragMultiplierForPlayersVehicle(player_number, multiplier_number) {}
  setSwimMultiplierForPlayer(player_number, multiplier_number) {}
  setRunSprintMultiplierForPlayer(player_number, multiplier_number) {}
  getTimeSinceLastArrest() {}
  getTimeSinceLastDeath() {}
  assistedMovementCloseRoute() {}
  assistedMovementFlushRoute() {}
  setPlayerForcedAim(player_number, toggle_boolean) {}
  setPlayerForcedZoom(player_number, toggle_boolean) {}
  setPlayerForceSkipAimIntro(player_number, toggle_boolean) {}
  disablePlayerFiring(player_number, toggle_boolean) {}
  _0xB885852C39CC265D() {}
  setDisableAmbientMeleeMove(player_number, toggle_boolean) {}
  setPlayerMaxArmour(player_number, value_number) {}
  specialAbilityActivate(p0_number) {}
  setSpecialAbility(player_number, p1_number) {}
  specialAbilityDeplete(p0_number) {}
  specialAbilityDeactivate(player_number) {}
  specialAbilityDeactivateFast(player_number) {}
  specialAbilityReset(player_number) {}
  specialAbilityChargeOnMissionFailed(player_number) {}
  specialAbilityChargeSmall(player_number, p1_boolean, p2_boolean) {}
  specialAbilityChargeMedium(player_number, p1_boolean, p2_boolean) {}
  specialAbilityChargeLarge(player_number, p1_boolean, p2_boolean) {}
  specialAbilityChargeContinuous(player_number, p2_number) {}
  specialAbilityChargeAbsolute(player_number, p1_number, p2_boolean) {}
  specialAbilityChargeNormalized(
    player_number,
    normalizedValue_number,
    p2_boolean
  ) {}
  specialAbilityFillMeter(player_number, p1_boolean) {}
  specialAbilityDepleteMeter(player_number, p1_boolean) {}
  specialAbilityLock(playerModel_number) {}
  specialAbilityUnlock(playerModel_number) {}
  isSpecialAbilityUnlocked(playerModel_number) {}
  isSpecialAbilityActive(player_number) {}
  isSpecialAbilityMeterFull(player_number) {}
  enableSpecialAbility(player_number, toggle_boolean) {}
  isSpecialAbilityEnabled(player_number) {}
  setSpecialAbilityMultiplier(multiplier_number) {}
  _0xFFEE8FA29AB9A18E(player_number) {}
  _0x5FC472C501CCADB3(player_number) {}
  _0xF10B44FD479D69F3(player_number, p1_number) {}
  _0xDD2620B7B9D16FF1(player_number, p1_number) {}
  startPlayerTeleport(
    player_number,
    x_number,
    y_number,
    z_number,
    heading_number,
    p5_boolean,
    p6_boolean,
    p7_boolean
  ) {}
  hasPlayerTeleportFinished(player_number) {}
  stopPlayerTeleport() {}
  isPlayerTeleportActive() {}
  getPlayerCurrentStealthNoise(player_number) {}
  setPlayerHealthRechargeMultiplier(player_number, regenRate_number) {}
  getPlayerHealthRechargeLimit(player_number) {}
  setPlayerHealthRechargeLimit(player_number, limit_number) {}
  setPlayerFallDistance(p0_number, p1_number) {}
  setPlayerWeaponDamageModifier(player_number, modifier_number) {}
  setPlayerWeaponDefenseModifier(player_number, modifier_number) {}
  setPlayerWeaponDefenseModifier2(player_number, modifier_number) {}
  setPlayerMeleeWeaponDamageModifier(
    player_number,
    modifier_number,
    p2_boolean
  ) {}
  setPlayerMeleeWeaponDefenseModifier(player_number, modifier_number) {}
  setPlayerVehicleDamageModifier(player_number, modifier_number) {}
  setPlayerVehicleDefenseModifier(player_number, modifier_number) {}
  _0x8D768602ADEF2245(player_number, p1_number) {}
  _0xD821056B9ACF8052(p0_number, p1_number) {}
  _0x31E90B8873A4CD3B(p0_number, p1_number) {}
  setPlayerParachuteTintIndex(player_number, tintIndex_number) {}
  getPlayerParachuteTintIndex(player_number, tintIndex_number) {}
  setPlayerReserveParachuteTintIndex(player_number, index_number) {}
  getPlayerReserveParachuteTintIndex(player_number, index_number) {}
  setPlayerParachutePackTintIndex(player_number, tintIndex_number) {}
  getPlayerParachutePackTintIndex(player_number, tintIndex_number) {}
  setPlayerHasReserveParachute(player_number) {}
  getPlayerHasReserveParachute(player_number) {}
  setPlayerCanLeaveParachuteSmokeTrail(player_number, enabled_boolean) {}
  setPlayerParachuteSmokeTrailColor(
    player_number,
    r_number,
    g_number,
    b_number
  ) {}
  getPlayerParachuteSmokeTrailColor(
    player_number,
    r_number,
    g_number,
    b_number
  ) {}
  setPlayerResetFlagPreferRearSeats(player_number, flags_number) {}
  setPlayerNoiseMultiplier(player_number, multiplier_number) {}
  setPlayerSneakingNoiseMultiplier(player_number, multiplier_number) {}
  canPedHearPlayer(player_number, ped_number) {}
  simulatePlayerInputGait(
    player_number,
    amount_number,
    gaitType_number,
    speed_number,
    p4_boolean,
    p5_boolean
  ) {}
  resetPlayerInputGait(player_number) {}
  setAutoGiveParachuteWhenEnterPlane(player_number, toggle_boolean) {}
  setAutoGiveScubaGearWhenExitVehicle(player_number, toggle_boolean) {}
  setPlayerStealthPerceptionModifier(player_number, value_number) {}
  _0x690A61A6D13583F6(player_number) {}
  _0x9EDD76E87D5D51BA(player_number) {}
  setPlayerSimulateAiming(player_number, toggle_boolean) {}
  setPlayerClothPinFrames(player_number, toggle_boolean) {}
  setPlayerClothPackageIndex(index_number) {}
  setPlayerClothLockCounter(value_number) {}
  playerAttachVirtualBound(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number
  ) {}
  playerDetachVirtualBound() {}
  hasPlayerBeenSpottedInStolenVehicle(player_number) {}
  isPlayerBattleAware(player_number) {}
  _0xBC0753C9CA14B506(player_number, p1_number, p2_boolean) {}
  extendWorldBoundaryForPlayer(x_number, y_number, z_number) {}
  resetWorldBoundaryForPlayer() {}
  isPlayerRidingTrain(player_number) {}
  hasPlayerLeftTheWorld(player_number) {}
  setPlayerLeavePedBehind(player_number, toggle_boolean) {}
  setPlayerParachuteVariationOverride(
    player_number,
    p1_number,
    p2_number,
    p3_number,
    p4_boolean
  ) {}
  clearPlayerParachuteVariationOverride(player_number) {}
  setPlayerParachuteModelOverride(player_number, model_number) {}
  clearPlayerParachuteModelOverride(player_number) {}
  setPlayerParachutePackModelOverride(player_number, model_number) {}
  clearPlayerParachutePackModelOverride(player_number) {}
  disablePlayerVehicleRewards(player_number) {}
  _0x2F7CEB6520288061(p0_boolean) {}
  setPlayerBluetoothState(player_number, state_boolean) {}
  isPlayerBluetoothEnable(player_number) {}
  _0x5501B7A5CDB79D37(player_number) {}
  getPlayerFakeWantedLevel(player_number) {}
  _0x55FCC0C390620314(p0_number, p1_number, p2_number) {}
  _0x2382AB11450AE7BA(p0_number, p1_number) {}
  _0x6E4361FF3E8CD7CA(p0_number) {}
  _0x237440E46D918649(p0_number) {}
  setPlayerHomingRocketDisabled(p0_number, p1_number) {}
  _0x7BAE68775557AE0B(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  _0x7148E0F43D11F0D9() {}
  _0x70A382ADEC069DD3(p0_number, p1_number, p2_number) {}
  //Category: Recording
  _0x48621C9FCA3EBD28(p0_number) {}
  _0x81CBAE94390F9F89() {}
  _0x13B350B8AD0EEE10() {}
  _0x293220DA1B46CEBC(p0_number, p1_number, p2_number) {}
  _0x208784099002BC30(missionNameLabel_string, p1_number) {}
  stopRecordingThisFrame() {}
  _0xF854439EFBB3B583() {}
  disableRockstarEditorCameraChanges() {}
  _0x66972397E0757E7A(p0_number, p1_number, p2_number) {}
  startRecording(mode_number) {}
  stopRecordingAndSaveClip() {}
  stopRecordingAndDiscardClip() {}
  saveRecordingClip() {}
  isRecording() {}
  _0xDF4B952F7D381B95() {}
  _0x4282E08174868BE3() {}
  _0x33D47E85B476ABCD(p0_boolean) {}
  //Category: Replay
  _0x7E2BD3EF6C205F09(p0_string, p1_boolean) {}
  isInteriorRenderingDisabled() {}
  _0x5AD3932DAEB1E5D3() {}
  _0xE058175F8EAFE79A(p0_boolean) {}
  resetEditorValues() {}
  activateRockstarEditor() {}
  //Category: Script
  requestScript(scriptName_string) {}
  setScriptAsNoLongerNeeded(scriptName_string) {}
  hasScriptLoaded(scriptName_string) {}
  doesScriptExist(scriptName_string) {}
  requestScriptWithNameHash(scriptHash_number) {}
  setScriptWithNameHashAsNoLongerNeeded(scriptHash_number) {}
  hasScriptWithNameHashLoaded(scriptHash_number) {}
  doesScriptWithNameHashExist(scriptHash_number) {}
  terminateThread(threadId_number) {}
  isThreadActive(threadId_number) {}
  getNameOfThread(threadId_number) {}
  scriptThreadIteratorReset() {}
  scriptThreadIteratorGetNextThreadId() {}
  getIdOfThisThread() {}
  terminateThisThread() {}
  getNumberOfReferencesOfScriptWithNameHash(scriptHash_number) {}
  getThisScriptName() {}
  getHashOfThisScriptName() {}
  getNumberOfEvents(eventGroup_number) {}
  getEventExists(eventGroup_number, eventIndex_number) {}
  getEventAtIndex(eventGroup_number, eventIndex_number) {}
  getEventData(
    eventGroup_number,
    eventIndex_number,
    argStruct_number,
    argStructSize_number
  ) {}
  triggerScriptEvent(
    eventGroup_number,
    args_number,
    argCount_number,
    bit_number
  ) {}
  shutdownLoadingScreen() {}
  setNoLoadingScreen(toggle_boolean) {}
  getNoLoadingScreen() {}
  _0xB1577667C3708F9B() {}
  _0x836B62713E0534CA() {}
  _0x760910B49D2B98EA() {}
  bgStartContextHash(contextHash_number) {}
  bgEndContextHash(contextHash_number) {}
  bgStartContext(contextName_string) {}
  bgEndContext(contextName_string) {}
  _0x0F6F1EBBC4E1D5E6(scriptIndex_number, p1_string) {}
  _0x22E21FBCFC88C149(scriptIndex_number, p1_string) {}
  _0x829CD22E043A2577(p0_number) {}
  //Category: Shapetest
  startShapeTestLosProbe(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    flags_number,
    entity_number,
    p8_number
  ) {}
  startShapeTestRay(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    flags_number,
    entity_number,
    p8_number
  ) {}
  startShapeTestBoundingBox(entity_number, flags1_number, flags2_number) {}
  startShapeTestBox(
    x_number,
    y_number,
    z_number,
    x1_number,
    y2_number,
    z2_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    p9_number,
    p10_number,
    entity_number,
    p12_number
  ) {}
  startShapeTestBound(entity_number, flags1_number, flags2_number) {}
  startShapeTestCapsule(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    radius_number,
    flags_number,
    entity_number,
    p9_number
  ) {}
  startShapeTestSweptSphere(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    radius_number,
    flags_number,
    entity_number,
    p9_number
  ) {}
  startShapeTestSurroundingCoords(
    pVec1_vector3Ptr,
    pVec2_vector3Ptr,
    flag_number,
    entity_number,
    flag2_number
  ) {}
  getShapeTestResult(
    rayHandle_number,
    hit_boolean,
    endCoords_vector3Ptr,
    surfaceNormal_vector3Ptr,
    entityHit_number
  ) {}
  getShapeTestResultIncludingMaterial(
    rayHandle_number,
    hit_boolean,
    endCoords_vector3Ptr,
    surfaceNormal_vector3Ptr,
    materialHash_number,
    entityHit_number
  ) {}
  shapeTestResultEntity(entityHit_number) {}
  //Category: Socialclub
  getTotalScInboxIds() {}
  scInboxMessageInit(p0_number) {}
  isScInboxValid(p0_number) {}
  scInboxMessagePop(p0_number) {}
  scInboxMessageGetDataInt(p0_number, context_string, out_number) {}
  scInboxMessageGetDataBool(p0_number, p1_string) {}
  scInboxMessageGetDataString(p0_number, context_string, out_string) {}
  scInboxMessageDoApply(p0_number) {}
  scInboxMessageGetString(p0_number) {}
  scInboxMessagePushGamerToEventRecipList(networkHandle_number) {}
  scInboxMessageSendUgcStatUpdateEvent(data_number) {}
  scInboxMessageGetUgcdata(p0_number, p1_number) {}
  scInboxMessageSendBountyPresenceEvent(data_number) {}
  scInboxMessageGetBountyData(index_number, outData_memoryBuffer) {}
  scInboxGetEmails(offset_number, limit_number) {}
  _0x16DA8172459434AA() {}
  _0x7DB18CA8CAD5B098() {}
  _0x4737980E8A283806(p0_number, p1_number) {}
  _0x44ACA259D67651DB(p0_number, p1_number) {}
  scEmailMessagePushGamerToRecipList(networkHandle_number) {}
  scEmailMessageClearRecipList() {}
  _0x116FB94DC4B79F17(p0_string) {}
  _0x07DBD622D9533857(p0_number) {}
  setHandleRockstarMessageViaScript(toggle_boolean) {}
  isRockstarMessageReadyForScript() {}
  rockstarMessageGetString() {}
  _0x1F1E9682483697C7(p0_number, p1_number) {}
  _0xC4C4575F62534A24() {}
  _0x287F1F75D2803595(p0_number, p1_number) {}
  _0x487912FD248EFDDF(p0_number, p1_number) {}
  _0xC85A7127E7AD02AA() {}
  _0xA770C8EEC6FB2AC5() {}
  scGetIsProfileAttributeSet(name_string) {}
  _0x7FFCBFEE44ECFABF() {}
  _0x2D874D4AE612A65F() {}
  scProfanityCheckString(string_string, token_number) {}
  scProfanityCheckUgcString(string_string, token_number) {}
  scProfanityGetCheckIsValid(token_number) {}
  scProfanityGetCheckIsPending(token_number) {}
  scProfanityGetStringPassed(token_number) {}
  scProfanityGetStringStatus(token_number) {}
  _0xF6BAAAF762E1BF40(p0_string, p1_number) {}
  _0xF22CA0FD74B80E7A(p0_number) {}
  _0x9237E334F6E43156(p0_number) {}
  _0x700569DBA175A77C(p0_number) {}
  _0x1D4446A62D35B0D0(p0_number, p1_number) {}
  _0x2E89990DDFF670C3(p0_number, p1_number) {}
  _0xD0EE05FE193646EA(p0_number, p1_number, p2_number) {}
  _0x1989C6E6F67E76A8(p0_number, p1_number, p2_number) {}
  _0x07C61676E5BB52CD(p0_number) {}
  _0x8147FFF6A718E1AD(p0_number) {}
  _0x0F73393BAC7E6730(p0_number, p1_number) {}
  _0xD302E99EDF0449CF(p0_number) {}
  _0x5C4EBFFA98BDB41C(p0_number) {}
  _0xFF8F3A92B75ED67A() {}
  _0x4ED9C8D6DA297639() {}
  _0x710BCDA8071EDED1() {}
  _0x50A8A36201DBF83E() {}
  _0x9DE5D2F723575ED0() {}
  _0xC2C97EA97711D1AE() {}
  _0x450819D8CF90C416() {}
  _0x4A7D6E727F941747(p0_number) {}
  _0xE75A4A2E5E316D86() {}
  _0x2570E26BE63964E3() {}
  _0x1D12A56FC95BE92E() {}
  _0x33DF47CC0642061B() {}
  _0xA468E0BE12B12C70() {}
  _0x8CC469AB4D349B7C(p0_number, p1_string, p2_number) {}
  _0xC5A35C73B68F3C49() {}
  _0x699E4A5C8C893A18(p0_number, p1_string, p2_number) {}
  _0x19853B5B17D77BCA(p0_number, p1_number) {}
  _0x6BFB12CE158E3DD4(p0_number) {}
  _0xFE4C1D0D3B9CC17E(p0_number, p1_number) {}
  _0xD8122C407663B995() {}
  _0x3001BEF2FECA3680() {}
  _0x92DA6E70EF249BD1(p0_string, p1_number) {}
  _0x675721C9F644D161() {}
  _0xE4F6E8D07A2F0F51(p0_number) {}
  _0x8A4416C0DB05FA66(p0_number) {}
  _0xEA95C0853A27888E() {}
  scGetNickname() {}
  _0x225798743970412B(p0_number) {}
  scGetHasAchievementBeenPassed(achievement_number) {}
  //Category: Stats
  statClearSlotForReload(statSlot_number) {}
  statLoad(p0_number) {}
  statSave(p0_number, p1_boolean, p2_number) {}
  _0x5688585E6D563CD8(p0_number) {}
  statLoadPending(p0_number) {}
  statSavePending() {}
  statSavePendingOrRequested() {}
  statDeleteSlot(p0_number) {}
  statSlotIsLoaded(p0_number) {}
  _0x7F2C4CDF2E82DF4C(p0_number) {}
  _0xE496A53BA5F50A56(p0_number) {}
  _0xF434A10BA01C37D0(toggle_boolean) {}
  _0x7E6946F68A38B74F(p0_number) {}
  _0xA8733668D1047B51(p0_number) {}
  _0xECB41AC6AB754401() {}
  _0x9B4BD21D69B1E609() {}
  _0xC0E0D686DDFC6EAE() {}
  statSetInt(statName_number, value_number, save_boolean) {}
  statSetFloat(statName_number, value_number, save_boolean) {}
  statSetBool(statName_number, value_boolean, save_boolean) {}
  statSetGxtLabel(statName_number, value_string, save_boolean) {}
  statSetDate(statName_number, value_number, numFields_number, save_boolean) {}
  statSetString(statName_number, value_string, save_boolean) {}
  statSetPos(statName_number, x_number, y_number, z_number, save_boolean) {}
  statSetMaskedInt(
    statName_number,
    p1_number,
    p2_number,
    p3_number,
    save_boolean
  ) {}
  statSetUserId(statName_number, value_string, save_boolean) {}
  statSetCurrentPosixTime(statName_number, p1_boolean) {}
  statGetInt(statHash_number, outValue_number, p2_number) {}
  statGetFloat(statHash_number, outValue_number, p2_number) {}
  statGetBool(statHash_number, outValue_boolean, p2_number) {}
  statGetDate(statHash_number, p1_number, p2_number, p3_number) {}
  statGetString(statHash_number, p1_number) {}
  statGetPos(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  statGetMaskedInt(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  statGetUserId(p0_number) {}
  statGetLicensePlate(statName_number) {}
  statSetLicensePlate(statName_number, str_string) {}
  statIncrement(statName_number, value_number) {}
  _0x5A556B229A169402() {}
  _0xB1D2BB1E1631F5B1() {}
  _0xBED9F5693F34ED17(statName_number, p1_number, outValue_number) {}
  _0x26D7399B9587FE89(p0_number) {}
  _0xA78B8FA58200DA56(p0_number) {}
  statGetNumberOfDays(statName_number) {}
  statGetNumberOfHours(statName_number) {}
  statGetNumberOfMinutes(statName_number) {}
  statGetNumberOfSeconds(statName_number) {}
  statSetProfileSettingValue(profileSetting_number, value_number) {}
  _0xF4D8E7AC2A27758C(p0_number) {}
  _0x94F12ABF9C79E339(p0_number) {}
  getPackedBoolStatKey(
    index_number,
    spStat_boolean,
    charStat_boolean,
    character_number
  ) {}
  getPackedIntStatKey(
    index_number,
    spStat_boolean,
    charStat_boolean,
    character_number
  ) {}
  getPackedTitleUpdateBoolStatKey(
    index_number,
    spStat_boolean,
    charStat_boolean,
    character_number
  ) {}
  getPackedTitleUpdateIntStatKey(
    index_number,
    spStat_boolean,
    charStat_boolean,
    character_number
  ) {}
  getNgstatBoolHash(
    index_number,
    spStat_boolean,
    charStat_boolean,
    character_number,
    section_string
  ) {}
  getNgstatIntHash(
    index_number,
    spStat_boolean,
    charStat_boolean,
    character_number,
    section_string
  ) {}
  statGetBoolMasked(statName_number, mask_number, p2_number) {}
  statSetBoolMasked(
    statName_number,
    value_boolean,
    mask_number,
    save_boolean
  ) {}
  playstatsBackgroundScriptAction(action_string, value_number) {}
  playstatsNpcInvite(p0_number) {}
  playstatsAwardXp(amount_number, type_number, category_number) {}
  playstatsRankUp(rank_number) {}
  playstatsStartOfflineMode() {}
  _0xA071E0ED98F91286(p0_number, p1_number) {}
  _0xC5BE134EC7BA96A0(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  playstatsMissionStarted(p0_number, p1_number, p2_number, p3_boolean) {}
  playstatsMissionOver(
    p0_number,
    p1_number,
    p2_number,
    p3_boolean,
    p4_boolean,
    p5_boolean
  ) {}
  playstatsMissionCheckpoint(p0_number, p1_number, p2_number, p3_number) {}
  playstatsRandomMissionDone(name_string, p1_number, p2_number, p3_number) {}
  playstatsRosBet(amount_number, act_number, player_number, cm_number) {}
  playstatsRaceCheckpoint(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  _0x6DEE77AFF8C21BD1(playerAccountId_number, posixTime_number) {}
  playstatsMatchStarted(p0_number, p1_number, p2_number) {}
  playstatsShopItem(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  playstatsCrateDrop(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number
  ) {}
  playstatsCrateCreated(p0_number, p1_number, p2_number) {}
  playstatsHoldUp(p0_number, p1_number, p2_number, p3_number) {}
  playstatsImpExp(p0_number, p1_number, p2_number, p3_number) {}
  playstatsRaceToPoint(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number
  ) {}
  playstatsAcquiredHiddenPackage(p0_number) {}
  playstatsWebsiteVisited(scaleformHash_number, p1_number) {}
  playstatsFriendActivity(p0_number, p1_number) {}
  playstatsOddjobDone(p0_number, p1_number, p2_number) {}
  playstatsPropChange(p0_number, p1_number, p2_number, p3_number) {}
  playstatsClothChange(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  playstatsWeaponModeChange(
    weaponHash_number,
    componentHashTo_number,
    componentHashFrom_number
  ) {}
  playstatsCheatApplied(cheat_string) {}
  _0xF8C54A461C3E11DC(p0_number, p1_number, p2_number, p3_number) {}
  _0xF5BB8DAC426A52C0(p0_number, p1_number, p2_number, p3_number) {}
  _0xA736CF7FB7C5BFF4(p0_number, p1_number, p2_number, p3_number) {}
  _0x14E0B2D1AD1044E0(p0_number, p1_number, p2_number, p3_number) {}
  playstatsQuickfixTool(element_number, item_string) {}
  playstatsIdleKick(time_number) {}
  _0xD1032E482629049E(p0_number) {}
  playstatsHeistSaveCheat(hash_number, p1_number) {}
  playstatsDirectorMode(p0_number) {}
  playstatsAwardBadsport(id_number) {}
  playstatsPegasaircraft(modelHash_number) {}
  _0x6A60E43998228229(p0_number) {}
  _0xBFAFDB5FAAA5C5AB(p0_number) {}
  _0x8C9D11605E59D955(p0_number) {}
  _0x3DE3AA516FB126A4(p0_number) {}
  _0xBAA2F0490E146BE8(p0_number) {}
  _0x1A7CE7CD3E653485(p0_number) {}
  _0x419615486BBF1956(p0_number) {}
  _0x84DFC579C2FC214C(p0_number) {}
  _0x0A9C7F36E5D7B683(p0_number) {}
  _0x164C5FF663790845(p0_number) {}
  _0xEDBF6C9B0D2C65C8(p0_number) {}
  _0x6551B1F7F6CD46EA(p0_number) {}
  _0x2CD90358F67D0AA8(p0_number) {}
  playstatsPiMenuHideSettings(data_number) {}
  leaderboardsGetNumberOfColumns(p0_number, p1_number) {}
  leaderboardsGetColumnId(p0_number, p1_number, p2_number) {}
  leaderboardsGetColumnType(p0_number, p1_number, p2_number) {}
  leaderboardsReadClearAll() {}
  leaderboardsReadClear(p0_number, p1_number, p2_number) {}
  leaderboardsReadPending(p0_number, p1_number, p2_number) {}
  leaderboardsReadAnyPending() {}
  leaderboardsReadSuccessful(p0_number, p1_number, p2_number) {}
  leaderboards2ReadFriendsByRow(
    p0_number,
    p1_number,
    p2_number,
    p3_boolean,
    p4_number,
    p5_number
  ) {}
  leaderboards2ReadByHandle(p0_number, p1_number) {}
  leaderboards2ReadByRow(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  leaderboards2ReadByRank(p0_number, p1_number, p2_number) {}
  leaderboards2ReadByRadius(p0_number, p1_number, p2_number) {}
  leaderboards2ReadByScoreInt(p0_number, p1_number, p2_number) {}
  leaderboards2ReadByScoreFloat(p0_number, p1_number, p2_number) {}
  leaderboards2ReadRankPrediction(p0_number, p1_number, p2_number) {}
  leaderboards2ReadByPlatform(
    p0_number,
    gamerHandleCsv_string,
    platformName_string
  ) {}
  _0xA0F93D5465B3094D(p0_number) {}
  _0x71B008056E5692D6() {}
  _0x34770B9CE0E03B91(p0_number, p1_number) {}
  _0x88578F6EC36B4A3A(p0_number, p1_number) {}
  _0x38491439B6BA7F7D(p0_number, p1_number) {}
  leaderboards2WriteData(p0_number) {}
  leaderboardsWriteAddColumn(p0_number, p1_number, p2_number) {}
  leaderboardsWriteAddColumnLong(p0_number, p1_number, p2_number) {}
  leaderboardsCacheDataRow(p0_number) {}
  leaderboardsClearCacheData() {}
  _0x8EC74CEB042E7CFF(p0_number) {}
  leaderboardsGetCacheExists(p0_number) {}
  leaderboardsGetCacheTime(p0_number) {}
  leaderboardsGetCacheNumberOfRows(p0_number) {}
  leaderboardsGetCacheDataRow(p0_number, p1_number, p2_number) {}
  updateStatInt(statHash_number, value_number, p2_number) {}
  updateStatFloat(statHash_number, value_number, p2_number) {}
  _0x6483C25849031C4F(p0_number, p1_number, p2_number, p3_number) {}
  _0x5EAD2BF6484852E4() {}
  _0xC141B8917E0017EC() {}
  _0xB475F27C6A994D65() {}
  _0xC67E2DA1CBE759E2() {}
  _0xF1A1803D3476F215(value_number) {}
  _0x38BAAA5DD4C9D19F(value_number) {}
  _0x55384438FC55AD8E(value_number) {}
  _0x723C1CE13FBFDB67(p0_number, p1_number) {}
  _0x0D01D20616FC73FB(p0_number, p1_number) {}
  _0x428EAF89E24F6C36(p0_number, p1_number) {}
  _0x047CBED6F6F8B63C() {}
  leaderboards2WriteDataForEventType(p0_number, p1_number) {}
  _0x6F361B8889A792A3() {}
  _0xC847B43F369AC0B5() {}
  statMigrateSave(platformName_string) {}
  _0x9A62EC95AE10E011() {}
  _0x4C89FE2BDEB3F169() {}
  _0xC6E0E2616A7576BB() {}
  _0x5BD5F255321C4AAF(p0_number) {}
  _0xDEAAF77EB3687E97(p0_number, p1_number) {}
  statSaveMigrationStatusStart() {}
  statGetSaveMigrationStatus(data_number) {}
  statSaveMigrationCancel() {}
  statGetCancelSaveMigrationStatus() {}
  statSaveMigrationConsumeContentUnlock(
    contentId_number,
    srcPlatform_string,
    srcGamerHandle_string
  ) {}
  statGetSaveMigrationConsumeContentUnlockStatus(p0_number) {}
  _0x98E2BC1CA26287C3() {}
  _0x629526ABA383BCAA() {}
  _0xBE3DB208333D9844() {}
  _0x33D72899E24C3365(p0_number, p1_number) {}
  _0xA761D4AC6115623D() {}
  _0xF11F01D98113536A(p0_number) {}
  _0x8B9CDBD6C566C38C() {}
  _0xE8853FBCE7D8D0D6() {}
  _0xA943FD1722E11EFD() {}
  _0x84A810B375E69C0E() {}
  _0x9EC8858184CD253A() {}
  _0xBA9749CC94C1FD85() {}
  _0x55A8BECAF28A4EB7() {}
  _0x32CAC93C9DE73D32() {}
  _0xAFF47709F1D5DCCE() {}
  _0x6E0A5253375C4584() {}
  _0x1A8EA222F9C67DBB(p0_number) {}
  _0xF9F2922717B819EC() {}
  _0x0B8B7F74BF061C6D() {}
  _0xB3DA2606774A8E2D() {}
  setHasContentUnlocksFlags(value_number) {}
  setSaveMigrationTransactionId(transactionId_number) {}
  _0x6BC0ACD0673ACEBE(p0_number, p1_number, p2_number) {}
  _0x8D8ADB562F09A245(p0_number) {}
  _0xD1A1EE3B4FA8E760(p0_number) {}
  _0x88087EE1F28024AE(p0_number) {}
  _0xFCC228E07217FCAC(p0_number) {}
  _0x678F86D8FC040BDB(p0_number) {}
  _0xA6F54BB2FFCA35EA(p0_number) {}
  _0x5FF2C33B13A02A11(p0_number) {}
  _0x282B6739644F4347(p0_number) {}
  _0xF06A6F41CB445443(p0_number) {}
  _0x7B18DA61F6BAE9D5(p0_number) {}
  _0x06EAF70AE066441E(p0_number) {}
  _0x14EDA9EE27BD1626(p0_number) {}
  _0x930F504203F561C9(p0_number) {}
  _0xE3261D791EB44ACB(p0_number) {}
  _0x73001E34F85137F8(p0_number) {}
  _0x53CAE13E9B426993(p0_number) {}
  _0x7D36291161859389(p0_number) {}
  playstatsSpentPiCustomLoadout(amount_number) {}
  _0xD6781E42755531F7(p0_number) {}
  _0xC729991A9065376E(p0_number) {}
  _0x2605663BD4F23B5D(p0_number) {}
  _0x04D90BA8207ADA2D(p0_number) {}
  _0x60EEDC12AF66E846(p0_number) {}
  _0x3EBEAC6C3F81F6BD(p0_number) {}
  _0x96E6D5150DBF1C09(p0_number, p1_number, p2_number) {}
  _0xA3C53804BDB68ED2(p0_number, p1_number) {}
  _0x6BCCF9948492FD85(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  hiredLimo(p0_number, p1_number) {}
  orderedBossVehicle(p0_number, p1_number, vehicleHash_number) {}
  _0xD1C9B92BDD3F151D(p0_number, p1_number, p2_number) {}
  _0x44919CC079BB60BF(p0_number) {}
  _0x7033EEFD9B28088E(p0_number) {}
  _0xAA525DFF66BB82F5(p0_number, p1_number, p2_number) {}
  _0x015B03EE1C43E6EC(p0_number) {}
  playstatsStuntPerformedEventAllowTrigger() {}
  playstatsStuntPerformedEventDisallowTrigger() {}
  _0xBF371CD2B64212FD(p0_number) {}
  _0x7D8BA05688AD64C7(p0_number) {}
  _0x0B565B0AAE56A0E8(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  _0x28ECB8AC2F607DB2(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  playstatsChangeMcEmblem(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  _0xCC25A4553DFBF9EA(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  _0xF534D94DFA2EAD26(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  _0xD558BEC0BBA7E8D2(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  playstatsEarnedMcPoints(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  _0x03C2EEBB04B3FB72(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  _0x8989CBD7B4E82534(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  _0x27AA1C973CACFE63(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number
  ) {}
  playstatsCopyRankIntoNewSlot(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  playstatsDupeDetection(data_number) {}
  playstatsBanAlert(p0_number) {}
  playstatsGunrunMissionEnded(data_number) {}
  _0xDAF80797FC534BEC(p0_number) {}
  _0x316DB59CD14C1774(p0_number) {}
  _0x2D7A9B577E72385E(p0_number) {}
  _0x830C3A44EB3F2CF9(p0_number) {}
  _0xB26F670685631727(p0_number) {}
  _0xC14BD9F5337219B2(p0_number) {}
  playstatsStoneHatchetEnd(data_number) {}
  playstatsSmugMissionEnded(data_number) {}
  playstatsH2FmprepEnd(data_number) {}
  playstatsH2InstanceEnd(data_number, p1_number, p2_number, p3_number) {}
  playstatsDarMissionEnd(data_number) {}
  playstatsEnterSessionPack(data_number) {}
  playstatsDroneUsage(p0_number, p1_number, p2_number) {}
  playstatsSpectatorWheelSpin(p0_number, p1_number, p2_number, p3_number) {}
  playstatsArenaWarSpectator(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  playstatsArenaWarsEnded(data_number) {}
  playstatsPassiveMode(p0_boolean, p1_number, p2_number, p3_number) {}
  playstatsCollectible(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number
  ) {}
  playstatsCasinoStoryMissionEnded(p0_number, p1_number) {}
  playstatsCasinoChip(p0_number) {}
  playstatsCasinoRoulette(p0_number) {}
  playstatsCasinoBlackjack(p0_number) {}
  playstatsCasinoThreecardpoker(p0_number) {}
  playstatsCasinoSlotmachine(p0_number) {}
  playstatsCasinoInsidetrack(p0_number) {}
  playstatsCasinoLuckyseven(p0_number) {}
  playstatsCasinoRouletteLight(p0_number) {}
  playstatsCasinoBlackjackLight(p0_number) {}
  playstatsCasinoThreecardpokerLight(p0_number) {}
  playstatsCasinoSlotmachineLight(p0_number) {}
  playstatsCasinoInsidetrackLight(p0_number) {}
  playstatsArcadegame(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  playstatsCasinoMissionEnded(data_number) {}
  //Category: Streaming
  loadAllObjectsNow() {}
  loadScene(x_number, y_number, z_number) {}
  networkUpdateLoadScene() {}
  isNetworkLoadingScene() {}
  setInteriorActive(interiorID_number, toggle_boolean) {}
  requestModel(model_number) {}
  requestMenuPedModel(model_number) {}
  hasModelLoaded(model_number) {}
  requestModelsInRoom(interior_number, roomName_string) {}
  setModelAsNoLongerNeeded(model_number) {}
  isModelInCdimage(model_number) {}
  isModelValid(model_number) {}
  isModelAPed(model_number) {}
  isModelAVehicle(model_number) {}
  requestCollisionAtCoord(x_number, y_number, z_number) {}
  requestCollisionForModel(model_number) {}
  hasCollisionForModelLoaded(model_number) {}
  requestAdditionalCollisionAtCoord(x_number, y_number, z_number) {}
  doesAnimDictExist(animDict_string) {}
  requestAnimDict(animDict_string) {}
  hasAnimDictLoaded(animDict_string) {}
  removeAnimDict(animDict_string) {}
  requestAnimSet(animSet_string) {}
  hasAnimSetLoaded(animSet_string) {}
  removeAnimSet(animSet_string) {}
  requestClipSet(clipSet_string) {}
  hasClipSetLoaded(clipSet_string) {}
  removeClipSet(clipSet_string) {}
  requestIpl(iplName_string) {}
  removeIpl(iplName_string) {}
  isIplActive(iplName_string) {}
  setStreaming(toggle_boolean) {}
  setGamePausesForStreaming(toggle_boolean) {}
  setReducePedModelBudget(toggle_boolean) {}
  setReduceVehicleModelBudget(toggle_boolean) {}
  setDitchPoliceModels(toggle_boolean) {}
  getNumberOfStreamingRequests() {}
  requestPtfxAsset() {}
  hasPtfxAssetLoaded() {}
  removePtfxAsset() {}
  requestNamedPtfxAsset(fxName_string) {}
  hasNamedPtfxAssetLoaded(fxName_string) {}
  removeNamedPtfxAsset(fxName_string) {}
  setVehiclePopulationBudget(p0_number) {}
  setPedPopulationBudget(p0_number) {}
  clearFocus() {}
  setFocusPosAndVel(
    x_number,
    y_number,
    z_number,
    offsetX_number,
    offsetY_number,
    offsetZ_number
  ) {}
  setFocusEntity(entity_number) {}
  isEntityFocus(entity_number) {}
  _0x0811381EF5062FEC(p0_number) {}
  setMapdatacullboxEnabled(name_string, toggle_boolean) {}
  _0x4E52E752C76E7E7A(p0_number) {}
  formatFocusHeading(
    x_number,
    y_number,
    z_number,
    rad_number,
    p4_number,
    p5_number
  ) {}
  _0x1F3F018BC3AFA77C(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number
  ) {}
  _0x0AD9710CEE2F590F(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  _0x1EE7D8DF4425F053(p0_number) {}
  _0x7D41E9D2D17C5B2D(p0_number) {}
  _0x07C313F94746702C(p0_number) {}
  _0xBC9823AB80A3DCAC() {}
  newLoadSceneStart(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number
  ) {}
  newLoadSceneStartSphere(
    x_number,
    y_number,
    z_number,
    radius_number,
    p4_number
  ) {}
  newLoadSceneStop() {}
  isNewLoadSceneActive() {}
  isNewLoadSceneLoaded() {}
  _0x71E7B2E657449AAD() {}
  startPlayerSwitch(from_number, to_number, flags_number, switchType_number) {}
  stopPlayerSwitch() {}
  isPlayerSwitchInProgress() {}
  getPlayerSwitchType() {}
  getIdealPlayerSwitchType(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number
  ) {}
  getPlayerSwitchState() {}
  getPlayerShortSwitchState() {}
  _0x5F2013F8BC24EE69(p0_number) {}
  getPlayerSwitchJumpCutIndex() {}
  setPlayerSwitchOutro(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number
  ) {}
  setPlayerSwitchEstablishingShot(name_string) {}
  _0x43D1680C6D19A8E9() {}
  _0x74DE2E8739086740() {}
  _0x8E2A065ABDAE6994() {}
  _0xAD5FDF34B81BFE79() {}
  isSwitchReadyForDescent() {}
  enableSwitchPauseBeforeDescent() {}
  disableSwitchOutroFx() {}
  switchOutPlayer(ped_number, flags_number, unknown_number) {}
  switchInPlayer(ped_number) {}
  _0x933BBEEB8C61B5F4() {}
  getPlayerSwitchInterpOutDuration() {}
  _0x5B48A06DD0E792A5() {}
  isSwitchSkippingDescent() {}
  _0x1E9057A74FD73E23() {}
  _0x0C15B0E443B2349D() {}
  _0xA76359FC80B2438E(p0_number) {}
  _0xBED8CA5FF5E04113(p0_number, p1_number, p2_number, p3_number) {}
  _0x472397322E92A856() {}
  _0x40AEFD1A244741F2(p0_boolean) {}
  _0x03F1A106BDA7DD3E() {}
  _0x95A7DABDDBB78AE7(iplName1_string, iplName2_string) {}
  _0x63EB2B972A218CAC() {}
  _0xFB199266061F820A() {}
  _0xF4A0DADB70F57FA6() {}
  _0x5068F488DDB54DD8() {}
  prefetchSrl(srl_string) {}
  isSrlLoaded() {}
  beginSrl() {}
  endSrl() {}
  setSrlTime(p0_number) {}
  _0xEF39EE20C537E98C(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  _0xBEB2D9A1D9A8F55A(p0_number, p1_number, p2_number, p3_number) {}
  _0x20C6C7E4EB082A7F(p0_boolean) {}
  _0xF8155A7F03DDFC8E(p0_number) {}
  setHdArea(x_number, y_number, z_number, radius_number) {}
  clearHdArea() {}
  initCreatorBudget() {}
  shutdownCreatorBudget() {}
  addModelToCreatorBudget(modelHash_number) {}
  removeModelFromCreatorBudget(modelHash_number) {}
  getUsedCreatorModelMemoryPercentage() {}
  taskPause(ped_number, ms_number) {}
  taskStandStill(ped_number, time_number) {}
  taskJump(ped_number, unused_boolean, p2_number, p3_number) {}
  taskCower(ped_number, duration_number) {}
  taskHandsUp(
    ped_number,
    duration_number,
    facingPed_number,
    p3_number,
    p4_boolean
  ) {}
  updateTaskHandsUpDuration(ped_number, duration_number) {}
  taskOpenVehicleDoor(
    ped_number,
    vehicle_number,
    timeOut_number,
    doorIndex_number,
    speed_number
  ) {}
  taskEnterVehicle(
    ped_number,
    vehicle_number,
    timeout_number,
    seat_number,
    speed_number,
    flag_number,
    p6_number
  ) {}
  taskLeaveVehicle(ped_number, vehicle_number, flags_number) {}
  taskGetOffBoat(ped_number, boat_number) {}
  taskSkyDive(ped_number, p1_boolean) {}
  taskParachute(ped_number, p1_boolean, p2_boolean) {}
  taskParachuteToTarget(ped_number, x_number, y_number, z_number) {}
  setParachuteTaskTarget(ped_number, x_number, y_number, z_number) {}
  setParachuteTaskThrust(ped_number, thrust_number) {}
  taskRappelFromHeli(ped_number, p1_number) {}
  taskVehicleDriveToCoord(
    ped_number,
    vehicle_number,
    x_number,
    y_number,
    z_number,
    speed_number,
    p6_number,
    vehicleModel_number,
    drivingMode_number,
    stopRange_number,
    p10_number
  ) {}
  taskVehicleDriveToCoordLongrange(
    ped_number,
    vehicle_number,
    x_number,
    y_number,
    z_number,
    speed_number,
    driveMode_number,
    stopRange_number
  ) {}
  taskVehicleDriveWander(
    ped_number,
    vehicle_number,
    speed_number,
    drivingStyle_number
  ) {}
  taskFollowToOffsetOfEntity(
    ped_number,
    entity_number,
    offsetX_number,
    offsetY_number,
    offsetZ_number,
    movementSpeed_number,
    timeout_number,
    stoppingRange_number,
    persistFollowing_boolean
  ) {}
  taskGoStraightToCoord(
    ped_number,
    x_number,
    y_number,
    z_number,
    speed_number,
    timeout_number,
    targetHeading_number,
    distanceToSlide_number
  ) {}
  taskGoStraightToCoordRelativeToEntity(
    entity1_number,
    entity2_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  taskAchieveHeading(ped_number, heading_number, timeout_number) {}
  taskFlushRoute() {}
  taskExtendRoute(x_number, y_number, z_number) {}
  taskFollowPointRoute(ped_number, speed_number, unknown_number) {}
  taskGoToEntity(
    entity_number,
    target_number,
    duration_number,
    distance_number,
    speed_number,
    p5_number,
    p6_number
  ) {}
  taskSmartFleeCoord(
    ped_number,
    x_number,
    y_number,
    z_number,
    distance_number,
    time_number,
    p6_boolean,
    p7_boolean
  ) {}
  taskSmartFleePed(
    ped_number,
    fleeTarget_number,
    distance_number,
    fleeTime_number,
    p4_boolean,
    p5_boolean
  ) {}
  taskReactAndFleePed(ped_number, fleeTarget_number) {}
  taskShockingEventReact(ped_number, eventHandle_number) {}
  taskWanderInArea(
    ped_number,
    x_number,
    y_number,
    z_number,
    radius_number,
    minimalLength_number,
    timeBetweenWalks_number
  ) {}
  taskWanderStandard(ped_number, p1_number, p2_number) {}
  taskVehiclePark(
    ped_number,
    vehicle_number,
    x_number,
    y_number,
    z_number,
    heading_number,
    mode_number,
    radius_number,
    keepEngineOn_boolean
  ) {}
  taskStealthKill(
    killer_number,
    target_number,
    actionType_number,
    p3_number,
    p4_number
  ) {}
  taskPlantBomb(ped_number, x_number, y_number, z_number, heading_number) {}
  taskFollowNavMeshToCoord(
    ped_number,
    x_number,
    y_number,
    z_number,
    speed_number,
    timeout_number,
    stoppingRange_number,
    persistFollowing_boolean,
    unk_number
  ) {}
  taskFollowNavMeshToCoordAdvanced(
    ped_number,
    x_number,
    y_number,
    z_number,
    speed_number,
    timeout_number,
    unkFloat_number,
    unkInt_number,
    unkX_number,
    unkY_number,
    unkZ_number,
    unk_40000f_number
  ) {}
  setPedPathCanUseClimbovers(ped_number, Toggle_boolean) {}
  setPedPathCanUseLadders(ped_number, Toggle_boolean) {}
  setPedPathCanDropFromHeight(ped_number, Toggle_boolean) {}
  _0x88E32DB8C1A4AA4B(ped_number, p1_number) {}
  setPedPathMayEnterWater(ped_number, mayEnterWater_boolean) {}
  setPedPathPreferToAvoidWater(ped_number, avoidWater_boolean) {}
  setPedPathAvoidFire(ped_number, avoidFire_boolean) {}
  setGlobalMinBirdFlightHeight(height_number) {}
  getNavmeshRouteDistanceRemaining(ped_number, p1_number, p2_number) {}
  getNavmeshRouteResult(ped_number) {}
  _0x3E38E28A1D80DDF6(ped_number) {}
  taskGoToCoordAnyMeans(
    ped_number,
    x_number,
    y_number,
    z_number,
    speed_number,
    p5_number,
    p6_boolean,
    walkingStyle_number,
    p8_number
  ) {}
  taskGoToCoordAnyMeansExtraParams(
    ped_number,
    x_number,
    y_number,
    z_number,
    speed_number,
    p5_number,
    p6_boolean,
    walkingStyle_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number,
    p12_number
  ) {}
  taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(
    ped_number,
    x_number,
    y_number,
    z_number,
    speed_number,
    p5_number,
    p6_boolean,
    walkingStyle_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number,
    p12_number,
    p13_number
  ) {}
  taskPlayAnim(
    ped_number,
    animDictionary_string,
    animationName_string,
    speed_number,
    speedMultiplier_number,
    duration_number,
    flag_number,
    playbackRate_number,
    lockX_boolean,
    lockY_boolean,
    lockZ_boolean
  ) {}
  taskPlayAnimAdvanced(
    ped_number,
    animDict_string,
    animName_string,
    posX_number,
    posY_number,
    posZ_number,
    rotX_number,
    rotY_number,
    rotZ_number,
    speed_number,
    speedMultiplier_number,
    duration_number,
    flag_number,
    animTime_number,
    p14_number,
    p15_number
  ) {}
  stopAnimTask(
    ped_number,
    animDictionary_string,
    animationName_string,
    p3_number
  ) {}
  taskScriptedAnimation(
    ped_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  playEntityScriptedAnim(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  stopAnimPlayback(ped_number, p1_number, p2_boolean) {}
  setAnimWeight(p0_number, p1_number, p2_number, p3_number, p4_boolean) {}
  setAnimRate(p0_number, p1_number, p2_number, p3_boolean) {}
  setAnimLooped(p0_number, p1_boolean, p2_number, p3_boolean) {}
  taskPlayPhoneGestureAnimation(
    ped_number,
    animDict_string,
    animation_string,
    boneMaskType_string,
    p4_number,
    p5_number,
    p6_boolean,
    p7_boolean
  ) {}
  taskStopPhoneGestureAnimation(ped_number, p1_number) {}
  isPlayingPhoneGestureAnim(ped_number) {}
  getPhoneGestureAnimCurrentTime(ped_number) {}
  getPhoneGestureAnimTotalTime(ped_number) {}
  taskVehiclePlayAnim(
    vehicle_number,
    animation_set_string,
    animation_name_string
  ) {}
  taskLookAtCoord(
    entity_number,
    x_number,
    y_number,
    z_number,
    duration_number,
    p5_number,
    p6_number
  ) {}
  taskLookAtEntity(
    ped_number,
    lookAt_number,
    duration_number,
    unknown1_number,
    unknown2_number
  ) {}
  taskClearLookAt(ped_number) {}
  openSequenceTask(taskSequenceId_number) {}
  closeSequenceTask(taskSequenceId_number) {}
  taskPerformSequence(ped_number, taskSequenceId_number) {}
  taskPerformSequenceLocally(ped_number, taskSequenceId_number) {}
  clearSequenceTask(taskSequenceId_number) {}
  setSequenceToRepeat(taskSequenceId_number, repeat_boolean) {}
  getSequenceProgress(ped_number) {}
  getIsTaskActive(ped_number, taskIndex_number) {}
  getScriptTaskStatus(targetPed_number, taskHash_number) {}
  getActiveVehicleMissionType(vehicle_number) {}
  taskLeaveAnyVehicle(ped_number, p1_number, p2_number) {}
  taskAimGunScripted(ped_number, scriptTask_number, p2_boolean, p3_boolean) {}
  taskAimGunScriptedWithTarget(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_boolean,
    p7_boolean
  ) {}
  updateTaskAimGunScriptedTarget(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_boolean
  ) {}
  getClipSetForScriptedGunTask(p0_number) {}
  taskAimGunAtEntity(ped_number, entity_number, duration_number, p3_boolean) {}
  taskTurnPedToFaceEntity(ped_number, entity_number, duration_number) {}
  taskAimGunAtCoord(
    ped_number,
    x_number,
    y_number,
    z_number,
    time_number,
    p5_boolean,
    p6_boolean
  ) {}
  taskShootAtCoord(
    ped_number,
    x_number,
    y_number,
    z_number,
    duration_number,
    firingPattern_number
  ) {}
  taskShuffleToNextVehicleSeat(ped_number, vehicle_number, p2_number) {}
  clearPedTasks(ped_number) {}
  clearPedSecondaryTask(ped_number) {}
  taskEveryoneLeaveVehicle(vehicle_number) {}
  taskGotoEntityOffset(
    ped_number,
    p1_number,
    p2_number,
    x_number,
    y_number,
    z_number,
    duration_number
  ) {}
  taskGotoEntityOffsetXy(
    p0_number,
    oed_number,
    duration_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_boolean
  ) {}
  taskTurnPedToFaceCoord(
    ped_number,
    x_number,
    y_number,
    z_number,
    duration_number
  ) {}
  taskVehicleTempAction(
    driver_number,
    vehicle_number,
    action_number,
    time_number
  ) {}
  taskVehicleMission(
    p0_number,
    p1_number,
    veh_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_boolean
  ) {}
  taskVehicleMissionPedTarget(
    ped_number,
    vehicle_number,
    pedTarget_number,
    mode_number,
    maxSpeed_number,
    drivingStyle_number,
    minDistance_number,
    p7_number,
    p8_boolean
  ) {}
  taskVehicleMissionCoorsTarget(
    ped_number,
    vehicle_number,
    x_number,
    y_number,
    z_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_boolean
  ) {}
  taskVehicleEscort(
    ped_number,
    vehicle_number,
    targetVehicle_number,
    mode_number,
    speed_number,
    drivingStyle_number,
    minDistance_number,
    p7_number,
    noRoadsDistance_number
  ) {}
  taskVehicleFollow(
    driver_number,
    vehicle_number,
    targetEntity_number,
    speed_number,
    drivingStyle_number,
    minDistance_number
  ) {}
  taskVehicleChase(driver_number, targetEnt_number) {}
  taskVehicleHeliProtect(
    pilot_number,
    vehicle_number,
    entityToFollow_number,
    targetSpeed_number,
    p4_number,
    radius_number,
    altitude_number,
    p7_number
  ) {}
  setTaskVehicleChaseBehaviorFlag(ped_number, flag_number, set_boolean) {}
  setTaskVehicleChaseIdealPursuitDistance(ped_number, distance_number) {}
  taskHeliChase(
    pilot_number,
    entityToFollow_number,
    x_number,
    y_number,
    z_number
  ) {}
  taskPlaneChase(
    pilot_number,
    entityToFollow_number,
    x_number,
    y_number,
    z_number
  ) {}
  taskPlaneLand(
    pilot_number,
    plane_number,
    runwayStartX_number,
    runwayStartY_number,
    runwayStartZ_number,
    runwayEndX_number,
    runwayEndY_number,
    runwayEndZ_number
  ) {}
  _0xDBBC7A2432524127(vehicle_number) {}
  _0x53DDC75BC3AC0A90(vehicle_number) {}
  taskPlaneGotoPreciseVtol(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number
  ) {}
  taskHeliMission(
    pilot_number,
    aircraft_number,
    targetVehicle_number,
    targetPed_number,
    destinationX_number,
    destinationY_number,
    destinationZ_number,
    missionFlag_number,
    maxSpeed_number,
    landingRadius_number,
    targetHeading_number,
    unk1_number,
    unk2_number,
    unk3_number,
    landingFlags_number
  ) {}
  taskHeliEscortHeli(
    pilot_number,
    heli1_number,
    heli2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  taskPlaneMission(
    pilot_number,
    aircraft_number,
    targetVehicle_number,
    targetPed_number,
    destinationX_number,
    destinationY_number,
    destinationZ_number,
    missionFlag_number,
    angularDrag_number,
    unk_number,
    targetHeading_number,
    maxZ_number,
    minZ_number,
    p13_number
  ) {}
  taskPlaneTaxi(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  taskBoatMission(
    pedDriver_number,
    boat_number,
    p2_number,
    p3_number,
    x_number,
    y_number,
    z_number,
    p7_number,
    maxSpeed_number,
    drivingStyle_number,
    p10_number,
    p11_number
  ) {}
  taskDriveBy(
    driverPed_number,
    targetPed_number,
    targetVehicle_number,
    targetX_number,
    targetY_number,
    targetZ_number,
    distanceToShoot_number,
    pedAccuracy_number,
    p8_boolean,
    firingPattern_number
  ) {}
  setDrivebyTaskTarget(
    shootingPed_number,
    targetPed_number,
    targetVehicle_number,
    x_number,
    y_number,
    z_number
  ) {}
  clearDrivebyTaskUnderneathDrivingTask(ped_number) {}
  isDrivebyTaskUnderneathDrivingTask(ped_number) {}
  controlMountedWeapon(ped_number) {}
  setMountedWeaponTarget(
    shootingPed_number,
    targetPed_number,
    targetVehicle_number,
    x_number,
    y_number,
    z_number,
    p6_number,
    p7_number
  ) {}
  isMountedWeaponTaskUnderneathDrivingTask(ped_number) {}
  taskUseMobilePhone(ped_number, p1_number, p2_number) {}
  taskUseMobilePhoneTimed(ped_number, duration_number) {}
  taskChatToPed(
    ped_number,
    target_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number
  ) {}
  taskWarpPedIntoVehicle(ped_number, vehicle_number, seat_number) {}
  taskShootAtEntity(
    entity_number,
    target_number,
    duration_number,
    firingPattern_number
  ) {}
  taskClimb(ped_number, unused_boolean) {}
  taskClimbLadder(ped_number, p1_number) {}
  clearPedTasksImmediately(ped_number) {}
  taskPerformSequenceFromProgress(p0_number, p1_number, p2_number, p3_number) {}
  setNextDesiredMoveState(p0_number) {}
  setPedDesiredMoveBlendRatio(ped_number, p1_number) {}
  getPedDesiredMoveBlendRatio(ped_number) {}
  taskGotoEntityAiming(
    ped_number,
    target_number,
    distanceToStopAt_number,
    StartAimingDist_number
  ) {}
  taskSetDecisionMaker(ped_number, p1_number) {}
  taskSetSphereDefensiveArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  taskClearDefensiveArea(p0_number) {}
  taskPedSlideToCoord(
    ped_number,
    x_number,
    y_number,
    z_number,
    heading_number,
    p5_number
  ) {}
  taskPedSlideToCoordHdgRate(
    ped_number,
    x_number,
    y_number,
    z_number,
    heading_number,
    p5_number,
    p6_number
  ) {}
  addCoverPoint(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_boolean
  ) {}
  removeCoverPoint(coverpoint_number) {}
  doesScriptedCoverPointExistAtCoords(x_number, y_number, z_number) {}
  getScriptedCoverPointCoords(coverpoint_number) {}
  taskCombatPed(ped_number, targetPed_number, p2_number, p3_number) {}
  taskCombatPedTimed(p0_number, ped_number, p2_number, p3_number) {}
  taskSeekCoverFromPos(
    ped_number,
    x_number,
    y_number,
    z_number,
    duration_number,
    p5_boolean
  ) {}
  taskSeekCoverFromPed(
    ped_number,
    target_number,
    duration_number,
    p3_boolean
  ) {}
  taskSeekCoverToCoverPoint(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_boolean
  ) {}
  taskSeekCoverToCoords(
    ped_number,
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    p7_number,
    p8_boolean
  ) {}
  taskPutPedDirectlyIntoCover(
    ped_number,
    x_number,
    y_number,
    z_number,
    timeout_number,
    p5_boolean,
    p6_number,
    p7_boolean,
    p8_boolean,
    p9_number,
    p10_boolean
  ) {}
  taskExitCover(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  taskPutPedDirectlyIntoMelee(
    ped_number,
    meleeTarget_number,
    p2_number,
    p3_number,
    p4_number,
    p5_boolean
  ) {}
  taskToggleDuck(p0_boolean, p1_boolean) {}
  taskGuardCurrentPosition(p0_number, p1_number, p2_number, p3_boolean) {}
  taskGuardAssignedDefensiveArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  taskGuardSphereDefensiveArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number
  ) {}
  taskStandGuard(
    ped_number,
    x_number,
    y_number,
    z_number,
    heading_number,
    scenarioName_string
  ) {}
  setDriveTaskCruiseSpeed(driver_number, cruiseSpeed_number) {}
  setDriveTaskMaxCruiseSpeed(p0_number, p1_number) {}
  setDriveTaskDrivingStyle(ped_number, drivingStyle_number) {}
  addCoverBlockingArea(
    playerX_number,
    playerY_number,
    playerZ_number,
    radiusX_number,
    radiusY_number,
    radiusZ_number,
    p6_boolean,
    p7_boolean,
    p8_boolean,
    p9_boolean
  ) {}
  removeAllCoverBlockingAreas() {}
  _0xFA83CA6776038F64(x_number, y_number, z_number) {}
  _0x1F351CF1C6475734(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number
  ) {}
  taskStartScenarioInPlace(
    ped_number,
    scenarioName_string,
    unkDelay_number,
    playEnterAnim_boolean
  ) {}
  taskStartScenarioAtPosition(
    ped_number,
    scenarioName_string,
    x_number,
    y_number,
    z_number,
    heading_number,
    duration_number,
    sittingScenario_boolean,
    teleport_boolean
  ) {}
  taskUseNearestScenarioToCoord(
    ped_number,
    x_number,
    y_number,
    z_number,
    distance_number,
    duration_number
  ) {}
  taskUseNearestScenarioToCoordWarp(
    ped_number,
    x_number,
    y_number,
    z_number,
    radius_number,
    p5_number
  ) {}
  taskUseNearestScenarioChainToCoord(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  taskUseNearestScenarioChainToCoordWarp(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  doesScenarioExistInArea(
    x_number,
    y_number,
    z_number,
    radius_number,
    b_boolean
  ) {}
  doesScenarioOfTypeExistInArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_boolean
  ) {}
  isScenarioOccupied(p0_number, p1_number, p2_number, p3_number, p4_boolean) {}
  pedHasUseScenarioTask(ped_number) {}
  playAnimOnRunningScenario(ped_number, animDict_string, animName_string) {}
  doesScenarioGroupExist(scenarioGroup_string) {}
  isScenarioGroupEnabled(scenarioGroup_string) {}
  setScenarioGroupEnabled(scenarioGroup_string, p1_boolean) {}
  resetScenarioGroupsEnabled() {}
  setExclusiveScenarioGroup(scenarioGroup_string) {}
  resetExclusiveScenarioGroup() {}
  isScenarioTypeEnabled(scenarioType_string) {}
  setScenarioTypeEnabled(scenarioType_string, toggle_boolean) {}
  resetScenarioTypesEnabled() {}
  isPedActiveInScenario(ped_number) {}
  _0x621C6E4729388E41(ped_number) {}
  setPedCanPlayAmbientIdles(ped_number, p1_boolean, p2_boolean) {}
  taskCombatHatedTargetsInArea(
    ped_number,
    x_number,
    y_number,
    z_number,
    radius_number,
    p5_number
  ) {}
  taskCombatHatedTargetsAroundPed(ped_number, radius_number, p2_number) {}
  taskCombatHatedTargetsAroundPedTimed(
    p0_number,
    p1_number,
    p2_number,
    p3_number
  ) {}
  taskThrowProjectile(
    ped_number,
    x_number,
    y_number,
    z_number,
    p4_number,
    p5_number
  ) {}
  taskSwapWeapon(ped_number, p1_boolean) {}
  taskReloadWeapon(ped_number, unused_boolean) {}
  isPedGettingUp(ped_number) {}
  taskWrithe(
    ped_number,
    target_number,
    time_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  isPedInWrithe(ped_number) {}
  openPatrolRoute(patrolRoute_string) {}
  closePatrolRoute() {}
  addPatrolRouteNode(
    p0_number,
    p1_string,
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    p8_number
  ) {}
  addPatrolRouteLink(p0_number, p1_number) {}
  createPatrolRoute() {}
  deletePatrolRoute(patrolRoute_string) {}
  taskPatrol(ped_number, p1_string, p2_number, p3_boolean, p4_boolean) {}
  taskStayInCover(ped_number) {}
  addVehicleSubtaskAttackCoord(ped_number, x_number, y_number, z_number) {}
  addVehicleSubtaskAttackPed(ped_number, ped2_number) {}
  taskVehicleShootAtPed(ped_number, target_number, p2_number) {}
  taskVehicleAimAtPed(ped_number, target_number) {}
  taskVehicleShootAtCoord(
    ped_number,
    x_number,
    y_number,
    z_number,
    p4_number
  ) {}
  taskVehicleAimAtCoord(ped_number, x_number, y_number, z_number) {}
  taskVehicleGotoNavmesh(
    ped_number,
    vehicle_number,
    x_number,
    y_number,
    z_number,
    speed_number,
    behaviorFlag_number,
    stoppingRange_number
  ) {}
  taskGoToCoordWhileAimingAtCoord(
    ped_number,
    x_number,
    y_number,
    z_number,
    aimAtX_number,
    aimAtY_number,
    aimAtZ_number,
    moveSpeed_number,
    p8_boolean,
    p9_number,
    p10_number,
    p11_boolean,
    flags_number,
    p13_boolean,
    firingPattern_number
  ) {}
  taskGoToCoordWhileAimingAtEntity(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_boolean,
    p7_number,
    p8_number,
    p9_boolean,
    p10_number,
    p11_boolean,
    p12_number,
    p13_number
  ) {}
  taskGoToCoordAndAimAtHatedEntitiesNearCoord(
    pedHandle_number,
    goToLocationX_number,
    goToLocationY_number,
    goToLocationZ_number,
    focusLocationX_number,
    focusLocationY_number,
    focusLocationZ_number,
    speed_number,
    shootAtEnemies_boolean,
    distanceToStopAt_number,
    noRoadsDistance_number,
    unkTrue_boolean,
    unkFlag_number,
    aimingFlag_number,
    firingPattern_number
  ) {}
  taskGoToEntityWhileAimingAtCoord(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_boolean,
    p7_number,
    p8_number,
    p9_boolean,
    p10_boolean,
    p11_number
  ) {}
  taskGoToEntityWhileAimingAtEntity(
    ped_number,
    entityToWalkTo_number,
    entityToAimAt_number,
    speed_number,
    shootatEntity_boolean,
    p5_number,
    p6_number,
    p7_boolean,
    p8_boolean,
    firingPattern_number
  ) {}
  setHighFallTask(ped_number, p1_number, p2_number, p3_number) {}
  requestWaypointRecording(name_string) {}
  getIsWaypointRecordingLoaded(name_string) {}
  removeWaypointRecording(name_string) {}
  waypointRecordingGetNumPoints(name_string, points_number) {}
  waypointRecordingGetCoord(name_string, point_number, coord_vector3Ptr) {}
  waypointRecordingGetSpeedAtPoint(name_string, point_number) {}
  waypointRecordingGetClosestWaypoint(
    name_string,
    x_number,
    y_number,
    z_number,
    point_number
  ) {}
  taskFollowWaypointRecording(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  isWaypointPlaybackGoingOnForPed(p0_number) {}
  getPedWaypointProgress(ped_number) {}
  getPedWaypointDistance(p0_number) {}
  setPedWaypointRouteOffset(p0_number, p1_number, p2_number, p3_number) {}
  getWaypointDistanceAlongRoute(p0_string, p1_number) {}
  waypointPlaybackGetIsPaused(p0_number) {}
  waypointPlaybackPause(p0_number, p1_boolean, p2_boolean) {}
  waypointPlaybackResume(p0_number, p1_boolean, p2_number, p3_number) {}
  waypointPlaybackOverrideSpeed(p0_number, p1_number, p2_boolean) {}
  waypointPlaybackUseDefaultSpeed(p0_number) {}
  useWaypointRecordingAsAssistedMovementRoute(
    p0_number,
    p1_boolean,
    p2_number,
    p3_number
  ) {}
  waypointPlaybackStartAimingAtPed(p0_number, p1_number, p2_boolean) {}
  waypointPlaybackStartAimingAtCoord(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_boolean
  ) {}
  waypointPlaybackStartShootingAtPed(
    p0_number,
    p1_number,
    p2_boolean,
    p3_number
  ) {}
  waypointPlaybackStartShootingAtCoord(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_boolean,
    p5_number
  ) {}
  waypointPlaybackStopAimingOrShooting(p0_number) {}
  assistedMovementRequestRoute(route_string) {}
  assistedMovementRemoveRoute(route_string) {}
  assistedMovementIsRouteLoaded(route_string) {}
  assistedMovementSetRouteProperties(route_string, props_number) {}
  assistedMovementOverrideLoadDistanceThisFrame(dist_number) {}
  taskVehicleFollowWaypointRecording(
    ped_number,
    vehicle_number,
    WPRecording_string,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_boolean,
    p9_number
  ) {}
  isWaypointPlaybackGoingOnForVehicle(vehicle_number) {}
  getVehicleWaypointProgress(vehicle_number) {}
  getVehicleWaypointTargetPoint(vehicle_number) {}
  vehicleWaypointPlaybackPause(vehicle_number) {}
  vehicleWaypointPlaybackResume(vehicle_number) {}
  vehicleWaypointPlaybackUseDefaultSpeed(vehicle_number) {}
  vehicleWaypointPlaybackOverrideSpeed(vehicle_number, speed_number) {}
  taskSetBlockingOfNonTemporaryEvents(ped_number, toggle_boolean) {}
  taskForceMotionState(ped_number, state_number, p2_boolean) {}
  taskMoveNetworkByName(
    ped_number,
    task_string,
    multiplier_number,
    p3_boolean,
    animDict_string,
    flags_number
  ) {}
  taskMoveNetworkAdvancedByName(
    ped_number,
    p1_string,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_boolean,
    animDict_string,
    flags_number
  ) {}
  taskMoveNetworkByNameWithInitParams(
    ped_number,
    p1_string,
    data_number,
    p3_number,
    p4_boolean,
    animDict_string,
    flags_number
  ) {}
  isTaskMoveNetworkActive(ped_number) {}
  isTaskMoveNetworkReadyForTransition(ped_number) {}
  requestTaskMoveNetworkStateTransition(ped_number, name_string) {}
  _0xAB13A5565480B6D9(ped_number, p1_string) {}
  getTaskMoveNetworkState(ped_number) {}
  _0x8423541E8B3A1589(p0_number, p1_number, p2_number) {}
  setTaskMoveNetworkSignalFloat(ped_number, signalName_string, value_number) {}
  setTaskMoveNetworkSignalFloat2(ped_number, signalName_string, value_number) {}
  _0x8634CEF2522D987B(ped_number, p1_string, value_number) {}
  setTaskMoveNetworkSignalBool(ped_number, signalName_string, value_boolean) {}
  getTaskMoveNetworkSignalFloat(ped_number, signalName_string) {}
  getTaskMoveNetworkSignalBool(ped_number, signalName_string) {}
  getTaskMoveNetworkEvent(ped_number, eventName_string) {}
  isMoveBlendRatioStill(ped_number) {}
  isMoveBlendRatioWalking(ped_number) {}
  isMoveBlendRatioRunning(ped_number) {}
  isMoveBlendRatioSprinting(ped_number) {}
  isPedStill(ped_number) {}
  isPedWalking(ped_number) {}
  isPedRunning(ped_number) {}
  isPedSprinting(ped_number) {}
  isPedStrafing(ped_number) {}
  taskSynchronizedScene(
    ped_number,
    scene_number,
    animDictionary_string,
    animationName_string,
    speed_number,
    speedMultiplier_number,
    duration_number,
    flag_number,
    playbackRate_number,
    p9_number
  ) {}
  taskAgitatedAction(ped_number, ped2_number) {}
  taskSweepAimEntity(
    ped_number,
    anim_string,
    p2_string,
    p3_string,
    p4_string,
    p5_number,
    vehicle_number,
    p7_number,
    p8_number
  ) {}
  updateTaskSweepAimEntity(ped_number, entity_number) {}
  taskSweepAimPosition(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number
  ) {}
  updateTaskSweepAimPosition(p0_number, p1_number, p2_number, p3_number) {}
  taskArrestPed(ped_number, target_number) {}
  isPedRunningArrestTask(ped_number) {}
  isPedBeingArrested(ped_number) {}
  uncuffPed(ped_number) {}
  isPedCuffed(ped_number) {}
  createVehicle(
    modelHash_number,
    x_number,
    y_number,
    z_number,
    heading_number,
    isNetwork_boolean,
    thisScriptCheck_boolean,
    p7_boolean
  ) {}
  deleteVehicle(vehicle_number) {}
  _0x7D6F9A3EF26136A0(vehicle_number, toggle_boolean, p2_boolean) {}
  setVehicleCanBeLockedOn(vehicle_number, canBeLockedOn_boolean, unk_boolean) {}
  setVehicleAllowNoPassengersLockon(veh_number, toggle_boolean) {}
  _0xE6B0E8CFC3633BF0(vehicle_number) {}
  _0x6EAAEFC76ACC311F(p0_number) {}
  _0x407DC5E97DB1A4D3(p0_number, p1_number) {}
  isVehicleModel(vehicle_number, model_number) {}
  doesScriptVehicleGeneratorExist(vehicleGenerator_number) {}
  createScriptVehicleGenerator(
    x_number,
    y_number,
    z_number,
    heading_number,
    p4_number,
    p5_number,
    modelHash_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    p11_boolean,
    p12_boolean,
    p13_boolean,
    p14_boolean,
    p15_boolean,
    p16_number
  ) {}
  deleteScriptVehicleGenerator(vehicleGenerator_number) {}
  setScriptVehicleGenerator(vehicleGenerator_number, enabled_boolean) {}
  setAllVehicleGeneratorsActiveInArea(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    p6_boolean,
    p7_boolean
  ) {}
  setAllVehicleGeneratorsActive() {}
  setAllLowPriorityVehicleGeneratorsActive(active_boolean) {}
  _0x9A75585FB2E54FAD(x_number, y_number, z_number, p3_number) {}
  _0x0A436B8643716D14() {}
  setVehicleOnGroundProperly(vehicle_number, p1_number) {}
  setVehicleUseCutsceneWheelCompression(
    p0_number,
    p1_boolean,
    p2_boolean,
    p3_boolean
  ) {}
  isVehicleStuckOnRoof(vehicle_number) {}
  addVehicleUpsidedownCheck(vehicle_number) {}
  removeVehicleUpsidedownCheck(vehicle_number) {}
  isVehicleStopped(vehicle_number) {}
  getVehicleNumberOfPassengers(vehicle_number) {}
  getVehicleMaxNumberOfPassengers(vehicle_number) {}
  getVehicleModelNumberOfSeats(modelHash_number) {}
  isSeatWarpOnly(vehicle_number, seatIndex_number) {}
  isTurretSeat(vehicle_number, seatIndex_number) {}
  doesVehicleAllowRappel(vehicle_number) {}
  setVehicleDensityMultiplierThisFrame(multiplier_number) {}
  setRandomVehicleDensityMultiplierThisFrame(multiplier_number) {}
  setParkedVehicleDensityMultiplierThisFrame(multiplier_number) {}
  setDisableRandomTrainsThisFrame(toggle_boolean) {}
  setAmbientVehicleRangeMultiplierThisFrame(value_number) {}
  setFarDrawVehicles(toggle_boolean) {}
  setNumberOfParkedVehicles(value_number) {}
  setVehicleDoorsLocked(vehicle_number, doorLockStatus_number) {}
  setVehicleDoorDestroyType(
    vehicle_number,
    doorIndex_number,
    destroyType_number
  ) {}
  setVehicleHasMutedSirens(vehicle_number, toggle_boolean) {}
  setVehicleDoorsLockedForPlayer(
    vehicle_number,
    player_number,
    toggle_boolean
  ) {}
  getVehicleDoorsLockedForPlayer(vehicle_number, player_number) {}
  setVehicleDoorsLockedForAllPlayers(vehicle_number, toggle_boolean) {}
  setVehicleDoorsLockedForNonScriptPlayers(vehicle_number, toggle_boolean) {}
  setVehicleDoorsLockedForTeam(vehicle_number, team_number, toggle_boolean) {}
  setVehicleDoorsLockedForUnk(vehicle_number, toggle_boolean) {}
  _0x76D26A22750E849E(vehicle_number) {}
  explodeVehicle(vehicle_number, isAudible_boolean, isInvisible_boolean) {}
  setVehicleOutOfControl(
    vehicle_number,
    killDriver_boolean,
    explodeOnImpact_boolean
  ) {}
  setVehicleTimedExplosion(vehicle_number, ped_number, toggle_boolean) {}
  addVehiclePhoneExplosiveDevice(vehicle_number) {}
  clearVehiclePhoneExplosiveDevice() {}
  hasVehiclePhoneExplosiveDevice() {}
  detonateVehiclePhoneExplosiveDevice() {}
  setTaxiLights(vehicle_number, state_boolean) {}
  isTaxiLightOn(vehicle_number) {}
  isVehicleInGarageArea(garageName_string, vehicle_number) {}
  setVehicleColours(
    vehicle_number,
    colorPrimary_number,
    colorSecondary_number
  ) {}
  setVehicleFullbeam(vehicle_number, toggle_boolean) {}
  setVehicleIsRacing(vehicle_number, toggle_boolean) {}
  setVehicleCustomPrimaryColour(vehicle_number, r_number, g_number, b_number) {}
  getVehicleCustomPrimaryColour(vehicle_number, r_number, g_number, b_number) {}
  clearVehicleCustomPrimaryColour(vehicle_number) {}
  getIsVehiclePrimaryColourCustom(vehicle_number) {}
  setVehicleCustomSecondaryColour(
    vehicle_number,
    r_number,
    g_number,
    b_number
  ) {}
  getVehicleCustomSecondaryColour(
    vehicle_number,
    r_number,
    g_number,
    b_number
  ) {}
  clearVehicleCustomSecondaryColour(vehicle_number) {}
  getIsVehicleSecondaryColourCustom(vehicle_number) {}
  setVehicleEnveffScale(vehicle_number, fade_number) {}
  getVehicleEnveffScale(vehicle_number) {}
  setCanResprayVehicle(vehicle_number, state_boolean) {}
  _0xAB31EF4DE6800CE9(p0_number, p1_number) {}
  _0x1B212B26DD3C04DF(vehicle_number, toggle_boolean) {}
  forceSubmarineSurfaceMode(vehicle_number, toggle_boolean) {}
  setSubmarineCrushDepths(
    vehicle_number,
    p1_boolean,
    depth1_number,
    depth2_number,
    depth3_number
  ) {}
  _0xED5EDE9E676643C9(p0_number, p1_number) {}
  setBoatAnchor(vehicle_number, toggle_boolean) {}
  canAnchorBoatHere(vehicle_number) {}
  canAnchorBoatHere2(vehicle_number) {}
  setBoatFrozenWhenAnchored(vehicle_number, toggle_boolean) {}
  _0xB28B1FE5BFADD7F5(vehicle_number, p1_boolean) {}
  setBoatMovementResistance(vehicle_number, value_number) {}
  isBoatAnchoredAndFrozen(vehicle_number) {}
  setBoatSinksWhenWrecked(vehicle_number, toggle_boolean) {}
  setBoatIsSinking(p0_number) {}
  setVehicleSiren(vehicle_number, toggle_boolean) {}
  isVehicleSirenOn(vehicle_number) {}
  isVehicleSirenAudioOn(vehicle_number) {}
  setVehicleStrong(vehicle_number, toggle_boolean) {}
  removeVehicleStuckCheck(vehicle_number) {}
  getVehicleColours(
    vehicle_number,
    colorPrimary_number,
    colorSecondary_number
  ) {}
  isVehicleSeatFree(vehicle_number, seatIndex_number, p2_boolean) {}
  getPedInVehicleSeat(vehicle_number, index_number, p2_number) {}
  getLastPedInVehicleSeat(vehicle_number, seatIndex_number) {}
  getVehicleLightsState(
    vehicle_number,
    lightsOn_boolean,
    highbeamsOn_boolean
  ) {}
  isVehicleTyreBurst(vehicle_number, wheelID_number, completely_boolean) {}
  setVehicleForwardSpeed(vehicle_number, speed_number) {}
  _0x6501129C9E0FFA05(p0_number, p1_number) {}
  bringVehicleToHalt(
    vehicle_number,
    distance_number,
    duration_number,
    unknown_boolean
  ) {}
  _0xDCE97BDF8A0EABC8(p0_number, p1_number) {}
  _0x9849DE24FCF23CCC(p0_number, p1_number) {}
  _0x7C06330BFDDA182E(p0_number) {}
  _0xC69BB1D832A710EF(p0_number) {}
  setForkliftForkHeight(vehicle_number, height_number) {}
  isEntityAttachedToHandlerFrame(vehicle_number, entity_number) {}
  _0x62CA17B74C435651(vehicle_number) {}
  findVehicleCarryingThisEntity(entity_number) {}
  isHandlerFrameAboveContainer(vehicle_number, entity_number) {}
  _0x6A98C2ECF57FA5D4(vehicle_number, entity_number) {}
  detachContainerFromHandlerFrame(vehicle_number) {}
  _0x8AA9180DE2FEDD45(vehicle_number, p1_boolean) {}
  setBoatDisableAvoidance(vehicle_number, p1_boolean) {}
  isHeliLandingAreaBlocked(vehicle_number) {}
  _0x107A473D7A6647A9(p0_number) {}
  setHeliTurbulenceScalar(vehicle_number, p1_number) {}
  setCarBootOpen(vehicle_number) {}
  setVehicleTyreBurst(vehicle_number, index_number, onRim_boolean, p3_number) {}
  setVehicleDoorsShut(vehicle_number, closeInstantly_boolean) {}
  setVehicleTyresCanBurst(vehicle_number, toggle_boolean) {}
  getVehicleTyresCanBurst(vehicle_number) {}
  setVehicleWheelsCanBreak(vehicle_number, enabled_boolean) {}
  setVehicleDoorOpen(
    vehicle_number,
    doorIndex_number,
    loose_boolean,
    openInstantly_boolean
  ) {}
  _0x3B458DDB57038F08(p0_number, p1_number, p2_number) {}
  _0xA247F9EF01D8082E(p0_number) {}
  removeVehicleWindow(vehicle_number, windowIndex_number) {}
  rollDownWindows(vehicle_number) {}
  rollDownWindow(vehicle_number, windowIndex_number) {}
  rollUpWindow(vehicle_number, windowIndex_number) {}
  smashVehicleWindow(vehicle_number, index_number) {}
  fixVehicleWindow(vehicle_number, index_number) {}
  detachVehicleWindscreen(vehicle_number) {}
  ejectJb700Roof(vehicle_number, x_number, y_number, z_number) {}
  setVehicleLights(vehicle_number, state_number) {}
  setVehicleUsePlayerLightSettings(vehicle_number, p1_boolean) {}
  setVehicleLightsMode(vehicle_number, p1_number) {}
  setVehicleAlarm(vehicle_number, state_boolean) {}
  startVehicleAlarm(vehicle_number) {}
  isVehicleAlarmActivated(vehicle_number) {}
  setVehicleInteriorlight(vehicle_number, toggle_boolean) {}
  _0x8821196D91FA2DE5(p0_number, p1_number) {}
  setVehicleLightMultiplier(vehicle_number, multiplier_number) {}
  attachVehicleToTrailer(vehicle_number, trailer_number, radius_number) {}
  attachVehicleOnToTrailer(
    vehicle_number,
    trailer_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    p10_number,
    p11_number
  ) {}
  stabiliseEntityAttachedToHeli(vehicle_number, entity_number, p2_number) {}
  detachVehicleFromTrailer(vehicle_number) {}
  isVehicleAttachedToTrailer(vehicle_number) {}
  setTrailerInverseMassScale(vehicle_number, p1_number) {}
  setTrailerLegsRaised(vehicle_number) {}
  setTrailerLegsLowered(p0_number) {}
  setVehicleTyreFixed(vehicle_number, tyreIndex_number) {}
  setVehicleNumberPlateText(vehicle_number, plateText_string) {}
  getVehicleNumberPlateText(vehicle_number) {}
  getNumberOfVehicleNumberPlates() {}
  setVehicleNumberPlateTextIndex(vehicle_number, plateIndex_number) {}
  getVehicleNumberPlateTextIndex(vehicle_number) {}
  setRandomTrains(toggle_boolean) {}
  createMissionTrain(
    variation_number,
    x_number,
    y_number,
    z_number,
    direction_boolean
  ) {}
  switchTrainTrack(intersectionId_number, state_boolean) {}
  setTrainTrackSpawnFrequency(trackIndex_number, frequency_number) {}
  deleteAllTrains() {}
  setTrainSpeed(train_number, speed_number) {}
  setTrainCruiseSpeed(train_number, speed_number) {}
  setRandomBoats(toggle_boolean) {}
  setGarbageTrucks(toggle_boolean) {}
  doesVehicleHaveStuckVehicleCheck(vehicle_number) {}
  getVehicleRecordingId(p0_number, p1_string) {}
  requestVehicleRecording(i_number, name_string) {}
  hasVehicleRecordingBeenLoaded(p0_number, p1_number) {}
  removeVehicleRecording(p0_number, p1_number) {}
  getPositionOfVehicleRecordingIdAtTime(id_number, time_number) {}
  getPositionOfVehicleRecordingAtTime(p0_number, p1_number, p2_string) {}
  getRotationOfVehicleRecordingIdAtTime(id_number, time_number) {}
  getRotationOfVehicleRecordingAtTime(p0_number, p1_number, p2_number) {}
  getTotalDurationOfVehicleRecordingId(p0_number) {}
  getTotalDurationOfVehicleRecording(p0_number, p1_number) {}
  getPositionInRecording(p0_number) {}
  getTimePositionInRecording(p0_number) {}
  startPlaybackRecordedVehicle(
    vehicle_number,
    p1_number,
    playback_string,
    p3_boolean
  ) {}
  startPlaybackRecordedVehicleWithFlags(
    vehicle_number,
    p1_number,
    playback_string,
    p3_number,
    p4_number,
    p5_number
  ) {}
  _0x1F2E4E06DEA8992B(vehicle_number, p1_boolean) {}
  stopPlaybackRecordedVehicle(vehicle_number) {}
  pausePlaybackRecordedVehicle(vehicle_number) {}
  unpausePlaybackRecordedVehicle(vehicle_number) {}
  isPlaybackGoingOnForVehicle(vehicle_number) {}
  isPlaybackUsingAiGoingOnForVehicle(vehicle_number) {}
  getCurrentPlaybackForVehicle(vehicle_number) {}
  skipToEndAndStopPlaybackRecordedVehicle(vehicle_number) {}
  setPlaybackSpeed(vehicle_number, speed_number) {}
  startPlaybackRecordedVehicleUsingAi(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  skipTimeInPlaybackRecordedVehicle(p0_number, p1_number) {}
  setPlaybackToUseAi(vehicle_number, flag_number) {}
  setPlaybackToUseAiTryToRevertBackLater(
    p0_number,
    p1_number,
    p2_number,
    p3_boolean
  ) {}
  _0x5845066D8A1EA7F7(
    vehicle_number,
    x_number,
    y_number,
    z_number,
    p4_number
  ) {}
  _0x796A877E459B99EA(p0_number, p1_number, p2_number, p3_number) {}
  _0xFAF2A78061FD9EF4(p0_number, p1_number, p2_number, p3_number) {}
  _0x063AE2B2CC273588(p0_number, p1_boolean) {}
  explodeVehicleInCutscene(vehicle_number, p1_boolean) {}
  addVehicleStuckCheckWithWarp(
    p0_number,
    p1_number,
    p2_number,
    p3_boolean,
    p4_boolean,
    p5_boolean,
    p6_number
  ) {}
  setVehicleModelIsSuppressed(model_number, suppressed_boolean) {}
  getRandomVehicleInSphere(
    x_number,
    y_number,
    z_number,
    radius_number,
    modelHash_number,
    flags_number
  ) {}
  getRandomVehicleFrontBumperInSphere(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  getRandomVehicleBackBumperInSphere(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  getClosestVehicle(
    x_number,
    y_number,
    z_number,
    radius_number,
    modelHash_number,
    flags_number
  ) {}
  getTrainCarriage(train_number, trailerNumber_number) {}
  deleteMissionTrain(train_number) {}
  setMissionTrainAsNoLongerNeeded(train_number, p1_boolean) {}
  setMissionTrainCoords(train_number, x_number, y_number, z_number) {}
  isThisModelABoat(model_number) {}
  isThisModelAJetski(model_number) {}
  isThisModelAPlane(model_number) {}
  isThisModelAHeli(model_number) {}
  isThisModelACar(model_number) {}
  isThisModelATrain(model_number) {}
  isThisModelABike(model_number) {}
  isThisModelABicycle(model_number) {}
  isThisModelAQuadbike(model_number) {}
  isThisModelAnAmphibiousCar(model_number) {}
  isThisModelAnAmphibiousQuadbike(model_number) {}
  setHeliBladesFullSpeed(vehicle_number) {}
  setHeliBladesSpeed(vehicle_number, speed_number) {}
  _0x99CAD8E7AFDB60FA(vehicle_number, p1_number, p2_number) {}
  setVehicleCanBeTargetted(vehicle_number, state_boolean) {}
  _0xDBC631F109350B8C(vehicle_number, p1_boolean) {}
  setVehicleCanBeVisiblyDamaged(vehicle_number, state_boolean) {}
  setVehicleLightsCanBeVisiblyDamaged(vehicle_number, p1_boolean) {}
  _0x2311DD7159F00582(vehicle_number, p1_boolean) {}
  _0x065D03A9D6B2C6B5(p0_number, p1_number) {}
  getVehicleDirtLevel(vehicle_number) {}
  setVehicleDirtLevel(vehicle_number, dirtLevel_number) {}
  isVehicleDamaged(vehicle_number) {}
  isVehicleDoorFullyOpen(vehicle_number, doorIndex_number) {}
  setVehicleEngineOn(
    vehicle_number,
    value_boolean,
    instantly_boolean,
    noAutoTurnOn_boolean
  ) {}
  setVehicleUndriveable(vehicle_number, toggle_boolean) {}
  setVehicleProvidesCover(vehicle_number, toggle_boolean) {}
  setVehicleDoorControl(
    vehicle_number,
    doorIndex_number,
    speed_number,
    angle_number
  ) {}
  setVehicleDoorLatched(
    vehicle_number,
    doorIndex_number,
    p2_boolean,
    p3_boolean,
    p4_boolean
  ) {}
  getVehicleDoorAngleRatio(vehicle_number, door_number) {}
  getPedUsingVehicleDoor(vehicle_number, doorIndex_number) {}
  setVehicleDoorShut(
    vehicle_number,
    doorIndex_number,
    closeInstantly_boolean
  ) {}
  setVehicleDoorBroken(vehicle_number, doorIndex_number, deleteDoor_boolean) {}
  setVehicleCanBreak(vehicle_number, toggle_boolean) {}
  doesVehicleHaveRoof(vehicle_number) {}
  _0xC4B3347BD68BD609(p0_number) {}
  _0xD3301660A57C9272(p0_number) {}
  _0xB9562064627FF9DB(p0_number, p1_number) {}
  isBigVehicle(vehicle_number) {}
  getNumberOfVehicleColours(vehicle_number) {}
  setVehicleColourCombination(vehicle_number, colorCombination_number) {}
  getVehicleColourCombination(vehicle_number) {}
  setVehicleXenonLightsColor(vehicle_number, colorIndex_number) {}
  getVehicleXenonLightsColor(vehicle_number) {}
  setVehicleIsConsideredByPlayer(vehicle_number, toggle_boolean) {}
  _0xBE5C1255A1830FF5(vehicle_number, toggle_boolean) {}
  _0x9BECD4B9FEF3F8A6(vehicle_number, p1_boolean) {}
  _0x88BC673CA9E0AE99(vehicle_number, p1_boolean) {}
  _0xE851E480B814D4BA(vehicle_number, p1_boolean) {}
  getRandomVehicleModelInMemory(
    p0_boolean,
    modelHash_number,
    successIndicator_number
  ) {}
  getVehicleDoorLockStatus(vehicle_number) {}
  _0xCA4AC3EAAE46EC7B(p0_number, p1_number) {}
  isVehicleDoorDamaged(veh_number, doorID_number) {}
  setVehicleDoorCanBreak(
    vehicle_number,
    doorIndex_number,
    isBreakable_boolean
  ) {}
  isVehicleBumperBouncing(vehicle_number, frontBumper_boolean) {}
  isVehicleBumperBrokenOff(vehicle_number, front_boolean) {}
  isCopVehicleInArea3d(
    x1_number,
    x2_number,
    y1_number,
    y2_number,
    z1_number,
    z2_number
  ) {}
  isVehicleOnAllWheels(vehicle_number) {}
  _0x5873C14A52D74236(p0_number) {}
  getVehicleLayoutHash(vehicle_number) {}
  _0xA01BC64DD4BFBBAC(vehicle_number, p1_number) {}
  setRenderTrainAsDerailed(train_number, toggle_boolean) {}
  setVehicleExtraColours(
    vehicle_number,
    pearlescentColor_number,
    wheelColor_number
  ) {}
  getVehicleExtraColours(
    vehicle_number,
    pearlescentColor_number,
    wheelColor_number
  ) {}
  setVehicleInteriorColor(vehicle_number, color_number) {}
  getVehicleInteriorColor(vehicle_number, color_number) {}
  setVehicleDashboardColor(vehicle_number, color_number) {}
  getVehicleDashboardColor(vehicle_number, color_number) {}
  stopAllGarageActivity() {}
  setVehicleFixed(vehicle_number) {}
  setVehicleDeformationFixed(vehicle_number) {}
  setVehicleCanEngineOperateOnFire(vehicle_number, toggle_boolean) {}
  setVehicleCanLeakOil(vehicle_number, toggle_boolean) {}
  setVehicleCanLeakPetrol(vehicle_number, toggle_boolean) {}
  setDisableVehiclePetrolTankFires(vehicle_number, toggle_boolean) {}
  setDisableVehiclePetrolTankDamage(vehicle_number, toggle_boolean) {}
  setDisableVehicleEngineFires(vehicle_number, toggle_boolean) {}
  _0xC50CE861B55EAB8B(vehicle_number, p1_boolean) {}
  _0x6EBFB22D646FFC18(vehicle_number, p1_boolean) {}
  setDisablePretendOccupants(vehicle_number, toggle_boolean) {}
  removeVehiclesFromGeneratorsInArea(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    unk_number
  ) {}
  setVehicleSteerBias(vehicle_number, value_number) {}
  isVehicleExtraTurnedOn(vehicle_number, extraId_number) {}
  setVehicleExtra(vehicle_number, extraId_number, disable_boolean) {}
  doesExtraExist(vehicle_number, extraId_number) {}
  _0x534E36D4DB9ECC5D(p0_number, p1_number) {}
  setConvertibleRoof(vehicle_number, p1_boolean) {}
  lowerConvertibleRoof(vehicle_number, instantlyLower_boolean) {}
  raiseConvertibleRoof(vehicle_number, instantlyRaise_boolean) {}
  getConvertibleRoofState(vehicle_number) {}
  isVehicleAConvertible(vehicle_number, p1_boolean) {}
  transformVehicleToSubmarine(vehicle_number, noAnimation_boolean) {}
  transformSubmarineToVehicle(vehicle_number, noAnimation_boolean) {}
  getIsSubmarineVehicleTransformed(vehicle_number) {}
  isVehicleStoppedAtTrafficLights(vehicle_number) {}
  setVehicleDamage(
    vehicle_number,
    xOffset_number,
    yOffset_number,
    zOffset_number,
    damage_number,
    radius_number,
    p6_boolean
  ) {}
  _0x35BB21DE06784373(p0_number, p1_number) {}
  getVehicleEngineHealth(vehicle_number) {}
  setVehicleEngineHealth(vehicle_number, health_number) {}
  _0x2A86A0475B6A1434(p0_number, p1_number) {}
  getVehiclePetrolTankHealth(vehicle_number) {}
  setVehiclePetrolTankHealth(vehicle_number, health_number) {}
  isVehicleStuckTimerUp(vehicle_number, p1_number, p2_number) {}
  resetVehicleStuckTimer(vehicle_number, nullAttributes_number) {}
  isVehicleDriveable(vehicle_number, isOnFireCheck_boolean) {}
  setVehicleHasBeenOwnedByPlayer(vehicle_number, owned_boolean) {}
  setVehicleNeedsToBeHotwired(vehicle_number, toggle_boolean) {}
  _0x9F3F689B814F2599(vehicle_number, p1_boolean) {}
  _0x4E74E62E0A97E901(vehicle_number, p1_boolean) {}
  startVehicleHorn(
    vehicle_number,
    duration_number,
    mode_number,
    forever_boolean
  ) {}
  setVehicleSilent(vehicle_number, toggle_boolean) {}
  setVehicleHasStrongAxles(vehicle_number, toggle_boolean) {}
  getDisplayNameFromVehicleModel(modelHash_number) {}
  getVehicleDeformationAtPos(
    vehicle_number,
    offsetX_number,
    offsetY_number,
    offsetZ_number
  ) {}
  setVehicleLivery(vehicle_number, livery_number) {}
  getVehicleLivery(trailers2_number) {}
  getVehicleLiveryCount(vehicle_number) {}
  setVehicleRoofLivery(vehicle_number, livery_number) {}
  getVehicleRoofLivery(vehicle_number) {}
  getVehicleRoofLiveryCount(vehicle_number) {}
  isVehicleWindowIntact(vehicle_number, windowIndex_number) {}
  areAllVehicleWindowsIntact(vehicle_number) {}
  areAnyVehicleSeatsFree(vehicle_number) {}
  resetVehicleWheels(vehicle_number, toggle_boolean) {}
  isHeliPartBroken(vehicle_number, p1_boolean, p2_boolean, p3_boolean) {}
  getHeliMainRotorHealth(vehicle_number) {}
  getHeliTailRotorHealth(vehicle_number) {}
  getHeliTailBoomHealth(vehicle_number) {}
  _0x4056EA1105F5ABD7(p0_number, p1_number) {}
  setHeliTailRotorHealth(p0_number, p1_number) {}
  setHeliTailExplodeThrowDashboard(vehicle_number, p1_boolean) {}
  setVehicleNameDebug(vehicle_number, name_string) {}
  setVehicleExplodesOnHighExplosionDamage(vehicle_number, toggle_boolean) {}
  _0xD565F438137F0E10(p0_number, p1_number) {}
  _0x3441CAD2F2231923(vehicle_number, p1_boolean) {}
  setVehicleDisableTowing(vehicle_number, toggle_boolean) {}
  doesVehicleHaveLandingGear(vehicle_number) {}
  controlLandingGear(vehicle_number, state_number) {}
  getLandingGearState(vehicle_number) {}
  isAnyVehicleNearPoint(x_number, y_number, z_number, radius_number) {}
  requestVehicleHighDetailModel(vehicle_number) {}
  removeVehicleHighDetailModel(vehicle_number) {}
  isVehicleHighDetail(vehicle_number) {}
  requestVehicleAsset(vehicleHash_number, vehicleAsset_number) {}
  hasVehicleAssetLoaded(vehicleAsset_number) {}
  removeVehicleAsset(vehicleAsset_number) {}
  setVehicleTowTruckArmPosition(vehicle_number, position_number) {}
  attachVehicleToTowTruck(
    towTruck_number,
    vehicle_number,
    rear_boolean,
    hookOffsetX_number,
    hookOffsetY_number,
    hookOffsetZ_number
  ) {}
  detachVehicleFromTowTruck(towTruck_number, vehicle_number) {}
  detachVehicleFromAnyTowTruck(vehicle_number) {}
  isVehicleAttachedToTowTruck(towTruck_number, vehicle_number) {}
  getEntityAttachedToTowTruck(towTruck_number) {}
  setVehicleAutomaticallyAttaches(vehicle_number, p1_boolean, p2_number) {}
  setVehicleBulldozerArmPosition(vehicle_number, position_number, p2_boolean) {}
  setVehicleTankTurretPosition(vehicle_number, position_number, p2_boolean) {}
  _0x0581730AB9380412(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  _0x737E398138550FFF(p0_number, p1_number) {}
  _0x1093408B4B9D1146(p0_number, p1_number) {}
  disableVehicleTurretMovementThisFrame(p0_number) {}
  setVehicleFlightNozzlePosition(vehicle_number, angleRatio_number) {}
  setVehicleFlightNozzlePositionImmediate(vehicle_number, angle_number) {}
  getVehicleFlightNozzlePosition(plane_number) {}
  setDisableVehicleFlightNozzlePosition(p0_number, p1_number) {}
  _0xA4822F1CF23F4810(
    outVec_vector3Ptr,
    p1_number,
    outVec1_vector3Ptr,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number
  ) {}
  setVehicleBurnout(vehicle_number, toggle_boolean) {}
  isVehicleInBurnout(vehicle_number) {}
  setVehicleReduceGrip(vehicle_number, toggle_boolean) {}
  _0x6DEE944E1EE90CFB(p0_number, p1_number) {}
  setVehicleIndicatorLights(
    vehicle_number,
    turnSignal_number,
    toggle_boolean
  ) {}
  setVehicleBrakeLights(vehicle_number, toggle_boolean) {}
  setVehicleHandbrake(vehicle_number, toggle_boolean) {}
  setVehicleBrake(vehicle_number, toggle_boolean) {}
  _0x48ADC8A773564670() {}
  _0x91D6DD290888CBAB() {}
  _0x51DB102F4A3BA5E0(toggle_boolean) {}
  _0xA4A9A4C40E615885(p0_number) {}
  getVehicleTrailerVehicle(vehicle_number, trailer_number) {}
  _0xCAC66558B944DA67(vehicle_number, toggle_boolean) {}
  setVehicleRudderBroken(vehicle_number, toggle_boolean) {}
  setConvertibleRoofLatchState(vehicle_number, state_boolean) {}
  getVehicleEstimatedMaxSpeed(vehicle_number) {}
  getVehicleMaxBraking(vehicle_number) {}
  getVehicleMaxTraction(vehicle_number) {}
  getVehicleAcceleration(vehicle_number) {}
  getVehicleModelEstimatedMaxSpeed(modelHash_number) {}
  getVehicleModelMaxBraking(modelHash_number) {}
  getVehicleModelMaxBrakingMaxMods(modelHash_number) {}
  getVehicleModelMaxTraction(modelHash_number) {}
  getVehicleModelAcceleration(modelHash_number) {}
  getVehicleModelEstimatedAgility(modelHash_number) {}
  getVehicleModelMaxKnots(modelHash_number) {}
  getVehicleModelMoveResistance(modelHash_number) {}
  getVehicleClassEstimatedMaxSpeed(vehicleClass_number) {}
  getVehicleClassMaxTraction(vehicleClass_number) {}
  getVehicleClassMaxAgility(vehicleClass_number) {}
  getVehicleClassMaxAcceleration(vehicleClass_number) {}
  getVehicleClassMaxBraking(vehicleClass_number) {}
  addSpeedZoneForCoord(
    x_number,
    y_number,
    z_number,
    radius_number,
    speed_number,
    p5_boolean
  ) {}
  removeSpeedZone(speedzone_number) {}
  openBombBayDoors(vehicle_number) {}
  closeBombBayDoors(vehicle_number) {}
  areBombBayDoorsOpen(aircraft_number) {}
  isVehicleSearchlightOn(vehicle_number) {}
  setVehicleSearchlight(heli_number, toggle_boolean, canBeUsedByAI_boolean) {}
  _0x639431E895B9AA57(
    ped_number,
    vehicle_number,
    p2_boolean,
    p3_boolean,
    p4_boolean
  ) {}
  getEntryPositionOfDoor(vehicle_number, doorIndex_number) {}
  canShuffleSeat(vehicle_number, p1_number) {}
  getNumModKits(vehicle_number) {}
  setVehicleModKit(vehicle_number, modKit_number) {}
  getVehicleModKit(vehicle_number) {}
  getVehicleModKitType(vehicle_number) {}
  getVehicleWheelType(vehicle_number) {}
  setVehicleWheelType(vehicle_number, WheelType_number) {}
  getNumModColors(p0_number, p1_boolean) {}
  setVehicleModColor1(
    vehicle_number,
    paintType_number,
    color_number,
    p3_number
  ) {}
  setVehicleModColor2(vehicle_number, paintType_number, color_number) {}
  getVehicleModColor1(
    vehicle_number,
    paintType_number,
    color_number,
    p3_number
  ) {}
  getVehicleModColor2(vehicle_number, paintType_number, color_number) {}
  getVehicleModColor1Name(vehicle_number, p1_boolean) {}
  getVehicleModColor2Name(vehicle_number) {}
  isVehicleModLoadDone(vehicle_number) {}
  setVehicleMod(
    vehicle_number,
    modType_number,
    modIndex_number,
    customTires_boolean
  ) {}
  getVehicleMod(vehicle_number, modType_number) {}
  getVehicleModVariation(vehicle_number, modType_number) {}
  getNumVehicleMods(vehicle_number, modType_number) {}
  removeVehicleMod(vehicle_number, modType_number) {}
  toggleVehicleMod(vehicle_number, modType_number, toggle_boolean) {}
  isToggleModOn(vehicle_number, modType_number) {}
  getModTextLabel(vehicle_number, modType_number, modValue_number) {}
  getModSlotName(vehicle_number, modType_number) {}
  getLiveryName(vehicle_number, liveryIndex_number) {}
  getVehicleModModifierValue(vehicle_number, modType_number, modIndex_number) {}
  getVehicleModIdentifierHash(
    vehicle_number,
    modType_number,
    modIndex_number
  ) {}
  preloadVehicleMod(p0_number, modType_number, p2_number) {}
  hasPreloadModsFinished(p0_number) {}
  releasePreloadMods(vehicle_number) {}
  setVehicleTyreSmokeColor(vehicle_number, r_number, g_number, b_number) {}
  getVehicleTyreSmokeColor(vehicle_number, r_number, g_number, b_number) {}
  setVehicleWindowTint(vehicle_number, tint_number) {}
  getVehicleWindowTint(vehicle_number) {}
  getNumVehicleWindowTints() {}
  getVehicleColor(vehicle_number, r_number, g_number, b_number) {}
  _0xEEBFC7A7EFDC35B4(vehicle_number) {}
  getVehicleCauseOfDestruction(vehicle_number) {}
  _0x5EE5632F47AE9695(vehicle_number, health_number) {}
  getIsLeftVehicleHeadlightDamaged(vehicle_number) {}
  getIsRightVehicleHeadlightDamaged(vehicle_number) {}
  isVehicleEngineOnFire(vehicle_number) {}
  modifyVehicleTopSpeed(vehicle_number, value_number) {}
  setVehicleMaxSpeed(vehicle_number, speed_number) {}
  _0x1CF38D529D7441D9(vehicle_number, toggle_boolean) {}
  _0x1F9FB66F3A3842D2(vehicle_number, p1_boolean) {}
  _0x59C3757B3B7408E8(p0_number, p1_number, p2_number) {}
  addVehicleCombatAngledAvoidanceArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  removeVehicleCombatAvoidanceArea(p0_number) {}
  isAnyPassengerRappelingFromVehicle(vehicle_number) {}
  setVehicleCheatPowerIncrease(vehicle_number, value_number) {}
  _0x0AD9E8F87FF7C16F(p0_number, p1_boolean) {}
  setVehicleIsWanted(vehicle_number, state_boolean) {}
  _0xF488C566413B4232(p0_number, p1_number) {}
  _0xC1F981A6F74F0C23(p0_number, p1_boolean) {}
  _0x0F3B4D4E43177236(p0_number, p1_boolean) {}
  getBoatBoomPositionRatio(vehicle_number) {}
  disablePlaneAileron(vehicle_number, p1_boolean, p2_boolean) {}
  getIsVehicleEngineRunning(vehicle_number) {}
  setVehicleUseAlternateHandling(vehicle_number, toggle_boolean) {}
  setBikeOnStand(vehicle_number, x_number, y_number) {}
  _0xAB04325045427AAE(vehicle_number, p1_boolean) {}
  _0xCFD778E7904C255E(vehicle_number) {}
  setLastDrivenVehicle(vehicle_number) {}
  getLastDrivenVehicle() {}
  clearLastDrivenVehicle() {}
  setVehicleHasBeenDrivenFlag(vehicle_number, toggle_boolean) {}
  setTaskVehicleGotoPlaneMinHeightAboveTerrain(plane_number, height_number) {}
  setVehicleLodMultiplier(vehicle_number, multiplier_number) {}
  setVehicleCanSaveInGarage(vehicle_number, toggle_boolean) {}
  getVehicleNumberOfBrokenOffBones(vehicle_number) {}
  getVehicleNumberOfBrokenBones(vehicle_number) {}
  _0x4D9D109F63FEE1D4(p0_number, p1_boolean) {}
  _0x279D50DE5652D935(vehicle_number, toggle_boolean) {}
  copyVehicleDamages(sourceVehicle_number, targetVehicle_number) {}
  _0xF25E02CB9C5818F8() {}
  setLightsCutoffDistanceTweak(distance_number) {}
  setVehicleShootAtTarget(
    driver_number,
    entity_number,
    xTarget_number,
    yTarget_number,
    zTarget_number
  ) {}
  getVehicleLockOnTarget(vehicle_number, entity_number) {}
  setForceHdVehicle(vehicle_number, toggle_boolean) {}
  _0x182F266C2D9E2BEB(vehicle_number, p1_number) {}
  getVehiclePlateType(vehicle_number) {}
  trackVehicleVisibility(vehicle_number) {}
  isVehicleVisible(vehicle_number) {}
  setVehicleGravity(vehicle_number, toggle_boolean) {}
  _0xE6C0C80B8C867537(p0_boolean) {}
  _0xF051D9BFB6BA39C0(p0_number) {}
  _0x36492C2F0D134C56(vehicle_number) {}
  _0x48C633E94A8142A7(vehicle_number) {}
  setVehicleInactiveDuringPlayback(vehicle_number, toggle_boolean) {}
  setVehicleActiveDuringPlayback(p0_number, p1_boolean) {}
  isVehicleSprayable(vehicle_number) {}
  setVehicleEngineCanDegrade(vehicle_number, toggle_boolean) {}
  _0xF0E4BA16D1DB546C(vehicle_number, p1_number, p2_number) {}
  _0xF87D9F2301F7D206(vehicle_number) {}
  isPlaneLandingGearIntact(plane_number) {}
  arePlanePropellersIntact(plane_number) {}
  _0x4C815EB175086F84(p0_number, p1_number) {}
  setVehicleCanDeformWheels(vehicle_number, toggle_boolean) {}
  isVehicleStolen(vehicle_number) {}
  setVehicleIsStolen(vehicle_number, isStolen_boolean) {}
  setPlaneTurbulenceMultiplier(vehicle_number, value_number) {}
  arePlaneWingsIntact(plane_number) {}
  _0xB264C4D2F2B0A78B(vehicle_number) {}
  detachVehicleFromCargobob(vehicle_number, cargobob_number) {}
  detachVehicleFromAnyCargobob(vehicle_number) {}
  detachEntityFromCargobob(cargobob_number, entity_number) {}
  isVehicleAttachedToCargobob(cargobob_number, vehicleAttached_number) {}
  getVehicleAttachedToCargobob(cargobob_number) {}
  getEntityAttachedToCargobob(p0_number) {}
  attachVehicleToCargobob(
    vehicle_number,
    cargobob_number,
    p2_number,
    x_number,
    y_number,
    z_number
  ) {}
  attachEntityToCargobob(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number
  ) {}
  _0x571FEB383F629926(cargobob_number, p1_boolean) {}
  _0x1F34B0626C594380(p0_number, p1_number) {}
  _0x2C1D8B3B19E517CC(p0_number, p1_number) {}
  getCargobobHookPosition(cargobob_number) {}
  doesCargobobHavePickUpRope(cargobob_number) {}
  createPickUpRopeForCargobob(cargobob_number, state_number) {}
  removePickUpRopeForCargobob(cargobob_number) {}
  setCargobobHookPosition(p0_number, p1_number, p2_number, state_number) {}
  _0xC0ED6438E6D39BA8(p0_number, p1_number, p2_number) {}
  setCargobobPickupRopeDampingMultiplier(p0_number, p1_number) {}
  setCargobobPickupRopeType(p0_number, p1_number) {}
  doesCargobobHavePickupMagnet(cargobob_number) {}
  setCargobobPickupMagnetActive(cargobob_number, isActive_boolean) {}
  setCargobobPickupMagnetStrength(cargobob_number, strength_number) {}
  setCargobobPickupMagnetEffectRadius(cargobob_number, p1_number) {}
  setCargobobPickupMagnetReducedFalloff(cargobob_number, p1_number) {}
  setCargobobPickupMagnetPullRopeLength(cargobob_number, p1_number) {}
  setCargobobPickupMagnetPullStrength(cargobob_number, p1_number) {}
  setCargobobPickupMagnetFalloff(vehicle_number, p1_number) {}
  setCargobobPickupMagnetReducedStrength(vehicle_number, cargobob_number) {}
  _0x9BDDC73CC6A115D4(vehicle_number, p1_boolean, p2_boolean) {}
  _0x56EB5E94318D3FB6(vehicle_number, p1_boolean) {}
  doesVehicleHaveWeapons(vehicle_number) {}
  _0x2C4A1590ABF43E8B(vehicle_number, p1_boolean) {}
  disableVehicleWeapon(
    disabled_boolean,
    weaponHash_number,
    vehicle_number,
    owner_number
  ) {}
  isVehicleWeaponDisabled(p0_number, p1_number, p2_number) {}
  _0xE05DD0E9707003A3(p0_number, p1_boolean) {}
  setVehicleCloseDoorDeferedAction(p0_number, p1_boolean) {}
  getVehicleClass(vehicle_number) {}
  getVehicleClassFromName(modelHash_number) {}
  setPlayersLastVehicle(vehicle_number) {}
  setVehicleCanBeUsedByFleeingPeds(vehicle_number, toggle_boolean) {}
  _0xE5810AC70602F2F5(vehicle_number, p1_number) {}
  setVehicleDropsMoneyWhenBlownUp(vehicle_number, toggle_boolean) {}
  setVehicleJetEngineOn(vehicle_number, toggle_boolean) {}
  _0x6A973569BA094650(p0_number, p1_number) {}
  setVehicleHandlingHashForAi(vehicle_number, hash_number) {}
  setVehicleExtendedRemovalRange(vehicle_number, range_number) {}
  setVehicleSteeringBiasScalar(p0_number, p1_number) {}
  setHelicopterRollPitchYawMult(helicopter_number, multiplier_number) {}
  setVehicleFrictionOverride(vehicle_number, friction_number) {}
  setVehicleWheelsCanBreakOffWhenBlowUp(vehicle_number, toggle_boolean) {}
  _0xF78F94D60248C737(vehicle_number, p1_boolean) {}
  setVehicleCeilingHeight(vehicle_number, height_number) {}
  _0x5E569EC46EC21CAE(vehicle_number, toggle_boolean) {}
  clearVehicleRouteHistory(vehicle_number) {}
  doesVehicleExistWithDecorator(decorator_string) {}
  setVehicleExclusiveDriver(vehicle_number, toggle_boolean) {}
  setVehicleExclusiveDriver2(vehicle_number, ped_number, index_number) {}
  _0xB09D25E77C33EB3F(p0_number, p1_number, p2_number) {}
  disablePlanePropeller(vehicle_number, p1_number) {}
  setVehicleForceAfterburner(vehicle_number, toggle_boolean) {}
  setDisableVehicleWindowCollisions(p0_number, p1_number) {}
  _0xB68CFAF83A02768D(p0_number, p1_number) {}
  _0x0205F5365292D2EB(p0_number, p1_number) {}
  _0xCF9159024555488C(p0_number) {}
  setDistantCarsEnabled(toggle_boolean) {}
  setVehicleNeonLightsColour(vehicle_number, r_number, g_number, b_number) {}
  _0xB93B2867F7B479D1(p0_number, p1_number) {}
  getVehicleNeonLightsColour(vehicle_number, r_number, g_number, b_number) {}
  setVehicleNeonLightEnabled(vehicle_number, index_number, toggle_boolean) {}
  isVehicleNeonLightEnabled(vehicle_number, index_number) {}
  _0x35E0654F4BAD7971(p0_boolean) {}
  disableVehicleNeonLights(vehicle_number, toggle_boolean) {}
  _0xB088E9A47AE6EDD5(vehicle_number, p1_boolean) {}
  requestVehicleDashboardScaleformMovie(vehicle_number) {}
  getVehicleBodyHealth(vehicle_number) {}
  setVehicleBodyHealth(vehicle_number, value_number) {}
  getVehicleSuspensionBounds(
    vehicle_number,
    out1_vector3Ptr,
    out2_vector3Ptr
  ) {}
  getVehicleSuspensionHeight(vehicle_number) {}
  setCarHighSpeedBumpSeverityMultiplier(multiplier_number) {}
  getNumberOfVehicleDoors(vehicle_number) {}
  setHydraulicRaised(p0_number, p1_number) {}
  _0xA7DCDF4DED40A8F4(vehicle_number, p1_boolean) {}
  getVehicleBodyHealth2(
    vehicle_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number
  ) {}
  _0xD4C4642CB7F50B5D(vehicle_number) {}
  _0xC361AA040D6637A8(vehicle_number, p1_boolean) {}
  setVehicleKersAllowed(vehicle_number, toggle_boolean) {}
  getVehicleHasKers(vehicle_number) {}
  _0xE16142B94664DEFD(vehicle_number, p1_boolean) {}
  _0x26D99D5A82FD18E8(p0_number) {}
  setHydraulicState(p0_number, p1_number, p2_number) {}
  setCamberedWheelsDisabled(p0_number, p1_number) {}
  setHydraulicWheelState(p0_number, p1_number) {}
  setHydraulicWheelStateTransition(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number
  ) {}
  _0x5BA68A0840D546AC(p0_number, p1_number) {}
  _0x4419966C9936071A(vehicle_number) {}
  _0x870B8B7A766615C8(p0_number, p1_number, p2_number) {}
  _0x8533CAFDE1F0F336(p0_number) {}
  setVehicleDamageModifier(vehicle_number, p1_number) {}
  setVehicleUnkDamageMultiplier(vehicle_number, multiplier_number) {}
  _0xD4196117AF7BB974(p0_number, p1_number) {}
  _0xBB2333BB87DDD87F(p0_number, p1_number) {}
  _0x73561D4425A021A2(p0_number, p1_number) {}
  _0x5B91B229243351A8(p0_number, p1_number) {}
  _0x7BBE7FF626A591FE(p0_number) {}
  _0x65B080555EA48149(p0_number) {}
  _0x428AD3E26C8D9EB0(
    vehicle_number,
    x_number,
    y_number,
    z_number,
    p4_number
  ) {}
  _0xE2F53F172B45EDE1() {}
  _0xBA91D045575699AD(vehicle_number) {}
  _0x80E3357FDEF45C21(p0_number, p1_number) {}
  setVehicleRampLaunchModifier(p0_number, p1_number) {}
  getIsDoorValid(vehicle_number, doorIndex_number) {}
  setVehicleRocketBoostRefillTime(vehicle_number, seconds_number) {}
  getHasRocketBoost(vehicle_number) {}
  isVehicleRocketBoostActive(vehicle_number) {}
  setVehicleRocketBoostActive(vehicle_number, active_boolean) {}
  getHasRetractableWheels(vehicle_number) {}
  getIsWheelsLoweredStateActive(vehicle_number) {}
  raiseRetractableWheels(vehicle_number) {}
  lowerRetractableWheels(vehicle_number) {}
  getCanVehicleJump(vehicle_number) {}
  setUseHigherVehicleJumpForce(vehicle_number, toggle_boolean) {}
  _0xB2E0C0D6922D31F2(vehicle_number, toggle_boolean) {}
  setVehicleWeaponCapacity(
    vehicle_number,
    weaponIndex_number,
    capacity_number
  ) {}
  getVehicleWeaponCapacity(vehicle_number, weaponIndex_number) {}
  getVehicleHasParachute(vehicle_number) {}
  getVehicleCanActivateParachute(vehicle_number) {}
  setVehicleParachuteActive(vehicle_number, active_boolean) {}
  _0x3DE51E9C80B116CF(p0_number) {}
  setVehicleReceivesRampDamage(vehicle_number, toggle_boolean) {}
  setVehicleRampSidewaysLaunchMotion(p0_number, p1_number) {}
  setVehicleRampUpwardsLaunchMotion(p0_number, p1_number) {}
  _0x9D30687C57BAA0BB(p0_number) {}
  setVehicleWeaponsDisabled(p0_number, p1_number) {}
  _0x41290B40FA63E6DA(p0_number) {}
  setVehicleParachuteModel(vehicle_number, modelHash_number) {}
  setVehicleParachuteTextureVariatiion(
    vehicle_number,
    textureVariation_number
  ) {}
  _0x0419B167EE128F33(p0_number, p1_number) {}
  _0xF3B0E0AED097A3F5(p0_number, p1_number) {}
  _0xD3E51C0AB8C26EEE(p0_number, p1_number) {}
  getAllVehicles(vehsStruct_number) {}
  _0x72BECCF4B829522E(p0_number, p1_number) {}
  _0x66E3AAFACE2D1EB8(p0_number, p1_number, p2_number) {}
  _0x1312DDD8385AEE4E(p0_number, p1_number) {}
  _0xEDBC8405B3895CC9(p0_number, p1_number) {}
  _0x26E13D440E7F6064(vehicle_number, value_number) {}
  _0x2FA2494B47FDD009(p0_number, p1_number) {}
  setVehicleRocketBoostPercentage(vehicle_number, percentage_number) {}
  _0x544996C0081ABDEB(p0_number, p1_number) {}
  _0x78CEEE41F49F421F(p0_number, p1_number) {}
  _0xAF60E6A2936F982A(p0_number, p1_number) {}
  _0x430A7631A84C9BE7(p0_number) {}
  _0x75627043C6AA90AD(p0_number) {}
  _0x8235F1BEAD557629(p0_number, p1_number) {}
  _0x9640E30A7F395E4B(p0_number, p1_number, p2_number, p3_number, p4_number) {}
  _0x0BBB9A7A8FFE931B(p0_number, p1_number, p2_number) {}
  _0x94A68DA412C4007D(p0_number, p1_number) {}
  setVehicleBombCount(vehicle_number, bombCount_number) {}
  getVehicleBombCount(vehicle_number) {}
  setVehicleCountermeasureCount(vehicle_number, counterMeasureCount_number) {}
  getVehicleCountermeasureCount(vehicle_number) {}
  _0x0A3F820A9A9A9AC5(p0_number, p1_number, p2_number, p3_number) {}
  _0x51F30DB60626A20E(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number
  ) {}
  _0x97841634EF7DF1D6(p0_number, p1_number) {}
  setVehicleHoverTransformRatio(vehicle_number, ratio_number) {}
  setVehicleHoverTransformPercentage(vehicle_number, percentage_number) {}
  setVehicleHoverTransformEnabled(p0_number, p1_number) {}
  setVehicleHoverTransformActive(vehicle_number, toggle_boolean) {}
  _0x3A9128352EAC9E85(p0_number) {}
  _0x8DC9675797123522(p0_number) {}
  _0xB251E0B33E58B424(p0_number, p1_number, p2_number) {}
  _0xAEF12960FA943792(p0_number) {}
  _0xAA653AE61924B0A0(p0_number, p1_number) {}
  _0xC60060EB0D8AC7B1(p0_number, p1_number, p2_number) {}
  setSpecialflightWingRatio(vehicle_number, ratio_number) {}
  _0xE615BB7A7752C76A(p0_number, p1_number) {}
  _0x887FA38787DE8C72(p0_number) {}
  setUnkFloat0x104ForSubmarineVehicleTask(vehicle_number, value_number) {}
  setUnkBool0x102ForSubmarineVehicleTask(vehicle_number, value_boolean) {}
  _0x36DE109527A2C0C4(toggle_boolean) {}
  _0x82E0AC411E41A5B4(toggle_boolean) {}
  _0x99A05839C46CE316(toggle_boolean) {}
  getIsVehicleShuntBoostActive(vehicle_number) {}
  _0xE8718FAF591FD224(vehicle_number) {}
  getLastRammedVehicle(vehicle_number) {}
  setDisableVehicleUnk(toggle_boolean) {}
  setVehicleNitroEnabled(vehicle_number, toggle_boolean) {}
  setVehicleWheelsDealDamage(vehicle_number, toggle_boolean) {}
  setDisableVehicleUnk2(toggle_boolean) {}
  _0x5BBCF35BF6E456F7(toggle_boolean) {}
  getDoesVehicleHaveTombstone(vehicle_number) {}
  hideVehicleTombstone(vehicle_number, toggle_boolean) {}
  getIsVehicleEmpDisabled(vehicle_number) {}
  _0x8F0D5BA1C2CC91D7(toggle_boolean) {}
  getWaterHeight(x_number, y_number, z_number, height_number) {}
  getWaterHeightNoWaves(x_number, y_number, z_number, height_number) {}
  testProbeAgainstWater(
    x1_number,
    y1_number,
    z1_number,
    x2_number,
    y2_number,
    z2_number,
    result_vector3Ptr
  ) {}
  testProbeAgainstAllWater(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number
  ) {}
  testVerticalProbeAgainstAllWater(
    x_number,
    y_number,
    z_number,
    p3_number,
    height_number
  ) {}
  modifyWater(x_number, y_number, radius_number, height_number) {}
  addCurrentRise(x_number, y_number, z_number, radius_number, unk_number) {}
  removeCurrentRise(p0_number) {}
  setDeepOceanScaler(intensity_number) {}
  getDeepOceanScaler() {}
  _0x547237AA71AB44DE(p0_number) {}
  resetDeepOceanScaler() {}
  enableLaserSightRendering(toggle_boolean) {}
  getWeaponComponentTypeModel(componentHash_number) {}
  getWeapontypeModel(weaponHash_number) {}
  getWeapontypeSlot(weaponHash_number) {}
  getWeapontypeGroup(weaponHash_number) {}
  getWeaponComponentVariantExtraComponentCount(componentHash_number) {}
  getWeaponComponentVariantExtraComponentModel(
    componentHash_number,
    extraComponentIndex_number
  ) {}
  setCurrentPedWeapon(ped_number, weaponHash_number, equipNow_boolean) {}
  getCurrentPedWeapon(ped_number, weaponHash_number, p2_boolean) {}
  getCurrentPedWeaponEntityIndex(ped_number) {}
  getBestPedWeapon(ped_number, p1_boolean) {}
  setCurrentPedVehicleWeapon(ped_number, weaponHash_number) {}
  getCurrentPedVehicleWeapon(ped_number, weaponHash_number) {}
  _0x50276EF8172F5F12(ped_number) {}
  isPedArmed(ped_number, p1_number) {}
  isWeaponValid(weaponHash_number) {}
  hasPedGotWeapon(ped_number, weaponHash_number, p2_boolean) {}
  isPedWeaponReadyToShoot(ped_number) {}
  getPedWeapontypeInSlot(ped_number, weaponSlot_number) {}
  getAmmoInPedWeapon(ped_number, weaponhash_number) {}
  addAmmoToPed(ped_number, weaponHash_number, ammo_number) {}
  setPedAmmo(ped_number, weaponHash_number, ammo_number, p3_boolean) {}
  setPedInfiniteAmmo(ped_number, toggle_boolean, weaponHash_number) {}
  setPedInfiniteAmmoClip(ped_number, toggle_boolean) {}
  giveWeaponToPed(
    ped_number,
    weaponHash_number,
    ammoCount_number,
    isHidden_boolean,
    equipNow_boolean
  ) {}
  giveDelayedWeaponToPed(
    ped_number,
    weaponHash_number,
    ammoCount_number,
    equipNow_boolean
  ) {}
  removeAllPedWeapons(ped_number, p1_boolean) {}
  removeWeaponFromPed(ped_number, weaponHash_number) {}
  hidePedWeaponForScriptedCutscene(ped_number, toggle_boolean) {}
  setPedCurrentWeaponVisible(
    ped_number,
    visible_boolean,
    deselectWeapon_boolean,
    p3_boolean,
    p4_boolean
  ) {}
  setPedDropsWeaponsWhenDead(ped_number, toggle_boolean) {}
  hasPedBeenDamagedByWeapon(ped_number, weaponHash_number, weaponType_number) {}
  clearPedLastWeaponDamage(ped_number) {}
  hasEntityBeenDamagedByWeapon(
    entity_number,
    weaponHash_number,
    weaponType_number
  ) {}
  clearEntityLastWeaponDamage(entity_number) {}
  setPedDropsWeapon(ped_number) {}
  setPedDropsInventoryWeapon(
    ped_number,
    weaponHash_number,
    xOffset_number,
    yOffset_number,
    zOffset_number,
    ammoCount_number
  ) {}
  getMaxAmmoInClip(ped_number, weaponHash_number, p2_boolean) {}
  getAmmoInClip(ped_number, weaponHash_number, ammo_number) {}
  setAmmoInClip(ped_number, weaponHash_number, ammo_number) {}
  getMaxAmmo(ped_number, weaponHash_number, ammo_number) {}
  getMaxAmmo2(ped_number, weaponHash_number, ammo_number) {}
  addPedAmmo(ped_number, weaponHash_number, ammo_number) {}
  setPedAmmoByType(ped_number, ammoType_number, ammo_number) {}
  getPedAmmoByType(ped_number, ammoType_number) {}
  setPedAmmoToDrop(ped_number, p1_number) {}
  _0xE620FD3512A04F18(p0_number) {}
  getPedAmmoTypeFromWeapon(ped_number, weaponHash_number) {}
  getPedAmmoTypeFromWeapon2(ped_number, weaponHash_number) {}
  getPedLastWeaponImpactCoord(ped_number, coords_vector3Ptr) {}
  setPedGadget(ped_number, gadgetHash_number, p2_boolean) {}
  getIsPedGadgetEquipped(ped_number, gadgetHash_number) {}
  getSelectedPedWeapon(ped_number) {}
  explodeProjectiles(ped_number, weaponHash_number, p2_boolean) {}
  removeAllProjectilesOfType(weaponHash_number, p1_boolean) {}
  getLockonDistanceOfCurrentPedWeapon(ped_number) {}
  getMaxRangeOfCurrentPedWeapon(ped_number) {}
  hasVehicleGotProjectileAttached(
    driver_number,
    vehicle_number,
    weaponHash_number,
    p3_number
  ) {}
  giveWeaponComponentToPed(
    ped_number,
    weaponHash_number,
    componentHash_number
  ) {}
  removeWeaponComponentFromPed(
    ped_number,
    weaponHash_number,
    componentHash_number
  ) {}
  hasPedGotWeaponComponent(
    ped_number,
    weaponHash_number,
    componentHash_number
  ) {}
  isPedWeaponComponentActive(
    ped_number,
    weaponHash_number,
    componentHash_number
  ) {}
  pedSkipNextReloading(ped_number) {}
  makePedReload(ped_number) {}
  requestWeaponAsset(weaponHash_number, p1_number, p2_number) {}
  hasWeaponAssetLoaded(weaponHash_number) {}
  removeWeaponAsset(weaponHash_number) {}
  createWeaponObject(
    weaponHash_number,
    ammoCount_number,
    x_number,
    y_number,
    z_number,
    showWorldModel_boolean,
    heading_number,
    p7_number,
    p8_number,
    p9_number
  ) {}
  giveWeaponComponentToWeaponObject(weaponObject_number, addonHash_number) {}
  removeWeaponComponentFromWeaponObject(p0_number, p1_number) {}
  hasWeaponGotWeaponComponent(weapon_number, addonHash_number) {}
  giveWeaponObjectToPed(weaponObject_number, ped_number) {}
  doesWeaponTakeWeaponComponent(weaponHash_number, componentHash_number) {}
  getWeaponObjectFromPed(ped_number, p1_boolean) {}
  giveLoadoutToPed(ped_number, loadoutHash_number) {}
  setPedWeaponTintIndex(ped_number, weaponHash_number, tintIndex_number) {}
  getPedWeaponTintIndex(ped_number, weaponHash_number) {}
  setWeaponObjectTintIndex(weapon_number, tintIndex_number) {}
  getWeaponObjectTintIndex(weapon_number) {}
  getWeaponTintCount(weaponHash_number) {}
  setPedWeaponLiveryColor(
    ped_number,
    weaponHash_number,
    camoComponentHash_number,
    colorIndex_number
  ) {}
  getPedWeaponLiveryColor(
    ped_number,
    weaponHash_number,
    camoComponentHash_number
  ) {}
  setWeaponObjectLiveryColor(
    weaponObject_number,
    camoComponentHash_number,
    colorIndex_number
  ) {}
  getWeaponObjectLiveryColor(weaponObject_number, camoComponentHash_number) {}
  _0xA2C9AC24B4061285(ped_number, weaponHash_number) {}
  _0x977CA98939E82E4B(weaponObject_number, p1_number) {}
  getWeaponHudStats(weaponHash_number, outData_memoryBuffer) {}
  getWeaponComponentHudStats(componentHash_number, outData_memoryBuffer) {}
  getWeaponDamage(weaponHash_number, componentHash_number) {}
  getWeaponClipSize(weaponHash_number) {}
  getWeaponTimeBetweenShots(weaponHash_number) {}
  setPedChanceOfFiringBlanks(ped_number, xBias_number, yBias_number) {}
  setPedShootOrdnanceWeapon(ped_number, p1_number) {}
  requestWeaponHighDetailModel(weaponObject_number) {}
  setWeaponDamageModifier(weaponHash_number, damageAmount_number) {}
  isPedCurrentWeaponSilenced(ped_number) {}
  isFlashLightOn(ped_number) {}
  setFlashLightFadeDistance(distance_number) {}
  setWeaponAnimationOverride(ped_number, animStyle_number) {}
  getWeaponDamageType(weaponHash_number) {}
  _0xE4DCEC7FD5B739A5(ped_number) {}
  canUseWeaponOnParachute(weaponHash_number) {}
  createAirDefenseSphere(
    p0_number,
    p1_number,
    p2_number,
    radius_number,
    p4_number,
    p5_number,
    p6_number,
    weaponHash_number
  ) {}
  createAirDefenseArea(
    p0_number,
    p1_number,
    p2_number,
    p3_number,
    p4_number,
    p5_number,
    p6_number,
    p7_number,
    p8_number,
    p9_number,
    weaponHash_number
  ) {}
  removeAirDefenseZone(zoneId_number) {}
  removeAllAirDefenseZones() {}
  setPlayerAirDefenseZoneFlag(player_number, zoneId_number, enable_boolean) {}
  isAirDefenseZoneInsideSphere(
    x_number,
    y_number,
    z_number,
    radius_number,
    zoneId_number
  ) {}
  fireAirDefenseWeapon(zoneId_number, x_number, y_number, z_number) {}
  doesAirDefenseZoneExist(zoneId_number) {}
  setCanPedEquipWeapon(ped_number, weaponHash_number, toggle_boolean) {}
  setCanPedEquipAllWeapons(ped_number, toggle_boolean) {}
  getZoneAtCoords(x_number, y_number, z_number) {}
  getZoneFromNameId(zoneName_string) {}
  getZonePopschedule(zoneId_number) {}
  getNameOfZone(x_number, y_number, z_number) {}
  setZoneEnabled(zoneId_number, toggle_boolean) {}
  getZoneScumminess(zoneId_number) {}
  overridePopscheduleVehicleModel(scheduleId_number, vehicleHash_number) {}
  clearPopscheduleOverrideVehicleModel(scheduleId_number) {}
  getHashOfMapAreaAtCoords(x_number, y_number, z_number) {}
}

function getAllData(obj) {
  var props = [];

  do {
    const l = Object.getOwnPropertyNames(obj).concat(
      Object.getOwnPropertySymbols(obj)
    );

    props = props.concat(l);
  } while (
    (obj = Object.getPrototypeOf(obj)) && //walk-up the prototype chain
    Object.getPrototypeOf(obj) //not the the Object prototype methods (hasOwnProperty, etc...)
  );

  var jsonData = [];

  props.forEach(funcName => {
    var result = getParamNames(new natives()[`${funcName}`]);
    console.log();

    jsonData.push({
      name: `native_${funcName}`,
      snippet: `native.${funcName}(${generateArgs(result)});\${0}`,
      documentation: ``
    });
  });

  return JSON.stringify(jsonData, null, "\t");
}

var ARGUMENT_NAMES = /([^\s,]+)/g;
function getParamNames(func) {
  var fnStr = func.toString();
  var result = fnStr
    .slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")"))
    .match(ARGUMENT_NAMES);
  if (result === null) result = [];

  return result;
}

function generateArgs(array) {
  if (array.length <= 0) return "";

  var res = "";
  array.forEach((ele, index) => {
    if (array.length - 1 === index) {
      res += `\${${index + 1}:${ele}}`;
    } else {
      res += `\${${index + 1}:${ele}}, `;
    }
  });
  return res;
}

fs.writeFileSync("data.json", getAllData(new natives()));
