# Guaranteed Cost (\(\hat{K}_\gamma\)): Hardware Robustness \(\alpha\)-Sweep

Starting from \(\alpha = 0.99\), the prescribed decay rate \(\alpha\) is decreased in steps of \(0.005\text{--}0.01\) down to \(\alpha = 0.94\) while keeping \(\gamma = 0.5\), \(T_s = 10\text{ ms}\), \(Q = \text{diag}(100, 30, 10, 1)\), and \(R = 10\). At each setting, the pendulum is subjected to multiple manual pushes to test disturbance rejection, servo confinement (\(|\psi| < 130^\circ\)), and actuator saturation (\(V_{\text{sat}} = \pm 10\text{ V}\)). This page presents the full sweep summary and the representative experiments at **\(\alpha = 0.965\)**, **\(\alpha = 0.96\)**, and **\(\alpha = 0.94\)**.

### Summary of Regimes (Table C.4)

 * **\(0.99 \ge \alpha \ge 0.965\):** No servo drift is observed at any value, and both \(\delta\phi\) and \(\psi\) return to a neighbourhood of the origin after every push. From \(\alpha = 0.97\) onward, peak voltages approach or reach \(V_{\text{sat}}\), yet the pendulum still recovers.
 * **\(0.96 \ge \alpha \ge 0.945\):** Following a push, the input saturates and the controller switches between \(\pm 10\text{ V}\) in sustained oscillations (\(|K_\phi| \approx 23.8\text{--}36.2\text{ V/rad}\)).
 * **\(\alpha = 0.94\):** The controller is unstable immediately during calibration (\(|\delta\phi| < 5^\circ\)).
 * **Practical Lower Limit:** \(\hat{\alpha}_{\text{lim}} \approx 0.965\) (corresponding to \(|K_\phi| \approx 21\text{ V/rad}\)).

| \(\alpha\) | \(\rho_{\text{model}}\) | Gain Vector \([K_\phi, K_\psi, K_{\dot{\phi}}, K_{\dot{\psi}}]\) | \(\delta\phi\) conv. | \(\psi\) in bound | Peak \(\lvert u\rvert\) [V] |
| :---: | :---: | :--- | :---: | :---: | :---: |
| 0.99 | 0.9831 | `[-12.404, 0.6354, -0.9232, 0.4117]` | Yes | Yes | 8.36 |
| 0.98 | 0.9743 | `[-14.867, 0.9112, -1.0962, 0.5158]` | Yes | Yes | 7.11 |
| 0.975 | 0.96905 | `[-17.169, 1.2007, -1.2876, 0.6336]` | Yes | Yes | 8.56 |
| 0.97 | 0.9649 | `[-18.933, 1.4675, -1.4239, 0.7243]` | Yes | Yes | sat |
| **0.965** | **0.95444** | `[-20.853, 1.8040, -1.5969, 0.8310]` | **Yes** | **Yes** | **sat** |
| **0.96** | **0.94875** | `[-23.830, 2.3678, -1.9155, 1.0057]` | **No, oscill.** | **Yes** | **sat.** |
| 0.955 | 0.94178 | `[-28.320, 3.3326, -2.3455, 1.2934]` | No, oscill. | Yes | sat. |
| 0.95 | 0.93159 | `[-32.342, 4.4359, -2.7047, 1.5810]` | No, oscill. | Yes | sat. |
| 0.945 | 0.91793 | `[-36.193, 5.6291, -3.0528, 1.8668]` | No, oscill. | Yes | sat. |
| **0.94** | **0.91240** | `[-45.032, 8.4959, -3.8465, 2.5322]` | **Unstable at calib.** | **Unstable** | **sat.** |

---

## 1. \(\alpha = 0.965\) (\(\rho_{\text{model}} = 0.95444\)) — Edge of Usable Range (Fig. C.9a,c)
Practical lower limit \(\hat{\alpha}_{\text{lim}} \approx 0.965\). Voltage hits saturation on strong pushes, but the pendulum still recovers cleanly.

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Balance Error</div>
    <video id="vid1_khat_0965" width="100%" muted>
      <source src="../../../../assets/modelbased/sweep/Khatalpha0.965_BE.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_khat_0965" width="100%" muted>
      <source src="../../../../assets/modelbased/sweep/Khat_a0965_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_khat_0965', 'vid2_khat_0965')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_khat_0965', 'vid2_khat_0965')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 2. \(\alpha = 0.96\) (\(\rho_{\text{model}} = 0.94875\)) — Past Usable Range (Fig. C.9b,d)
Once disturbed (\(|K_\phi| = 23.83\text{ V/rad}\)), the input clips between \(\pm 10\text{ V}\), leading to sustained undamped oscillations in \(\delta\phi\).

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Balance Error</div>
    <video id="vid1_khat_096" width="100%" muted>
      <source src="../../../../assets/modelbased/sweep/Khatalpha0.96_BE.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_khat_096" width="100%" muted>
      <source src="../../../../assets/modelbased/sweep/Khat_a096_finalv2.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_khat_096', 'vid2_khat_096')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_khat_096', 'vid2_khat_096')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 3. \(\alpha = 0.94\) (\(\rho_{\text{model}} = 0.91240\))
Unstable immediately at calibration (\(|\delta\phi| < 5^\circ\)); the pendulum cannot be caught because the large gains saturate the motor instantly.

<div style="display: flex; justify-content: center; margin-top: 20px; margin-bottom: 30px;">
  <div style="width: 65%; max-width: 720px;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid_khat_094" width="100%" controls muted>
      <source src="../../../../assets/modelbased/sweep/Khatalpha094.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 30px;">
  <button onclick="syncPlayPause('vid1_khat_094', 'vid2_khat_094')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_khat_094', 'vid2_khat_094')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
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