let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

Array.prototype.heroesRender = function(images) {
  const sections = this.map(function(hero) {
    const nameTd = '<td width="250" height="20" align="center">' + hero.name + '</td>';
    const iconTd = '<td width="250" height="20" align="center"><img src="images/' + images + '/' + hero.name.toLowerCase().replace(' ', '') + '.svg" width="40"></td>';
    return '<tr>' + nameTd + iconTd + '</tr>';
  });
const table = '<table border="2" align="center"><thead><tr><th>Name</th><th>Icon</th>' + sections.join('') + '</tr></thead height="20"></table>';
document.write(table);
};

marvelHeroes.heroesRender('marvel');
dcHeroes.heroesRender('dc');