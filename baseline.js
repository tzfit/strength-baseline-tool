function calculateBaseline(weight, reps) {
    if (!weight || weight <= 0 || !reps || reps <= 0 || reps > 20) {
        return { error: "Rep count must be between 1 and 20 for an accurate estimate." };
    }

    let raw1RM;
    if (reps < 10) {
        raw1RM = weight / (1.0278 - (0.0278 * reps));
    } else {
        raw1RM = weight * Math.pow(reps, 0.10);
    }

    const adjMax = raw1RM * 0.95;

    return {
        adjustedMax: parseFloat(adjMax.toFixed(1)),
        intensity_65: parseFloat((adjMax * 0.65).toFixed(1)),
        intensity_70: parseFloat((adjMax * 0.70).toFixed(1)),
        intensity_75: parseFloat((adjMax * 0.75).toFixed(1))
    };
}
