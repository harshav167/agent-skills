#!/usr/bin/env bun
const { existsSync, readFileSync } = require('fs');
const { join, resolve } = require('path');

const root = resolve(__dirname, '..');
const metaSkill = join(root, 'skills', 'using-agent-skills', 'SKILL.md');

if (existsSync(metaSkill)) {
  const content = readFileSync(metaSkill, 'utf8');
  process.stdout.write(JSON.stringify({
    additional_context: `agent-skills loaded. Use the skill discovery flowchart to find the right skill for your task.\n\n${content}`,
  }));
} else {
  process.stdout.write(JSON.stringify({
    additional_context: 'agent-skills: using-agent-skills meta-skill not found. Skills may still be available individually.',
  }));
}
