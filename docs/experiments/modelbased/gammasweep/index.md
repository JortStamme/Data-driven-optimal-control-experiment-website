# Model-Based: Discount Factor \(\gamma\)-Sweep (\(\alpha = 0.97\))

## Experimental setup

Inside the common usable decay-rate window (\(\alpha_{\text{conv}} \in \{0.965, 0.97\}\)), we fix \(\alpha = 0.97\) and vary the discount factor \(\gamma \in \{0.2, 0.5, 0.8, 0.9\}\) with \(Q = \text{diag}(100, 30, 10, 1)\), \(R = 10\), and \(T_s = 10\text{ ms}\). Each controller is evaluated on hardware using the manual-push disturbance-rejection test and a \(30\text{ s}\) disturbance-free steady-state test to determine whether \(\gamma\) visibly alters closed-loop behaviour at fixed \(\alpha\).

### Asymmetry Between \(\hat{K}_\gamma\) and \(\bar{K}_\gamma\)
* **Guaranteed cost (\(\hat{K}_\gamma\)):** \(\gamma\) enters the LMIs directly via \(\sqrt{\gamma}A_d\) and \(\sqrt{\gamma}B_d\). Between \(\gamma = 0.2\) and \(\gamma = 0.9\), \(|\hat{K}_\phi|\) increases by \(55\%\) (\(17.2 \to 26.6\text{ V/rad}\)) and \(\hat{K}_\psi\) more than doubles (\(1.22 \to 2.66\text{ V/rad}\)). For \(\gamma \ge 0.8\), \(|\hat{K}_\phi|\) reaches the \(\approx 24\text{ V/rad}\) saturation threshold during pushes, causing \(\pm 10\text{ V}\) clipping and failure to recover.
* **Guaranteed gain error (\(\bar{K}_\gamma\)):** \(\gamma\) enters only through the reference \(K_\gamma^\star\). While \(\rho(A_d + B_d K_\gamma^\star) \ge \alpha\), \(\bar{K}_\gamma\) remains pinned to the \(\alpha = 0.97\) boundary (\(\rho_{\text{model}} \approx 0.9700\)) and varies weakly (\(|\bar{K}_\phi| \in [14.7, 17.3]\)), recovering cleanly for all \(\gamma\) (though \(\bar{K}_\psi = 0.75\text{ V/rad} < 0.9\text{ V/rad}\) causes steady-state wander at \(\gamma = 0.9\)).

### Hardware Results Summary (Tables 5.8 & 5.9, \(\alpha = 0.97\))

#### Guaranteed Cost \(\hat{K}_\gamma\)
| \(\gamma\) | \(\rho_{\text{model}}\) | Gain Vector \([K_{\delta\phi}, K_\psi, K_{\dot{\delta\phi}}, K_{\dot{\psi}}]\) | \(\delta\phi / \psi\) conv. | Peak \(V_m\) [V] | \(\text{RMS}_\psi\) [\(^\circ\)] |
| :---: | :---: | :--- | :---: | :---: | :---: |
| **0.9** | 0.9622 | `[-26.626, 2.6589, -2.4385, 1.1763]` | No / Yes | 10 (sat.) | 3.65 |
| **0.8** | 0.9635 | `[-23.712, 2.1787, -2.0367, 1.0106]` | No / Yes | 10 (sat.) | 2.94 |
| **0.5** | 0.9625 | `[-18.933, 1.4675, -1.4239, 0.7243]` | Yes / Yes | 9.22 | 4.0 |
| **0.2** | 0.9585 | `[-17.195, 1.2243, -1.2092, 0.6190]` | Yes / Yes | 8.35 | 11.03 |

#### Guaranteed Gain Error \(\bar{K}_\gamma\)
| \(\gamma\) | \(\rho_{\text{model}}\) | Gain Vector \([K_{\delta\phi}, K_\psi, K_{\dot{\delta\phi}}, K_{\dot{\psi}}]\) | \(\delta\phi / \psi\) conv. | Peak \(V_m\) [V] | \(\text{RMS}_\psi\) [\(^\circ\)] |
| :---: | :---: | :--- | :---: | :---: | :---: |
| **0.9** | 0.96999 | `[-17.306, 0.7509, -1.5574, 0.4715]` | Yes / Yes | 5.21 | 42.27 |
| **0.8** | 0.96994 | `[-16.835, 0.8721, -1.4928, 0.5033]` | Yes / Yes | 6.14 | 10.31 |
| **0.5** | 0.96980 | `[-15.479, 0.8836, -1.2901, 0.4853]` | Yes / Yes | 7.37 | 14.9 |
| **0.2** | 0.96968 | `[-14.749, 0.8427, -1.1782, 0.4604]` | Yes / Yes | 5.95 | 6.99 |

---

## Robustness Experiments (\(\hat{K}_\gamma\) at \(\alpha = 0.97\))

The two recordings below contrast the moderate-gain regime (\(\gamma = 0.2\), clean recovery) against the high-gain regime (\(\gamma = 0.8\), push-induced \(\pm 10\text{ V}\) saturation and limit-cycle oscillations), showing why choosing \(\gamma\) closer to \(1\) degrades hardware robustness for \(\hat{K}_\gamma\).

## 1. \(\hat{K}_\gamma\) at \(\gamma = 0.2\) (\(\alpha = 0.97\)) — Clean Recovery
*\(\hat{K}_\phi = -17.195\text{ V/rad}\), \(\hat{K}_\psi = 1.2243\text{ V/rad}\). Recovers cleanly from all manual pushes without saturating (Peak \(V_m = 8.35\text{ V} < 10\text{ V}\)).*
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_gs_g02" width="100%" muted>
      <!-- CHECK RELATIVE PATH DEPTH AND REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../assets/modelbased/gamma/gamma0.2.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_gs_g02" width="100%" muted>
      <!-- CHECK RELATIVE PATH DEPTH AND REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../assets/modelbased/gamma/gamma0.2_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_gs_g02', 'vid2_gs_g02')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_gs_g02', 'vid2_gs_g02')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 2. \(\hat{K}_\gamma\) at \(\gamma = 0.8\) (\(\alpha = 0.97\)) — Push-Induced Saturation
*\(\hat{K}_\phi = -23.712\text{ V/rad}\), \(\hat{K}_\psi = 2.1787\text{ V/rad}\). Crosses the \(|K_\phi| \approx 24\text{ V/rad}\) saturation threshold, clipping at \(\pm 10\text{ V}\) during manual pushes and failing to recover cleanly.*
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_gs_g08" width="100%" muted>
      <!-- CHECK RELATIVE PATH DEPTH AND REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../assets/modelbased/gamma/gamma0.8.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_gs_g08" width="100%" muted>
      <!-- CHECK RELATIVE PATH DEPTH AND REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../assets/modelbased/gamma/gamma0.8_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 30px;">
  <button onclick="syncPlayPause('vid1_gs_g08', 'vid2_gs_g08')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_gs_g08', 'vid2_gs_g08')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
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