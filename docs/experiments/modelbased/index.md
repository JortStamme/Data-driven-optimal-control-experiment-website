# Model-Based Controller Experiments

This section presents the experimental validation of the model-based control methods investigated during the research internship. 

Because the optimal discounted LQR controller is often unstable on the actual hardware (for discount factors like \(\gamma = 0.5\)), we designed and tested alternative state-feedback controllers. These controllers enforce a guaranteed decay rate (\(\alpha\)) using Linear Matrix Inequalities (LMIs) while remaining as close to optimal as possible.

The experiments follow a chronological progression, moving from initial baseline tests to detailed parameter sweeps to find the physical limits of the Quanser QUBE-Servo 2.

---

## 1. Baseline Controllers

The first experiments conducted on the hardware test the three primary controller designs at a nominal setting (\(\alpha = 0.98, \gamma = 0.5\)). These tests evaluate disturbance rejection and steady-state behavior. A key observation from these baseline tests is that while the pendulum is stabilized, the guaranteed gain error design experiences severe **servo drift**, prompting further investigation.

[**View Baseline Controller Experiments**](baseline/index.md)

---

## 2. Decay Rate (\(\alpha\)) Sweep

Following the baseline experiments, a crucial question arose: *Is the servo drift a fundamental flaw of the controller, or just a result of the chosen decay rate \(\alpha\)?* 

This set of experiments sweeps the decay rate \(\alpha\) from 0.99 down to 0.94 to find the practical operating window. We observe three distinct regimes on the hardware:
1. **Large \(\alpha\) (\(\ge 0.98\)):** Pendulum is stable, but the servo wanders (drift).
2. **Intermediate \(\alpha\) (\(\approx 0.965 - 0.975\)):** The "sweet spot" where both the pendulum and servo converge nicely.
3. **Small \(\alpha\) (\(\le 0.96\)):** The controller becomes too aggressive, hitting the actuator voltage saturation limit (\(\pm 10\) V) and causing limit-cycle oscillations.

[**View \(\alpha\)-Sweep Experiments**](alphasweep/index.md)

---

## 3. Discount Factor (\(\gamma\)) Sweep

Once the optimal decay rate window was identified (\(\alpha = 0.97\)), a final set of experiments was conducted to test the effect of the discount factor \(\gamma\). 

These experiments vary \(\gamma\) between 0.2 and 0.9 to answer how the loop's behavior changes depending on how heavily we discount the future. We observe that the guaranteed-cost design (\(\hat{K}_\gamma\)) is highly sensitive to \(\gamma\) and saturates at high values, while the guaranteed-gain error design (\(\bar{K}_\gamma\)) remains largely independent of \(\gamma\) due to active constraints.

[**View \(\gamma\)-Sweep Experiments**](gammasweep/index.md)
