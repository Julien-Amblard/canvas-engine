import Engine from "../../src/engine"
import { baseData, drawCircle } from "./data"

new Engine({
	$canvas: document.querySelector(".canvas1"),
	data: baseData,
	onInit: function ({ $canvas }) {
		$canvas.height = 100
		$canvas.width = 300
	},
	onUpdate: function ({ data }) {
		if( data.x > 320 ) data.x = -20
		data.x += data.speed
	},
	onDraw: drawCircle
})