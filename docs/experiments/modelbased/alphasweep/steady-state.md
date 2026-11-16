# Hardware Steady-State \(\alpha\)-Sweep (\(\hat{K}_\gamma\) vs. \(\bar{K}_\gamma\))

To assess disturbance-free behavior across \(\alpha\), each controller is run **twice for roughly 30 s** without any push at each \(\alpha\) (\(\gamma = 0.5\), \(T_s = 10\text{ ms}\)). The first second after engagement is discarded, and the remaining \(26\text{--}27\text{ s}\) are analysed for \(\text{RMS}_{\delta\phi}\), \(\text{RMS}_\psi\), mean offset \(\bar{\psi}\), dominant frequency \(f_{\delta\phi}\), peak-to-peak \(\delta\phi\), and saturation fraction.

### Key Steady-State Findings (Table 5.8 & Figs. C.10–C.11)
* **Zero Saturation:** Saturation fraction is \(0\%\) across all tested \(\alpha\) for both controllers in steady state.
* **Servo Wander vs. \(K_\psi\):** At large \(\alpha\) (small \(K_\psi\)), the servo wanders slowly at \(0.1\text{--}0.2\text{ Hz}\) (\(\text{RMS}_\psi = 45.1^\circ\) for \(\bar{K}_\gamma\) at \(\alpha = 0.975\); \(30.8^\circ\) for \(\hat{K}_\gamma\) at \(\alpha = 0.990\)). Decreasing \(\alpha\) increases \(K_\psi\) and reduces \(\text{RMS}_\psi\) by more than an order of magnitude down to \(2.2^\circ\) and \(1.2^\circ\) at \(\alpha = 0.945\).
* **Coupled Limit Cycle:** Even inside the best window, \(\delta\phi\) stays in a limit cycle of \(2\text{--}4^\circ\) peak-to-peak and \(\bar{\psi}\) retains a positive offset (\(1^\circ\text{--}25^\circ\)) due to unmodelled stiction/cable asymmetry and the lack of integral action on \(\psi\).
* **Common Convergence Window:** Defining the servo as settled when \(\text{RMS}_\psi \le 15^\circ\) (with drift slope \(< 0.1^\circ/\text{s}\)), \(\bar{K}_\gamma\) settles for \(\alpha \le 0.97\) and \(\hat{K}_\gamma\) for \(\alpha \le 0.98\). Combined with the robustness limits (\(\bar{\alpha}_{\text{lim}} \approx 0.96\), \(\hat{\alpha}_{\text{lim}} \approx 0.965\)), the usable windows are \([0.96, 0.97]\) for \(\bar{K}_\gamma\) and \([0.965, 0.98]\) for \(\hat{K}_\gamma\), giving the **common window \(\alpha_{\text{conv}} \in \{0.965, 0.97\}\)**.

### Steady-State Results (Table 5.8, Mean of Two Runs per \(\alpha\))

