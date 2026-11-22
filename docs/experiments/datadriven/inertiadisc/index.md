# Inertia Disc Experiments

## Experimental setup

For the open-loop data-driven experiments, the pendulum module on the Quanser QUBE-Servo 2 is replaced by a rotary inertia disc. A brushed DC motor drives the disc in the horizontal plane via a single voltage input \(u = V_m\) (\(\pm 10\text{ V}\) operating range), while the yaw angle \(\psi\) is measured by an optical incremental encoder (\(2048\text{ counts/rev}\), \(0.176^\circ\) resolution) and the yaw rate \(\dot{\psi}\) is obtained from a digital tachometer.

Because servo position acts as a pure integrator, the inertia disc is **open-loop marginally stable**, allowing exogenous open-loop excitation without feedback correlation in least squares. To formulate reference tracking (\(\psi_k \to r_k\)) as regulation to the origin, the state is augmented with an exact tracking-error integrator:

\[
v_{k+1} = v_k + T_s(\psi_k - r_k), \qquad \bar{x}_k = \begin{bmatrix} \psi_k \\ \dot{\psi}_k \\ v_k \end{bmatrix}, \qquad u_k = K \bar{x}_k.
\]

All six controllers are synthesised from \(T = 1000\) transitions (averaged from four \(10\text{ s}\) periods at \(T_s = 10\text{ ms}\)) collected under two excitation signals:
* **D1 (PRBS \(3\text{ V}\)):** Period-mismatched averaging stress test (\(5.22\%\) LS residual, \(\hat{\eta} = 7.90 \times 10^{-3}\)).
* **D2 (Multisine \(8\text{ V}\)):** Clean odd-harmonic baseline (\(1.04\%\) LS residual, \(\hat{\eta} = 3.67 \times 10^{-4}\)).

### Design Parameters & Synthesised Gains (Table 5.11)
- **Sample Time (\(T_s\)):** \(10\text{ ms}\)
- **Discount Factor (\(\gamma\)):** \(0.9048\) (\(\tau_\gamma = 0.1\text{ s}\))
- **Guaranteed Decay Rate (\(\alpha\)):** \(0.9802\) (\(\tau_\alpha = 0.5\text{ s}\))
- **Costs & Noisy Margin:** \(Q = \text{diag}(10, 0.1, 10)\), \(R = 1\), \(\mu_{\text{frac}} = 0.6\)

| Set | Design | Gain \([K_\psi, K_{\dot{\psi}}, K_v]\) | \(\rho_{\text{LMI}}\) | \(\rho_{\text{LS}}\) | Bound / \(J_{\text{LS}}(x_0)\) | Ratio |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: |
| **D1** | Direct, noise-free | `[-0.4100, -0.0440, -0.6899]` | 0.9730 | 0.9690 | 251.4 / 172.6 | 1.46 |
| **D1** | Direct, noisy† | `[-0.0165, -0.0148, -0.1822]` | 0.9044 | 0.9973 | 214.1 / 92.67 | 2.31 |
| **D1** | Indirect (LS) | `[-0.3776, -0.0422, -0.7003]` | – | 0.9727 | 228.2 / 162.3 | 1.41 |
| **D2** | Direct, noise-free | `[-0.5657, -0.0541, -1.0311]` | 0.9651 | 0.9650 | 165.9 / 118.9 | 1.39 |
| **D2** | Direct, noisy‡ | `[-0.8954, -0.0862, -1.9331]` | 0.9518 | 0.9506 | \(5.54 \times 10^8\) / 157.3 | \(3.52 \times 10^6\) |
| **D2** | Indirect (LS) | `[-0.5657, -0.0541, -1.0311]` | – | 0.9650 | 165.8 / 118.9 | 1.39 |

*†Pure feasibility / fallback on \(W\); ‡\(W\) fell back to maximising \(\text{trace}(S)\).*

---

## Reference Tracking Experiments

All six controllers are tested on hardware across three trajectories (\(0\%\) actuator saturation across all runs; \(2\%\) settling band floored at \(0.176^\circ\)).

### 1. \(5^\circ\) Square Wave (\(0.125\text{ Hz}\))
Investigates small-signal static friction (\(\approx 0.18\text{--}0.20\text{ V}\)), integrator wind-up delay after reversals, and steady-state error.

[**View \(5^\circ\) Square Wave Experiments**](sw5.md)

### 2. \(50^\circ\) Square Wave (\(0.125\text{ Hz}\))
Investigates large-signal slewing speed, overshoot, settling time, and the experimental coincidence between direct noise-free and indirect (LS) synthesis on clean data (Proposition 3.30).

[**View \(50^\circ\) Square Wave Experiments**](sw50.md)

### 3. \(0.005\text{--}0.5\text{ Hz}\) Chirp (\(10\text{ s}\) period)
Investigates dynamic frequency-response tracking, phase lag without feedforward, and control effort across increasing frequencies.

[**View Chirp Experiments**](chirp.md)