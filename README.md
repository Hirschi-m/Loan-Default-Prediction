# Predicting Default — project website

Responsive, dependency-free project portfolio for Marjorie Hirschi's Boston University DX799 O2 capstone. Built from the supplied April 19, 2026 technical and business report. No notebooks or raw loan records are included yet.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `loan-default-prediction`.
2. Upload the **contents** of this folder to its root, keeping `index.html` at the top level. Include `assets/`, `notebooks/` and `.nojekyll`.
3. In the repository, open **Settings → Pages**. Select **Deploy from a branch**, choose `main` and `/ (root)`, and save.
4. Open the Pages URL shown by GitHub after deployment completes.

All links are relative, supporting both user and project Pages sites. No package installation, build system, API keys or external assets are needed. The source report is downloadable and will be publicly accessible if you publish a public site.

## Preview locally

Run `python -m http.server 8000` from this folder and open `http://localhost:8000`.

## Add the Jupyter notebooks

1. Put the actual `.ipynb` files in `notebooks/`. Review outputs for private data and credentials before publication.
2. Edit `assets/notebooks.js`. For each item, replace `path:null` with its relative notebook path, such as `path:'notebooks/analysis.ipynb'`. Change titles/descriptions to match the supplied files; the current three-part organization is provisional.
3. For a readable browser version, export with `jupyter nbconvert --to html notebooks/analysis.ipynb`. Set the matching `html` value to `'notebooks/analysis.html'`.
4. Commit and push. Download links replace pending labels automatically; read links appear only when an HTML path is configured. GitHub Pages serves exported HTML but does not execute notebooks.

## Content and evidence

Metrics are transcribed from the report: Elastic Net recall 91.5%, ROC-AUC 0.964, accuracy 91.4%; weighted Gradient Boosting recall ~92%, ROC-AUC ~0.94, accuracy ~91%. Precision is reported at approximately 54%. No metric has been independently reproduced.

The report contains a sentence claiming Gradient Boosting has the higher ROC-AUC despite its numerical results showing otherwise. The website follows the numerical results. Its economic appendix also uses $77k as loan principal, whereas the data overview identifies ~$15k loans and ~$77k annual income. The site marks the business projections as illustrative and discloses the discrepancy instead of promoting them as established outcomes.

Housing-related clustering is described as correlational. Next-step recommendations are clearly separated from completed work. Notebook verification, outcome-label review, preprocessing checks and later-cohort validation remain future work.

## Files

- `index.html`: project narrative and sections
- `assets/style.css`: responsive styling
- `assets/app.js`: notebook link rendering
- `assets/notebooks.js`: editable notebook catalog
- `assets/project-report.docx`: unmodified supplied report
- `notebooks/`: add actual notebooks and exported HTML here

No license is assumed for the original report, dataset or future notebooks. Add appropriate licensing when their distribution terms are established.
