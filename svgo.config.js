const svgoConfig = {
	plugins: [
		{
			removeAttrs: {
				attrs: '(stroke|fill)'
			}
		}, {
			convertPathData: false
		}, {
			removeViewBox: false // not working
		}, {
			removeXMLNS: true
		},
	]
}

export { svgoConfig }
