markdown# The Compound Lift Engine

A JavaScript-based training load calculator that estimates working weights for compound lifts without requiring a true 1-rep max test.

---

## Introduction

Maximal strength testing is not appropriate for most people starting a new training program. A true 1RM attempt carries real injury risk, requires a high level of technical proficiency, and demands a level of psychological readiness that most novice and intermediate lifters simply do not have yet.

The Compound Lift Engine solves this by using a single submaximal assessment set to estimate training loads. The user lifts a moderate weight for as many clean reps as possible, stopping at the first sign of form breakdown. From that input, the calculator estimates a working max and outputs training weights ready to use on day one.

---

## The Science

### Formula Selection

Not all rep ranges predict 1RM with equal accuracy. This calculator uses two formulas depending on where the assessment set lands.

**Brzycki Formula (fewer than 10 reps)**
1RM = Weight / (1.0278 - (0.0278 × Reps))
Brzycki is well-validated for low rep ranges and is the more accurate choice when the set stays under 10 reps. Accuracy begins to degrade as reps climb, which is why it is not used beyond that threshold.

**Lombardi Formula (10 to 20 reps)**
1RM = Weight × Reps^0.10
Lombardi handles higher rep ranges more reliably than Brzycki. The transition at 10 reps is a standard and defensible breakpoint used across exercise science literature.

Note: Estimates become less precise above 15 reps. At that range, aerobic capacity and mental endurance begin to influence the result more than raw strength. For the most accurate output, aim for an assessment set that lands between 6 and 12 reps.

### The Technical Max Multiplier

The raw formula output is multiplied by **0.95** to produce the adjusted working max used for all training weight calculations.

This multiplier serves two purposes. First, the assessment set ends at form breakdown, not at true muscular failure, so the raw estimate will trend slightly high. Second, starting a program at a modest underestimate is always the safer and smarter approach. Progress built on clean reps compounds faster than progress disrupted by injury or stalled technique.

**Training weight outputs are calculated at:**
- 65% of adjusted max
- 70% of adjusted max
- 75% of adjusted max

---

## Usage

Enter the weight used and the number of reps completed in the assessment set. The calculator handles formula selection automatically.

```js
const result = calculateBaseline(185, 8);

// Returns:
// {
//   adjustedMax:  167,
//   intensity_65: 109,
//   intensity_70: 117,
//   intensity_75: 125
// }
```

**Validation rules:**

| Input | Accepted Range |
|-------|----------------|
| Weight | Any positive number |
| Reps | 1 to 20 |

If reps fall outside the accepted range, the function returns:
```js
{ error: "Rep count must be between 1 and 20 for an accurate estimate." }
```

---

## Files

| File | Description |
|------|-------------|
| `baseline.js` | Core calculation engine |
| `index.html` | Frontend UI |

---

## Disclaimer

The Compound Lift Engine is provided for informational and educational purposes only. It is not medical advice, and it is not a substitute for guidance from a qualified healthcare or fitness professional. All training carries inherent risk. You are solely responsible for your own safety during any exercise or assessment. If you have any injury, medical condition, or concern, consult a licensed professional before beginning a training program. Lift at your own risk.
