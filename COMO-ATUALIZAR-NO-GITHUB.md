# 🥗 NUTRI.FUEL v3.4 — Distribuição de Macros editável + reflete ciclagem!

**Data:** Maio 2026

---

## 🆕 NOVIDADES V3.4

### 1️⃣ Carboidrato (g/kg) editável manualmente

Agora a "Distribuição de Macros" tem **3 campos editáveis** ao invés de 2:
- Proteína (g/kg)
- **Carboidrato (g/kg)** ← NOVO
- Gordura (g/kg)

**Modos de uso:**
- **Modo automático** (deixa carbo em branco): app calcula carbo pra bater o Kcal Alvo do GET
- **Modo manual** (preenche carbo): app **recalcula o Kcal Alvo** somando os 3 macros

### 2️⃣ Reflete o dia ativo da ciclagem

Quando ciclagem está ativa, a "Distribuição de Macros" da aba inicial:
- Mostra automaticamente os valores do **dia ativo selecionado**
- Tem um **indicador laranja** mostrando qual dia está exibindo (🔥 ALTO / ⚖️ MÉDIO / 💤 BAIXO)
- **Atualiza ao trocar de dia** no seletor da aba Plano

**Antes:** ficava fixo no que foi calculado inicialmente (não refletia mudanças)  
**Agora:** sempre mostra os macros e kcal exatos do dia que você está editando

---

## 🎯 EXEMPLO DE USO

1. Aba TMB → preenche dados, clica "Calcular"
2. Em Distribuição de Macros:
   - Proteína: 2.0 g/kg
   - Gordura: 1.0 g/kg
   - Carbo: deixa vazio (modo automático)
3. Clica "Aplicar como Meta"
4. Aba Plano → ativa ciclagem
5. Define: Alto 5.0 / Médio 3.5 / Baixo 2.0
6. Volta na aba TMB → Distribuição mostra **🔥 DIA ALTO** com 5g/kg de carbo
7. Vai pra aba Plano → clica em "⚖️ Dia MÉDIO"
8. Volta na aba TMB → Distribuição agora mostra **⚖️ DIA MÉDIO** com 3.5g/kg ✅

Aí você vê **exatamente** quanto carbo, ptn, gord e kcal cada dia tem, e fica fácil enquadrar as quantidades de alimentos!

---

## 🖥️ COMO ATUALIZAR

1. Baixe `nutrifuel-pwa-v3-4.zip` e descompacte
2. `github.com/mgcoach/mgcoach` → seu repo
3. **Add file → Upload files** → arrasta TODOS os arquivos
4. **Replace** quando perguntar
5. Commit message: `v3.4 - distribuição editável e reflexiva`
6. **Commit changes**
7. Aguarde 1-2 min, abra em **modo incógnito** (Ctrl+Shift+N)
8. Cabeçalho mostra **Versão 3.4**

---

## 🧪 TESTE

### Teste do carbo manual:
1. Aba TMB → calcula
2. Distribuição de Macros: deixa Proteína 2.0 / Gordura 1.0
3. Digita Carbo (g/kg): 4.5
4. Vê o **Kcal Alvo recalculado automaticamente** com base nos 3 macros

### Teste do reflexo da ciclagem:
1. Aba Plano → ativa ciclagem (Alto 5.0 / Médio 3.5 / Baixo 2.0)
2. Volta na aba TMB → Distribuição mostra "🔥 DIA ALTO" e carbo 5.0
3. Aba Plano → clica em "⚖️ Dia MÉDIO"
4. Aba TMB → Distribuição mudou pra "⚖️ DIA MÉDIO" com carbo 3.5
5. Mesma coisa pro BAIXO

---

**Visualização perfeita pra enquadrar os alimentos por dia!** 💪
