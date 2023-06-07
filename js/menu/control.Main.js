
var scope = null
var rootScope = null;

function ControllerMain( $scope, $element, $rootScope )
{
	$rootScope.ShowBack = false;

	scope = $scope;
	rootScope = $rootScope;

	$scope.NewsList = [];
	$scope.CurrentNewsItem = null;
	$scope.HideNews = false;
	$scope.AnyNewNewsItems = false;

	if ( !IN_ENGINE )
	{
		$rootScope.NewsList = [
			{ HeaderImage: 'img/whatsnew.png', Title: 'December 2018 Hotfix', SummaryHtml: 'A security hotfix', Url: 'https://google.com/?q=1', Date: Date.now() },
			{ HeaderImage: 'img/whatsnew.png', Title: 'December 2018 Coldfix', SummaryHtml: 'A very long security hotfix example indeed like it is so long that i dont know how I will fit this stuff in the box', Url: 'https://google.com/?q=4' , Date: 0 },
			{ Title: 'Post without an image', SummaryHtml: 'They are very hard to make', Url: 'https://google.com/?q=2', Date: Date.now() - 604800000 - 10000 },
			{ HeaderImage: 'img/whatsnew.png', Title: 'December 2018 is a very long Security Hotfix that means we need to handle this', SummaryHtml: 'A security hotfix', Url: 'https://google.com/?q=3', Date: Date.now() - 604800000 + 10000 },
		]
	}

	$scope.NewsItemClass = function( NewsItem )
	{
		// If newer than a 3.5 days, force show news
		if ( Date.parse( NewsItem.Date ) > Date.now() - 302400000 )
		{
			$scope.AnyNewNewsItems = true; // Kind of a hack to do this here
			$scope.SetHideNewsList( false );
			return "new";
		}
		return "";
	}

	$scope.NewsItemBackground = function( url )
	{
		return "background-image: url( " + url + " )";
	}

	$scope.SelectItem = function( item )
	{
		$scope.SetHideNewsList( false, true );

		$scope.CurrentNewsItem = item;
	}

	$scope.OpenInSteam = function( url )
	{
		lua.Run( "gui.OpenURL( %s )", url );
	}

	$scope.SetHideNewsList = function( bHide, bSave )
	{
		$scope.HideNews = bHide;
		$rootScope.HideNews = $scope.HideNews;

		if ( bSave )
		{
			lua.Run( "SaveHideNews( %s )", $scope.HideNews ? "true" : "false" );
		}
	}
	$scope.ToggleNewsList = function()
	{
		$scope.SetHideNewsList( !$scope.HideNews, true );

		//$scope.CurrentNewsItem = undefined;
	}

	// Load it all up
	if ( $rootScope.NewsList )
	{
		$scope.NewsList = $rootScope.NewsList;
		$scope.SetHideNewsList( $rootScope.HideNews );
		$scope.CurrentNewsItem = $scope.NewsList[ 0 ];
	}
	else
	{
		lua.Run( "LoadNewsList()" );
	}

	$rootScope.Hello = 2;

	// Load our servers
	$rootScope.ServersCache = {};
	LoadTopServers({
		banner: "https://muviproject.net/img/banner.png",
		projects: {
			vast: {
				niceName: "VastRP",
				links: {
					vk: "https://vk.com/rusvastrp",
					discord: "https://discord.gg/B9MF4heaga"
				},
				logo: "https://muviproject.net/img/logo/vastrp.png",
				servers: [
					{
						name: "▃▆█ VastRP #1 | НАБОР | M9K █▆▃",
						map: "https://muviproject.net/img/map/rp_bangclaw.png",
						ip: "212.22.93.206:27015"
					},
					{
						name: "▆▇█ VastRP #2 | НАБОР | M9K █▇▆",
						map: "https://muviproject.net/img/map/rp_bangclaw.png",
						ip: "212.22.93.206:27017"
					}
				]
			},
			umbrella: {
				niceName: "UmbrellaRP",
				links: {
					vk: "https://vk.com/rusumb",
					discord: "https://discord.gg/rusumbrp"
				},
				logo: "https://muviproject.net/img/logo/umbrellarp.png",
				servers: [
					{
						name: "▆▇█ UmbrellaRP#1┃АМБРЕЛЛА┃БАНДЫ █▇",
						map: "https://muviproject.net/img/map/rp_bangclaw.png",
						ip: "212.22.93.35:27016"
					},
					{
						name: "▆▇█ UmbrellaRP#2┃АМБРЕЛЛА┃БАНДЫ █▇",
						map: "https://muviproject.net/img/map/rp_bangclaw.png",
						ip: "212.22.93.35:27015"
					}
				]
			},
			infinit: {
				niceName: "InfinityRP",
				links: {
					vk: "https://vk.com/infrp.gmod",
					discord: "https://discord.gg/q72TWCUdGh"
				},
				logo: "https://muviproject.net/img/logo/infinityrp.png",
				servers: [
					{
						name: "▆▇█ InfinityRP #1 ┃БАНДЫ┃FPS┃M9K █▇▆",
						map: "https://muviproject.net/img/map/rp_bangclaw.png",
						ip: "212.22.93.109:27015"
					}
				]
			},
			magic: {
				niceName: "MagicRP",
				links: {
					vk: "https://vk.com/magicdrp",
					discord: "https://discord.gg/ypSxrFW"
				},
				logo: "https://muviproject.net/img/logo/magicrp.png",
				servers: [
					{
						name: "▆▇█ MagicRP#1 ┃ FREE VIP ┃ БАНДЫ █▇▆",
						map: "https://muviproject.net/img/map/rp_bangclaw.png",
						ip: "212.22.93.178:27016"
					},
					{
						name: "▆▇█ MagicRP#2 ┃ БОНУСЫ ┃ БАНДЫ █▇▆",
						map: "https://muviproject.net/img/map/rp_bangclaw.png",
						ip: "212.22.93.116:27016"
					},
					{
						name: "▆▇█ MagicRP#3 ┃ FREE VIP ┃ БАНДЫ █▇▆",
						map: "https://muviproject.net/img/map/rp_bangclaw.png",
						ip: "212.22.93.60:27016"
					},
					{
						name: "▆▇█ MagicRP#4 ┃ БОНУСЫ ┃ БАНДЫ █▇▆",
						map: "https://muviproject.net/img/map/rp_bangclaw.png",
						ip: "212.22.93.145:27018"
					}
				]
			}
		}
	});

	if ( !IN_ENGINE )
	{
		if(self['$'] && self['$'].getJSON){
			self['$'].getJSON( "https://muviproject.net/settings.json", function( data ) {
				LoadTopServers( data );
			} )
		}
	}
	else
	{
		lua.Run( "LoadTopServers()" );
	}
}

