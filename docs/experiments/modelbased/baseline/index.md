# Model-Based Baseline Controllers

## Experimental setup

Before performing parameter sweeps over \(\alpha\) and \(\gamma\), the three model-based discounted LQR designs of **Chapter 2** are validated on the Quanser QUBE-Servo 2 rotary inverted pendulum (**Section 5.1.1–5.1.2**). All controllers are synthesised on the fourth-order reduced linearised upright model (\(n = 4\), \(m = 1\), \(T_s = 10\text{ ms}\)) at a destabilising discount factor \(\gamma = 0.5\), where the optimal discounted controller is open-loop/closed-loop unstable (\(\rho(A + BK_\gamma^\star) = 1.1098 > 1\)).

After verifying all theoretical LMI and sPI certificates in simulation (Tables 5.2–5.3), each controller is evaluated on hardware under steady-state balancing and irregular manual pushes. Although \(\bar{K}_\gamma\) and its sPI refinement achieve lower model cost at \(x_0 = [0.1, 0, 0, 0]^\top\), their weak servo feedback (\(K_\psi \approx 0.47\text{ V/rad}\)) fails to overcome unmodelled Coulomb stiction and encoder-cable asymmetry—causing monotonic servo drift into the \(130^\circ\) safety cut-off—whereas \(\hat{K}_\gamma\) (\(K_\psi = 0.98\text{ V/rad}\)) balances and recovers cleanly.

### Baseline Parameters & Hardware Summary (Tables 5.1, 5.4 & C.1)

 - **Sample Time (\(T_s\)):** \(10\text{ ms}\)
 - **Discount Factor (\(\gamma\)):** \(0.5\) (\(\rho(A + BK_\gamma^\star) = 1.1098\))
 - **Guaranteed Decay Rate (\(\alpha\)):** \(0.98\)
 - **State & Input Costs:** \(Q = \text{diag}(100, 30, 10, 1)\), \(R = 10\)

| Controller | Gain \([K_{\delta\phi}, K_\psi, K_{\dot{\delta\phi}}, K_{\dot{\psi}}]\) | \(J_\gamma(x_0, K)\) | Pushes | \(\max\lvert u\rvert\) [V] | \(\text{rms}\,\delta_\phi\) [\(^\circ\)] | Hardware Outcome |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **\(\hat{K}_\gamma\)** (Thm. 2.9) | `[-15.5694, 0.9794, -1.1520, 0.5478]` | 47.16 | 4 | 5.23 | 0.73 | Balances, recovers (\(\hat{\rho} \in [0.955, 0.981]\)); \(\psi\) offset \(\approx 22^\circ\) |
| **\(\text{sPI}, K_0 = \hat{K}_\gamma\)** (Alg. 1) | `[-12.8868, 0.8021, -0.9877, 0.4456]` | 34.10 | 3 | 6.05 | 1.76 | Balances, recovers (\(\hat{\rho} \in [0.978, 0.980]\)); oscillatory |
| **\(\bar{K}_\gamma\)** (Thm. 2.12) | `[-12.0781, 0.4684, -1.0026, 0.2963]` | 29.14 | 0 | 1.91 | – | \(\psi\) drifts to \(130^\circ\) after \(\approx 2.72\text{ s}\) |
| **\(\text{sPI}, K_0 = \bar{K}_\gamma\)** (Alg. 1) | `[-12.0487, 0.4672, -1.0006, 0.2956]` | 29.03 | 0 | 1.91 | – | \(\psi\) drifts to \(130^\circ\) after \(\approx 2.16\text{ s}\) |
---

## Experiments

### 1. Guaranteed Cost Design (\(\hat{K}_\gamma\), Theorem 2.9)
Minimises a convex upper bound \(\text{trace}(\hat{W}_\gamma)\) on the discounted closed-loop cost while enforcing the decay rate \(\alpha = 0.98\) (\(\rho_{\text{model}} = 0.9731\)). Allocates sufficient servo authority (\(K_\psi = 0.9794\text{ V/rad}\)) to balance and recover from all four manual pushes without saturation, settling with a bounded \(\approx 22^\circ\) servo offset.

[**View Guaranteed Cost Experiment**](guaranteed-cost.md)

### 2. Guaranteed Gain Error Design (\(\bar{K}_\gamma\), Theorem 2.12)
Minimises the spectral-norm distance \(\|\bar{K}_\gamma - K_\gamma^\star\|\) to the unstable optimal gain while enforcing \(\alpha = 0.98\) (\(\rho_{\text{model}} = 0.9799\)). Although it achieves a lower theoretical cost (\(29.14\) vs. \(47.16\)), pushing the closed-loop spectrum onto \(\alpha\) allocates weak servo feedback (\(K_\psi = 0.4684\text{ V/rad}\)), leading to monotonic servo drift into the \(130^\circ\) safety cut-off.

[**View Guaranteed Gain Error Experiment**](guaranteedgainerror.md)

### 3. Stabilizing Policy Iteration (sPI, Algorithm 1)
Iteratively refines both LMI initialisations (\(K_0 = \hat{K}_\gamma\) over \(76\) iterations; \(K_0 = \bar{K}_\gamma\) over \(35\) iterations) via convex combinations with the policy-improvement step under \(\rho(A+BK_j) < \alpha\). Cost drops monotonically (\(27.7\%\) from \(\hat{K}_\gamma\); \(0.39\%\) from \(\bar{K}_\gamma\)), but pushing \(\rho\) onto \(\alpha\) reduces disturbance damping for \(K_0 = \hat{K}_\gamma\) (\(\text{rms}\,\delta_\phi = 1.76^\circ\)) and preserves servo drift for \(K_0 = \bar{K}_\gamma\).

[**View sPI Controller Experiments**](sPI.md)