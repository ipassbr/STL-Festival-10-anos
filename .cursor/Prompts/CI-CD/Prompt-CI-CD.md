# 🔄 Template de Geração de CI/CD Pipeline - Cursor IDE

Template de prompt baseado em **automação de deployment e qualidade** para gerar **pipelines CI/CD completas, seguras e profissionais** que garantem entregas confiáveis e consistentes. Ideal para transformar documentação técnica e código em processo automatizado de integração contínua e deploy.

---

## 📝 Template do Prompt

Copie e personalize o template abaixo. Este prompt utiliza **código existente** e **documentação** (README, NFRs, DoD) para criar pipeline CI/CD.

```markdown
## Role (Identidade da IA)

Você é um **Staff DevOps Engineer / SRE** com experiência em:

- CI/CD moderno e automação de deploy
- GitHub Actions, GitLab CI, Jenkins, CircleCI
- Infrastructure as Code (Terraform, CloudFormation)
- Containerização (Docker, Kubernetes)
- Cloud platforms (AWS, GCP, Azure, Vercel, Netlify)
- Segurança de pipeline e secrets management
- Observabilidade e monitoramento
- Quality gates e automated testing

Você domina stacks de {{dominio}} (ex.: web apps, APIs, mobile, microservices, bibliotecas).

## Objetivo

Analisar o **código existente e documentação** (README, DoD, NFRs) para criar uma **estrutura completa de CI/CD** que automatiza:

1. **Integração Contínua (CI):** Validação de qualidade antes de merge
2. **Entrega Contínua (CD):** Deploy automático para ambientes
3. **Quality Gates:** Testes, linting, security scans
4. **Governança:** Templates, branch protection, approval workflows

A pipeline deve ser **production-ready, segura e mantível**.

## Contexto

CI/CD responde:

- **Como validar código?** - Testes, linting, type-checking
- **Como fazer deploy?** - Automação de staging e produção
- **Como garantir qualidade?** - Quality gates, code review
- **Como prevenir bugs em prod?** - Validações obrigatórias
- **Como gerenciar ambientes?** - Preview, staging, production
- **Como manter segurança?** - Secrets, scanning, SAST/DAST

## Entrada (Fonte de Verdade)

O usuário fornecerá:

- 💻 **Código do projeto** - Estrutura de pastas, package.json, scripts
- 📘 **README** - Setup, comandos, tech stack
- ✅ **DoD (Definition of Done)** - Critérios de qualidade obrigatórios
- ⚙️ **NFRs** - Performance, segurança, testes mínimos
- 🏗️ **ADRs** - Decisões técnicas (se existirem)
- 🗺️ **Roadmap** - Features futuras que afetam CI/CD

Use **exclusivamente** essas informações.

## Tarefa Principal

1. **Analisar o projeto:**
   - Stack tecnológica (linguagem, framework, build tool)
   - Comandos disponíveis (lint, test, build, deploy)
   - Dependências e package manager
   - Plataforma de deploy (Vercel, AWS, etc)

2. **Mapear DoD → Pipeline:**
   - Cada item da DoD vira step no CI
   - Testes obrigatórios = bloqueio de merge
   - Code review = branch protection

3. **Criar estrutura `.github/` (ou equivalente):**
   - Workflows de CI/CD
   - Templates (PR, Issues)
   - Dependabot/Renovate
   - Branch protection rules (documentar)

4. **Definir ambientes:**
   - Development (local)
   - Preview (PRs)
   - Staging (branch `develop` ou `staging`)
   - Production (branch `main`)

5. **Configurar quality gates:**
   - Linting obrigatório
   - Type-checking obrigatório
   - Tests passando obrigatório
   - Build sucesso obrigatório
   - Security scan (se aplicável)
   - Performance budget (se aplicável)

6. **Documentar processo:**
   - Como contribuir (CONTRIBUTING.md)
   - Como fazer deploy
   - Como configurar secrets
   - Troubleshooting comum

## Estrutura da Pipeline CI/CD

### CI (Continuous Integration) - Validação

**Triggers:**

- Push em qualquer branch
- Pull Request aberto/atualizado
- Manualmente (workflow_dispatch)

**Steps obrigatórios:**

1. **Checkout code** - `actions/checkout@v4`
2. **Setup runtime** - Node.js, Python, Go, etc
3. **Cache dependencies** - npm cache, pip cache, etc
4. **Install dependencies** - `npm ci` (não `npm install`)
5. **Lint** - ESLint, Pylint, golangci-lint
6. **Type-check** - TypeScript, mypy, etc
7. **Tests** - Unit, integration tests
8. **Build** - Validar que build passa
9. **Security scan** (opcional mas recomendado) - Snyk, Trivy

**Falha = bloqueia merge.**

### CD (Continuous Deployment) - Deploy Automático

**Triggers:**

- Push em `main` → Production
- Push em `develop` → Staging
- Pull Request → Preview (ephemeral environment)

**Steps obrigatórios:**

1. **CI completo** - Rodar CI primeiro
2. **Build for production** - Build otimizado
3. **Deploy** - Vercel, AWS, GCP, Azure, etc
4. **Smoke tests** (opcional) - Validar deploy funcionou
5. **Notify** (opcional) - Slack, Discord, email

**Rollback plan:**

- Reverter commit
- Redeployar versão anterior
- Feature flags para disable features

### Quality Gates (Opcionais mas Recomendados)

- **Code coverage** - Mínimo X% (ex: 80%)
- **Performance budget** - Lighthouse CI, bundle size
- **Accessibility** - Pa11y, axe-core
- **Security** - SAST (Semgrep), DAST, dependency scanning
- **License compliance** - Verificar licenças de deps

## Estrutura de Arquivos

### Para GitHub Actions:
```

