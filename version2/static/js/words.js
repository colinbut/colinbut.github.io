var words = [

			// Spring
				{text: "Spring", weight:9},
				{text: "Spring AOP", weight:4},
				{text: "Spring Core", weight:4},
				{text: "Spring Batch", weight:5.8},
				{text: "Spring Social", weight:5.5},
				{text: "Spring Security", weight:5},
				{text: "Spring Web MVC", weight:5},
				{text: "Spring Data", weight:6},
				{text: "Spring Test", weight: 4},
				// Java
				{text: "Java", weight:10},
				{text: "Java EE", weight:8},
				{text: "JPA", weight: 7},
	      {text: "JTA", weight: 7},
	      {text: "JSF", weight: 6},
	      {text: "Hibernate", weight: 6.8},
	      {text: "CDI", weight: 6.5},
	      {text: "Interceptors", weight: 6},
	      {text: "Concurrency Utilities", weight: 5},
	      {text: "Batch Applications for Java", weight: 4},
	      {text: "JMS", weight: 7},
	      {text: "JAX-RS", weight: 6},
		    {text: "JSP", weight: 5.5},
		    {text: "JSTL", weight: 6},
		    {text: "Servlet", weight: 4.5},
		    {text: "EJB", weight: 4},
		    {text: "Expression Language", weight: 3},
		    {text: "Bean Validation", weight: 4},
		    {text: "JAXP", weight: 4},
		    {text: "JDBC", weight: 5},
		    {text: "JAX-WS", weight: 1},

		    // App Servers/Web Containers
		    {text: "Tomcat", weight: 5},
		    {text: "Glassfish", weight: 5},

		    // Dev Testing
		    {text: "JUnit", weight: 5},
		    {text: "Mockito", weight: 5},

		    // Misc
		    {text: "Maven", weight: 4.5},
		    {text: "Git", weight: 4},
		    {text: "XML", weight: 4},
		    {text: "JSON", weight: 4},
		    {text: "Concurrency", weight: 6},
				{text: "Multithreading", weight: 6},
				{text: "MongoDB", weight: 6},
				{text: "Docker", weight: 6},
				{text: "Vagrant", weight: 6},
				{text: "AngularJS", weight: 6},
				{text: "Bootstrap", weight: 6},
				{text: "React", weight: 6},
				{text: "Gradle", weight: 6},

		    // Database
		    {text: "MySQL", weight: 5}

			];

			$(document).ready(function() {
				$('#skillz').jQCloud(words, {
					shape: 'elliptic',
					autoResize: true,
					removeOverflowing: true
					// colors: ["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976", "#ffeda0", "#ffffcc"]
				});
			});
