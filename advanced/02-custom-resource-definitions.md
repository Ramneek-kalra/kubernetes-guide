# Custom Resource Definitions (CRDs)

CRDs are used to define your own APIs in Kubernetes. They allow you to extend Kubernetes functionality.

## Example: Creating a CRD
```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: mycrds.example.com
spec:
  group: example.com
  versions:
    - name: v1
      served: true
      storage: true
  scope: Namespaced
  names:
    plural: mycrds
    singular: mycrd
    kind: MyCRD
```

Apply the CRD configuration:
```bash
kubectl apply -f mycrd.yaml
```

---

📝 **Next Step:** [Helm and Operators](03-helm-and-operators.md)