.github/
├── workflows/
│ ├── ci.yml # Continuous Integration
│ ├── cd-production.yml # Deploy to Production
│ ├── cd-preview.yml # Preview Deploys (PRs)
│ └── security-scan.yml # Security scanning
├── PULL_REQUEST_TEMPLATE.md # PR template
├── ISSUE_TEMPLATE/
│ ├── bug_report.md
│ ├── feature_request.md
│ └── chore.md
├── dependabot.yml # Automated dependency updates
└── CODEOWNERS # Code review assignments

```

### Para GitLab CI:

```

.gitlab/
├── .gitlab-ci.yml # Pipeline definition
└── merge_request_templates/
└── default.md

```

### Para Outras Plataformas:

- **CircleCI:** `.circleci/config.yml`
- **Jenkins:** `Jenkinsfile`
- **Azure Pipelines:** `azure-pipelines.yml`
- **Bitbucket:** `bitbucket-pipelines.yml`

## Estrutura Esperada da Resposta

Gere documentação completa com:

### 1. Visão Geral da Estratégia
- Plataforma escolhida (GitHub Actions, GitLab CI, etc)
- Justificativa da escolha
- Ambientes e workflows

### 2. Estrutura de Arquivos
- Lista completa de arquivos criados
- Propósito de cada arquivo

### 3. Workflow de CI (Arquivo Completo)
- YAML completo e funcional
- Comentários explicando cada step

### 4. Workflow de CD (Arquivo Completo)
- YAML completo para cada ambiente
- Secrets necessários
- Configuração de deploy

### 5. Templates e Automações
- PR template
- Issue templates
- Dependabot config

### 6. Branch Protection Rules
- Configurações recomendadas
- Como configurar na UI do Git provider

### 7. Secrets e Variáveis
- Lista de secrets necessários
- Como configurar
- Boas práticas de segurança

### 8. Guia de Uso
- Como criar PR
- Como fazer deploy
- Como fazer rollback
- Troubleshooting comum

### 9. Checklist de Produção
- Validações antes de ir live
- Configurações obrigatórias
- Testes necessários

## Diretrizes

### Segurança:
- ✅ Nunca commitar secrets no código
- ✅ Usar secrets management do provider (GitHub Secrets, GitLab Variables)
- ✅ Principle of least privilege (permissions mínimas)
- ✅ Scan de vulnerabilidades
- ✅ Dependency updates automáticos

### Performance:
- ✅ Cache de dependências (reduz tempo de build)
- ✅ Paralelizar jobs quando possível
- ✅ Fail fast (falhar rápido em erros óbvios)
- ✅ Usar runners apropriados (self-hosted se necessário)

### Confiabilidade:
- ✅ Idempotência (rodar N vezes = mesmo resultado)
- ✅ Rollback plan documentado
- ✅ Smoke tests após deploy
- ✅ Alertas de falha (Slack, email)

### Manutenibilidade:
- ✅ Código DRY (reusar steps comuns)
- ✅ Comentários claros
- ✅ Versionamento de actions (não `@latest`, usar `@v4`)
- ✅ Documentação atualizada

## Formato da Resposta

1. **Gere arquivos completos** (YAML, Markdown)
2. **Use comentários** explicativos
3. **Forneça exemplos** de secrets/variables
4. **Sem placeholders** (use valores reais ou exemplo concreto)
5. **Pronto para:** Copiar, colar, configurar secrets e funcionar

## Restrições

- ❌ Não criar workflows que não correspondem ao projeto
- ❌ Não assumir comandos que não existem (verificar package.json)
- ❌ Não hardcodar secrets nos arquivos
- ❌ Não usar actions deprecated
- ✅ Seguir DoD do projeto (se fornecido)
- ✅ Respeitar NFRs (performance, security, tests)
- ✅ Usar versões específicas de actions (não `@latest`)
- ✅ Documentar configurações obrigatórias
```

---

## 🚀 Como Usar

### 1️⃣ Fluxo Recomendado (DevOps Pipeline)

