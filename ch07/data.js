window.RD7_DATA = {
  "questions": [
    {
      "id": "c-evidence",
      "beat": "q1",
      "title": "Locate the evidence link",
      "prompt": "In the queue sample, which evidence best supports the stated causal-explanation threshold?",
      "options": [
        "The extract contains two numerical facts, so the threshold is automatically met.",
        "Workload per worker links doubled demand and fixed staffing to a longer queue.",
        "The second marker prefers the more generous judgement."
      ],
      "right": 1,
      "why": "The sample states a mechanism connecting the case factors to the outcome. This supports the supplied criterion threshold; it does not establish a final course grade.",
      "wrong": [
        "Counting facts does not establish a causal relationship. Inspect how the facts are connected.",
        null,
        "Marker preference is not evidence. The judgement needs a link to the stated criterion."
      ]
    },
    {
      "id": "c-profile",
      "beat": "q2",
      "title": "Investigate the pattern",
      "prompt": "An invented course-grade profile clusters at the upper end. What is the best first response?",
      "options": [
        "Inspect work samples, marker consistency, alignment, opportunity to learn and context; check local review requirements.",
        "Lower marks until the profile has a more balanced shape.",
        "Conclude that the rubric must be too easy, because the profile establishes the cause."
      ],
      "right": 0,
      "why": "A distribution is a review signal. Evidence and context are needed to explain it and justify any action; the pattern alone cannot prove its cause or authorise scaling.",
      "wrong": [
        null,
        "A desired cohort shape is not a reason to change evidence-based judgements. Any authorised adjustment follows the relevant process.",
        "Several causes could produce a similar pattern. Inspect evidence before attributing a cause."
      ]
    },
    {
      "id": "c-priority",
      "beat": "q3",
      "title": "Choose by importance",
      "prompt": "An audit reveals one ambiguous threshold that could change judgements and several minor wording edits. How should you prioritise?",
      "options": [
        "Wait until a fixed number of audit answers are negative.",
        "Treat every issue as equally important and count them into a quality score.",
        "Investigate the consequential threshold first, using samples and marker interpretations."
      ],
      "right": 2,
      "why": "The likely effect on defensible judgement makes this threshold a priority. The audit is an unscored reflection; importance and evidence determine follow-up.",
      "wrong": [
        "This audit has no validated numerical diagnostic threshold. One important issue can warrant action.",
        "Counting issues hides differences in their consequences and does not certify rubric quality.",
        null
      ]
    },
    {
      "id": "p-opportunity",
      "beat": "final1",
      "title": "Practice 1 of 3 · Highest-standard opportunity",
      "prompt": "No student demonstrates the highest standard in one cohort. Which statement is justified?",
      "options": [
        "At least one student must receive the highest grade to complete the distribution.",
        "Inspect whether the task permits that standard and what the work demonstrates; a recipient is not required in every cohort.",
        "The absence of a recipient proves that the descriptor is impossible."
      ],
      "right": 1,
      "why": "The task should provide the opportunity to demonstrate the range of standards. Actual judgements still depend on evidence; a gap in the profile alone proves neither attainment nor a design fault.",
      "wrong": [
        "An opportunity is not a quota. Do not award a grade merely to fill the profile.",
        null,
        "The pattern does not establish its cause. Inspect task constraints and work samples."
      ]
    },
    {
      "id": "p-eligibility",
      "beat": "final1",
      "title": "Practice 2 of 3 · Supplementary eligibility",
      "prompt": "A sample narrowly misses one criterion threshold. What can you infer about supplementary assessment eligibility?",
      "options": [
        "The criterion result alone does not decide it; eligibility depends on the final course result and the current procedure and course profile.",
        "The student is automatically eligible because the criterion shortfall is narrow.",
        "The student is automatically ineligible because any shortfall rules it out."
      ],
      "right": 0,
      "why": "Criterion evidence and a final course result are distinct. Official guidance says a course grade of 3 or N may permit eligibility, subject to applicable requirements; check the current procedure and course profile.",
      "wrong": [
        null,
        "A narrow criterion-level shortfall is not an automatic entitlement.",
        "A criterion result cannot establish ineligibility either. Apply the current course and procedural requirements."
      ]
    },
    {
      "id": "p-calibrate",
      "beat": "final1",
      "title": "Practice 3 of 3 · Turn discussion into action",
      "prompt": "Two markers agree that workload per worker is the sample’s causal link. What is the most useful next step?",
      "options": [
        "Stop reviewing, because agreement certifies the rubric’s quality.",
        "Replace the descriptor with “very good analysis” to avoid further disagreement.",
        "Record the evidence and rationale, test the interpretation on another sample, and review any consequential ambiguity."
      ],
      "right": 2,
      "why": "A recorded anchor can support consistency, and another sample tests its use. Calibration and review continue; neither agreement nor this practice score certifies the rubric.",
      "wrong": [
        "Agreement needs a defensible rationale and a check of application. It is not certification.",
        "A praise label removes the observable link that supported the judgement.",
        null
      ]
    }
  ],
  "audit": [
    {
      "id": "student",
      "group": 0,
      "title": "1 · Student action",
      "question": "Can students use the descriptors to improve their work before submission?",
      "hint": "Ask a reader what they would change or check."
    },
    {
      "id": "calibration",
      "group": 0,
      "title": "2 · Marker calibration",
      "question": "Have markers tested and recorded their interpretation using the same work?",
      "hint": "Compare the evidence and rationale, including borderline work."
    },
    {
      "id": "distinctions",
      "group": 0,
      "title": "3 · Observable distinctions",
      "question": "Do adjacent standards differ in evidence that can be inspected?",
      "hint": "Look for a change in performance, beyond stronger praise."
    },
    {
      "id": "alignment",
      "group": 1,
      "title": "4 · Capability alignment",
      "question": "Do the criteria judge intended capabilities, with clear boundaries?",
      "hint": "Check task and outcome alignment and possible double counting."
    },
    {
      "id": "progression",
      "group": 1,
      "title": "5 · Coherent progression",
      "question": "Does each row show a coherent, task-appropriate change in performance?",
      "hint": "Keep the intended capability stable; avoid an automatic SOLO grade ladder."
    },
    {
      "id": "qualities",
      "group": 1,
      "title": "6 · Relevant qualities",
      "question": "Are the qualities that matter here made explicit in actions and evidence?",
      "hint": "For example, show what relevance, depth or precision means in this task."
    },
    {
      "id": "standalone",
      "group": 2,
      "title": "7 · Understandable wording",
      "question": "Can a reader understand each complete cell without hidden assumptions?",
      "hint": "Check terms, idioms, and wording that depends on another cell."
    },
    {
      "id": "below",
      "group": 2,
      "title": "8 · Below-threshold distinctions",
      "question": "Are meaningful differences below the threshold described as performance?",
      "hint": "Separate criterion evidence from final grades and supplementary eligibility."
    },
    {
      "id": "patterns",
      "group": 2,
      "title": "9 · Grade patterns in context",
      "question": "Have patterns been reviewed with work, marking consistency and local requirements?",
      "hint": "Include alignment, opportunity to learn and context; document justified follow-up."
    }
  ],
  "case": {
    "criterion": "Explains how two case factors interact to produce an outcome, using case evidence.",
    "threshold": "Threshold: a causal connection between two factors and the outcome, with relevant case detail.",
    "beyond": "Additional requirement at the next standard: tests the explanation against a plausible alternative using evidence.",
    "sample": "On Friday, orders doubled while staffing stayed at three. Because each worker had to prepare more orders, the queue lengthened.",
    "markerA": "Not yet at the threshold: “orders doubled” and “three staff” look like two separate facts. Is the causal mechanism explicit?",
    "markerB": "Threshold supported: “each worker had to prepare more orders” links doubled demand and fixed staffing to the queue.",
    "interpretation": "The workload per worker is the stated mechanism. It connects demand and fixed staffing to the queue, using case detail. The threshold is supported in this extract. No alternative explanation is tested, so the additional requirement is not demonstrated."
  }
};
