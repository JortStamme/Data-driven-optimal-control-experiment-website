# Model-Based Baseline Controllers

Before performing extensive parameter sweeps, the three proposed model-based control strategies were implemented and tested on the Quanser QUBE-Servo 2 using a nominal set of baseline parameters.

### Baseline Parameters
Unless otherwise specified, the controllers in this section were synthesized using the following parameters:

- **Sample Time (\(T_s\)):** 10 ms
- **Discount Factor (\(\gamma\)):** 0.5
- **Guaranteed Decay Rate (\(\alpha\)):** 0.98
- **State Cost (\(Q\)):** \(\text{diag}(100, 30, 10, 1)\)
- **Input Cost (\(R\)):** 10

Below, you can explore the videos, theoretical guarantees, and experimental observations for each specific controller. 

---

## Guaranteed Cost Design (\(\hat{K}_\gamma\))
This approach synthesizes a gain by solving a convex optimization problem that minimizes an upper bound on the cost of the closed-loop system, ensuring the system decays at the prescribed rate \(\alpha\).

*   **Observation:** Successfully balances the pendulum and keeps the servo relatively stationary without hitting actuator saturation limits.

[**View the Guaranteed Cost Controller Experiment**](guaranteed-cost.md)

---

## Guaranteed Gain Error Design (\(\bar{K}_\gamma\))
Instead of bounding the cost directly, this design aims to find a stabilizing gain that is as close as possible (in the spectral norm sense) to the optimal—but unstable—discounted gain \(K^\star_\gamma\).

*   **Observation:** While it successfully balances the pendulum, the hardware tests reveal significant **servo drift/wandering** at this specific \(\alpha\) value, highlighting a limitation that is explored further in the \(\alpha\)-sweep.

[**View the Guaranteed Gain Error Controller Experiment**](guaranteedgainerror.md)

---

## Stabilizing Policy Iteration (sPI)
The sPI algorithm is an iterative approach (a variant of policy iteration) that improves a stabilizing gain step-by-step. It uses a convex combination of the previous gain and the standard policy improvement step to ensure every iteration remains stabilizing with respect to \(\alpha\).

*   **Observation:** Shows monotonic theoretical cost improvement, though the final stability margin ends up resting exactly on the boundary of the allowed decay rate \(\alpha\).

[**View the sPI Controller Experiments**](sPI.md)