A pipeline CI/CD é criada **após** código e documentação existirem:

```
1️⃣ Vision & Problem Statement → Estratégia
         ↓
2️⃣ PRD → Requisitos funcionais
         ↓
3️⃣ NFRs → Requisitos de qualidade (testes, performance)
         ↓
4️⃣ Roadmap + DoD → Critérios de "pronto"
         ↓
5️⃣ README → Setup e comandos
         ↓
6️⃣ Código → Implementação inicial
         ↓
7️⃣ CI/CD (este) → Automação de qualidade e deploy
         ↓
8️⃣ Monitoring → Observabilidade em produção
```

**Quando Criar CI/CD:**

- ✅ Após primeira versão funcional do código
- ✅ Quando DoD está definida
- ✅ Antes de primeiro deploy para produção
- ✅ Quando time > 2 pessoas (necessita governança)

**Quando Atualizar CI/CD:**

- Novos comandos (test, lint) adicionados
- Novos ambientes criados
- Mudanças na DoD
- Novos requisitos de segurança/compliance
- Mínimo: revisão trimestral

### 2️⃣ Onde Usar

- **GitHub** → `.github/workflows/`
- **GitLab** → `.gitlab-ci.yml`
- **Bitbucket** → `bitbucket-pipelines.yml`
- **CircleCI** → `.circleci/config.yml`
- **Jenkins** → `Jenkinsfile`
- **Azure DevOps** → `azure-pipelines.yml`
- **Travis CI** → `.travis.yml`

### 3️⃣ Exemplo Prático Completo

**Entrada (Projeto React + Vercel):**

```markdown
**README.md:**

- Stack: Vite + React 18 + TypeScript + TailwindCSS
- Comandos:
  - `npm run dev` - Dev server
  - `npm run build` - Production build
  - `npm run lint` - ESLint
  - `npm run test` - Vitest tests
  - `npm run typecheck` - TypeScript check

**DoD:**

- [ ] Lint passing
- [ ] Type-check passing
- [ ] Tests passing (> 80% coverage)
- [ ] Build succeeds
- [ ] Code review approved
- [ ] Deployed to staging first

**NFRs:**

- Performance: Lighthouse score > 90
- Security: No critical vulnerabilities
- Deployment: < 5 minutes
```

**Saída Esperada:**

A IA gerará estrutura completa `.github/` com workflows funcionais.

---

## 💡 Por Que Este Prompt Funciona

### ✅ 1. Automação de Qualidade

- Previne bugs em produção (quality gates)
- Consistência (todos usam mesmo processo)
- Reduz erro humano (automação > manual)
- Fail fast (problemas detectados cedo)

### ✅ 2. Velocity e Produtividade

- Desenvolvedores focam em código, não em deploy
- Feedback rápido (CI em minutos)
- Deploy frequente (várias vezes ao dia)
- Menos tempo em process, mais em produto

### ✅ 3. Segurança por Design

- Secrets management integrado
- Vulnerability scanning automático
- Dependency updates (Dependabot)
- Audit trail completo (quem deployou o quê)

### ✅ 4. Confiabilidade

- Preview environments (testar antes de prod)
- Staging environment (validação final)
- Rollback rápido (reverter deploy ruim)
- Smoke tests após deploy

### ✅ 5. Governança e Compliance

- Branch protection (não commit direto em main)
- Code review obrigatório
- Approval workflows (para prod)
- Audit logs automáticos

### ✅ 6. Developer Experience (DX)

- Processo claro e documentado
- Templates facilitam contribuição
- Feedback automático em PRs
- Self-service (devs não dependem de DevOps para tudo)

---

## ⚠️ Observações Importantes

### O que este prompt faz:

- ✅ Cria pipeline CI/CD completa e funcional
- ✅ Mapeia DoD para quality gates
- ✅ Configura ambientes (preview, staging, prod)
- ✅ Implementa boas práticas de segurança
- ✅ Gera templates de PR/Issues
- ✅ Documenta processo completo
- ✅ Adapta para diferentes stacks e plataformas

### O que este prompt NÃO faz:

- ❌ Não cria código da aplicação
- ❌ Não configura infraestrutura (IaC separado)
- ❌ Não substitui monitoramento/observabilidade
- ❌ Não gerencia secrets (você precisa configurar)
- ❌ Não faz deploy inicial (você configura primeiro)
- ❌ Não testa pipeline (você valida primeiro deploy)

### Quando usar este prompt:

- **Use quando:**
  - Projeto tem código funcional
  - DoD está definida
  - Time > 1 pessoa (colaboração necessária)
  - Indo para produção pela primeira vez
  - Quer automatizar deploy manual
  - Precisa garantir qualidade consistente

- **Não use quando:**
  - Projeto é só prototipo/throwaway
  - Código ainda não existe
  - Deploy é extremamente raro (1x/ano)
  - Time é 1 pessoa e processo manual funciona
  - Infraestrutura é muito complexa (precisa IaC primeiro)

