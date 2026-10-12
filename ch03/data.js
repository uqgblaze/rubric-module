window.RD3_DATA = {
  "questions": [
    {
      "id": "c-list",
      "beat": "q1",
      "title": "Several aspects",
      "prompt": "Task: explain long queues. Response: “There is one adviser at lunch. Many students arrive then. Consultations take time.” Which structure is visible?",
      "options": [
        "Uni-structural",
        "Multi-structural",
        "Relational"
      ],
      "right": 1,
      "why": "Several relevant aspects are identified independently. The response has not explained how they interact.",
      "wrong": [
        "More than one relevant aspect is present.",
        null,
        "The reader could infer links, but the response has not made them. Classify the supplied evidence."
      ]
    },
    {
      "id": "c-transfer",
      "beat": "q2",
      "title": "A justified extension",
      "prompt": "A response explains the queue, derives a demand–capacity principle, then applies it to online appointments while testing arrival patterns and consultation times. Which structure is visible?",
      "options": [
        "Multi-structural",
        "Relational only",
        "Extended abstract"
      ],
      "right": 2,
      "why": "The response abstracts a principle, transfers it, and tests relevant conditions. The extension is justified beyond the original case.",
      "wrong": [
        "The aspects are connected and used to develop an extension.",
        "It includes relational reasoning, then goes beyond the original case through justified generalisation.",
        null
      ]
    },
    {
      "id": "c-threshold",
      "beat": "q3",
      "title": "The same list, a different requirement",
      "prompt": "The published criterion requires an evidence-supported explanation of how queues form. A response only lists staffing, arrivals and consultation time. What is the sound judgement?",
      "options": [
        "Multi-structural always earns a pass.",
        "The response still needs supported relationships to meet this stated requirement.",
        "Any longer version of the list will meet the requirement."
      ],
      "right": 1,
      "why": "The gap is the explanation required by this criterion. A SOLO label does not settle the grade.",
      "wrong": [
        "A structure is not an automatic grade. Read the task and criterion.",
        null,
        "More length does not necessarily supply the missing relationships."
      ]
    },
    {
      "id": "p-missing",
      "beat": "final1",
      "title": "Practice 1 of 3",
      "prompt": "Task: explain long queues. The entire response is: “The service logo is blue and looks modern.” Which structure is visible?",
      "options": [
        "Pre-structural",
        "Uni-structural",
        "Multi-structural",
        "Relational",
        "Extended abstract"
      ],
      "right": 0,
      "why": "The response misses the queue explanation task. The logo observation supplies no relevant aspect here.",
      "wrong": [
        null,
        "A relevant aspect of the queue problem would be needed.",
        "Several relevant aspects are not present.",
        "There is no explanation of the queue.",
        "There is no justified generalisation or transfer."
      ]
    },
    {
      "id": "p-one",
      "beat": "final1",
      "title": "Practice 2 of 3",
      "prompt": "For the same task, the entire response is: “Only one adviser works at lunch.” Which structure is visible?",
      "options": [
        "Pre-structural",
        "Uni-structural",
        "Multi-structural",
        "Relational",
        "Extended abstract"
      ],
      "right": 1,
      "why": "One relevant staffing aspect is identified. No relationship to another aspect is explained.",
      "wrong": [
        "Staffing is relevant to the task.",
        null,
        "The response presents one relevant aspect, not several independent ones.",
        "A relationship between aspects is not yet explained.",
        "No broader principle or justified extension is developed."
      ]
    },
    {
      "id": "p-linked",
      "beat": "final1",
      "title": "Practice 3 of 3",
      "prompt": "“Records show arrivals exceed completed consultations at lunch. With only one adviser available, demand exceeds capacity, so the waiting queue grows.” Which structure is visible?",
      "options": [
        "Pre-structural",
        "Uni-structural",
        "Multi-structural",
        "Relational",
        "Extended abstract"
      ],
      "right": 3,
      "why": "Relevant aspects are connected into a case-supported explanation. It stays within this case, with no justified extension to a broader principle or new context.",
      "wrong": [
        "This response addresses the queue task.",
        "It connects multiple relevant aspects.",
        "The aspects are not merely listed: their relationship explains the queue.",
        null,
        "It explains this case but does not develop and test a generalisation beyond it."
      ]
    }
  ]
};
