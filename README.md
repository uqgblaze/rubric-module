# Rubric Design Fundamentals

An animated, narrated staff workshop for tertiary teaching academics, learning designers, tutors, markers and academic staff. All seven chapters are complete. Allow approximately 73 minutes, including brief practice. Reflection and facilitated discussion may take longer.

## Local preview

From the project root, run:

```powershell
python -m http.server 8766 --bind 127.0.0.1 --directory site
```

Open http://localhost:8766/rubric-design/ in a browser. Alternatively, serve this folder with any static web server. No build step or internet connection is needed to use the delivered resource. Serve over HTTP for reliable narration playback.

For a portable ZIP, extract it, open a terminal in the folder containing `rubric-design`, and run `python -m http.server 8766 --bind 127.0.0.1`. Use the same entry URL above.

## Chapters and controls

- `index.html`: cover and contents; `plan.html`: full book plan.
- `ch01/`: From labels to evidence — approximately 8 minutes.
- `ch02/`: Name the quality of thinking — approximately 10 minutes.
- `ch03/`: Make complexity visible — approximately 11 minutes.
- `ch04/`: Build a descriptor row — approximately 12 minutes.
- `ch05/`: Assess capabilities — approximately 8 minutes.
- `ch06/`: Make every cell accessible — approximately 8 minutes.
- `ch07/`: Calibrate, review, improve — approximately 16 minutes, including a calibration rehearsal, nine-question audit and action plan.
- Each chapter has an animated `index.html` and a responsive `read.html` containing the narration, picture descriptions, practice and worksheet.

Select Start lesson to enable narration. Captions start on. Space pauses or plays; arrows change steps; Shift + arrows change steps during a question. In standard choice questions, number keys answer immediately; Chapter 1’s picture questions use arrows and Enter. After a correct answer, Enter or Continue moves on. Tab reaches controls, C toggles captions, and ? shows keyboard help. Reduced-motion settings suppress diagram movement. On small screens, use the readable chapter link.

The writing activities are unscored. Drafts are stored separately for each chapter in the current browser and at the address where they were saved, when storage is available. Download them as text files to keep a copy. First-attempt question scores last for the current lesson session; restart clears scores. The cover remembers completed chapters in this browser. No accounts or tracking services are used.

## Sources and reuse

Adapted from *Rubric Design Fundamentals*, UQ Business School Learning Design, 2026. Source and authoring files are kept outside this static output. Examples and inquiry-focus settings are illustrative; focus settings are not grading weights. Chapter 2 retains the guide's qualification about validation of Values of Inquiry specifically for descriptor writing. Chapter 3 describes observed response structure without converting SOLO levels automatically into grades. Public institutional guidance was checked on 10 October 2026; consult the linked current guidance for implementation.

The Papermorph runtime and templates are used under the included `PAPERMORPH-LICENSE.txt`. This software licence does not assign a licence to the supplied educational source.