---

## 🔄 Personalização Avançada

### Para Diferentes Plataformas:

**GitHub Actions + Vercel (Frontend):**

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Type check
        run: npm run typecheck

      - name: Tests
        run: npm run test -- --coverage

      - name: Build
        run: npm run build

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json

# .github/workflows/cd-production.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    needs: [quality] # CI precisa passar primeiro
    steps:
      - uses: actions/checkout@v4

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

**GitLab CI + AWS (Backend API):**

```yaml
# .gitlab-ci.yml
stages:
  - test
  - build
  - deploy

variables:
  DOCKER_IMAGE: $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA

test:
  stage: test
  image: node:20
  cache:
    key: ${CI_COMMIT_REF_SLUG}
    paths:
      - node_modules/
  script:
    - npm ci
    - npm run lint
    - npm run test
    - npm run build
  only:
    - merge_requests
    - main

build:
  stage: build
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker build -t $DOCKER_IMAGE .
    - docker push $DOCKER_IMAGE
  only:
    - main

deploy_staging:
  stage: deploy
  script:
    - aws ecs update-service --cluster staging --service api --force-new-deployment
  environment:
    name: staging
    url: https://api-staging.example.com
  only:
    - main

deploy_production:
  stage: deploy
  script:
    - aws ecs update-service --cluster production --service api --force-new-deployment
  environment:
    name: production
    url: https://api.example.com
  when: manual # Require manual approval
  only:
    - main
```

---

**CircleCI + Docker + Kubernetes:**

```yaml
# .circleci/config.yml
version: 2.1

orbs:
  node: circleci/node@5.0
  docker: circleci/docker@2.0

workflows:
  build_test_deploy:
    jobs:
      - test
      - build:
          requires:
            - test
          filters:
            branches:
              only: main
      - deploy_staging:
          requires:
            - build
          filters:
            branches:
              only: main
      - deploy_production:
          requires:
            - deploy_staging
          filters:
            branches:
              only: main
          type: approval

jobs:
  test:
    docker:
      - image: cimg/node:20.0
    steps:
      - checkout
      - node/install-packages
      - run:
          name: Run tests
          command: npm run test -- --coverage
      - run:
          name: Lint
          command: npm run lint
      - store_test_results:
          path: test-results

  build:
    docker:
      - image: cimg/base:stable
    steps:
      - checkout
      - setup_remote_docker
      - run:
          name: Build Docker image
          command: |
            docker build -t myapp:$CIRCLE_SHA1 .
            docker tag myapp:$CIRCLE_SHA1 myapp:latest
      - run:
          name: Push to registry
          command: |
            echo $DOCKER_PASSWORD | docker login -u $DOCKER_USER --password-stdin
            docker push myapp:$CIRCLE_SHA1

  deploy_staging:
    docker:
      - image: cimg/base:stable
    steps:
      - run:
          name: Deploy to K8s staging
          command: |
            kubectl set image deployment/myapp myapp=myapp:$CIRCLE_SHA1 -n staging

  deploy_production:
    docker:
      - image: cimg/base:stable
    steps:
      - run:
          name: Deploy to K8s production
          command: |
            kubectl set image deployment/myapp myapp=myapp:$CIRCLE_SHA1 -n production
```

---

**Jenkins (Groovy Pipeline):**

```groovy
// Jenkinsfile
pipeline {
    agent any

    environment {
        NODE_VERSION = '20'
        DOCKER_IMAGE = "myapp:${env.BUILD_NUMBER}"
    }

    stages {
        stage('Setup') {
            steps {
                nodejs(nodeJSInstallationName: env.NODE_VERSION) {
                    sh 'npm ci'
                }
            }
        }

        stage('Quality') {
            parallel {
                stage('Lint') {
                    steps {
                        nodejs(nodeJSInstallationName: env.NODE_VERSION) {
                            sh 'npm run lint'
                        }
                    }
                }
                stage('Type Check') {
                    steps {
                        nodejs(nodeJSInstallationName: env.NODE_VERSION) {
                            sh 'npm run typecheck'
                        }
                    }
                }
                stage('Tests') {
                    steps {
                        nodejs(nodeJSInstallationName: env.NODE_VERSION) {
                            sh 'npm run test -- --coverage'
                        }
                    }
                    post {
                        always {
                            publishHTML([
                                reportDir: 'coverage',
                                reportFiles: 'index.html',
                                reportName: 'Coverage Report'
                            ])
                        }
                    }
                }
            }
        }

        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: env.NODE_VERSION) {
                    sh 'npm run build'
                }
                script {
                    docker.build(env.DOCKER_IMAGE)
                }
            }
        }

        stage('Deploy to Staging') {
            when {
                branch 'main'
            }
            steps {
                script {
                    docker.withRegistry('https://registry.example.com', 'docker-credentials') {
                        docker.image(env.DOCKER_IMAGE).push()
                    }
                }
                sh 'kubectl set image deployment/myapp myapp=${DOCKER_IMAGE} -n staging'
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
                sh 'kubectl set image deployment/myapp myapp=${DOCKER_IMAGE} -n production'
            }
        }
    }

    post {
        success {
            slackSend(color: 'good', message: "Build ${env.BUILD_NUMBER} succeeded")
        }
        failure {
            slackSend(color: 'danger', message: "Build ${env.BUILD_NUMBER} failed")
        }
    }
}
```

