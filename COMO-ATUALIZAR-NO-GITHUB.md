# 🥗 NUTRI.FUEL v3.1 — Ciclagem + Divisão + WhatsApp

**Data:** Maio 2026

---

## 🆕 NOVIDADES DA V3.1

### 1. 🔥 Ciclagem de Carboidratos (3 dias)
Configure 3 perfis de dia e o app calcula automaticamente:
- **Dia ALTO** (treino pesado) — ex: 5g/kg de carbo
- **Dia MÉDIO** (treino leve) — ex: 3.5g/kg
- **Dia BAIXO** (descanso) — ex: 2g/kg

**Como usar:**
1. Aba "TMB · GET" → calcula metas como sempre
2. Vai para aba "Plano" 
3. Marca o checkbox "**Ativar ciclagem**"
4. Define o **carbo (g/kg)** de cada dia
5. Proteína e gordura ficam iguais nos 3 dias
6. Aparece um **seletor de dia** acima das refeições — escolhe qual dia editar

### 2. 🍽️ Divisão de Kcal por Refeição
Configure quanto % das kcal vai pra cada refeição:
- Café 30% / Almoço 30% / Lanche 20% / Jantar 20% (4 refeições)
- 5 templates pré-prontos + Personalizado

**Como usar:**
1. Aba "Plano" → checkbox "**Ativar divisão %**"
2. Escolhe um template OU define % manualmente
3. Cada refeição mostra **meta de kcal** automaticamente
4. Conforme você adiciona alimentos, mostra:
   - ✓ "Bateu a meta!" (verde)
   - ↑ "X kcal restantes" (laranja)
   - ⚠️ "+X kcal acima" (vermelho)

### 3. 📲 Salvar para WhatsApp (HTML)
Mesmo sistema do TRAIN.FUEL! Gera arquivo HTML standalone que:
- ✅ **Funciona no WhatsApp** (CSS :target, sem onclick)
- ✅ Mostra os 3 dias (se ciclagem ativa) ou 1 dia
- ✅ Cada refeição com **meta % visível**
- ✅ **Substituições clicáveis** em modal
- ✅ Visual TRAIN.FUEL (preto + laranja)
- ✅ Funciona offline

**Como usar:**
1. Monta o plano normalmente
2. Aba "Exportar" → **📲 Salvar para WhatsApp (HTML)**
3. Anexa no WhatsApp do paciente
4. Paciente abre e usa direto no celular

---

## 🖥️ COMO ATUALIZAR

1. Baixe `nutrifuel-pwa-v3-1.zip` e descompacte
2. `github.com/mgcoach/mgcoach` → seu repo
3. **Add file → Upload files** → arraste TODOS os arquivos da pasta
4. **Replace** quando perguntar
5. Commit message: `v3.1 - ciclagem, divisão e exportação HTML`
6. **Commit changes**
7. Aguarde 1-2 min, abra em **modo incógnito** (Ctrl+Shift+N)
8. Cabeçalho mostra **VERSÃO 3.1**

---

## 🧪 TESTE COMPLETO

### Teste 1 — Ciclagem
1. Aba TMB → preenche dados, calcula metas, aplica
2. Aba Plano → ativa "Ciclagem"
3. Define: Alto 5.0 / Médio 3.5 / Baixo 2.0
4. Vê os 3 cards calcularem automaticamente
5. Adiciona alimentos no dia ALTO
6. Troca pra dia MÉDIO/BAIXO no seletor → quantidades de carbo se ajustam

### Teste 2 — Divisão
1. Ainda na aba Plano → ativa "Divisão %"
2. Escolhe template "5 refeições"
3. Vê % e kcal de cada refeição
4. Adiciona alimentos → vê o indicador verde/laranja/vermelho

### Teste 3 — Exportar WhatsApp
1. Aba Exportar → **📲 Salvar para WhatsApp (HTML)**
2. Arquivo `Plano-Nome-DATA.html` baixa
3. Clica duplo → abre no Chrome
4. Vê os 3 dias completos
5. Clica em "⇄ Substituições" → modal abre com alternativas
6. Manda no WhatsApp pra um paciente teste → funciona igual!

---

**Tudo pronto pra usar com seus pacientes hoje!** 💪
