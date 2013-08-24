	if (window.localStorage.getItem("news") == null) {
		window.localStorage.setItem("news", 5);
	}
	var number = window.localStorage.getItem("news");

	var pos = window.sessionStorage.getItem("feed");
	
	switch (pos)
	{
	case"home":
		var pageFeed = "<script src='http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss(0%2C" + number + ")%20where%20url%3D%22http%3A%2F%2Fansa.feedsportal.com%2Fc%2F34225%2Ff%2F621689%2Findex.rss%22&format=json&diagnostics=true&callback=top_feed'><\/script>";
		var pageTitle = "<h1>Top News</h1>";
	break;

	case "cronaca":
		var pageFeed = "<script src='http://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%2CpubDate%20from%20rss(0%2C" + number + ")%20where%20url%3D%22http%3A%2F%2Fansa.feedsportal.com%2Fc%2F34225%2Ff%2F621692%2Findex.rss%22&format=json&diagnostics=true&callback=top_feed'><\/script>";
		var pageTitle = "<h1>Cronaca</h1>";
	break;

	case"economia":
		var pageFeed = "<script src='http://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%2CpubDate%20from%20rss(0%2C" + number + ")%20where%20url%3D%22http%3A%2F%2Fansa.feedsportal.com%2Fc%2F34225%2Ff%2F621700%2Findex.rss%22&format=json&diagnostics=true&callback=top_feed'><\/script>";
		var pageTitle = "<h1>Economia</h1>";
	break;

	case"politica":
		var pageFeed = "<script src='http://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%2CpubDate%20from%20rss(0%2C" + number + ")%20where%20url%3D%22http%3A%2F%2Fansa.feedsportal.com%2Fc%2F34225%2Ff%2F621696%2Findex.rss%22&format=json&diagnostics=true&callback=top_feed'><\/script>";
		var pageTitle = "<h1>Politica</h1>";
	break;

	case"scienza":
		var pageFeed = "<script src='http://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%2CpubDate%20from%20rss(0%2C" + number + ")%20where%20url%3D%22http%3A%2F%2Fansa.feedsportal.com%2Fc%2F34225%2Ff%2F621713%2Findex.rss%22&format=json&diagnostics=true&callback=top_feed'><\/script>";
		var pageTitle = "<h1>Scienza</h1>";
	break;

	case"tech":
		var pageFeed = "<script src='http://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%2CpubDate%20from%20rss(0%2C" + number + ")%20where%20url%3D%22http%3A%2F%2Fansa.feedsportal.com%2Fc%2F34225%2Ff%2F621714%2Findex.rss%22&format=json&diagnostics=true&callback=top_feed'><\/script>";
		var pageTitle = "<h1>Tecnologia</h1>";
	break;

	case"cinema":
		var pageFeed = "<script src='http://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%2CpubDate%20from%20rss(0%2C" + number + ")%20where%20url%3D%22http%3A%2F%2Fansa.feedsportal.com%2Fc%2F34225%2Ff%2F621705%2Findex.rss%22&format=json&diagnostics=true&callback=top_feed'><\/script>";
		var pageTitle = "<h1>Cinema</h1>";
	break;

	case"mondo":
		var pageFeed = "<script src='http://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%2CpubDate%20from%20rss(0%2C" + number + ")%20where%20url%3D%22http%3A%2F%2Fansa.feedsportal.com%2Fc%2F34225%2Ff%2F621699%2Findex.rss%22&format=json&diagnostics=true&callback=top_feed'><\/script>";
		var pageTitle = "<h1>Mondo</h1>";
	break;
	}