---

### Para Diferentes Tipos de Projeto:

**Mobile App (React Native):**

```yaml
# .github/workflows/mobile.yml
name: Mobile CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run test

  build_ios:
    runs-on: macos-latest
    needs: test
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: cd ios && pod install
      - run: xcodebuild -workspace ios/MyApp.xcworkspace -scheme MyApp -configuration Release
      - uses: apple-actions/upload-testflight@v1
        with:
          app-path: ios/build/MyApp.ipa
          issuer-id: ${{ secrets.APPSTORE_ISSUER_ID }}
          api-key-id: ${{ secrets.APPSTORE_API_KEY_ID }}
          api-private-key: ${{ secrets.APPSTORE_API_PRIVATE_KEY }}

  build_android:
    runs-on: ubuntu-latest
    needs: test
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - uses: actions/setup-java@v4
        with:
          distribution: 'temurin'
          java-version: '17'
      - run: npm ci
      - run: cd android && ./gradlew assembleRelease
      - uses: r0adkll/upload-google-play@v1
        with:
          serviceAccountJsonPlainText: ${{ secrets.GOOGLE_PLAY_SERVICE_ACCOUNT }}
          packageName: com.example.myapp
          releaseFiles: android/app/build/outputs/apk/release/app-release.apk
          track: internal
```

---

**Monorepo (Turborepo/Nx):**

```yaml
# .github/workflows/monorepo.yml
name: Monorepo CI/CD

on:
  push:
    branches: [main]
  pull_request:

jobs:
  changes:
    runs-on: ubuntu-latest
    outputs:
      web: ${{ steps.filter.outputs.web }}
      api: ${{ steps.filter.outputs.api }}
    steps:
      - uses: actions/checkout@v4
      - uses: dorny/paths-filter@v2
        id: filter
        with:
          filters: |
            web:
              - 'apps/web/**'
              - 'packages/**'
            api:
              - 'apps/api/**'
              - 'packages/**'

  test_web:
    needs: changes
    if: needs.changes.outputs.web == 'true'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run test -- --filter=web

  test_api:
    needs: changes
    if: needs.changes.outputs.api == 'true'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run test -- --filter=api

  deploy_web:
    needs: test_web
    if: github.ref == 'refs/heads/main' && needs.changes.outputs.web == 'true'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run build -- --filter=web
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-args: '--prod'
          working-directory: apps/web

  deploy_api:
    needs: test_api
    if: github.ref == 'refs/heads/main' && needs.changes.outputs.api == 'true'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run build -- --filter=api
      - run: npm run deploy:api
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

---

## 💭 Filosofia

> **"CI/CD não é sobre automação de deploy — é sobre automação de qualidade e confiança."**

Este prompt garante que:

- **Qualidade é obrigatória**, não opcional (quality gates)
- **Deploy é seguro**, não estressante (preview → staging → prod)
- **Feedback é rápido**, não atrasado (CI em minutos)
- **Processo é consistente**, não ad-hoc (todos seguem mesmo fluxo)

**Princípios Fundamentais:**

1. **Shift Left** - Catch bugs cedo (CI), não em prod
2. **Fail Fast** - Falhar rápido e claramente
3. **Automate Everything** - Se é repetitivo, automatize
4. **Security by Default** - Scanning e secrets management integrados
5. **Progressive Delivery** - Preview → Staging → Prod (gradual)

---

## 🔄 Próximos Níveis (Evolução)

1. **CI/CD → Infrastructure as Code** - Terraform/Pulumi para infra
2. **CI/CD → GitOps** - ArgoCD, Flux para K8s deploys
3. **CI/CD → Feature Flags** - LaunchDarkly, Split.io para releases graduais
4. **CI/CD → Chaos Engineering** - Testes de resiliência automáticos
5. **CI/CD → ML Pipelines** - MLOps para modelos de ML
6. **CI/CD → Compliance as Code** - Policy-as-code (OPA, Sentinel)
7. **CI/CD → Self-Healing** - Auto-rollback baseado em métricas

---

## 🧠 Extensões Possíveis

### Variações do Template:

- **CI/CD Minimal** - Apenas essencial (lint, test, deploy)
- **CI/CD Enterprise** - Compliance, approvals, audit logs
- **CI/CD Multi-Cloud** - Deploy em AWS, GCP, Azure simultaneamente
- **CI/CD Multi-Environment** - Dev, QA, Staging, Prod, Canary
- **CI/CD with Feature Flags** - Progressive rollout

### Integrações:

```
CI/CD Pipeline
    ↓
