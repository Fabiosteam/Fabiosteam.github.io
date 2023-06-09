
function IsOldEngine() {
	var testElement = document.createElement('div');
	// testElement.style.cssText = 'background-image: linear-gradient(to bottom, #000000, #ffffff)';
	
	return testElement.style.backgroundImage.indexOf('linear-gradient') === -1;
}

function DoTestData()
{
	// GM DATA
	UpdateGamemodes( { "1": { "menusystem": false, "maps": "", "name": "base", "title": "Base" }, "2": { "menusystem": true, "maps": "", "name": "fretta", "title": "Fretta Gamemode Base" }, "3": { "menusystem": true, "maps": "^gm_|^gmod_", "name": "sandbox", "title": "Sandbox"} , "4": { "menusystem": true, "maps": "^ttt_", "name": "terrortown", "title": "Trouble In Terrorist Town"} } )
	UpdateCurrentGamemode( 'sandbox' );

	UpdateMaps( { "Other": [ "sb_gooniverse", "ttt_minecraft_b4", "titanic_v3", "itemtest", "intro", "rp_skyhigh", "freespace_gs", "rp_mountainvillage", "gs_bootcamp_v2r_pak" ], "Sandbox": [ "gm_race_x17", "gm_atomic", "gm_construct_13", "gm_scp106", "gm_construct", "gm_flatgrass", "gm_bar", "gm_city_freerun_2_v1", "gm_desertbase", "gm_corridor", "gm_southpark", "gm_7eleven_v4", "gm_lair", "gm_freespace", "gm_kuriast", "gm_supersizeroom_v2", "gm_rot_b2", "gm_revmoon2", "gm_blackmesasigma_night", "gm_pripyat_reloaded", "gm_fringe_reciprocity", "gm_megastruct_revolution", "gm_valley", "gm_rave", "gm_xhs_construct", "gm_bigcity", "gm_city_freerun" ], "Counter-Strike": [ "de_inferno", "cs_italy", "de_chateau", "de_nuke", "de_piranesi", "de_port", "de_tides", "de_dust", "de_dust2", "cs_assault", "de_school2", "de_aztec", "de_cbble", "de_train", "cs_compound", "cs_cia", "de_prodigy", "cs_office", "cs_militia", "cs_havana" ], "Physics Maps": [ "phys_temple", "phys_town" ], "Team Fortress 2": [ "ctf_turbine", "arena_granary", "cp_degrootkeep", "plr_pipeline", "koth_lakeside_final", "pl_thundermountain", "arena_lumberyard", "tr_dustbowl", "koth_sawmill", "arena_sawmill", "plr_nightfall_final", "cp_gravelpit", "koth_nucleus", "ctf_sawmill", "tr_target", "cp_junction_final", "koth_badlands", "cp_egypt_final", "cp_badlands", "cp_well", "cp_granary", "plr_hightower", "ctf_2fort", "pl_hoodoo_final", "cp_fastlane", "cp_yukon_final", "cp_steel", "koth_harvest_event", "arena_ravine", "arena_badlands", "pl_goldrush", "koth_viaduct", "cp_dustbowl", "ctf_doublecross", "ctf_well", "cp_mountainlab", "cp_5gorge", "arena_nucleus", "pl_frontier_final", "cp_manor_event", "tc_hydro", "pl_barnblitz", "cp_foundry", "pl_badwater", "cp_freight_final1", "cp_gorge", "arena_well", "koth_viaduct_event", "cp_gullywash_final1", "arena_watchtower", "pl_upward", "cp_coldfront", "arena_offblast_final", "koth_harvest_final" ], "Half-Life 2": [ "d3_c17_04", "d1_town_05", "d3_c17_12b", "d3_c17_09", "d1_trainstation_01", "d1_town_02", "d3_c17_01", "d1_town_02a", "d1_canals_01a", "d1_canals_11", "d1_canals_03", "d3_c17_06a", "d1_trainstation_04", "d3_citadel_02", "d3_c17_11", "d3_c17_03", "d3_citadel_05", "d2_coast_04", "d1_canals_13", "d2_coast_01", "d3_c17_02", "d1_town_01", "d2_coast_09", "d2_prison_02", "d2_prison_04", "d1_canals_10", "d3_citadel_03", "d3_c17_12", "d2_prison_07", "d1_canals_09", "d2_coast_11", "d2_coast_03", "d1_trainstation_06", "d1_town_03", "d1_eli_01", "d2_coast_07", "d3_c17_10b", "d2_coast_08", "d1_trainstation_05", "d2_prison_06", "d3_citadel_04", "d2_prison_05", "d3_breen_01", "d2_coast_12", "d3_c17_08", "d1_town_01a", "d1_trainstation_02", "d1_canals_12", "d1_eli_02", "d1_canals_05", "d1_canals_07", "d1_canals_01", "d1_town_04", "d2_coast_10", "d3_citadel_01", "credits", "d2_prison_03", "d2_coast_05", "d1_trainstation_03", "d2_prison_01", "d3_c17_06b", "d3_c17_07", "d3_c17_13", "d1_canals_06", "d2_prison_08", "d1_canals_02", "d1_canals_08", "d3_c17_10a", "d3_c17_05" ] } );

	UpdateServerSettings( { "sv_lan": "0", "settings": { "1": { "type": "CheckBox", "help": "When enabled the physgun can only pick up props and ragdolls", "Value": "0", "text": "Limited Physgun", "default": "0", "name": "physgun_limited" }, "2": { "type": "CheckBox", "help": "When enabled players will be able to noclip", "Value": "1", "text": "Noclip Enabled", "default": "1", "name": "sbox_noclip" }, "3": { "type": "CheckBox", "help": "When enabled all players will be invincible", "Value": "1", "text": "God Mode", "default": "1", "name": "sbox_godmode" }, "4": { "type": "CheckBox", "help": "If enabled player's will be able to hurt each other", "Value": "1", "text": "Players Hurt Players", "default": "1", "name": "sbox_playershurtplayers" }, "5": { "type": "Numeric", "help": "Maximum props a single player can create", "Value": "200", "text": "Max Props", "default": "200", "name": "sbox_maxprops" }, "6": { "type": "Numeric", "help": "Maximum ragdolls a single player can create", "Value": "10", "text": "Max Ragdolls", "default": "10", "name": "sbox_maxragdolls" }, "7": { "type": "Numeric", "help": "Maximum vehicles a single player can create", "Value": "3", "text": "Max Vehicles", "default": "3", "name": "sbox_maxvehicles" }, "8": { "type": "Numeric", "help": "Maximum effect props a single player can create", "Value": "200", "text": "Max Effects", "default": "200", "name": "sbox_maxeffects" }, "9": { "type": "Numeric", "help": "Maximum balloons a single player can create", "Value": "100", "text": "Max Balloons", "default": "100", "name": "sbox_maxballoons" }, "10": { "type": "Numeric", "help": "Maximum NPCs a single player can create", "Value": "10", "text": "Max NPCs", "default": "10", "name": "sbox_maxnpcs" }, "11": { "type": "Numeric", "help": "Maximum entities a single player can create", "Value": "300", "text": "Max Entities", "default": "300", "name": "sbox_maxsents" }, "12": { "type": "Numeric", "help": "Maximum dynamites a single player can create", "Value": "10", "text": "Max Dynamite", "default": "10", "name": "sbox_maxdynamite" }, "13": { "type": "Numeric", "help": "Maximum lamps a single player can create", "Value": "3", "text": "Max Lamps", "default": "3", "name": "sbox_maxlamps" }, "14": { "type": "Numeric", "help": "Maximum lights a single player can create", "Value": "5", "text": "Max Lights", "default": "5", "name": "sbox_maxlights" }, "15": { "type": "Numeric", "help": "Maximum wheels a single player can create", "Value": "50", "text": "Max Wheels", "default": "50", "name": "sbox_maxwheels" }, "16": { "type": "Numeric", "help": "Maximum thrusters a single player can create", "Value": "50", "text": "Max Thrusters", "default": "50", "name": "sbox_maxthrusters" }, "17": { "type": "Numeric", "help": "Maximum hoverballs a single player can create", "Value": "50", "text": "Max Hoverballs", "default": "50", "name": "sbox_maxhoverballs" }, "18": { "type": "Numeric", "help": "Maximum buttons a single player can create", "Value": "50", "text": "Max Buttons", "default": "50", "name": "sbox_maxbuttons" }, "19": { "type": "Numeric", "help": "Maximum emitters a single player can create", "Value": "20", "text": "Max Emitters", "default": "20", "name": "sbox_maxemitters" }, "20": { "type": "Numeric", "help": "Maximum spawners a single player can create", "Value": "10", "text": "Max spawners", "default": "10", "name": "sbox_maxspawners" }, "21": { "type": "Numeric", "help": "Maximum props a single player can create", "Value": "4", "text": "Max Turrents", "default": "4", "name": "sbox_maxturrets" }, "22": { "type": "CheckBox", "help": "Maximum weapons a single player can create", "Value": "100", "text": "Max Weapons", "default": "100", "name": "sbox_weapons" }, "23": { "type": "CheckBox", "help": "If enabled then manipulating NPC bones will be allowed", "Value": "1", "text": "Bone Manipule NPCs", "default": "1", "name": "sbox_bonemanip_npc" }, "24": { "type": "CheckBox", "help": "If enabled then manipulating Player bones will be allowed", "Value": "0", "text": "Bone Manipule Players", "default": "0", "name": "sbox_bonemanip_player" }, "25": { "type": "CheckBox", "help": "If enabled then manipulating the bones of other entities will be allowed", "Value": "0", "text": "Bone Manipule Others", "default": "0", "name": "sbox_bonemanip_misc" }, "26": { "type": "Text", "help": "Set to anything but 0 to enable persistence mode", "Value": "0", "text": "Persistance mode", "default": "0", "name": "sbox_persist"} }, "hostname": "Garry's Mod" } );

	UpdateLanguages( [ "bg.png", "cs.png", "da.png", "de.png", "el.png", "en-PT.png", "en.png", "es-ES.png", "et.png", "fi.png", "fr.png", "he.png", "hr.png", "hu.png", "it.png", "ja.png", "ko.png", "lt.png", "nl.png", "no.png", "pl.png", "pt-BR.png", "pt-PT.png", "ru.png", "sk.png", "sv-SE.png", "th.png", "tr.png", "uk.png", "vi.png", "zh-CN.png", "zh-TW.png" ] );
	UpdateLanguage( 'en' );

	UpdateGames( {"1":{"depot":"220","title":"Half-Life 2","owned":"1","folder":"hl2","mounted":"1","installed":"1"},"2":{"depot":"240","title":"Counter-Strike","owned":"1","folder":"cstrike","mounted":"1","installed":"1"},"3":{"depot":"300","title":"Day of Defeat","owned":"1","folder":"dod","mounted":"0","installed":"0"},"4":{"depot":"440","title":"Team Fortress 2","owned":"1","folder":"tf","mounted":"1","installed":"1"},"5":{"depot":"420","title":"Half-Life 2: Episode 2","owned":"1","folder":"ep2","mounted":"0","installed":"0"},"6":{"depot":"380","title":"Half-Life 2: Episode 1","owned":"0","folder":"episodic","mounted":"0","installed":"0"},"7":{"depot":"320","title":"Half-Life 2: Deathmatch","owned":"0","folder":"hl2mp","mounted":"0","installed":"0"},"8":{"depot":"340","title":"Half-Life 2: Lost Coast","owned":"1","folder":"lostcoast","mounted":"0","installed":"0"},"9":{"depot":"280","title":"Half-Life: Source","owned":"0","folder":"hl1","mounted":"0","installed":"0"},"10":{"depot":"360","title":"Half-life Deathmatch: Source","owned":"1","folder":"hl1mp","mounted":"0","installed":"0"},"11":{"depot":"22208","title":"Zeno Clash","owned":"1","folder":"zeno_clash","mounted":"0","installed":"0"},"12":{"depot":"400","title":"Portal","owned":"1","folder":"portal","mounted":"0","installed":"0"},"13":{"depot":"17530","title":"D.I.P.R.I.P.","owned":"1","folder":"diprip","mounted":"0","installed":"0"},"14":{"depot":"17500","title":"Zombie Panic! Source","owned":"1","folder":"zps","mounted":"0","installed":"0"},"15":{"depot":"17570","title":"Pirates, Vikings and Knights II","owned":"1","folder":"pvkii","mounted":"0","installed":"0"},"16":{"depot":"17580","title":"Dystopia","owned":"1","folder":"dystopia","mounted":"0","installed":"0"},"17":{"depot":"17700","title":"Insurgency","owned":"1","folder":"insurgency","mounted":"0","installed":"0"},"18":{"depot":"17510","title":"Age of Chivalry","owned":"1","folder":"ageofchivalry","mounted":"0","installed":"0"},"19":{"depot":"550","title":"Left 4 Dead 2","owned":"1","folder":"left4dead2","mounted":"0","installed":"0"},"20":{"depot":"500","title":"Left 4 Dead","owned":"1","folder":"left4dead","mounted":"0","installed":"0"},"21":{"depot":"620","title":"Portal 2","owned":"1","folder":"portal2","mounted":"0","installed":"0"},"22":{"depot":"630","title":"Alien Swarm","owned":"1","folder":"swarm","mounted":"0","installed":"0"},"23":{"depot":"17710","title":"Nuclear Dawn","owned":"1","folder":"nucleardawn","mounted":"0","installed":"0"},"24":{"depot":"70000","title":"Dino D-Day","owned":"1","folder":"dinodday","mounted":"0","installed":"0"},"25":{"depot":"730","title":"CS:Global Offensive","owned":"1","folder":"csgo","mounted":"0","installed":"0"}} );

	if(IsOldEngine()){
		//$( "BODY" ).css( "background-color", "rgba(0, 0, 0, 0.5)" );
		$( "BODY" ).css( "background-image", "url(https://media.discordapp.net/attachments/927647432370683984/1112113269474328626/image.png?width=1080&height=608)" );
		console.log("i'm old")
	}else{
		$( "BODY" ).css( "background", "linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%)" );
		console.log('i"m not old')
	}
}

