var words = [

				
				// Cloud Computing/ Containers & Orchestration
				{text: "AWS", weight: 9},
				{text: "Google Cloud Platform", weight: 5},
				{text: "Kubernetes", weight: 6.5},
				{text: "Oracle Cloud", weight: 5},

				// Spring
				{text: "Spring", weight:9},
				{text: "Spring AOP", weight:4},
				{text: "Spring Batch", weight:5.8},
				{text: "Spring Security", weight:5},
				{text: "Spring Web MVC", weight:6.5},
				{text: "Spring Data", weight:6},
				{text: "Spring Boot", weight: 9},
				{text: "Spring Cloud", weight: 8},
				// Java & Java EE
				{text: "Java", weight:10},
				{text: "Java EE", weight:8},
				{text: "JPA", weight: 7},
				{text: "JTA", weight: 7},
				{text: "JSF", weight: 4.5},
				{text: "Hibernate", weight: 6.8},
				{text: "CDI", weight: 3.5},
				{text: "Interceptors", weight: 4},
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
				{text: "JAXB", weight: 2},
				{text: "JAX-WS", weight: 1},

				// App Servers/Web Containers
				{text: "Tomcat", weight: 5},
				{text: "Glassfish", weight: 3},
				{text: "Jetty", weight: 5},
				{text: "JBoss", weight: 5},

				// Dev Testing
				{text: "JUnit", weight: 6},
				{text: "Mockito", weight: 6},

				// frontend
				{text: "AngularJS", weight: 7},
				{text: "Bootstrap", weight: 6},
				{text: "React", weight: 8},
				{text: "Redux", weight: 7.5},
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
				{text: "Jasmine", weight: 5.5},
				{text: "Jest", weight: 5.5},
				{text: "Browsersync", weight: 3},
				/*{text: "Mocha", weight: 6},
				{text: "Chai", weight: 6},
				{text: "Karma", weight: 6} */


				// Misc
				{text: "Maven", weight: 4.5},
				{text: "Git", weight: 4},
				{text: "XML", weight: 4},
				{text: "JSON", weight: 4},
				{text: "Docker", weight: 8},
				{text: "Vagrant", weight: 6.5},
				{text: "Gradle", weight: 6},
				{text: "Microservices", weight: 8},
				{text: "ReactiveX", weight: 6.5},
				{text: "Event Sourcing", weight: 6.5},
				{text: "CQRS", weight: 6.5},
				{text: "Netty", weight: 5},
				{text: "Quartz", weight: 4.5},
				{text: "EhCache", weight: 4.5},
				{text: "Hazelcast", weight: 4.5},
				{text: "Dropwizard", weight: 8},
				{text: "Guice", weight: 6},
				{text: "JWT", weight: 3},
				{text: "JavaScript", weight: 5},
				{text: "ActiveMQ", weight: 6},
				{text: "RabbitMQ", weight: 6},
				{text: "Camel", weight: 6},
				{text: "Nginx", weight: 6},

				// Database
				{text: "MySQL", weight: 5},
				{text: "PostgreSQL", weight: 4.5},
				{text: "DB2", weight: 5},
				{text: "MongoDB", weight: 6.5},
				{text: "Cassandra", weight: 5.5},
				{text: "Riak KV", weight: 5.5},
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