Monitoring → Datadog, New Relic (observability)
    ↓
Alerting → PagerDuty, Opsgenie (incidents)
    ↓
Secrets → Vault, AWS Secrets Manager
    ↓
Security → Snyk, Trivy, SonarQube
    ↓
Compliance → OPA, Sentinel (policy enforcement)
    ↓
Documentation → Auto-generate changelogs
```

### Ferramentas Complementares:

- **IaC:** Terraform, Pulumi, CloudFormation
- **Containers:** Docker, Podman
- **Orchestration:** Kubernetes, ECS, Cloud Run
- **Service Mesh:** Istio, Linkerd
- **GitOps:** ArgoCD, Flux
- **Feature Flags:** LaunchDarkly, Unleash
- **Observability:** Prometheus, Grafana, Datadog

---

## 💡 Dicas Práticas

### Para Pipelines Melhores:

1. **Cache agressivamente** - Reduz tempo de 10min para 2min
2. **Paralelizar jobs** - Lint + Test + Type-check em paralelo
3. **Fail fast** - Lint antes de testes longos
4. **Use matrix builds** - Testar múltiplas versões (Node 18, 20, 22)
5. **Monitorar duração** - Pipeline > 10min é problema
6. **Versionar actions** - `actions/checkout@v4`, não `@main`
7. **Self-hosted runners** - Para builds pesados

### Checklist de Qualidade da Pipeline:

- [ ] CI roda em < 10 minutos?
- [ ] Cache de dependências funciona?
- [ ] Todos os quality gates são obrigatórios?
- [ ] Secrets estão seguros (não hardcoded)?
- [ ] Branch protection está configurado?
- [ ] Deploy em staging antes de prod?
- [ ] Rollback plan está documentado?
- [ ] Alertas de falha configurados?
- [ ] Documentação está atualizada?
- [ ] Team sabe como usar?

### Estrutura de Secrets (GitHub):

**Repository Secrets:**

```
VERCEL_TOKEN               # Deploy token
VERCEL_ORG_ID              # Organization ID
VERCEL_PROJECT_ID          # Project ID

AWS_ACCESS_KEY_ID          # AWS credentials
AWS_SECRET_ACCESS_KEY
AWS_REGION

SONAR_TOKEN                # Code quality
CODECOV_TOKEN              # Coverage reporting

SLACK_WEBHOOK_URL          # Notifications
```

**Environment Secrets (Staging, Production):**

```
DATABASE_URL               # Per-environment DB
API_KEY                    # Per-environment API keys
SENTRY_DSN                 # Error tracking
```

### Anti-Patterns (Evite!):

❌ **Deploy direto para prod** - Sem staging/preview
✅ **Deploy progressivo** - Preview → Staging → Prod

❌ **Pipeline lenta** - > 30 minutos
✅ **Pipeline rápida** - < 10 minutos com cache

❌ **Secrets hardcoded** - No código ou YAML
✅ **Secrets management** - GitHub Secrets, Vault

❌ **CI opcional** - Pode pular testes
✅ **CI obrigatório** - Branch protection force

❌ **Manual deploy** - Humano roda comandos
✅ **Automated deploy** - Push → auto-deploy

❌ **Monolithic pipeline** - 1 job gigante
✅ **Modular pipeline** - Jobs separados e paralelos

---

## 🔗 Integração com Outros Templates

Este template funciona melhor em conjunto:

```
🌍 Vision & Problem Statement → Por que construir
    ↓
📄 PRD → O que construir
    ↓
⚙️ NFRs → Como deve funcionar (qualidade)
    ↓
🗺️ Roadmap + DoD → O que vem + Critérios de pronto
    ↓
📘 README → Como setup e comandos
    ↓
💻 Código → Implementação
    ↓
🔄 CI/CD (este) → Automação de qualidade e deploy
    ↓
📊 Monitoring → Observabilidade em produção
    ↓
🔄 Feedback Loop → Melhoria contínua
```

**Fluxo completo de uso:**

1. Crie DoD definindo critérios de qualidade
2. Implemente código com comandos (lint, test, build)
3. Documente comandos no README
4. Use este template para criar CI/CD baseado na DoD
5. Configure secrets no Git provider
6. Teste pipeline em branch de teste
7. Configure branch protection em main
8. Primeiro deploy manual para validar
9. Ative deploy automático
10. Monitore e ajuste conforme necessário

---

## 📚 Exemplo Real Completo

### Projeto: TaskFlow Web App (Vite + React + TypeScript + Vercel)

```markdown
# Estrutura Completa de CI/CD - TaskFlow

