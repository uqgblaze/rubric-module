window.RD5_DATA = {
  "questions": [
    {
      "id": "c-align",
      "beat": "q1",
      "title": "More than a label",
      "prompt": "A report rubric has three rows that all reward the same causal explanation. Which change would improve alignment?",
      "options": [
        "Rename the rows “Analysis 1”, “Analysis 2” and “Analysis 3”.",
        "Map intended outcomes and evidence, then combine repeated judgements or define genuinely distinct boundaries.",
        "Keep every row because the explanation occurs in different sections."
      ],
      "right": 1,
      "why": "Mapping exposes what each row adds. Combine duplicated judgements or define distinct capabilities that the task actually requires.",
      "wrong": [
        "New labels leave the repeated judgement in place.",
        null,
        "Location alone does not make the assessed quality different. Inspect the descriptors."
      ]
    },
    {
      "id": "c-passage",
      "beat": "q2",
      "title": "One passage, two dimensions",
      "prompt": "One paragraph explains a queue and proposes a staffing change. Which pair can support distinct judgements?",
      "options": [
        "Analysis: causal explanation. Recommendations: the same causal explanation.",
        "Analysis: the paragraph is excellent. Application: it is very good.",
        "Analysis: supported causal explanation. Application: justified response fit and feasibility."
      ],
      "right": 2,
      "why": "The two criteria inspect different qualities. A shared passage is acceptable when their boundaries and evidence requirements are clear.",
      "wrong": [
        "The same quality is being rewarded twice, despite the different row names.",
        "Praise labels do not identify two inspectable dimensions.",
        null
      ]
    },
    {
      "id": "c-weight",
      "beat": "q3",
      "title": "Give weight a reason",
      "prompt": "Why might critical analysis receive 35% in a particular case-study task?",
      "options": [
        "The intended outcome and task emphasise causal reasoning, and the task provides sufficient evidence to judge it.",
        "The source example uses 35%, so every case-study rubric should use it.",
        "The analysis section is the longest, regardless of the intended learning."
      ],
      "right": 0,
      "why": "This connects the weight to intended learning, task emphasis and evidence. The exact percentage remains a local design decision.",
      "wrong": [
        null,
        "The source weights illustrate one structure. They are not a universal rule.",
        "Length alone does not establish the learning importance of a capability."
      ]
    },
    {
      "id": "p-duplicate",
      "beat": "final1",
      "title": "Practice 1 of 3 · Repeated judgement",
      "prompt": "“Literature review” and “Discussion” both award marks for the same explanation of how workload causes queues. What should you inspect first?",
      "options": [
        "Whether the explanation uses enough words to earn both awards.",
        "Whether exactly the same quality is rewarded twice, then combine or distinguish the judgements.",
        "Whether the passage appears under two different headings; that is enough to keep both awards."
      ],
      "right": 1,
      "why": "The judgement, rather than the location, determines the duplication. Distinct dimensions may use the same evidence, but identical rewards need review.",
      "wrong": [
        "Extra words do not establish a second capability.",
        null,
        "Two headings can still conceal the same judgement."
      ]
    },
    {
      "id": "p-label",
      "beat": "final1",
      "title": "Practice 2 of 3 · Test alignment",
      "prompt": "A colleague renames “Conclusion” as “Critical thinking” but keeps the descriptor “summarises the report”. What is the most useful next step?",
      "options": [
        "Accept the new label as proof that the rubric is aligned.",
        "Remove all conclusions from the task because headings are always invalid.",
        "Check the intended outcome, what thinking the descriptor actually elicits, and the evidence students can provide."
      ],
      "right": 2,
      "why": "Alignment needs a defensible link between intended learning, the judged action and evidence. A title alone cannot supply that link.",
      "wrong": [
        "The unchanged descriptor may still miss the intended capability.",
        "Conclusions can serve valid task or genre purposes. Inspect the learning being assessed.",
        null
      ]
    },
    {
      "id": "p-weight",
      "beat": "final1",
      "title": "Practice 3 of 3 · Review weights",
      "prompt": "A task changes from diagnosing a case to designing and justifying a feasible intervention. Which response best reviews the existing 20/35/25/20 weights?",
      "options": [
        "Revisit emphasis, evidence opportunities and criterion overlap; justify weights against the revised outcomes.",
        "Keep the weights because four criteria must always use that distribution.",
        "Give the most marks to whichever section has the most pages."
      ],
      "right": 0,
      "why": "Changed learning and task demands can warrant changed weights. There is no automatic replacement percentage without examining the revised task.",
      "wrong": [
        null,
        "Neither four criteria nor this example dictates a fixed distribution.",
        "Page count does not establish the relative importance of the intended learning."
      ]
    }
  ]
};
