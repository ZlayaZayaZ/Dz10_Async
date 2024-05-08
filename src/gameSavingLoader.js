import read from './reader.js';
import json from './parser.js';
import GameSaving from './gameSaving.js';

export default class GameSavingLoader {
  static async load() {
    const data = await read()
    const result = await json(data);
    return new GameSaving(JSON.parse(result));
  }
}