## Arquivos Criados
```

.github/
├── workflows/
│ ├── ci.yml # ✅ Continuous Integration
│ ├── cd-preview.yml # ✅ Preview Deploys (PRs)
│ ├── cd-production.yml # ✅ Production Deploy
│ └── security.yml # ✅ Security Scanning
├── PULL_REQUEST_TEMPLATE.md # ✅ PR Template
├── ISSUE_TEMPLATE/
│ ├── bug_report.md # ✅ Bug Template
│ ├── feature_request.md # ✅ Feature Template
│ └── config.yml
├── dependabot.yml # ✅ Dependency Updates
└── CODEOWNERS # ✅ Code Review Assignment

````

---

## 1. CI Workflow

**Arquivo:** `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

# Cancela runs anteriores se novo push acontecer
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  quality:
    name: Quality Checks
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint (ESLint)
        run: npm run lint

      - name: Type check (TypeScript)
        run: npm run typecheck

      - name: Run tests
        run: npm run test -- --coverage

      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json
          fail_ci_if_error: false

      - name: Build production
        run: npm run build

      - name: Check bundle size
        uses: andresz1/size-limit-action@v1
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
````

---

## 2. Preview Deploy (PRs)

**Arquivo:** `.github/workflows/cd-preview.yml`

```yaml
name: Deploy Preview

on:
  pull_request:
    branches: [main]
    types: [opened, synchronize, reopened]

jobs:
  deploy_preview:
    name: Deploy to Vercel Preview
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          VITE_API_URL: https://api-staging.taskflow.app
          VITE_ENV: preview

      - name: Deploy to Vercel Preview
        uses: amondnet/vercel-action@v25
        id: vercel_preview
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          scope: ${{ secrets.VERCEL_ORG_ID }}
          alias-domains: |
            pr-${{ github.event.pull_request.number }}.taskflow.app

      - name: Comment PR with preview URL
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `✅ Preview deployed to: ${{ steps.vercel_preview.outputs.preview-url }}`
            })
```

---

## 3. Production Deploy

**Arquivo:** `.github/workflows/cd-production.yml`

```yaml
name: Deploy Production

on:
  push:
    branches: [main]

jobs:
  # CI precisa passar primeiro
  quality:
    uses: ./.github/workflows/ci.yml

  deploy_production:
    name: Deploy to Production
    needs: quality
    runs-on: ubuntu-latest
    environment:
      name: production
      url: https://taskflow.app

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build for production
        run: npm run build
        env:
          VITE_API_URL: https://api.taskflow.app
          VITE_ENV: production

      - name: Deploy to Vercel Production
        uses: amondnet/vercel-action@v25
        id: vercel_production
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
          scope: ${{ secrets.VERCEL_ORG_ID }}

      - name: Smoke test
        run: |
          sleep 10
          curl -f https://taskflow.app || exit 1

      - name: Notify Slack
        if: success()
        uses: slackapi/slack-github-action@v1
        with:
          webhook: ${{ secrets.SLACK_WEBHOOK_URL }}
          payload: |
            {
              "text": "✅ Production deploy succeeded",
              "blocks": [
                {
                  "type": "section",
                  "text": {
                    "type": "mrkdwn",
                    "text": "*Production Deploy Successful*\n\nCommit: ${{ github.sha }}\nURL: https://taskflow.app"
                  }
                }
              ]
            }

      - name: Notify Slack on Failure
        if: failure()
        uses: slackapi/slack-github-action@v1
        with:
          webhook: ${{ secrets.SLACK_WEBHOOK_URL }}
          payload: |
            {
              "text": "❌ Production deploy failed",
              "blocks": [
                {
                  "type": "section",
                  "text": {
                    "type": "mrkdwn",
                    "text": "*Production Deploy Failed*\n\nCommit: ${{ github.sha }}\n@channel Please investigate!"
                  }
                }
              ]
            }
```

---

## 4. Security Scanning

**Arquivo:** `.github/workflows/security.yml`

```yaml
name: Security Scan

on:
  push:
    branches: [main, develop]
  pull_request:
  schedule:
    - cron: '0 0 * * 1' # Every Monday at midnight

jobs:
  dependency_scan:
    name: Dependency Vulnerability Scan
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Run Snyk to check for vulnerabilities
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          args: --severity-threshold=high

  code_scan:
    name: Code Security Scan
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Run Semgrep
        uses: returntocorp/semgrep-action@v1
        with:
          config: auto
```

---

## 5. PR Template

**Arquivo:** `.github/PULL_REQUEST_TEMPLATE.md`

```markdown
## Description

Brief description of changes.

## Type of Change

- [ ] Bug fix (non-breaking change fixing an issue)
- [ ] New feature (non-breaking change adding functionality)
- [ ] Breaking change (fix or feature causing existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Refactoring (no functional changes)
- [ ] Performance improvement

## Checklist

- [ ] My code follows the project's code style
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published

## Testing

How has this been tested?

- [ ] Tested locally
- [ ] Tested in preview environment
- [ ] Unit tests added/updated
- [ ] E2E tests added/updated (if applicable)

## Screenshots (if applicable)

| Before       | After        |
| ------------ | ------------ |
| [screenshot] | [screenshot] |

## Related Issues

Closes #[issue number]
```

