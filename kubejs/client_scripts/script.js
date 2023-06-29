// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})


// TOOL TIPS and FLAVOR TEXT

ItemEvents.tooltip(tooltip => {
		tooltip.add('minecraft:shield', Text.red('A decorative shield with no durability'))

})
