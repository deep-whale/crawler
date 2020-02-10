import {LolApi} from 'twisted';
import {Divisions, Queues, Regions, Tiers} from "twisted/dist/constants";
import * as blessed from 'blessed';
import * as contrib from 'blessed-contrib';

const api = new LolApi({key: process.env.API_KEY});
const gold1 = [1, 2, 3];
const gold2 = [4, 5, 6];
const screen = blessed.screen({
    smartCSR: true,
});
const line = contrib.line({
    label: 'ID by Tiers',
});
screen.append(line);

setInterval(async () => {
    // const res = await api.League.exp(Queues.RANKED_SOLO_5x5, Tiers.GOLD, Divisions.I, Regions.KOREA) as any;
    // const arr = res.response as [];
    gold1.push(Math.random() * 10);
    if (gold1.length > 7) gold1.splice(0, 1);
}, 500);

setInterval(async () => {
    // const res = await api.League.exp(Queues.RANKED_SOLO_5x5, Tiers.GOLD, Divisions.II, Regions.KOREA) as any;
    // const arr = res.response as [];
    gold2.push(Math.random() * 10);
    if (gold2.length > 7) gold2.splice(0, 1);
}, 500);

line.setData([{
    title: 'gold1',
    x: ['t1', 't2', 't3', 't4'],
    y: gold1,
}, {
    title: 'gold2',
    x: ['t1', 't2', 't3', 't4'],
    y: gold2,
}]);

setInterval(() => {
    const timeline = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    line.setData([
        {title: 'gold1', x: timeline, y: gold1, style: {line: 'red'}},
        {title: 'gold2', x: timeline, y: gold2},
    ]);
    screen.render();
}, 500);
