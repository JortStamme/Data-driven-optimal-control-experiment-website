# Inverted Pendulum Experiments (Data-Driven)

## Experimental setup

For the closed-loop data-driven balance experiments, the pendulum module is attached to the Quanser QUBE-Servo 2. A brushed DC motor drives the rotary arm (\(\psi\)) in the horizontal plane via a single voltage input \(u = V_m\) (\(\pm 10\text{ V}\) operating range), while the pendulum swings freely about the arm (\(\phi\)). Both angles are measured by optical incremental encoders (\(2048\text{ counts/rev}\), \(0.176^\circ\) resolution). Servo yaw rate \(\dot{\psi}\) is obtained from a digital tachometer, and the upright pendulum velocity \(\dot{\delta\phi}\) is estimated via the filtered derivative \(H(s) = \frac{s}{(1/50)s + 1}\) at \(T_s = 10\text{ ms}\).

In the upright equilibrium (\(\delta\phi = \phi - \pi = 0\)), the pendulum is **open-loop unstable** (\(+13.36\text{ rad/s}\) pole, \(z \approx 1.143\) at \(T_s = 10\text{ ms}\)). Data are therefore collected in closed loop by adding an exogenous probing signal \(e_k\) to the model-based baseline controller \(K_{\text{st}} = \hat{K}_\gamma\):

\[
u_k = K_{\text{st}} \xi_k + e_k, \qquad x_k = \begin{bmatrix} \delta\phi_k \\ \psi_k \\ \dot{\delta\phi}_k \\ \dot{\psi}_k \end{bmatrix}.
\]

After manual upright engagement before \(t = 10\text{ s}\), \(e_k\) is applied for \(20\text{ s}\) of a \(30\text{ s}\) run, yielding \(T \approx 2000\) transitions per record. From an excitation amplitude sweep, two datasets inside the linear regime (\(|\delta\phi| \lesssim 10^\circ\)) are selected for controller synthesis:

 * **P1 (Multisine \(0.8\text{ V}\)):** Odd-harmonic multisine (\(\text{RMS}(e)/\text{RMS}(u) \approx 52\%\), \(\kappa(\Omega) = 6.31\), \(10.3\%\) LS residual, \(\hat{\eta} = 0.11\), \(\max|\delta\phi| = 7.38^\circ\)).
 * **P2 (PRBS \(0.5\text{ V}\)):** Binary excitation (\(\text{RMS}(e)/\text{RMS}(u) \approx 65\%\), \(\kappa(\Omega) = 6.56\), \(7.7\%\) LS residual, \(\hat{\eta} = 0.053\)).

### Design Parameters & Synthesised Gains (Table C.8)
- **Sample Time (\(T_s\)):** \(10\text{ ms}\)
- **Discount Factor (\(\gamma\)):** \(0.5\) (optimal closed-loop spectral radius \(\rho(A + BK_\gamma^\star) \approx 1.11\), unstable)
- **Guaranteed Decay Rate (\(\alpha\)):** \(0.98\)
- **Costs & Noisy Margin:** \(Q = \text{diag}(100, 30, 10, 1)\), \(R = 10\), \(\mu_{\text{frac}} = 0.5\)

| Set | Design | Gain \([K_{\delta\phi}, K_\psi, K_{\dot{\delta\phi}}, K_{\dot{\psi}}]\) | \(\rho_{\text{model}}\) | \(\rho_{\text{LS}}\) | \(\rho_{\text{IV}}\) | \(J_{\text{model}}\) |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: |
| **–** | Model-based \(\hat{K}_\gamma\) | `[-15.569, 0.9794, -1.1520, 0.5478]` | 0.9731 | – | – | 143.65 |
| **P1** | Direct, noise-free | `[-14.482, 1.1678, -1.2102, 0.6208]` | 0.9814 | 0.9876 | 0.9761 | 128.54 |
| **P1** | Direct, noisy (original) | `[-18.607, 0.9954, -1.1640, 0.4413]` | 0.9847 | 0.9945 | 0.9947 | 189.24 |
| **P1** | Direct, noisy (relaxed) | `[-17.889, 0.9791, -1.1021, 0.4271]` | 0.9845 | 0.9938 | 0.9951 | 178.11 |
| **P1** | Indirect (LS) | `[-12.711, 1.1563, -1.0249, 0.4341]` | 0.9947 | 0.9673 | 0.9912 | 100.65 |
| **P1** | Indirect (IV) | `[-13.074, 1.1343, -1.2099, 0.5787]` | 0.9918 | 0.9840 | 0.9730 | 106.87 |
| **P2** | Direct, noise-free | `[-15.110, 1.2271, -1.0703, 0.5531]` | 0.9699 | 0.9691 | 0.9743 | 139.19 |
| **P2** | Direct, noisy (original) | `[-13.925, 0.6771, -0.7506, 0.2586]` | 0.9941 | 0.9935 | 0.9958 | 116.66 |
| **P2** | Direct, noisy (relaxed) | `[-13.652, 0.7081, -0.7064, 0.2476]` | 0.9955 | 0.9942 | 0.9965 | 113.25 |
| **P2** | Indirect (LS) | `[-15.103, 1.3031, -1.0343, 0.4919]` | 0.9700 | 0.9746 | 0.9794 | 137.36 |
| **P2** | Indirect (IV) | `[-15.011, 1.2806, -1.1013, 0.5355]` | 0.9736 | 0.9685 | 0.9743 | 135.97 |

*Note: \(\rho_{\text{model}}\) and \(J_{\text{model}}\) are evaluated on the analytical model with \(x_0 = [0.175, 0, 0, 0]^\top\). Across all pendulum datasets, \(\mu^\star / \hat{\eta} \le 0.038\), so none of the noisy designs is formally certified at \(\hat{\eta}\).*

---

## Experiments

### 1. Closed-Loop Probing Signals (Data Collection)
Demonstrates the \(30\text{ s}\) closed-loop excitation protocol around \(K_{\text{st}} = \hat{K}_\gamma\) for both selected probing signals (**P1: Multisine \(0.8\text{ V}\)** and **P2: PRBS \(0.5\text{ V}\)**), illustrating the trade-off between persistence of excitation and keeping pendulum excursions within the \(\sim 10^\circ\) linear regime.

[**View Probing Signal Experiments**](probingsignal.md)

### 2. Programmed-Pulse Robustness Tests
Evaluates key synthesised controllers under repeatable \(1.80\text{ V}\) voltage pulse disturbances (\(40\text{ s}\) runs, pulses at \(t \in \{13, 17, 21, 25, 29, 33\}\text{ s}\)), highlighting direct vs. indirect performance against \(\hat{K}_\gamma\), closed-loop LS bias, original vs. relaxed noisy LMI conservatism, and the \(K_\psi \gtrsim 0.9\text{ V/rad}\) drift threshold.

[**View Robustness Test Experiments**](robustnesstest.md)