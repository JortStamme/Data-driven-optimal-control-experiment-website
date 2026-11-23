# Data-Driven Experiments

This section presents the experimental validation of the data-driven discounted LQR designs on the Quanser QUBE-Servo 2 (**Section 5.2**). Using offline input–state trajectories collected directly from hardware, the experiments compare **direct noise-free** (Theorem 3.13), **direct noisy** (original Theorem 3.19 and relaxed Theorem 3.20), and **indirect certainty-equivalence** synthesis (least squares and instrumental variables followed by Theorem 2.9) across two progressively more demanding configurations.

---

## 1. Inertia Disc (Open-Loop Data & Reference Tracking)

With the pendulum replaced by a rotary inertia disc (\(n = 3\), \(m = 1\)), the QUBE is open-loop marginally stable, enabling exogenous open-loop excitation without feedback correlation. Controllers are synthesised at \(\gamma = 0.9048\) (\(\tau_\gamma = 0.1\text{ s}\)) and \(\alpha = 0.9802\) (\(\tau_\alpha = 0.5\text{ s}\)) from \(T = 1000\) transitions under a period-mismatched \(3\text{ V}\) PRBS (**D1**) and a clean \(8\text{ V}\) multisine (**D2**), then validated in closed-loop tracking across \(5^\circ\) and \(50^\circ\) square waves and a \(0.005\text{-}0.5\text{ Hz}\) chirp.

[**View Inertia-Disc Experiments**](inertiadisc/index.md)

---

## 2. Inverted Pendulum (Closed-Loop Probing & Balance Control)

With the pendulum module attached (\(n = 4\), \(m = 1\)), the upright equilibrium is open-loop unstable (\(+13.36\text{ rad/s}\) pole), requiring closed-loop probing around \(K_{\text{st}} = \hat{K}_\gamma\) at the destabilising discount factor \(\gamma = 0.5\) (\(\rho(A + BK_\gamma^\star) \approx 1.11\)) and \(\alpha = 0.98\). Controllers synthesised from \(T \approx 2000\) transitions under a \(0.8\text{ V}\) multisine (**P1**) and a \(0.5\text{ V}\) PRBS (**P2**) are validated under repeatable \(1.80\text{ V}\) voltage-pulse disturbances—highlighting direct–indirect coincidence on clean data, closed-loop LS bias vs. IV consistency, relaxed vs. original noisy LMI conservatism, and the \(K_\psi \gtrsim 0.9\text{ V/rad}\) drift threshold.

[**View Pendulum Experiments**](pendulum/index.md)