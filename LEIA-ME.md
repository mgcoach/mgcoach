# 📱 NutriFuel — Como instalar como App no iPhone

## 🚀 Hospedagem em 2 minutos (Netlify Drop — gratuito, sem cadastro)

1. Acesse **https://app.netlify.com/drop**
2. **Arraste a pasta inteira** (com todos os arquivos: `index.html`, `manifest.json`, `sw.js`, ícones e splash screens) para a área indicada
3. Aguarde alguns segundos — o site fica online instantaneamente
4. Você recebe uma URL tipo `https://nome-aleatorio-123.netlify.app`
5. **Importante:** copie essa URL — ela será usada para instalar o app

> Dica: na Netlify você pode renomear o site nas configurações para algo mais bonito como `nutrifuel-matheus.netlify.app`.

## 📲 Instalar no iPhone

1. Abra a URL no **Safari** (precisa ser Safari, não Chrome)
2. Toque no botão **Compartilhar** (ícone de quadrado com seta pra cima)
3. Role e toque em **"Adicionar à Tela de Início"**
4. Confirme o nome ("NutriFuel") e toque em **"Adicionar"**

✅ Pronto! O ícone laranja com a estrela aparecerá na sua tela inicial. Ao tocar, abre em **tela cheia, sem barra do Safari**, com splash screen e tudo — parece app nativo.

## 📲 Instalar no Android

1. Abra a URL no **Chrome**
2. Toque no menu (3 pontos) → **"Instalar app"** ou **"Adicionar à tela inicial"**
3. Confirme

## ✨ Recursos PWA ativados

- ✅ **Funciona offline** depois de aberto pela primeira vez
- ✅ **Ícone customizado** com identidade NutriFuel
- ✅ **Splash screen** ao abrir (em iPhones recentes)
- ✅ **Tela cheia** sem barra do navegador
- ✅ **Cor de status bar** preta combinando com o app
- ✅ **Atualização automática** com prompt quando você publicar nova versão
- ✅ **Cache inteligente** das fontes Google e biblioteca PDF

## 🔄 Como atualizar o app

Quando quiser fazer mudanças no app:

1. Edite o `index.html`
2. **Mude o número de versão** no arquivo `sw.js` (linha 2):
   ```js
   const CACHE_NAME = 'nutrifuel-v3-0-1';  // de v3-0-0 para v3-0-1
   ```
3. Re-arraste a pasta no Netlify Drop (mesma URL é mantida)
4. Os usuários (você e seus pacientes) verão prompt de atualização ao abrir

## 📂 Arquivos do pacote

```
nutrifuel-pwa/
├── index.html              ← App principal
├── manifest.json           ← Configuração PWA
├── sw.js                   ← Service Worker (offline)
├── icon-152.png            ← Ícone iPad
├── icon-167.png            ← Ícone iPad Pro
├── icon-180.png            ← Ícone iPhone (touch)
├── icon-192.png            ← Ícone Android/Web
├── icon-512.png            ← Ícone alta resolução
├── icon-maskable-512.png   ← Ícone Android adaptativo
├── favicon.png             ← Favicon do navegador
└── splash-*.png            ← Splash screens iOS
```

## ⚠️ Limitações conhecidas no iOS

- O iOS limita PWAs a **~50MB de cache** total (suficiente para o app)
- Notificações push não funcionam em PWAs no iOS (só Android)
- Em alguns casos, o iOS "dorme" o app após 7 dias sem uso e re-baixa do cache

## 💡 Alternativas de hospedagem

- **GitHub Pages** — gratuito, requer conta GitHub
- **Vercel** ([vercel.com](https://vercel.com)) — gratuito, deploy via Git
- **Cloudflare Pages** — gratuito, rápido globalmente
- **Firebase Hosting** — gratuito até certo limite

Qualquer hospedagem que sirva HTTPS funciona. **Importante:** PWA precisa de HTTPS pra funcionar (todas as opções acima já oferecem).

---

**NUTRI.FUEL v3.0** · Performance · Nutrição · Ciência
