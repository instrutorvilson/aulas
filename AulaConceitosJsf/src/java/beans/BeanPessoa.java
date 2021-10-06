/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package beans;

import entities.Pessoa;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;

@ManagedBean
public class BeanPessoa {

    @ManagedProperty(value = "#{param.pageId}")
    private String pageId;
    private String nome;
    private String lastname;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    
    public void salvar() {
        Pessoa pessoa = new Pessoa();
        pessoa.setNome(this.nome);
        pessoa.setLastname(this.lastname);
        //  DaoPessoa.salvar(this);

        new DaoPessoa().persist(pessoa);
    }

    public String showPage() {
        if (pageId == null) {
            return "index";
        }
        if (pageId.equals("1")) {
            return "page1";
        } else if (pageId.equals("2")) {
            return "cadastro";
        } else {
            return "home";
        }
    }

    public String getPageId() {
        return pageId;
    }

    public void setPageId(String pageId) {
        this.pageId = pageId;
    }

}
