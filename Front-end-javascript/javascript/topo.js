document.write("<div class='topo'>")
document.write("<div class='header'>")
document.write("<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8AAADn8Ofa49r09PTR2tHp8unV3tXi6+LK1Mu5wrrCzMOpsqrf6N+dpp7O184VFxWzvbQwMDCvuLDAycCtra2iqqKQkJCYmJiRkZFfX1+OlI5XV1fV1dWKiorf39/Hx8fs7Oynp6d/f3/Ly8toaGi2trZkZGQhISFQUFBGRkbv7+8kJCR8fHxxd3F0dHQ9PT1ITEk2NjZXXFcQEBA8PzyLkYtlamUaHRpMUEwABgBeZF4pLCmAhYCVnZRBRUCDa1xyAAAb3ElEQVR4nO19CVfqSrBuWoIDokYUiAgJYQijghinreL//1c3PVZ1pxPiPued9+5b+dY6Z0O6evi6q6uqh6DjVKhQoUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKhQoUKFChX+n4QbKriO/MRSVhHHarVy0v9WLgXNIfEvtySKg4fAD3HbXHclkLZD1Ec/8lau0i+o8XmIiULszMWngKbMVMJWCCUJGaQZkhSe55FwRLz397kOEqYSa4r5jpYS8i8pkqHv8U8g7S1lO1YbUdlyIB9NSEIwtjF9Gqjvd47jo8aXYDh0WvKjznAJQiHKEEL5CJEzkh8HjKHCJMhKS4ZD9My3POPYaAz9v2C4lh/baUpPJfTbiCF8ju5sDF2otssGAvJustL9TCtSjPMYkpHjjPEXaEEphhNgSBWsrxJ6mKEaIRJZxoQOv3o815sZ9bLSM6GPGSIZ2hyus8FS0IJ8hoPxAzCEkiaOs1BfpnaGK+hOjaEqMNVYNOQkWmalqd45buZxRB+3s+IpEZg8aECXwSCXYQomkzipORrGcuB6jrMDhmjckOq7Fq2jDLVehqxk1cpKM5uWHVumvLZp/uBsRD9th6nZXa1EU4r4KYYMalii1Fbz1j2M4uGYW9ndeoUUA42yxhB6eaE1002y0tSqDCyl0CHxW1v2ed5ut2UxaYlOl39cQS+MiglyHXnnX1T/d5WaxMCcibtcCyeTdMi5+KIbBMH4gbUnnXublvQ6ad+CLUh4V864mrS6M9k2W0dNWWu4Id7CR257+ceNanurmKCQmvMvU1WHYjikz/lwcne8BvmRGggpvlOfZO+4qj30375o65QPXRsNYRC6YG7ZCE2AlcOVcwG10tZwhSqcg6oFa/4FpkQsGzqhzwdAlnchm0BCYQTDgdkENp0Fo7HIOBLWdcrrbYPa8HZKdWSaMwRWomVj6OO08JXqvBIMxUiDi1jKhrKaI8KbpzqWkx3DYyHD1AtU05UMA1HRQDiBDSccK0Mqzb3oY0YlVt0kx5BLCT8SBrKOMgx3/AubE9wihJpqtlRv8XFj9lz0v2wclXkA4qIj+PB3RQ9IzRhzYz2UDnMmmyMmHJsFXHQKXSzsoaC7xP17kOEWZd3NeBswQ9a1zIj3kfgUjSeXCYA44YT5mPu87X2ph10uNZG9ARG3UCNgSDst2mp9iczvITNjMmQFtXijBEM253m75kq8y8W5Y/AnkwFt4SgNzU0HJyfTiDbLS3ypwumHYXDXjcScWkJ7xCSO1Mflw0z4wEAJQQ1D5yBcXAVTxjVfZMS8C7maD+Vn3n0Ts6IFLhLZ/4HICVEVnzxt+ZXIDpCYyIxauGCQieSz3mGCgqFo4ZoPPOvn/ggxjGS1+CGO7HCRTBP4bO4KhtC6QPseAh/9Ce1DI6pZICnh9oU9KMYKM2SDtxN8ZphMIkaij0dsq2rXTDYL+BYscSsMHzTuQWMoDA3KHAHDTGi/AjEv27HFDPuIx1abSYIhY+aLkuUSDiLNB1wke9zjox1xXQdL0lMEKNoZhisYVYjhBdAKgo/vuAQ/l2up0Gf2eaktegRDZvNmQofkiHhKKsCFMk2Y8cFoY4tMsdBK4A1NUGahpTQDN9WtWSCp+iA2KsuwTXiNM8RwIT9QiICVK9tO9Ll4hpY9qG6Hh9gzPpR9k+FO+84VcY5yT6Bje2rghHtABsnPdqwdcpnZd3WGapJLf8Pq8Lir62cZYr/L9WzKh93jAwEWwdO+c4Yeyo30dqEYih5vgxhv4KY9PWRrYCG9dd2QF0QJRPLxTkqybyttwATDRK9b5N2I0eCMwEbAEAFDPA95uMC8F3eDQ/pR9/gOGNOD1hRtFbgh4e6XaayMUJUv5saUPZMqJkPaSN/NU7E2lJ1Auk7J1wk7coy7QGsCzVEM/alaoR1iOOhDI2QstGsPwNYoV876lvWq0ik+WFvJd7vsTV0HxdoQvaGJpjMUPTxUyaJeRoub6gEwnDguLqQUw7Rh8TTRGfJswk6qoAHcr3oUaqPMvq3UYx9bZBQ96gyFCDibrehuYMg0hk/JnZzvv2JIwbYy8ZbXSs0QFfRDc9Wc410i7Q41mp6rHo+wJVKzWbo7vZNATUWgxgOINSTJ2MJk2Du0tIAOCH3EIVHrOogaYG9XWf6hJkFDoDU8pnNGTYGtoxfzrr7LluI+k+7ynajukLFFG+Va+CiMyxvK/vwhVrPcjTdix5QNxVZnqNz7Wj1Ri1lVawseDx20nQGB+cAYUxk9sVJkqE0Vf9BXu32IrLA1pDUeIusUjXZ9x46e2Rdhmw5Fkm0/KAo84RLC64aq5SPFcCXbCEuAgcFYdYI3BfsYO9p2qQNqORSVIQ6r0YLkLzJU/DmNYZgHPpt8fBaBDRij6inuArE8RHSZ1fGhLXLxAb0yMTRDdQLCVqOuMZw4OqL20uzDHIYpWoGRfYNGCFUpu0K23mvtFrOxvxBj4wpnPACyuBSx9zJUrg229xTYCMHiMOEM531/Yu7JwN5sGYYp1trG3Gq0SVDbpBWQ37cki5mIDFIsFz6YJz9bnywmNMsQwjrDhxgrpoI6aSnLUKogaKwLBQvbr8J5yyY91UZ9vSG+SZsORwXgIc3jD6HBcvj7D9lTF3c45vr6FwyZhoRkF8RZ8ztHfaC+6ghwNE4jLxE+tjN5wJo6+m6/NEJj8tXz48jUy7R1zLLwjjjMMLujvnCk4qynI303OR7TWS2ZZ0+MCFWwCH9Rqi27BRLBQ+p6qmxQZPdwkSK10hgurNL08DwzigOtym2gT4CVIm1lOMJ5mWrqA6/3pGoFKHz+OWCmO+4c0IllOz94y5zSbTKTf77wh6tMRre3bGVOk9o4L1NNfVsGEnWtGrEJuh1Z96/dCC1doPw5YljUMZxhEMUbyJg1b6lPGKSLJEvdk7YfzLaSqsaQ0eIhnBx5SJwZRUXsckUWUcB3tKSt0st/H2+gMwsZdlHeyMowLS+137vxaJCjD9FgMhyFTtib9frLbWueCO/MMou+cbe96WbcHcXDodX4ZwsFh5eEJsMFtP8wQ+b11FotsjOUCj1fBu3B4fMQV/7793dv9KP80GDIjN6vGApiMVWZNTExNKbswXXL3yFV+7HUYOOyx5ozXCiPG/yWobC9TJpHe5sZWDmTIQE/7rcnocVx/QZu5AxGgVxt8Wddsz4RIyunmvxzhqkauIP2OI+hXPyyTk2+tr1xOv6DcFVSK113FU7ikb9Z7NbpAMFVDb59arltEkF1DPEvGYqrBDEwFOZgm8dQ7GBofpfV77WWvR5UG49ni/6U+oK4PfKDQTjrLXaeVtIORR9sIyjK1iYGAnzUQvZDOVsq1/hRhqHPGdquTfR1hn0crooI1oXjhy7nP7Rcd9qiMWT7VlJjW0Hsywr4HhjKFZZm2AraQzFEfAmvMZxIhuLM3520lRUf5TMMILPEppXHcIkY7qC7xUJDLrEGBsNuaYYIfpahazCkz9QdLhfH0wtMF7sgDTaGC5XRZ0okViH4BJ0I28Y+CR3/C4Zib1BMivW0OxQaYzBUpo7x4IrYmwZ4gTQ2R1BiojHsscCOqrsPpEJUOIWYH1PFcNnHnfULhnK7AaY9CyAjGq4Yd2+EjAdsh/w5p9uNJ46mUYhhzJnwRkbMktFq7qCUzG4/H8StYrgVG32/ZZiYWxT6IaTOEJ3WagzRF3W1rh2GQzV3OUNHMaTMZnpGrgnoaIlH8C3FsCXPx3/JUG31AEMcIusMxWT1TYZwjh2JMkQDpMoyhj1ZScRUUGco9qdQ8MrbuUYMee9tSzJsLZW1+AVDPm96+QzFXouK78T8G7R5oyRDZ+yPJlpGLojOc4RFmSuGX1qEWsrjhzs8iHA5qoAhr3WXz5APMlrOi9OkaDgYOChwcsyMbVWyXheM4dpB7qUEQ2r2VrjD0Q3hfIYTVaudIQ6SOKLJYBAq3eN8YVloDj66ZSN1DTNEE6wcQzG7fcRwPO7v8C0Lg+FAfbUzFHqUu8HAGYIq8oxwzwQNvngCty/XDjbUJRnyqXuHGMqluWyEdQwPMsyNw1mXJjaGIxgxAR5gbDSGcD5ZkiFvZhcVKBnqHt+Yh/laeohhy2A4VgyFAqJ9jQSYqFohTC7JUN2pyzCcawzV0RjPkGNpJocZftFUD5I3qlJhdIcqSVphjSHETyUZjvIYRrI2zlCdcnNjluMtJsp2macpCmutvzBDkXOhi4qFIyiS2vkvYhiXYBjbGaJLLpyhMJqgbLyPka2663aDYIxVAx/xT6FScSgizbAI4jYGQ3Vwlc9wuuaevt8OtaUirkw0GTEUerUFzdHu77QUQ9Ew5R7EQkMaV7Y+gANXcZLEpOUOxpAlyDOMAWboOnD2lM8QdrxHKjBajJzNmPd+m29iblVdaAxd4TLRsS+fcQOgJT7ORZeIr9LNcXe5NlvDGEayXb14OJLTjVYVxUI1W7QP5SIlf0fYwjAdCuuGfewMxnxMkkk4iB9QRmVTkjgM5dxg5cvgL17RvV3xRR0MQA9xCBe1oh1ie12FdjJy82jt8i8xtKxb1TTyzOf4jQmKtQp8RRgYjXhfeMGGOYXVUuycJ2yiWM6G2Y6JwTD4P89QzLGR+VwYUMvbX0JlUWmRppci6MhuDqwsDMO/Y2hdt9oZDmVJxmtbyn5mDrGl2TEveCKGPHA0X/7jyt02HmQuvJVjaHlDyc4QDhgjLQ86O9Mn1LtxGQcYosWQOBPXd4RFX5oM0atLVsASAjEclx3DAEcrK3Sur92JxmvsDeQ4zBCL7GTPoOnAGPIZle8tBkOOmJ6Dhm2GdDE6ovAF7u5SP90NBk44pm9wcQR+nHndaDhl9qY1Ns+V2rwjlwE+PxvMNgJTrqVT9uXh4WEzhJxMyZIpPBn4rHGjtKG8tEmctr/c5bZ/A260sh9yutFfHkDRnP+oSRUq/K9DOBkOJ//dtP2vEast24dDr2X+r8SImvr31svLF/3QoxY/WLcUPJ30HUrKxRrtWW9zZL5yXuxZlCgfYX7wIg69tPPzve8w3L8lLEzQbpzpDK2/NpABelcoE5pL5Fxmst2aK0LRKp8iDXM/mue3DY7b29tvGlkEpClxn2HYPIgbzDD5uLHK7PIY/ljlc9A5xDAluK9fYdSv5yT2/5zJrzcmQ+/qIE7+YIZvJ1aZpzyGz1Z5O+pnBxhOCGmcXtQ0XNQT0ktq4ulFI8OwZmTI4ijBDB9PbTKnuQw/rfJ2XJwUM4wIuTrO4ioNCE/ll3OT4fuRJYsBnaFd5iOP4dvh8gEXxQyXpHF8lMVxh5AL+fk2w/DUksUowGBolSlgeLACQDHDEfk+PbHh4oXUa/xj7TqjpSc1ayacX5+HF1aZ/HlolbejVi9i6JKXqzM7rsmt/NjMMDzPyQSo6wyttVz95DLMa5UNt0UMx+SycW1H46kpP+5NhklOHpxd8xbP1loaL3kMP/JaZcNNAUOX/HQu83C/l5++TYZ/MsKv5oOO7g+tNXTy/WF+s7LYFzAckcvrGwzeJ/Kz/JAdwxs9203j6dp8YozhjQVFY2iTt+O6WcBwt7s6xzg7b+6b6f912OahiXTS6g+utHn4aZbJZQrmoU3ejqJ5GJK9ZhNrr3TPLPk2DFktG9OcUFerSVzjr9SbJ7ot1TNwmXxb+mmV1wBJV/kM26SuuafnNBSmP0PxVdPcUdYfJiyCrYHEnuwhywULb3UtZVEvLpTJ5Gspkz815DWg+vIZTr+OEZXjV7Kg699oSuYaxWxMwyP6EyV0/Elm8OUis7YQO/ZHIHNcZm1xiuQzy5OzY6gvlyF5PLoA1NS50B3ZnaKEUzMuHS36/V5CjkHki6whx/EL6fX7C/SW/qyfYj2voTLn6/TRIudHA6ZUvpUg+aM1lQcsyL2qsCAuJfdoTVF/haO+LnlEwX1mbcH7GcX/t2RBGqqsk0eSFU8LTc5QmX98mwyGT5D8idfVU5dPqvr8tUVqaG4B5x/oBkufdFDSpYVhRL7PlcA9iXFZ98T2ukHwp4HKJF2LiMEQyZ8nxi8odCG1kctwQsSyngNvKazIrgkprxaGE/IKAp8kNSbwdW89SgjIJaqtDEMk3/xjMJyQb5l2mctwSC6BRrPZwpsmaUSu0jJrfIo70lECN18LZ7EG+aZn+wmuAOVoNssw7KDmmQwd8ixSC9b4MWmAot2efeBbSE7ydaY0pGNhuGhBeiNtrk/OUVG7jDz1MXhO/CnBEMmfeSbD/vpMVZ/HsE3O6oATPTYbkRu5js+s8SlSW6RyNgj92a4bePBqu0YTJFeotjIMkXwtw3BEbkVavqWJSe0Ug3h4O1hzPhmGIWkeyXxHe/pLi2SvHpxSylmG3gWqLCnBEDXv+N1kGJKOqLBWMA8vtN2Ajv33Q6wM096BjI/0PF/beSAWXxB4eO+jDMNTJJ9h6HiywnyPPyS1I9Srp8f3hLR89ZpoiJDJu5mjfB69f7D5Qk9almAl8FBdR2UYojE/fs/Ib4hgeJrLcECuT+oYtcZLOl7zcYkzx91zTU2pK3bppE3OVWk1m88PkjpUV24egnztvd+WEIoWk7dHjlyGEbk3FjVnZ81PfpRrvp5vwCXfKuvZpfhZ5D082lt8fpDgqkrZUtQy9Gr1Vrbh8J43ebSsJ2/2jz8sW+a8GmFI7iHLI7ec5A0WwZcWnx/8aaJ6yvhDLP/5LLGWsVesRjW3pduWdbOARjFv9LLVMncgU28M4i/iR0a/UGmWH+JKYxoEcVm3kOEeyYPvf1oeygnokuvMskuh+fhOSD+ndxZft0rwWqzmcWm3T/NMnuAPrq3MGFpbd/vxC4YT0inYpLs623t5v5+ZPMJ2X0NoZOrzIe931tQECS69zDy07lnWn3/BMJ06hecDFxd7++8VpN5WHVxcXAqrkhouOM24zl6dDRK8FVHGW2S3Luj2yOdvGD6gZbQVx7UlscSYbVKH5bcarvkjXudnfD71+LBmL+fxbU162x7KiRCS7wMHBGnAQrIlPniQ7Vj9ws+UoKcvmbFPPT5K/48YOjNyfuic7PQxq6jJM2h3nWwm7GrVZIzU6vQxMTMFHp4A/5GWpnMn99xC4eTZNDcueVW5rpoofL2Ex/vMuySapbn6jywNdVJvtzabrGFuLIYm5BIS73+eJH6+4XEn4/P/b3gLiiV5O3hG8Gr8bHaOL+7ggjoZn//PPD4U/PNLhu4cR1s5JwPPusr1WiVOE35MG/zPojYo+LdjSI+5PzJHFUZAbugUeSuWZ3kezXW+FnmX8vi31oJ/OQ9TuMvURNQKD3Uv+vhHRlN/f/AIOHvYQT0+Si7DsG47uLj4nS0VdROyu0nd8WkejrXmxuQkX1QtcU9Mn5/6Q9j4KLcChmqOlNZc/X4MUwy2hHy91ouuO6DmPpB8QQTzStc/28VAN8n/hmEaNtPr9u+PzTPazxcZHL+gnyZsfR5lJTI4Mtf5gYfPQkyGg35PQNpgn+Bzi6/5Yikge24qc/SHpTiGAVtGrz/vG1cn+h0p/SgiIt9lbizVTZ8f6OcWBkO4Kye3eIxzi8xOVFT+XhuQHPFb5++fTbRVzHZd0Q7ogHSMVCvOb8jQYFi0I9zfXe4pLpW2aOcW2R3h1By8shz7+/IMGcv2hi7vPzoamuhgSjtP6Ji36PDRhO7zA6Il6gxd8ilK+IExxNVkdvWdMbk5dHPP7U0BPbSaj3yPfOkU97De688Rj8tHHeisp2mc8BYyDOVBC+QqPplxnN2LaEf+yYz+hpO+gJiST00Vr8lQJpE3lPJqnMx+I0U0fH7h6VqbXItcH8Cw6HTNWZFH0Y78cwuXPKpIsvNmLMqn5BbbjXPFMMR3NVMLtAE92GwIumZZNw50Ci3NlNREic8lLc2ANOuHTkhdtfOf4sT4gx8ROkZmJ8lyqRCTK2TEjTC4944cSU1fddE7mwDDW6zfRMYjxBB7iwzDNOQ5eMqdMkQudW+sAhfPussfiucPuuPWKx5pwYD+9xmKPH5E9jLhExgWnlv0WtC2IoYQFh3vdP81fUJh3FFNMdw+o0xnxipwQhqQyk9sEMP8qG1CzkXaMRpDFLVlGZJvUVPBbRNXuzBUa+jh0OwJXRyq3cppmq7vIVOtY+zeu+Qepd5rfaZH3jrDO3Ilg3zEEEXeF6aWhulqQaTl3xhKm6Ptjz5qDmyr3YDswA9j4T3WzBJp+4Fy6T4/XT2hnLqlWbRktitkS5H8lckwJg2Zln/ryyXf2tr3eofi61BLvP6WVHyCH7+Y+14bD5eouYTgT24SOvO4fgKGaAV8bXqLTaLS8m/upd5C3yDYezCKW23P4fJTxqV9D+1VZG9UxHjrofOF9b6r72LgtVUILekgj4+LMqO87YtqR/7ty3QM9YuqjWZC1uxn2gct8ojTGnRPYti9u7sjn+h5k/T8u64sP07TN+Qe0htvxL+768aOn6b4Sw8X6C3o25sCU6Ju6zboGDL5BblB8u9Y/u4uQO3Lv0GbzsPMVuIzDUzoEaJ+b/kqGcvwfw8JV3v2RIbK/C19dKJxdcmezMSdAO3cQn/b+B02Cz/gZ9/QPKxn7rU1Vdp5AcPLzHbwxfUHrXvX0VNuqVcIyP39/esZenz9mj75kgzHZJ+mX6L0epq+96aO95Sm3N/jEu8xXtExCLWlrRf2GO0IX+zvdbxCYv5NduoPLdv4F2dnJ8d6wvEltfuBxxysJpziSTH8Y6YzgdZUvm9hpiDAc+rxxa2HAnmco9jj2w4GjLLpox9qM/HRCkrDDG3FcYaWFCskw7LyBxhmtdSOMxbRBYkt7fQHtNR2Vnf6lTIsPsXTxJmW/uatoFpRXKoszdVN0fFF/ZEFJ/oRp0p8AYYntnTGsF5QvC5OLU3rubT8WbGleVVnFslNwbnFDQ+h0wWe7RxhBwzPbenrqbwFXQa31FuIW9AlcV1mfbhPraftkIB72w8esukHD+DWgaGtjM57yvCj9PsTzOP/W+9bpB7/Rr2kSN7yXmq8eRWrIPuLlTctYGgr4oYyfC79xuQN3adpPf07b1imWip3km9Th7rPOYy4lb+5EiS2g4QzNA9tJZzReWh/38J6LMHnYWn5FEW7GHt1rWre88w7YOJ6Vv1FrgG165NwHwsxrNnSmaWxpVhRY7b0ubR8vej2Jd7FaI0HBK9eYan6pKJx/fqkWpv+IH9oS+f+0JJixTH3FqXlT4tuX7qkqSKEnyn9uZT7TORw8gVbEfo2hIIZ05iAmKYUUExTEvl3E1OPLzebTp9m7I3gj9sjdKx0dHGPXwwJ8AsQaDMKtNR2nnFEtfTRchZix5Hw+GXlD+xEJZ4E+4kq+od3Py7rNEygsULj29OOBALi2aB2Wsc56VNnbk+xi/fpj9mVl6dZSu0I83XniJ7OeJ9vj49v7ILiFP9sTt4PDcglq+03yPhec06CHUv7X7EpQu7fMXAxxLMYflupFUT54pas+em5KTnF/U7+1z/v44axf+eP/j/+lZMKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChwn+E/wHniJkYmfzrdgAAAABJRU5ErkJggg=='")
document.write("alt='logo' />")
document.write("<label>Management Inventor</label>")
document.write("</div>")
document.write("<div class='navigation'>")
document.write("<a href='index.html'>Home</a>")
document.write("<a href='cadastro.html'>Cadastro</a>")
document.write("<a href='consulta.html'>Consulta</a>")
document.write("</div> </div>");