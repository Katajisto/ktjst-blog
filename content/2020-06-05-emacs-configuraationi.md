---
title: Emacs configuraationi
date: 2020-06-05T05:10:11.973Z
description: Copy pastettu emacs config webbidevaukseen, lähinnä omaan käyttöön.
---
```
(require 'package)
(let* ((no-ssl (and (memq system-type '(windows-nt ms-dos))
                    (not (gnutls-available-p))))
       (proto (if no-ssl "http" "https")))
  (when no-ssl (warn "\
Your version of Emacs does not support SSL connections,
which is unsafe because it allows man-in-the-middle attacks.
There are two things you can do about this warning:
1. Install an Emacs version that does support SSL and be safe.
2. Remove this warning from your init file so you won't see it again."))
  (add-to-list 'package-archives (cons "melpa" (concat proto "://melpa.org/packages/")) t)
  ;; Comment/uncomment this line to enable MELPA Stable if desired.  See `package-archive-priorities`
  ;; and `package-pinned-packages`. Most users will not need or want to do this.
  ;;(add-to-list 'package-archives (cons "melpa-stable" (concat proto "://stable.melpa.org/packages/")) t)
  )
(package-initialize)
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(custom-enabled-themes (quote (naysayer)))
 '(custom-safe-themes
   (quote
    ("5d59bd44c5a875566348fa44ee01c98c1d72369dc531c1c5458b0864841f887c" default)))
 '(package-selected-packages
   (quote
    (auto-complete prettier-js rjsx-mode naysayer-theme))))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )
(add-to-list 'auto-mode-alist '(".*.js" . rjsx-mode))


(require 'prettier-js)
(add-hook 'rjsx-mode-hook 'prettier-js-mode)
(tool-bar-mode -1)
(toggle-scroll-bar -1)
(menu-bar-mode -1) 
(when (version<= "26.0.50" emacs-version )
  (global-display-line-numbers-mode))
(ac-config-default)


```