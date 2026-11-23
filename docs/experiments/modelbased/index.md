# Model-Based Controller Experiments

This section presents the experimental validation of the model-based discounted LQR designs on the Quanser QUBE-Servo 2 rotary inverted pendulum (**Section 5.1**). Using the fourth-order reduced linearised upright model (\(n = 4\), \(m = 1\), \(T_s = 10\text{ ms}\), \(Q = \text{diag}(100, 30, 10, 1)\), \(R = 10\)) at the destabilising discount factor \(\gamma = 0.5\) (\(\rho(A + BK_\gamma^\star) \approx 1.11\)), the experiments evaluate the **guaranteed-cost LMI** (\(\hat{K}_\gamma\), Theorem 2.9), the **guaranteed-gain-error LMI** (\(\bar{K}_\gamma\), Theorem 2.12), and **stabilizing policy iteration** (sPI, Algorithm 1)—progressing from nominal baseline tests to parameter sweeps that map the physical operating limits of the hardware.

---

## 1. Baseline Controllers (\(\gamma = 0.5\), \(\alpha = 0.98\))

Evaluates all four baseline designs (\(\hat{K}_\gamma\), \(\bar{K}_\gamma\), and their sPI refinements) on hardware under manual pushes and steady-state balancing. Although \(\bar{K}_\gamma\) and its sPI refinement achieve lower model cost, their weak servo feedback (\(K_\psi \approx 0.47\text{ V/rad}\)) fails to overcome unmodelled Coulomb stiction and encoder-cable asymmetry, causing monotonic servo drift into the \(130^\circ\) safety cut-off—whereas \(\hat{K}_\gamma\) (\(K_\psi = 0.98\text{ V/rad}\)) and its sPI refinement balance and recover with empirical decay factors \(\hat{\rho} \approx \alpha\).

[**View Baseline Controller Experiments**](baseline/index.md)

---

## 2. Decay Rate (\(\alpha\)) Sweep (\(\gamma = 0.5\), \(\alpha \in [0.94, 0.99]\))

Sweeps the prescribed decay rate \(\alpha\) from \(0.99\) down to \(0.94\) using manual-push robustness and \(30\text{ s}\) steady-state tests to isolate the hardware operating window, revealing three regimes:

 1. **Large \(\alpha\) (\(\ge 0.98\)):** The pendulum balances, but weak servo feedback (\(K_\psi < 0.9\text{ V/rad}\)) permits slow servo wander and drift in \(\bar{K}_\gamma\) (settling requires \(\alpha \le 0.97\) for \(\bar{K}_\gamma\) and \(\alpha \le 0.98\) for \(\hat{K}_\gamma\)).
 2. **Usable window (\(\alpha_{\text{conv}} \in \{0.965, 0.97\}\)):** Both \(\hat{K}_\gamma\) and \(\bar{K}_\gamma\) settle the servo and reject disturbances cleanly without actuator clipping.
 3. **Small \(\alpha\) (\(\le 0.96\)):** Aggressive pendulum gains (\(|K_\phi| \approx 24\text{ V/rad}\)) trigger \(\pm 10\text{ V}\) saturation during pushes, inducing sustained limit-cycle oscillations (with calibration failing at \(\alpha = 0.94\)).

This archive features representative robustness runs at \(\alpha \in \{0.97, 0.965\}\) for \(\bar{K}_\gamma\) and \(\alpha \in \{0.965, 0.96, 0.94\}\) for \(\hat{K}_\gamma\).

[**View \(\alpha\)-Sweep Experiments**](alphasweep/index.md)

---

## 3. Discount Factor (\(\gamma\)) Sweep (\(\alpha = 0.97\), \(\gamma \in \{0.2, 0.5, 0.8, 0.9\}\))

Fixes \(\alpha = 0.97\) inside the common usable window and varies \(\gamma \in \{0.2, 0.5, 0.8, 0.9\}\) to isolate the effect of discounting on hardware behaviour. Because \(\gamma\) enters Theorem 2.9 directly via \(\sqrt{\gamma}A_d\) and \(\sqrt{\gamma}B_d\), \(\hat{K}_\gamma\) scales strongly with \(\gamma\) and saturates the \(\pm 10\text{ V}\) limit during pushes for \(\gamma \ge 0.8\) (\(|\hat{K}_\phi| \ge 23.7\text{ V/rad}\)); by contrast, boundary-pinned \(\bar{K}_\gamma\) varies weakly and recovers across all \(\gamma\) (wandering only in steady state at \(\gamma = 0.9\), where \(\bar{K}_\psi = 0.75\text{ V/rad} < 0.9\text{ V/rad}\)).

[**View \(\gamma\)-Sweep Experiments**](gammasweep.md)