| Controller | \(\alpha\) | \(K_\psi\) [V/rad] | \(\text{RMS}_{\delta\phi}\) [\(^\circ\)] | \(\text{RMS}_\psi\) [\(^\circ\)] | \(\bar{\psi}\) [\(^\circ\)] | \(f_{\delta\phi}\) [Hz] | \(\text{pp}\,\delta\phi\) [\(^\circ\)] |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| \(\bar{K}_\gamma\) | 0.975 | 0.642 | 0.78 | 45.1 | 11.3 | 0.11 | 4.0 |
| \(\bar{K}_\gamma\) | 0.970 | 0.880 | 0.55 | 14.9 | 11.5 | 0.22 | 2.8 |
| \(\bar{K}_\gamma\) | 0.965 | 1.197 | 0.65 | 6.0 | 7.8 | 0.52 | 2.5 |
| \(\bar{K}_\gamma\) | 0.960 | 1.585 | 0.68 | 4.3 | 5.5 | 0.69 | 2.7 |
| \(\bar{K}_\gamma\) | 0.955 | 2.082 | 0.72 | 3.2 | 5.0 | 0.85 | 2.8 |
| \(\bar{K}_\gamma\) | 0.950 | 2.644 | 0.70 | 2.7 | 3.1 | 0.93 | 2.6 |
| \(\bar{K}_\gamma\) | 0.945 | 3.372 | 0.62 | 2.2 | 2.8 | 0.98 | 2.5 |
| \(\hat{K}_\gamma\) | 0.990 | 0.635 | 0.66 | 30.8 | 22.6 | 0.13 | 4.0 |
| \(\hat{K}_\gamma\) | 0.980 | 0.911 | 0.52 | 11.7 | 10.1 | 0.23 | 3.0 |
| \(\hat{K}_\gamma\) | 0.975 | 1.201 | 0.52 | 6.5 | 9.9 | 0.80\(^\dagger\) | 2.5 |
| \(\hat{K}_\gamma\) | 0.970 | 1.468 | 0.69 | 4.0 | 8.4 | 0.79 | 2.6 |
| \(\hat{K}_\gamma\) | 0.965 | 1.804 | 0.66 | 3.3 | 4.0 | 0.79 | 2.9 |
| \(\hat{K}_\gamma\) | 0.960 | 2.368 | 0.56 | 2.4 | 5.2 | 0.83 | 2.2 |
| \(\hat{K}_\gamma\) | 0.955 | 3.333 | 0.49 | 1.7 | 3.6 | 0.99 | 2.0 |
| \(\hat{K}_\gamma\) | 0.950 | 4.436 | 0.39 | 1.3 | 3.0 | 1.03 | 2.2 |
| \(\hat{K}_\gamma\) | 0.945 | 5.629 | 0.40 | 1.2 | 1.3 | 1.15 | 2.6 |

*Note: \(^\dagger\)The \(\psi\)-peak lies at \(\approx 0.26\text{ Hz}\) for \(\hat{K}_\gamma\) at \(\alpha = 0.975\).*

<!-- REPLACE IMAGE PATH WITH YOUR ACTUAL FIGURE ASSET FILE NAME -->
<div style="text-align: center; margin: 25px 0;">
  <img src="../../../../assets/modelbased/alpha-sweep/figC_10_steady_state_metrics.png" alt="Steady-state metrics vs alpha" style="max-width: 90%;">
  <p><em>Figure C.10: Steady-state metrics of \(\hat{K}_\gamma\) and \(\bar{K}_\gamma\) versus \(\alpha\) (mean \(\pm\) spread of two runs).</em></p>
</div>

---

## Part A: Guaranteed Gain Error (\(\bar{K}_\gamma\)) Steady-State Experiments

### A1. \(\alpha = 0.975\) — Servo Wander Regime (Fig. C.11a)
Although \(\psi\) stays within the \(130^\circ\) bound, the servo wanders slowly with \(\text{RMS}_\psi = 45.1^\circ\) at \(0.11\text{ Hz}\) (\(K_\psi = 0.642\text{ V/rad}\)).

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Servo Angle (\(\psi\))</div>
    <video id="vid1_ss_kbar_0975" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Kbar_alpha0975_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_ss_kbar_0975" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Kbar_alpha0975_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_ss_kbar_0975', 'vid2_ss_kbar_0975')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_kbar_0975', 'vid2_ss_kbar_0975')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

### A2. \(\alpha = 0.970\) (Settling Threshold)
Meets the \(\text{RMS}_\psi \le 15^\circ\) settling criterion (\(\text{RMS}_\psi = 14.9^\circ\), \(K_\psi = 0.880\text{ V/rad}\)).

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Servo Angle (\(\psi\))</div>
    <video id="vid1_ss_kbar_0970" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Kbar_alpha0970_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_ss_kbar_0970" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Kbar_alpha0970_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_ss_kbar_0970', 'vid2_ss_kbar_0970')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_kbar_0970', 'vid2_ss_kbar_0970')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

