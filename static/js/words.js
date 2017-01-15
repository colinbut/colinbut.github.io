var words = [

				// Spring
				{text: "Spring", weight:9},
				{text: "Spring AOP", weight:4},
				{text: "Spring Batch", weight:5.8},
				{text: "Spring Social", weight:5.5},
				{text: "Spring Security", weight:5},
				{text: "Spring Web MVC", weight:5},
				{text: "Spring Data", weight:6},
				{text: "Spring Test", weight: 4},
				{text: "Spring Boot", weight: 8},
				// Java
				{text: "Java", weight:10},
				{text: "Java EE", weight:8},
				{text: "JPA", weight: 7},
	      {text: "JTA", weight: 7},
	      {text: "JSF", weight: 4.5},
	      {text: "Hibernate", weight: 6.8},
	      {text: "CDI", weight: 3.5},
	      {text: "Interceptors", weight: 5},
	      {text: "Concurrency Utilities", weight: 5},
	      {text: "Batch Applications for Java", weight: 4},
	      {text: "JMS", weight: 7},
	      {text: "JAX-RS", weight: 6},
		    {text: "JSP", weight: 5.5},
		    {text: "JSTL", weight: 4},
		    {text: "Servlet", weight: 3.5},
		    {text: "EJB", weight: 2.5},
		    {text: "Expression Language", weight: 2},
		    {text: "Bean Validation", weight: 3},
		    {text: "JAXP", weight: 4},
		    {text: "JDBC", weight: 5},
		    {text: "JAX-WS", weight: 1},

		    // App Servers/Web Containers
		    {text: "Tomcat", weight: 5},
		    {text: "Glassfish", weight: 5},
				{text: "Jetty", weight: 5},
				{text: "JBoss", weight: 5},

		    // Dev Testing
		    {text: "JUnit", weight: 5},
		    {text: "Mockito", weight: 5},

				// frontend
				{text: "AngularJS", weight: 6},
				{text: "Bootstrap", weight: 6},
				{text: "React", weight: 6},
				{text: "Redux", weight: 6},
				{text: "webpack", weight: 6},
				{text: "Browserify", weight: 6},
				{text: "Babel", weight: 6},
				{text: "npm", weight: 6},
				{text: "bower", weight: 6},
				{text: "Grunt", weight: 6},
				{text: "Gulp", weight: 6},
				{text: "ES6", weight: 6},
				{text: "Yeoman", weight: 6},
				{text: "HTML5 Boilerplate", weight: 6},
				/*{text: "Mocha", weight: 6},
				{text: "Chai", weight: 6},
				{text: "Browsersync", weight: 6},
				{text: "Karma", weight: 6},
				{text: "Jasmine", weight: 6},*/


		    // Misc
		    {text: "Maven", weight: 4.5},
		    {text: "Git", weight: 4},
		    {text: "XML", weight: 4},
		    {text: "JSON", weight: 4},
				{text: "Docker", weight: 6},
				{text: "Vagrant", weight: 6},
				{text: "Gradle", weight: 6},
				{text: "Microservices", weight: 8},
				{text: "ReactiveX", weight: 7},
				{text: "Event Sourcing", weight: 7},
				{text: "CQRS", weight: 7},
				{text: "Netty", weight: 6},
				{text: "Akka", weight: 5},
				{text: "Quartz", weight: 7.5},
				{text: "EhCache", weight: 6.5},
				{text: "Dropwizard", weight: 8},
				{text: "Guice", weight: 7},
				{text: "GWT", weight: 5},
				{text: "JavaScript", weight: 5},
				{text: "ActiveMQ", weight: 5},
				{text: "Camel", weight: 5},

		    // Database
		    {text: "MySQL", weight: 5},
				{text: "PostgreSQL", weight: 4.5},
				{text: "DB2", weight: 5},
				{text: "MongoDB", weight: 6.5},
				{text: "Riak", weight: 5.5},
				{text: "Oracle RDBMS", weight: 6}

			];

			$(document).ready(function() {
				$('#skillz').jQCloud(words, {
					shape: 'elliptic',
					autoResize: true,
					removeOverflowing: true
					// colors: ["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976", "#ffeda0", "#ffffcc"]
				});
			});
