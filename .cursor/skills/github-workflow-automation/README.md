# GitHub Workflow Automation Templates

This folder contains ready-to-copy templates inspired by `SKILL.md`.
They are **examples** and do not run automatically.

## How to use

- Copy the desired file to `.github/workflows/` and rename it (remove `.example`)
- Replace TODO markers and required secrets
- Adjust paths, labels, and commands to match your repo

## Required secrets (by template)

- `ai-review.example.yml`: `ANTHROPIC_API_KEY` (or replace provider)
- `mention-bot.example.yml`: `AI_API_KEY` (or replace provider)
- `deploy.example.yml`: depends on your deploy system
- `rollback.example.yml`: depends on your deploy system

## Notes

- Keep `permissions` minimal
- Use `path` filters for performance
- Review security settings before enabling write operations