### A3. \(\alpha = 0.965\)
Well-settled servo (\(\text{RMS}_\psi = 6.0^\circ\), \(\bar{\psi} = 7.8^\circ\)); lies inside the common window \(\alpha_{\text{conv}}\).

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Servo Angle (\(\psi\))</div>
    <video id="vid1_ss_kbar_0965" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Kbar_alpha0965_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_ss_kbar_0965" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Kbar_alpha0965_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_ss_kbar_0965', 'vid2_ss_kbar_0965')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_kbar_0965', 'vid2_ss_kbar_0965')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

### A4. \(\alpha = 0.960, 0.955, 0.950\)
Progressively stiffer servo loop (\(\text{RMS}_\psi\) drops from \(4.3^\circ\) to \(2.7^\circ\); coupled frequency rises from \(0.69\text{ Hz}\) to \(0.93\text{ Hz}\)).

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: \(\alpha = 0.960\)</div>
    <video id="vid1_ss_kbar_0960" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Kbar_alpha0960_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical: \(\alpha = 0.960\)</div>
    <video id="vid2_ss_kbar_0960" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Kbar_alpha0960_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 25px;">
  <button onclick="syncPlayPause('vid1_ss_kbar_0960', 'vid2_ss_kbar_0960')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_kbar_0960', 'vid2_ss_kbar_0960')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: \(\alpha = 0.955\)</div>
    <video id="vid1_ss_kbar_0955" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Kbar_alpha0955_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical: \(\alpha = 0.955\)</div>
    <video id="vid2_ss_kbar_0955" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Kbar_alpha0955_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 25px;">
  <button onclick="syncPlayPause('vid1_ss_kbar_0955', 'vid2_ss_kbar_0955')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_kbar_0955', 'vid2_ss_kbar_0955')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: \(\alpha = 0.950\)</div>
    <video id="vid1_ss_kbar_0950" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Kbar_alpha0950_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical: \(\alpha = 0.950\)</div>
    <video id="vid2_ss_kbar_0950" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Kbar_alpha0950_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_ss_kbar_0950', 'vid2_ss_kbar_0950')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_kbar_0950', 'vid2_ss_kbar_0950')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

### A5. \(\alpha = 0.945\) — No Servo Wander Regime (Fig. C.11b)
Tightest servo settling for \(\bar{K}_\gamma\) (\(\text{RMS}_\psi = 2.2^\circ\), \(\bar{\psi} = 2.8^\circ\), \(K_\psi = 3.372\text{ V/rad}\)), though unstable under pushes.

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Servo Angle (\(\psi\))</div>
    <video id="vid1_ss_kbar_0945" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Kbar_alpha0945_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_ss_kbar_0945" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Kbar_alpha0945_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_ss_kbar_0945', 'vid2_ss_kbar_0945')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_kbar_0945', 'vid2_ss_kbar_0945')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## Part B: Guaranteed Cost (\(\hat{K}_\gamma\)) Steady-State Experiments

### B1. \(\alpha = 0.990\) &amp; \(\alpha = 0.980\)
At \(\alpha = 0.990\) (\(K_\psi = 0.635\text{ V/rad}\)), \(\hat{K}_\gamma\) exhibits large slow servo wander (\(\text{RMS}_\psi = 30.8^\circ\)), which drops below the \(15^\circ\) settling threshold at \(\alpha = 0.980\) (\(\text{RMS}_\psi = 11.7^\circ\)).

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: \(\alpha = 0.990\)</div>
    <video id="vid1_ss_khat_0990" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0990_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical: \(\alpha = 0.990\)</div>
    <video id="vid2_ss_khat_0990" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0990_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 25px;">
  <button onclick="syncPlayPause('vid1_ss_khat_0990', 'vid2_ss_khat_0990')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_khat_0990', 'vid2_ss_khat_0990')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: \(\alpha = 0.980\)</div>
    <video id="vid1_ss_khat_0980" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0980_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical: \(\alpha = 0.980\)</div>
    <video id="vid2_ss_khat_0980" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0980_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_ss_khat_0980', 'vid2_ss_khat_0980')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_khat_0980', 'vid2_ss_khat_0980')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