function EnrichServer( server, data )
{
	$.extend(server,
		data
		||
		{ // Mocked data
			players: 0,
			map: "rp_bangclaw",
			maxplayers: 127,
			online: false
		}
	);
}

function LoadTopServers(data)
{
	for (var projectId in data.projects) {
		var project = data.projects[projectId];

		for (var serverId = 0; serverId < project.servers.length; serverId++) {
			var server = project.servers[serverId];

			// load from cache, if we have one
			var cache = rootScope.ServersCache[ project ];
			EnrichServer( server, cache ? cache[ serverId ] : null )
		}
	}

	rootScope.InfoProject = data;
	UpdateDigest( rootScope, 50 );
}

function UpdateServer( project, serverId, data )
{
	var server = rootScope.InfoProject.projects[ project ].servers[ serverId ]
	EnrichServer( server, data )

	// save it to cache
	rootScope.ServersCache[ project ] = rootScope.ServersCache[ project ] || {};
	rootScope.ServersCache[ project ][ serverId ] = data;
	UpdateDigest( rootScope, 50 );
}

function UpdateNewsList( newslist, hide )
{
	scope.SetHideNewsList( hide );
	scope.NewsList = newslist;
	scope.CurrentNewsItem = /*scope.HideNews ? undefined :*/ newslist[0];

	if (rootScope) {
		rootScope.HideNews = hide
		rootScope.NewsList = newslist;
		UpdateDigest( rootScope, 50 );
	}
}

function UpdateInformation( inf )
{
	scope.InfoProject = inf;
}