---

## 6. Dependabot

**Arquivo:** `.github/dependabot.yml`

```yaml
version: 2
updates:
  - package-ecosystem: 'npm'
    directory: '/'
    schedule:
      interval: 'weekly'
      day: 'monday'
      time: '09:00'
    open-pull-requests-limit: 5
    reviewers:
      - 'team-leads'
    assignees:
      - 'maintainer'
    commit-message:
      prefix: 'chore'
      include: 'scope'
    labels:
      - 'dependencies'
      - 'automated'
    ignore:
      # Ignore major version updates for now
      - dependency-name: '*'
        update-types: ['version-update:semver-major']
```

---

## 7. CODEOWNERS

**Arquivo:** `.github/CODEOWNERS`

```
# Default owners for everything
*       @taskflow/engineering

# Frontend specific
/src/    @taskflow/frontend-team

# CI/CD and infrastructure
/.github/   @taskflow/devops
/vercel.json @taskflow/devops

# Documentation
/docs/   @taskflow/docs-team
*.md     @taskflow/docs-team
```

---

## 8. Branch Protection Rules (Configurar no GitHub)

**Settings → Branches → Add rule (main):**

```
Branch name pattern: main

✅ Require a pull request before merging
  ✅ Require approvals: 1
  ✅ Dismiss stale pull request approvals when new commits are pushed
  ✅ Require review from Code Owners

✅ Require status checks to pass before merging
  ✅ Require branches to be up to date before merging
  Required checks:
    - quality (CI workflow)

✅ Require conversation resolution before merging

✅ Do not allow bypassing the above settings

✅ Restrict who can push to matching branches
  Allowed: Admins only
```

---

## 9. Secrets Configuration (GitHub Repo Settings)

**Settings → Secrets and variables → Actions:**

**Repository Secrets:**

```
VERCEL_TOKEN              = [Get from Vercel dashboard]
VERCEL_ORG_ID             = [Your org ID]
VERCEL_PROJECT_ID         = [Your project ID]
CODECOV_TOKEN             = [Get from Codecov]
SNYK_TOKEN                = [Get from Snyk]
SLACK_WEBHOOK_URL         = [Slack incoming webhook]
```

---

## 10. Checklist de Produção

Antes de ativar pipeline:

**Configurações no GitHub:**

- [ ] Secrets configurados (Vercel, Codecov, Snyk, Slack)
- [ ] Branch protection ativado em `main`
- [ ] CODEOWNERS configurado
- [ ] Team tem permissões corretas

**Validações:**

- [ ] CI passa em branch de teste
- [ ] Preview deploy funciona em PR de teste
- [ ] Production deploy funciona (teste manual primeiro)
- [ ] Smoke test passa após deploy
- [ ] Rollback testado (reverter commit)
- [ ] Notificações Slack funcionam

**Documentação:**

- [ ] README atualizado com workflow
- [ ] CONTRIBUTING.md criado
- [ ] Team treinado no processo

**Monitoramento:**

- [ ] Sentry ou similar configurado
- [ ] Analytics configurado
- [ ] Uptime monitoring ativo (UptimeRobot, Pingdom)

---

## 11. Guia de Uso

### Como Contribuir:

1. **Crie branch:**

   ```bash
   git checkout -b feature/my-feature
   ```

2. **Faça mudanças e commit:**

   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

3. **Push e abra PR:**

   ```bash
   git push origin feature/my-feature
   ```

   - CI rodará automaticamente
   - Preview deploy será criado
   - Reviewer será notificado

4. **Após aprovação e merge:**
   - Deploy automático para produção
   - Slack notificado
   - PR closed automaticamente

### Como Fazer Rollback:

**Opção 1 - Reverter commit:**

```bash
git revert <commit-sha>
git push origin main
```

Pipeline redeploy automaticamente.

**Opção 2 - Vercel dashboard:**

1. Acesse Vercel dashboard
2. Deployments → Previous deployments
3. Click "Promote to Production" na versão anterior

### Troubleshooting:

**CI falhou:**

- Verifique logs no GitHub Actions
- Rode localmente: `npm run lint && npm run test && npm run build`
- Fixe erros e push novamente

**Deploy falhou:**

- Verifique secrets estão configurados
- Verifique Vercel token tem permissões
- Tente deploy manual: `vercel --prod`

**Preview deploy não aparece:**

- Verifique PR target é `main`
- Verifique Vercel token está correto
- Aguarde alguns minutos (pode demorar)

---

**Pronto para produção! 🚀**

```

---

**Criado para automatizar qualidade, segurança e deploy com confiança e velocidade.**
```
