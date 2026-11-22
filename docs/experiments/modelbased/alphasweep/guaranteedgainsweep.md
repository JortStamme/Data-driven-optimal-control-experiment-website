# Guaranteed Gain Error (\(\bar{K}_\gamma\)): Hardware Robustness \(\alpha\)-Sweep

Starting from \(\alpha = 0.99\), the decay rate \(\alpha\) is decreased down to \(\alpha = 0.94\) (\(\gamma = 0.5\), \(T_s = 10\text{ ms}\), \(Q = \text{diag}(100, 30, 10, 1)\), \(R = 10\)). At each value, manual pushes are applied to map where servo drift disappears and where actuator saturation destabilizes the closed loop. This page presents the full sweep summary and the experiments inside the common usable window at **\(\alpha = 0.97\)** and **\(\alpha = 0.965\)**.

### Summary of Regimes (Table C.3)
* **\(\alpha \ge 0.98\):** The pendulum is stabilized, but the servo drifts until it hits the \(130^\circ\) safety bound (reproducing the baseline at \(\alpha = 0.98\) and worsening at \(\alpha = 0.99\)).
* **\(0.975 \ge \alpha \ge 0.965\):** Servo drift disappears; both \(\delta\phi\) and \(\psi\) return to a neighbourhood of the origin after every push with peak voltages well below \(V_{\text{sat}}\).
* **\(\alpha = 0.96, 0.955\):** The pendulum still recovers, though the input touches \(V_{\text{sat}}\) at \(\alpha = 0.96\) and recovery becomes oscillatory at \(\alpha = 0.955\).
* **\(\alpha \le 0.95\):** Saturation clips the voltage between \(\pm V_{\text{sat}}\) in an undamped oscillation (\(|K_\phi| \ge 23.9\text{ V/rad}\)), and at \(\alpha = 0.94\) the pendulum cannot be caught at calibration.
* **Practical Lower Limit:** \(\bar{\alpha}_{\text{lim}} \approx 0.96\) (corresponding to \(|K_\phi| \approx 19\text{--}22\text{ V/rad}\)).

| \(\alpha\) | \(\rho_{\text{model}}\) | Gain Vector \([K_\phi, K_\psi, K_{\dot{\phi}}, K_{\dot{\psi}}]\) | \(\delta\phi\) conv. | \(\psi\) in bound | Peak \(|u|\) [V] |
| :---: | :---: | :--- | :---: | :---: | :---: |
| 0.99 | 0.9899 | `[-10.051, 0.3332, -0.8426, 0.2059]` | Yes | No (drift) | 3.86 |
| 0.98 | 0.9799 | `[-12.067, 0.4678, -1.0018, 0.2960]` | Yes | No (drift) | 4.66 |
| 0.975 | 0.9748 | `[-13.710, 0.6419, -1.1392, 0.3838]` | Yes | Yes | 4.06 |
| **0.97** | **0.9698** | `[-15.448, 0.8797, -1.2875, 0.4836]` | **Yes** | **Yes** | **6.05** |
| **0.965** | **0.9646** | `[-17.381, 1.1972, -1.4543, 0.6002]` | **Yes** | **Yes** | **7.01** |
| 0.96 | 0.9596 | `[-19.382, 1.5847, -1.6292, 0.7271]` | Yes | Yes | sat. |
| 0.955 | 0.9543 | `[-21.665, 2.0822, -1.8302, 0.8767]` | Yes, oscill. | Yes | 9.85 |
| 0.95 | 0.9493 | `[-23.947, 2.6443, -2.0325, 1.0317]` | No, oscill. | Yes | sat. |
| 0.945 | 0.9438 | `[-26.680, 3.3719, -2.2755, 1.2210]` | No, oscill. | Yes | sat. |
| 0.94 | 0.9387 | `[-29.232, 4.1281, -2.5036, 1.4034]` | Unstable at calib. | Yes | sat. |

---

## 1. \(\alpha = 0.97\) (\(\rho_{\text{model}} = 0.9698\))
Recovers cleanly from pushes with Peak \(|u| = 6.05\text{ V}\) and settles the servo (\(K_\psi = 0.8797\text{ V/rad}\)), marking the upper boundary of the settled usable window.

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Balance Error &amp; Voltage</div>
    <video id="vid1_kbar_097" width="100%" muted>
      <source src="../../../../assets/modelbased/sweep/Kbaralpha0.97_BE.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_kbar_097" width="100%" muted>
      <source src="../../../../assets/modelbased/sweep/Kbar_a097_finalv4.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_kbar_097', 'vid2_kbar_097')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_kbar_097', 'vid2_kbar_097')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 2. \(\alpha = 0.965\) (\(\rho_{\text{model}} = 0.9646\)) — Edge of Usable Range (Fig. C.8a,c)
Robust recovery from pushes without hitting saturation (Peak \(|u| = 7.01\text{ V}\)) and well-settled servo (\(K_\psi = 1.1972\text{ V/rad}\)), just above the \(\alpha = 0.96\) saturation onset.

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Balance Error &amp; Voltage</div>
    <video id="vid1_kbar_0965" width="100%" muted>
      <source src="../../../../assets/modelbased/sweep/Kbaralpha0.965_BE.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_kbar_0965" width="100%" muted>
      <source src="../../../../assets/modelbased/sweep/Kbar_a0965_finalv2.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 30px;">
  <button onclick="syncPlayPause('vid1_kbar_0965', 'vid2_kbar_0965')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_kbar_0965', 'vid2_kbar_0965')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

<!-- Unified JavaScript function for all synchronized videos on this page -->
<script>
  function syncPlayPause(id1, id2) {
    var v1 = document.getElementById(id1);
    var v2 = document.getElementById(id2);
    if (v1.paused) { v1.play(); v2.play(); }
    else { v1.pause(); v2.pause(); }
  }
  function syncRestart(id1, id2) {
    var v1 = document.getElementById(id1);
    var v2 = document.getElementById(id2);
    v1.currentTime = 0; v2.currentTime = 0;
    v1.play(); v2.play();
  }
</script>