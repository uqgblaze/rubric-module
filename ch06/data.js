window.RD6_DATA = {
  "questions": [
    {
      "id": "c-preserve",
      "beat": "q1",
      "title": "Preserve the requirement",
      "prompt": "This task requires logical, evidence-supported recommendations AND innovation, defined as a justified change to current practice. Which revision preserves that standard?",
      "options": [
        "Recommendations follow from the analysis and use evidence.",
        "Recommendations follow from the analysis, use evidence, and explain how and why the proposed change improves current practice.",
        "Recommendations are outstanding and highly innovative."
      ],
      "right": 1,
      "why": "The revision makes logic, evidence and the defined innovation demand inspectable. Check its meaning against the task before finalising the wording.",
      "wrong": [
        "This is clearer, but the intended innovation requirement has disappeared.",
        null,
        "Praise and an undefined label do not make the required performance explicit."
      ]
    },
    {
      "id": "c-term",
      "beat": "q2",
      "title": "Keep the term, explain the action",
      "prompt": "Sensitivity testing is an intended disciplinary method in this task. How should you make the descriptor accessible?",
      "options": [
        "Remove the method because technical language is always inaccessible.",
        "Keep “excellent sensitivity testing” and expect readers to infer the standard.",
        "Define the method at first use; describe the comparisons and implications the student must show."
      ],
      "right": 2,
      "why": "A useful technical term can remain. An accessible definition and observable expectations explain the method without lowering the demand.",
      "wrong": [
        "Removing an intended method changes the standard rather than clarifying it.",
        "A praise word does not explain the action or evidence expected.",
        null
      ]
    },
    {
      "id": "c-count",
      "beat": "q3",
      "title": "Use counts with a reason",
      "prompt": "A task justifies a requirement to draw on at least 12 peer-reviewed sources. What follows from meeting that count?",
      "options": [
        "The count is met; relevant use, evaluation or synthesis must still be judged where the criterion requires them.",
        "The submission automatically meets a universal Pass threshold.",
        "Every additional source necessarily raises the quality of the analysis."
      ],
      "right": 0,
      "why": "A justified local count and a quality judgement answer different questions. The source example does not set a universal threshold.",
      "wrong": [
        null,
        "Twelve is a task-specific illustration, not a universal Pass rule or an automatic grade.",
        "More sources do not necessarily improve their relevance, evaluation or integration."
      ]
    },
    {
      "id": "p-idiom",
      "beat": "final1",
      "title": "Practice 1 of 3 · Replace an idiom",
      "prompt": "The intended criterion is a recommendation that addresses the diagnosed issue. Which wording replaces “hits the mark” most directly?",
      "options": [
        "The recommendation is impressive and on point.",
        "The recommendation identifies which diagnosed cause it addresses and explains how the proposed action responds to it.",
        "The recommendation uses fewer words."
      ],
      "right": 1,
      "why": "The revision states an inspectable relationship between the diagnosed cause and the proposed action. It removes the idiom without inventing a different criterion.",
      "wrong": [
        "These are more evaluative labels and idiomatic wording.",
        null,
        "Brevity alone does not demonstrate that the recommendation addresses the issue."
      ]
    },
    {
      "id": "p-cell",
      "beat": "final1",
      "title": "Practice 2 of 3 · Make a cell stand alone",
      "prompt": "Which cell can be interpreted without consulting the neighbouring grade cell?",
      "options": [
        "As Credit, with stronger insight.",
        "Meets all the previous requirements and goes further.",
        "Explains how workload and staffing interact to cause the queue, supports the explanation with case evidence, and considers a plausible alternative cause."
      ],
      "right": 2,
      "why": "The cell states its own action and evidence. Its grade meaning remains local to this task; it does not require comparison with another cell.",
      "wrong": [
        "The reader still needs the Credit cell, and “stronger insight” is vague.",
        "Both “previous requirements” and “goes further” depend on missing information.",
        null
      ]
    },
    {
      "id": "p-quality",
      "beat": "final1",
      "title": "Practice 3 of 3 · Inspect quality",
      "prompt": "Two reports cite 12 peer-reviewed sources. This criterion also requires evaluating evidence relevant to the recommendation. What should the marker inspect?",
      "options": [
        "How each report evaluates relevant evidence and uses it to justify the recommendation.",
        "Only whether the bibliography has exactly 12 entries.",
        "Which report has more complex sentences."
      ],
      "right": 0,
      "why": "The quality judgement follows the stated criterion. Equal counts do not establish equal performance in evaluating and using evidence.",
      "wrong": [
        null,
        "A bibliography count does not show the required evaluation or use of evidence.",
        "Sentence complexity is not the intended quality and can obscure meaning."
      ]
    }
  ],
  "variants": [
    {
      "id": "short",
      "label": "A · Shorter, but incomplete",
      "text": "Recommendations follow logically from the analysis; each is justified with case evidence.",
      "explicit": [
        "Logical link to analysis",
        "Evidence for each recommendation"
      ],
      "retained": [
        true,
        true,
        false
      ],
      "inspection": "Logic and evidence are explicit. The intended change to current practice is absent, so the innovation demand has been lost. Clearer wording alone does not preserve the whole standard."
    },
    {
      "id": "labels",
      "label": "B · More evaluative wording",
      "text": "Recommendations are coherent, evidence-based and highly innovative.",
      "explicit": [
        "Names three qualities, without showing the expected actions"
      ],
      "retained": [
        false,
        false,
        false
      ],
      "inspection": "The labels gesture towards the standard, but do not specify the logical link, how evidence supports each recommendation, or what innovation means here. “Highly” does not provide an observable difference."
    },
    {
      "id": "complete",
      "label": "C · Explicit and complete",
      "text": "Recommendations follow logically from the analysis; each is justified with case evidence. Explains how the solution changes current practice and why that change addresses the issue.",
      "explicit": [
        "Logical link to analysis",
        "Evidence for each recommendation",
        "What changes in current practice and why it addresses the issue"
      ],
      "retained": [
        true,
        true,
        true
      ],
      "inspection": "All three intended requirements are explicit. The longer wording preserves the local innovation demand. Still test the cell with sample work: a clear descriptor supports judgement but cannot guarantee agreement."
    }
  ]
};
