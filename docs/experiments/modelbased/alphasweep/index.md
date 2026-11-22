# Model-Based Decay-Rate (\(\alpha\)) Sweep

In the baseline experiments (\(\alpha = 0.98\), \(\gamma = 0.5\)), the guaranteed-cost controller (\(\hat{K}_\gamma\)) successfully balanced the pendulum, whereas the guaranteed gain error controller (\(\bar{K}_\gamma\)) lost the servo to drift despite having a lower theoretical cost and the same nominal decay-rate certificate.

To understand why this happens—and to map the practical operating limits of both designs—the guaranteed decay rate \(\alpha\) is swept while keeping all other baseline parameters fixed. Specifically, this sweep answers four questions:

1. Does there exist an \(\alpha \in (0, 1)\) for which \(\bar{K}_\gamma\) avoids servo drift?
2. Does there exist an \(\alpha \in (0, 1)\) for which \(\hat{K}_\gamma\) experiences servo drift?
3. What is the practical lower limit \(\alpha_{\text{lim}}\) below which actuator saturation (\(\pm 10\text{ V}\)) prevents disturbance recovery?
4. Is there a common window \(\alpha_{\text{conv}}\) where both designs balance, avoid drift, and avoid saturation?

### Fixed Parameters
Unless otherwise specified, all controllers in the \(\alpha\)-sweep were synthesized using:

- **Sample Time (\(T_s\)):** 10 ms
- **Discount Factor (\(\gamma\)):** 0.5 (optimal closed loop is unstable with \(\rho(A + B K^\star_\gamma) \approx 1.11\))
- **State Cost (\(Q\)):** \(\text{diag}(100, 30, 10, 1)\)
- **Input Cost (\(R\)):** 10
- **Swept Parameter (\(\alpha\)):** \([0.80, 1.50]\) (theoretical) and \(0.99 \to 0.94\) (hardware)

---

## 1. Hardware Robustness Test: Guaranteed Cost (\(\hat{K}_\gamma\))
The guaranteed-cost controller is tested on the Quanser QUBE-Servo 2 from \(\alpha = 0.99\) down to \(\alpha = 0.94\) under manual impulsive pushes to determine its disturbance-rejection range and saturation limit.

* **Observation:** Shows **no servo drift** across the tested range and recovers cleanly down to \(\alpha = 0.965\) (\(\hat{\alpha}_{\text{lim}} \approx 0.965\)). Below \(\alpha = 0.965\), actuator saturation induces sustained oscillations (\(\alpha = 0.96\)), and by \(\alpha = 0.94\) the controller becomes unstable immediately at calibration.
* **Included Videos:** \(\alpha = 0.965\), \(\alpha = 0.96\), and \(\alpha = 0.94\).

[**View the Guaranteed Cost \(\alpha\)-Sweep Experiments**](guaranteedcostsweep.md)

---

## 2. Hardware Robustness Test: Guaranteed Gain Error (\(\bar{K}_\gamma\))
The guaranteed gain error controller is tested over the same \(\alpha \in [0.94, 0.99]\) range to determine whether enforcing a faster decay rate eliminates the servo drift seen in the baseline.

* **Observation:** Servo drift disappears once \(\alpha \le 0.975\), and pushes are recovered down to \(\alpha = 0.96\) (\(\bar{\alpha}_{\text{lim}} \approx 0.96\)). Notably, both \(\hat{K}_\gamma\) and \(\bar{K}_\gamma\) lose robustness at the same pendulum-gain threshold (\(|K_\phi| \approx 24\text{ V/rad}\)), even though their nominal \(\alpha\) differs by \(0.01\).
* **Included Videos:** \(\alpha = 0.965\) and \(\alpha = 0.96\).

[**View the Guaranteed Gain Error \(\alpha\)-Sweep Experiments**](guaranteedgainsweep.md)