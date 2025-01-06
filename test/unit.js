#!/usr/bin/env node

const test = require("tape");
const Recipe = require("../recipe");

test("Recipe#Hydrate()", async (t) => {
  const r = new Recipe(42);
  await r.hydrate();
  t.equal(r.name, "Recipe #42", "name equality");
});

test("Recipe#serialize()", async (t) => {
  const r = new Recipe(17);
  t.deepLooseEqual(r, { id: 17, name: null }, "serializes properly");
  t.end();
});