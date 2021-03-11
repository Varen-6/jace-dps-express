module.exports = {
	  protocol: process.env.PROTOCOL || "http",	
      url: `${process.env.APP_HOST || "localhost:8098"}/doc`,
      source: "./src/modules/dj-dps-commands",
      includes:["**/*.(md|markdown)","!**/node_modules"],
      output: "./.tmp/public/doc",
      templates: "./build/jace-doc/templates",
      assets:"./build/jace-doc/assets"
}