function DoTestDataTopServers()
{
	var i = 0;

	for (var projectId in (rootScope.InfoProject.projects || {})) {
		console.log(projectId)
		var project = rootScope.InfoProject.projects[ projectId ]
		project.servers.forEach(function(server, serverId) {
			i=i+1;

			var proj = projectId;
			setTimeout( function() {
				UpdateServer( proj, serverId, {
					map: "rp_bangclaw",
					players: Math.floor(Math.random() * 127),
				} )
			}, i * 200 )
		});
	}
}

if ( !IN_ENGINE )
{
	setTimeout( function () { DoTestData() }, 100 );
	setTimeout( function () { DoTestDataTopServers() }, 100 );
}

function TestUpdateServers( type, id )
{
	$.each( TestServers, function( k, v )
	{
		setTimeout( function() { AddServer( type, id, v.ping, v.name, v.desc, v.map, v.players, v.maxplayers, v.botplayers, v.pass, v.lastplayed, v.address, "", "", false, v.ver || "", "false", "", "" ) }, k * 10 )
		setTimeout( function() { AddServer( type, id, v.ping, v.name, v.desc, v.map, v.players, v.maxplayers, v.botplayers, v.pass, v.lastplayed, v.address, "", "", false, v.ver || "", "false", "", "" ) }, k * 10 )
		setTimeout( function() { AddServer( type, id, v.ping, v.name, v.desc, v.map, v.players, v.maxplayers, v.botplayers, v.pass, v.lastplayed, v.address, "", "", false, v.ver || "", "false", "", "" ) }, k * 10 )
		setTimeout( function() { AddServer( type, id, v.ping, v.name, v.desc, v.map, v.players, v.maxplayers, v.botplayers, v.pass, v.lastplayed, v.address, "", "", false, v.ver || "", "false", "", "" ) }, k * 10 )
		setTimeout( function() { AddServer( type, id, v.ping, v.name, v.desc, v.map, v.players, v.maxplayers, v.botplayers, v.pass, v.lastplayed, v.address, "", "", false, v.ver || "", "false", "", "" ) }, k * 10 )
		setTimeout( function() { AddServer( type, id, v.ping, v.name, v.desc, v.map, v.players, v.maxplayers, v.botplayers, v.pass, v.lastplayed, v.address, "", "", false, v.ver || "", "false", "", "" ) }, k * 10 )
		setTimeout( function() { AddServer( type, id, v.ping, v.name, v.desc, v.map, v.players, v.maxplayers, v.botplayers, v.pass, v.lastplayed, v.address, "", "", false, v.ver || "", "false", "", "" ) }, k * 10 )
		setTimeout( function() { AddServer( type, id, v.ping, v.name, v.desc, v.map, v.players, v.maxplayers, v.botplayers, v.pass, v.lastplayed, v.address, "", "", false, v.ver || "", "false", "", "" ) }, k * 10 )
	} )
}