### B2. \(\alpha = 0.975, 0.970, 0.965\) (Usable &amp; Common Window)
Well-settled steady-state behavior (\(\text{RMS}_\psi\) drops from \(6.5^\circ\) to \(3.3^\circ\)), with \(\alpha \in \{0.965, 0.970\}\) forming the common convergence window \(\alpha_{\text{conv}}\) shared with \(\bar{K}_\gamma\).

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: \(\alpha = 0.975\)</div>
    <video id="vid1_ss_khat_0975" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0975_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical: \(\alpha = 0.975\)</div>
    <video id="vid2_ss_khat_0975" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0975_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 25px;">
  <button onclick="syncPlayPause('vid1_ss_khat_0975', 'vid2_ss_khat_0975')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_khat_0975', 'vid2_ss_khat_0975')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: \(\alpha = 0.970\)</div>
    <video id="vid1_ss_khat_0970" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0970_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical: \(\alpha = 0.970\)</div>
    <video id="vid2_ss_khat_0970" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0970_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 25px;">
  <button onclick="syncPlayPause('vid1_ss_khat_0970', 'vid2_ss_khat_0970')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_khat_0970', 'vid2_ss_khat_0970')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: \(\alpha = 0.965\)</div>
    <video id="vid1_ss_khat_0965" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0965_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical: \(\alpha = 0.965\)</div>
    <video id="vid2_ss_khat_0965" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0965_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_ss_khat_0965', 'vid2_ss_khat_0965')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_khat_0965', 'vid2_ss_khat_0965')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

### B3. \(\alpha = 0.960, 0.955, 0.950, 0.945\) (High-Gain Steady State)
Without disturbances, the controller remains unsaturated and achieves the lowest servo excursions (\(\text{RMS}_\psi\) from \(2.4^\circ\) down to \(1.2^\circ\)), even though pushes at these \(\alpha\) values trigger saturation.

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: \(\alpha = 0.960\)</div>
    <video id="vid1_ss_khat_0960" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0960_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical: \(\alpha = 0.960\)</div>
    <video id="vid2_ss_khat_0960" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0960_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 25px;">
  <button onclick="syncPlayPause('vid1_ss_khat_0960', 'vid2_ss_khat_0960')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_khat_0960', 'vid2_ss_khat_0960')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: \(\alpha = 0.955\)</div>
    <video id="vid1_ss_khat_0955" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0955_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical: \(\alpha = 0.955\)</div>
    <video id="vid2_ss_khat_0955" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0955_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 25px;">
  <button onclick="syncPlayPause('vid1_ss_khat_0955', 'vid2_ss_khat_0955')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_khat_0955', 'vid2_ss_khat_0955')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: \(\alpha = 0.950\)</div>
    <video id="vid1_ss_khat_0950" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0950_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical: \(\alpha = 0.950\)</div>
    <video id="vid2_ss_khat_0950" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0950_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 25px;">
  <button onclick="syncPlayPause('vid1_ss_khat_0950', 'vid2_ss_khat_0950')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_khat_0950', 'vid2_ss_khat_0950')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: \(\alpha = 0.945\)</div>
    <video id="vid1_ss_khat_0945" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0945_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical: \(\alpha = 0.945\)</div>
    <video id="vid2_ss_khat_0945" width="100%" muted>
      <source src="../../../../assets/modelbased/alpha-sweep/SS_Khat_alpha0945_hw.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 30px;">
  <button onclick="syncPlayPause('vid1_ss_khat_0945', 'vid2_ss_khat_0945')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_ss_khat_0945', 'vid2_ss_khat_0945')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
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