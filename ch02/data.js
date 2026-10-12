window.RD2_DATA = {
  "values": [
    {
      "id": "clarity",
      "name": "Clarity",
      "definition": "Help the audience understand what you mean."
    },
    {
      "id": "accuracy",
      "name": "Accuracy",
      "definition": "Represent information correctly and faithfully."
    },
    {
      "id": "precision",
      "name": "Precision",
      "definition": "Use specific, intentional language to reduce ambiguity."
    },
    {
      "id": "depth",
      "name": "Depth",
      "definition": "Develop explanations and deal with relevant complexity."
    },
    {
      "id": "breadth",
      "name": "Breadth",
      "definition": "Consider a range of directly relevant views or alternatives."
    },
    {
      "id": "relevance",
      "name": "Relevance",
      "definition": "Choose information that develops the point at issue."
    },
    {
      "id": "significance",
      "name": "Significance",
      "definition": "Identify and develop the most important issues."
    },
    {
      "id": "coherence",
      "name": "Coherence",
      "definition": "Make the reasoning logical, with ideas supporting the conclusion."
    }
  ],
  "tasks": [
    {
      "id": "quant",
      "name": "Quantitative analysis",
      "purpose": "Interpret a survey estimate for a service team.",
      "focus": [
        "accuracy",
        "precision"
      ],
      "examples": {
        "clarity": "Define “delayed feedback” so the service team can interpret the estimate.",
        "accuracy": "Report the survey result faithfully, without extending the claim from respondents to all students.",
        "precision": "State the estimate’s unit, the respondent group and the period it describes.",
        "depth": "Explain how non-response could affect the interpretation of the estimate.",
        "breadth": "Compare relevant subgroup results before relying on an overall estimate.",
        "relevance": "Select survey items that directly inform the service question being investigated.",
        "significance": "Explain which finding most affects the service decision and why.",
        "coherence": "Show how the reported result supports the interpretation, including its limitations."
      }
    },
    {
      "id": "stake",
      "name": "Stakeholder analysis",
      "purpose": "Recommend a feasible service change.",
      "focus": [
        "breadth",
        "significance"
      ],
      "examples": {
        "clarity": "Define the proposed change so staff and service users can understand what would happen.",
        "accuracy": "Represent each stakeholder’s stated concerns faithfully, without inventing consensus.",
        "precision": "Specify who would do what, at which stage of the proposed service change.",
        "depth": "Explain how a staffing constraint affects the recommendation and address the trade-off it creates.",
        "breadth": "Compare relevant staff and service-user perspectives, including a reason for preferring an option.",
        "relevance": "Link each stakeholder concern to the service change being recommended.",
        "significance": "Justify why the staffing constraint is decisive for the recommendation.",
        "coherence": "Connect stakeholder evidence to the reasons for the recommended option."
      }
    },
    {
      "id": "review",
      "name": "Literature review",
      "purpose": "Explain competing accounts of delayed feedback.",
      "focus": [
        "depth",
        "relevance",
        "coherence"
      ],
      "examples": {
        "clarity": "Define the competing explanations so a reader can distinguish their claims.",
        "accuracy": "Represent each study’s claim and limitations faithfully.",
        "precision": "Distinguish workload, response time and feedback quality rather than treating them as synonyms.",
        "depth": "Explain how differences in study context could account for conflicting findings.",
        "breadth": "Compare relevant alternative explanations, including evidence that challenges the preferred account.",
        "relevance": "Explain how each selected study bears on the review question.",
        "significance": "Justify which unresolved issue most affects the review’s conclusion.",
        "coherence": "Build a connected explanation from the studies rather than a sequence of unrelated summaries."
      }
    }
  ],
  "questions": [
    {
      "id": "c-precision",
      "beat": "q1",
      "title": "Make the scope specific",
      "prompt": "Which revision most directly specifies who, how many and when?",
      "options": [
        "Define “delayed feedback” for the audience.",
        "Write “Among 40 survey respondents, 18 reported delayed feedback in semester 1.”",
        "Correct “all students” to match the source’s “some respondents”."
      ],
      "right": 1,
      "why": "The revision specifies the group, count and period. That makes precision visible; clarity may improve too.",
      "wrong": [
        "Defining the term most directly supports clarity. Look for the revision that specifies the group, count and period.",
        null,
        "Correcting a distorted claim most directly supports accuracy. Look for the revision that makes the scope specific."
      ]
    },
    {
      "id": "c-depth",
      "beat": "q2",
      "title": "Make depth visible",
      "prompt": "For a feasible service recommendation, which statement describes evidence of depth?",
      "options": [
        "Provides a long discussion of the service.",
        "Demonstrates deep understanding of the problem.",
        "Explains how the staffing constraint affects the recommendation and addresses the trade-off it creates."
      ],
      "right": 2,
      "why": "The explanation deals with a relevant complication and its consequence. The marker can locate that reasoning.",
      "wrong": [
        "Length alone does not tell us whether complexity is addressed.",
        "“Deep understanding” names a quality without describing the work that demonstrates it.",
        null
      ]
    },
    {
      "id": "c-overlap",
      "beat": "q3",
      "title": "Use the overlap",
      "prompt": "A passage compares relevant stakeholder perspectives. How can the values help you describe its quality?",
      "options": [
        "Describe the comparison and its relevance to the decision; one passage can express both values.",
        "Give one separate mark for each value named in the passage.",
        "Replace the descriptor with “demonstrates breadth and relevance”."
      ],
      "right": 0,
      "why": "Values can work together in the same evidence. Describe the task-specific reasoning, and avoid automatic double counting.",
      "wrong": [
        null,
        "Overlap is a reason to check for duplicate assessment, not to award extra marks automatically.",
        "Naming values alone leaves the expected evidence undefined. Say what students compare and why it matters."
      ]
    },
    {
      "id": "p-precision",
      "beat": "final1",
      "title": "Precision in context",
      "prompt": "Students interpret a survey estimate. Which requirement gives precision a useful local meaning?",
      "options": [
        "Always report six decimal places.",
        "State the estimate’s unit, respondent group and time period.",
        "Use highly sophisticated terminology throughout."
      ],
      "right": 1,
      "why": "Units, group and period clarify what the estimate actually describes. The detail serves the task.",
      "wrong": [
        "Extra decimal places can imply unsupported precision. Choose detail that removes relevant ambiguity.",
        null,
        "Complex terminology can obscure meaning. Specify which detail the task needs."
      ]
    },
    {
      "id": "p-relevance",
      "beat": "final1",
      "title": "Relevance to the decision",
      "prompt": "Which evidence directly supports deciding whether a proposed service change is feasible?",
      "options": [
        "An accurate history of the organisation’s logo.",
        "A long list of service facts with no connection to the proposal.",
        "A staffing schedule showing whether the proposed hours can be covered."
      ],
      "right": 2,
      "why": "The staffing schedule bears directly on whether the proposal can operate. Explain that connection in the response.",
      "wrong": [
        "Accuracy does not make this fact relevant to the feasibility decision.",
        "More information does not establish relevance. Its connection to the proposal needs to be shown.",
        null
      ]
    },
    {
      "id": "p-significance",
      "beat": "final1",
      "title": "Find what matters most",
      "prompt": "Several issues are relevant to a service decision. What would make significance observable?",
      "options": [
        "Identify the decisive constraint and justify why it matters most for this decision.",
        "Give every related detail exactly the same space.",
        "Repeat the preferred issue more often than the others."
      ],
      "right": 0,
      "why": "The response identifies importance and gives a task-specific reason. Significance is more than being related to the topic.",
      "wrong": [
        null,
        "Equal space can hide which issue is decisive. The response should justify its priorities.",
        "Repetition does not justify importance. Explain the issue’s consequence for the decision."
      ]
    }
  ]
};
